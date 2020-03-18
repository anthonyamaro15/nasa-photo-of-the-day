import React, { useState, useEffect } from "react";
import Information from "./Information";
import axios from "axios";

const MainApp = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  //   const apiKey = "Jz0JKubQ4OawzIo1KDsb4C9Z9dqbh3FC56Pqz7FU";

  //   useEffect(() => {
  //     axios
  //       .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  //       .then(res => {
  //         console.log(res.data);
  //         setData(res.data);
  //         setIsLoaded(true);
  //       })
  //       .catch(err => console.log(err));
  //   }, []);

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("data"));
    if (newData) {
      setData(newData);
      setIsLoaded(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div>{isLoaded ? <Information data={data} /> : <h1>Loading...</h1>}</div>
  );
};

export default MainApp;
