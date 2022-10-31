// Write all the JS Code related to Favourites Page Here 
let LoSdata=JSON.parse(localStorage.getItem("task-favorites"));

function displaytable(data){
    document.querySelector("tbody").innerHTML=null;

    data.forEach(function(element,i) {
        let row=document.createElement("tr");

        let Name=document.createElement("td");
        Name.innerText=element.taskname;
    
        let type=document.createElement("td");
        type.innerText=element.tasktype;
    
        let date=document.createElement("td");
        date.innerText=element.date;
    
        let priority=document.createElement("td");
        priority.innerText=element.priority;

    
        let Add=document.createElement("td");
        Add.innerText="Add"
        
        
        row.append(Name,type,date,priority,Add);
        document.querySelector("tbody").append(row);

        })
    
    
    
}
displaytable(LoSdata)
