import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    let images=this.imageData()
    return(
      <>
      <div>
        <h1>Kalvium gallery</h1>
      </div>
      <div className="image-container">{
        images.map((item)=>{
          return(
            <div key={item.id}>
              <img src={item.img} alt='elephant'/>

            </div>
          )
        })
      }

      </div>
      <div>Using Class Components</div>
      </>
    )
  }
}