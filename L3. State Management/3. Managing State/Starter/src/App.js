import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button'; 

const App = () => {
  // const [] = useState();
  const [likes, setLikes] = useState(0);
  const numberOfLikes = () => {
    setLikes(() => {
      return likes+1
    })
  }

  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: </p>
      <Button className="btn btn-primary" onClick={numberOfLikes}>Likes {likes}</Button>
    </div>
  );
};

export default App;
