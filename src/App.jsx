import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  // code here
  let images = imageData();

  return (
    <>
      <div>
        <h1>Kalvium gallery</h1>
        <div className="image-container">
          {
            images.map((el) => {
              return (
                <div key={el.id}>
                  <img src={el.img} alt="" />
                </div>
              );
            })
          }
        </div> 
      </div>
    </>
  )
}
export default App;