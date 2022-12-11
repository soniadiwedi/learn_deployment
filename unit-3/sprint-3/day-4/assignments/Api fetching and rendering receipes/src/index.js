// fetch and render reipe data from
// https://real-crab-pleat.cyclic.app/recipes?_page=1&_limit=5

// const { couldStartTrivia } = require("typescript");

let app = document.getElementById("app");
// let data = [
//   {
//     id: "52768",
//     name: "Apple Frangipan Tart",
//     recipeCategoryId: "3",
//     areaId: 2,
//     instructions: "Preheat the oven ",
//     image: "/images/meals/wxywrq1468235067.jpg",
//     tags: [1, 2, 3],
//     youtube: "https://www.youtube.com/watch?v=rp8Slv4INLk",
//     ingredients: [
//       {
//         ingredientId: "112",
//         ingredientMeasure: "175g/6oz"
//       },
//       {
//         ingredientId: "41",
//         ingredientMeasure: "75g/3oz"
//       },
//       {
//         ingredientId: "33",
//         ingredientMeasure: "200g/7oz"
//       },
//       {
//         ingredientId: "52",
//         ingredientMeasure: "75g/3oz"
//       },
//       {
//         ingredientId: "141",
//         ingredientMeasure: "2"
//       },
//       {
//         ingredientId: "169",
//         ingredientMeasure: "75g/3oz"
//       },
//       {
//         ingredientId: "550",
//         ingredientMeasure: "1 tsp"
//       },
//       {
//         ingredientId: "135",
//         ingredientMeasure: "50g/1¾oz"
//       }
//     ],
//     recipeSource: null,
//     imageSource: null,
//     price: "256.00",
//     stock: 1,
//     discount: 7,
//     createdAt: 1667963546805
//   },
//   {
//     id: "52893",
//     name: "Apple & Blackberry Crumble",
//     recipeCategoryId: "3",
//     areaId: 2,
//     instructions: "Heat oven to 190C/170C fan/gas 5. ",
//     image: "/images/meals/xvsurr1511719182.jpg",
//     tags: [4],
//     youtube: "https://www.youtube.com/watch?v=4vhcOwVBDO4",
//     ingredients: [
//       {
//         ingredientId: "248",
//         ingredientMeasure: "120g"
//       },
//       {
//         ingredientId: "52",
//         ingredientMeasure: "60g"
//       },
//       {
//         ingredientId: "41",
//         ingredientMeasure: "60g"
//       },
//       {
//         ingredientId: "464",
//         ingredientMeasure: "300g"
//       },
//       {
//         ingredientId: "41",
//         ingredientMeasure: "30g"
//       },
//       {
//         ingredientId: "110",
//         ingredientMeasure: "30g"
//       },
//       {
//         ingredientId: "84",
//         ingredientMeasure: "¼ teaspoon"
//       },
//       {
//         ingredientId: "181",
//         ingredientMeasure: "to serve"
//       }
//     ],
//     recipeSource:
//       "https://www.bbcgoodfood.com/recipes/778642/apple-and-blackberry-crumble",
//     imageSource: null,
//     price: "464.00",
//     stock: 2,
//     discount: 3,
//     createdAt: 1667963546805
//   },
//   {
//     id: "53049",
//     name: "Apam balik",
//     recipeCategoryId: "3",
//     areaId: 15,
//     instructions: "Mix milk, oil and egg together. ",
//     image: "/images/meals/adxcbq1619787919.jpg",
//     tags: [],
//     youtube: "https://www.youtube.com/watch?v=6R8ffRRJcrg",
//     ingredients: [
//       {
//         ingredientId: "211",
//         ingredientMeasure: "200ml"
//       },
//       {
//         ingredientId: "223",
//         ingredientMeasure: "60ml"
//       },
//       {
//         ingredientId: "123",
//         ingredientMeasure: "2"
//       },
//       {
//         ingredientId: "137",
//         ingredientMeasure: "1600g"
//       },
//       {
//         ingredientId: "15",
//         ingredientMeasure: "3 tsp"
//       },
//       {
//         ingredientId: "281",
//         ingredientMeasure: "1/2 tsp"
//       },
//       {
//         ingredientId: "491",
//         ingredientMeasure: "25g"
//       },
//       {
//         ingredientId: "305",
//         ingredientMeasure: "45g"
//       },
//       {
//         ingredientId: "238",
//         ingredientMeasure: "3 tbs"
//       }
//     ],
//     recipeSource:
//       "https://www.nyonyacooking.com/recipes/apam-balik~SJ5WuvsDf9WQ",
//     imageSource: null,
//     price: "113.00",
//     stock: 1,
//     discount: 13,
//     createdAt: 1667963546805
//   }
// ];


let imageUrl= 'https://real-crab-pleat.cyclic.app';
let baseUrl='https://real-crab-pleat.cyclic.app/recipes?_page=1&_limit=5';
async function getRecipes(url){
    try{
      let res= await fetch(url);
      let data= await res.json();
      return data;
      
    }catch(err){
      console.log(err);
      }
}
getRecipes(baseUrl).then((data)=>{
  console.log(data);
  containerData(data);
});


function containerData(data){
  let container= document.getElementById('app');
  let res='';
  data.forEach((el) => {
      let image= imageUrl+el.image;
      let name= el.name;
      let desc= el.instructions.substring(0,150);
       res+=(getAsCard(image,name,desc,'#'));
  });
container.innerHTML=res;

}




function getAsCard(imgsrc,title,description,link){  //it should take imgsrc,title,description. and return as a card
  return ` <div class="card">
  <div class="card__img">
  <img  src="${imgsrc}" alt="${title}">
  </div>
  <div class="card__body">
    <h3 class="card__item card__title">${title}</h3> 
    <div class="card__item card__description">${description}</div>
    <a href="${link}" class="card__item card__link"></a>
  </div>

</div>`
}


// let imgSrc=data[0];
// let title=data[1].name;
// let description=data[2].instructions;
// let link= data[3].youtube;




// getRecipes(`${baseUrl}?_page=1&_limit=5`).then((data)=>{
//     console.log(data);
// })
// getRecipes(`${baseUrl}?_sort=price&_order=asc&_limit=5`).then((data)=>{
//   console.log(data);
// })