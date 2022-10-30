// Write code related to dashboard page here
let Lsdata=JSON.parse(localStorage.getItem("task-list"));
  let tbody=document.querySelector("tbody");

function displayTable(data){
    tbody.innerHTML=null;
    data.forEach(function(element,index){
      let row=document.createElement("tr");
      
      let Name=document.createElement("td");
      Name.innerText=element.Taskname;

      let Des=document.createElement("td");
      Des.innerText=element.des;

      let StartDate=document.createElement("td");
      StartDate.innerText=element.Sdate;

      let EndDate=document.createElement("td");
      EndDate.innerText=element.Edate;

      let priority=document.createElement("td");
      priority.innerText=element.preiority;

      let Progress=document.createElement("td");
      Progress.innerText="Add"
      Progress.addEventListener("click",function(){
        addData("priority-list",element)
        deletedata(Lsdata,index);

      })

      row.append(Name,Des,StartDate,EndDate,priority,Progress);
      document.querySelector("tbody").append(row);

    })
}

//creating function delete
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

displayTable(Lsdata)