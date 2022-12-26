// Your code goes here
// do a deafult export

function Title(properties){
    const {text}=properties;
    const styles={
        color:"teal"
    }
    return(
        <div>
            <h1 style={styles}>Users Display</h1>
        </div>
    )
}
export default Title;