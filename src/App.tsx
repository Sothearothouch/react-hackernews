import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layouts/header';
import { NewsCard, NewsCardProps } from './components/news-card';
import axios from 'axios';
import { Footer } from "./layouts/Footer";


function App() {
  const [popularStoryState, setPopulerStoryState] = React.useState<number[]>([]);

  useEffect(()=>{
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((res) => {
        const data = res.data
        setPopulerStoryState(data);
      })
      .catch((err)=> alert(err)); 

  },[])

  return (
    // <div className="App" style={{
    //     paddingRight:50,
    //     paddingLeft:50,
    //     paddingTop:5,
    //     backgroundColor:"#f6f6ef",
        
    // }}>
    //  <Header />
    //  {popularStoryState.map((id, index) => {
    //    return <NewsCard id={id} index={index}/>
    //  })}
    //  <Footer />
    // </div>

    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <table style={{ width: "90%" }}>
        <tbody>
          <tr style={{ fontSize:"10pt" }}>
            <Header />
          </tr>
          <tr
            style={{
              backgroundColor: "#F6F6EF",
              border: "0px",
              borderCollapse: "collapse",
              borderSpacing: "0px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0px",
              width: "90%",
            
            }}
          >
            {popularStoryState.map((id, index) => {
              return <NewsCard id={id} index={index} />;
            })}
          </tr>
          <tr
            style={{
              backgroundColor: "#F6F6EF",
              fontSize: "8pt"
            }}
          >
            <Footer />
          </tr>
        </tbody>
      </table>
    </div>
  );

}

export default App;
