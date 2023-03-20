
const fieldsAnalyzer=(req,res,next)=>{
    const {movie_name,genre,director,rating,year_of_release}=req.body
    if(!movie_name || !genre || !director || !rating ||!year_of_release){
        res.send({
            "err": "Few fields are missing, cannot process the request"
            })
    }
    next()
}

module.exports={fieldsAnalyzer}