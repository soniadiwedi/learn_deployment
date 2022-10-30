// Write code related to Done page here
let progressdata=JSON.parse(localStorage.getItem("done-list"))

function displayTable(data){

   
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


        row.append(Name,des,Sdate,Edate,priority)
        document.querySelector("tbody").append(row)
    })
}



displayTable(progressdata)