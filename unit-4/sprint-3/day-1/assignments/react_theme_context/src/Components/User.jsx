import React from 'react'

export default function User({isDarkTheme,name,position,level,points,img}) {
    console.log(img)
    return (
        <div data-testid = "user"  style={{backgroundColor : isDarkTheme ? "black" : "white" ,color:isDarkTheme ? "white" : "black"}}>
            <img src={img} width="40%" alt="" />
            <h2>{name}</h2>
            <h2>{position}</h2>

            <input data-testid = "level" type = "range"  style={{accentColor:isDarkTheme ? "yellow" : "blue"}} />
            <p>Professional Level {level}</p>
            <p>{points} Points</p>
        </div>
    )
}
