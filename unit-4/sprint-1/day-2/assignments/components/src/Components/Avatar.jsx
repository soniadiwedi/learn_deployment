function Avatar(properties){
    console.log(properties)

    const {src,name,rounded}=properties;
     const styles={
        borderRadius: rounded ? "50%" : "16%",
        width:"40%"
     }
    return (
        <div>
            <img src={src}
            alt="avatar" style={styles}/>
            <h4>{name}</h4>
        </div>
    )
}

export default Avatar;