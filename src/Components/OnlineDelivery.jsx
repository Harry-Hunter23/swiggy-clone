import React, { useEffect, useState } from "react";
import Card from "./Card";

const OnlineDelivery = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="max-w-[1200px] mx-auto items-center my-3">
        <div>
          <h1 className="text-3xl font-bold my-5">Tahlakia omlet banaunga?</h1>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {data.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default OnlineDelivery;
