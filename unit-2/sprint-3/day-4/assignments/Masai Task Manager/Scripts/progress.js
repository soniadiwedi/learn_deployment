// Write code for the Progress page here 
let progressdata=JSON.parse(localStorage.getItem("priority-list"))

function displayTable(data){
    document.querySelector("tbody").innerHTML=null;
    data.forEach(function(element,index){
        
        let row=document.createElement("tr");

        let Name=document.createElement("td");
        Name.innerText=element.name;

        let des=document.createElement("td");
        des.innerText=element.des;

        let Sdate=document.createElement("td");
        Sdate.innerText=element.Sdate;

        let Edate=document.createElement("td");
        Edate.innerText=element.Edate;

        let priority=document.createElement("td");
        priority.innerText=element.preiority;

        let Add=document.createElement("td");
        Add.innerText="Add";
        Add.addEventListener("click",function(){
            addData("done-list",element);
            deletedata(progressdata,index);
        })

        row.append(Name,des,Sdate,Edate,priority,Add)
        document.querySelector("tbody").append(row)
    })
}
function deletedata(data,index){
    data.splice(index,1)
    localStorage.setItem("task-list",JSON.stringify(data))
    displayTable(data)
}
function addData(key,value){//function creating for display data admission accepted or rejected 
    let newLSData=JSON.parse(localStorage.getItem(key))||[];
    newLSData.push(value);
    localStorage.setItem(key,JSON.stringify(newLSData));
}

displayTable(progressdata)