import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
        <h1>{props.title}</h1>
        <img className="item-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1200px-Rock-paper-scissors_%28scissors%29.png"/>
        <h2>Win</h2>
    </div>
    // <div className="box">
    //   <h2>{props.user}</h2>
    //   <img src={props.src}/>
    //   {/* <h2>{result}</h2> */}
    // </div>
  )
}

export default Box
