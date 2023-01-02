function Pagination({total,onChange,page}) {
 const setpage=new Array (total)
 for(let i=0;i<setpage.length;i++){
  setpage[i]=i+1
 }
  return (
  <div data-testid = "page-container">
    {
      setpage.map((el)=>{
         return <button key={el} style={{borderColor : page===el? 'red':null}} onClick={()=>onChange(el)}>{el} </button>
      })
    }
    
  </div>
  
  );
}

export default Pagination;
