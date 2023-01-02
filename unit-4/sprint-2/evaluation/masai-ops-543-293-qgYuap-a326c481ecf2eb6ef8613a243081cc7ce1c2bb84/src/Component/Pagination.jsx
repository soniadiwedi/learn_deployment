function Pagination({total,onChange,current}) {
 const set=new Array (total)
 for(let i=0;i<set.length;i++){
  set[i]=i+1
 }
  return (
  <div data-testid = "page-container">
    {
      set.map((el)=>{
         return <button key={el} style={{borderColor : current===el? 'red':null}} onClick={()=>onChange(el)}>{el} </button>
      })
    }
    
  </div>
  
  );
}

export default Pagination;
