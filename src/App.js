import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [numbers, Setnumber] = useState("");
  const [apidata, Setapidata] = useState([]);

  const HendleApiData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${numbers}`
    );

    // response.then(data => {
    //   return data.json()
    // }).then(data => {
    //   console.log('data', data);
    //   Setapidata(data);
    // });
    const data = await response.json();
    // console.log('data', data)
    Setapidata(data);
  };

  useEffect(() => {
    HendleApiData();
  }, [numbers]);

  return (
    <div className="App">
      <input
        type="number"
        value={numbers}
        onChange={(e) => {
          Setnumber(e.target.value);
        }}
      />
      <h1>
        {apidata.map((elm) => {
          return <p>{elm.name}</p>;
        })}
      </h1>
    </div>
  );
}
