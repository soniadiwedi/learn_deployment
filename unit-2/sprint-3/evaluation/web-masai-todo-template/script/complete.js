// Write all the JS Code related to Completed Page Here 
let LoSdata=JSON.parse(localStorage.getItem("task-completed"));
let filter=document.querySelector("#filter")
function displaytable(data){
    document.querySelector("tbody").innerHTML=null;
    data.forEach(function(element,i) {
        let row=document.createElement("tr");

        let name=document.createElement("td");
        name.innerText=element.taskname;
    
        let type=document.createElement("td");
        type.innerText=element.tasktype;
    
        let date=document.createElement("td");
        date.innerText=element.date;
    
        let priority=document.createElement("td");
        priority.innerText=element.priority;
    
        let Add=document.createElement("td");
        Add.innerText="Add"
        Add.addEventListener("click",function(){
            addData("task-favorites",element)
            deleteData(LoSdata,i);
        })
    
        row.append(name,type,date,priority,Add);
        document.querySelector("tbody").append(row);
    })
    
}
function deleteData(data,index){
    data.splice(index,1)
    localStorage.setItem("task-completed",JSON.stringify(data))
    displaytable(data)
 }  
 
 function addData(key,value){
    let newLSdata=JSON.parse(localStorage.getItem(key))||[]
    newLSdata.push(value)
    localStorage.setItem(key,JSON.stringify(newLSdata))

 }

 filter.addEventListener("change",function(){
    if(filter.value==""){
        displaytable(LoSdata)
    }else{
        let filtereData=LoSdata.filter(function(el){
            return el.priority===filter.value;
        })
        displaytable(filtereData)
    }
})

displaytable(LoSdata)