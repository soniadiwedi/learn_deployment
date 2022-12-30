const SearchResults = (props) => {
  const {filter}=props;
      return (
          <table >
            {/* add columnsheadings */}
            <tr>
              <th>DEPARTURE</th>
              <th>DURATION</th>
              <th>ARRIVAL</th>
              <th>PRICE</th>
            </tr>
            <tbody data-testid="flight-results">{
          //  map through the results and display as rows
            }{filter.map((el)=>{
              return <tr>
                <td>{el.departure}</td>
                <td>{el.duration}</td>
                <td>{el.arrival}</td>
                <td>{el.price}</td>
              </tr>
            })}
            
            </tbody>
          </table>
      );
    
  };
  export default SearchResults;
  