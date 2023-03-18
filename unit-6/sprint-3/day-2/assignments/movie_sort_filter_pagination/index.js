const express =require("express")
const app = express()
const mongoose=require("mongoose")
const{connection} =require("./db")
const{MovieModel}=require("./db")


app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home page")
})


app.post("/addmovie",async(req,res)=>{
    const payload = req.body
    try{
        const movie = new MovieModel(payload)
        await movie.save()
        res.status(200).send({"message":"New movie has been added"})
    }catch(err){
        res.status(400).send({"message":err.meassage})
    }
})

app.get("/movies", async (req, res) => {
    const { title, rating, q, sortBy, sortOrder, page, perPage } = req.query;

    // Build the query based on the filtering criteria
    const filter = {};

    if (title) {
         filter.Title = { $regex: title, $options: "i" };
        //filter.Title = new RegExp(title, "i")
    }
    if (rating){
        filter.Rating = { $gte: rating };
    }

    if (q) {
        filter.$text = { $search: q }
    };

    // Build the sort criteria based on the sortBy and sortOrder params
    const sort = {};

    if (sortBy) {
        sort[sortBy] = sortOrder === "desc" ? -1 : 1;
      }

    // Calculate the pagination parameters
    const pageSize = parseInt(perPage) || 5;
    const pageNumber = parseInt(page) || 1;
    const skip = (pageNumber - 1) * pageSize;
  
    try {
      // Execute the query with the filtering, sorting, and pagination parameters
      const movies = await MovieModel.find(filter).sort(sort).skip(skip).limit(pageSize)

      // Calculate the total number of movies that match the filtering criteria
      const totalMovies = await MovieModel.countDocuments(filter)

      res.status(200).send({ data: movies,currentPage: pageNumber,perPage: pageSize,total: totalMovies,});
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
});


app.patch("/updatemovies/:ID",async(req,res)=>{
    const{ID}=req.params
    const payload=req.body
    try{
        await MovieModel.findByIdAndUpdate({_id:ID},payload)
        res.status(200).send({"message":"movie updated"})
    }catch(err){
        res.status(400).send({"message":err.meassage})
    }
})



app.delete("/deltemovies/:ID",async(req,res)=>{
    const{ID}=req.params
    try{
        await MovieModel.findByIdAndDelete({_id:ID})
        res.status(200).send({"message":" user has been Deleted"})
    }catch(err){
        res.status(400).send({"message":err.meassage})
    }
})


app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected to Mongoose Server");

    }catch(err){
        console.log("Not able Connect to Mongoose");
        console.log(err);
    }
    console.log("Server is Running at 8080");
})