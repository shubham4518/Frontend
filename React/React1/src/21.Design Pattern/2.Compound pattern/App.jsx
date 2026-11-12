import { useState, useEffect } from "react";
import {Card,CardImage,Cardtitle,CardDescription,Cardrating,
} from "./21.Design Pattern/2.Compound pattern/Card";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
         .then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <Card key={item.id}>
            <CardImage src={item.image} />
            <Cardtitle title={item.title}> </Cardtitle>
            <CardDescription description={item.description}></CardDescription>
            <Cardrating rating={item.rating.rate} />
          </Card>
        )
      })}
    </div>
  );
};

export default App;
