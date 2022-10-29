// All the JS Code for the Add Students Page Goes Here
let Admission_form=document.querySelector("#form");
let LSData=JSON.parse(localStorage.getItem ("admission"))||[];//by refreshing data storing in locanstorage So whenever you don't have data then print emty


form.addEventListener("submit",function(event){
    event.preventDefault();//this is preventing the form from refreshing the page.
    let obj={
        name:Admission_form.name.value,
        email:Admission_form.email.value,
        phone:Admission_form.phone.value,
        gender:Admission_form.gender.value,
        course:Admission_form.course.value,
    }
    if(obj.name==""||obj.email==""||obj.phone==""||obj.gender==""||obj.course==""){//this is for checking if someone submit black form the show alert

        alert("Please fill the details.")
    }else{
         // console.log(obj )
   LSData.push(obj)

   //storing Data in local storage
   localStorage.setItem("admission",JSON.stringify(LSData))
    }
  
})


