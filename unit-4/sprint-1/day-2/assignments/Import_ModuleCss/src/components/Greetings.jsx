import { Component } from "react";
//import "./Greetings.css";  this is universal css importing
import styles from "./Greetings.module.css";
function Greetings(){
    return (
    <>
     <h1>Good Morning</h1>
     <h3 className={styles.App}>Sonu</h3>
    </>
    );
   }


  export default Greetings