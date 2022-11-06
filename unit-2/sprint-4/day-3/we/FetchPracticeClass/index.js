let filtering=document.querySelector("#category")// step-1 creating filter funtion when we choose one item it's showing one item only
filtering.addEventListener("change",FilterData);
//-----------------------------------------------------



let cart_page=document.querySelector(".navbar>p:nth-child(2)");//catching cartpage
cart_page.addEventListener("click",function(){//when someone click cart then go to cartpage
    window.location.href="Cart.html"//Cart.html is name of file
})

let out=null;
async function FetchData(){
    try{
        let res= await fetch("https://fakestoreapi.com/products");
         out= await res.json();
        
        DisplayData (out)
    }catch(err){
        alert(err)
    }
    
}



//for displaying data 
function DisplayData(all_data){
    document.querySelector(".container").innerHTML=""

    all_data.forEach((elem,index)=>{
        let div1=document.createElement("div");

        let image_tag=document.createElement("img");
        image_tag.src=elem.image;
    
        let title_tag=document.createElement("p");
        title_tag.innerText=elem.title

        let price_tag=document.createElement("p");
        price_tag.innerText=elem.price;

        let category_tag=document.createElement("p");
        category_tag.innerText=elem.category;

        let btn_tag=document.createElement("button");
        btn_tag.innerText="Add to Cart";
        btn_tag.addEventListener("click",function(){//step-1 for adding product to cart
            AddCart(elem)
        });


        div1.append(image_tag,title_tag,price_tag,category_tag,btn_tag);
        document.querySelector(".container").append(div1)


    })
    

}
//---------------------------

function FilterData(event){  //creating function for choose one item then it shows only one 
    //console.log(event.target.value)   
    let val=event.target.value;

    if(val==="All"){
        FetchData()
    }else{
      let filter_data=  out.filter((element)=>element.category===val)
      DisplayData(filter_data)
    }

}

//-------------------------------

function AddCart(elem){//creating function for adding product to cart
    ls_Data=JSON.parse(localStorage.getItem("cart"))||[];//cart is a key generated by us.   ye hm local storage se data le rhe h

    ls_Data.push(elem);
    localStorage.setItem("cart",JSON.stringify(ls_Data))//localstorage me save krna 

}

//---------------------------------------



FetchData()

