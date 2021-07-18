import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUserData(res.data);
    });
  }

  console.log(userData);

  return (
    <>
      <DisplayData userpropdata={userData} />
    </>
  );
}

export default App;
