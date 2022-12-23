function Avatar(properties) {
  const { src, hidename, rounded } = properties;
  const styles = {
    borderRadius: rounded ? "50%" : "1rem",
    border: "2px solid black",
    width: "50%"
  };

  return (
    <div>
      <img src={src} style={styles} />
      <h1>{hidename ? hidename : null} </h1>
    </div>
  );
}

export default Avatar;
