import React, { useEffect, useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Card from "./Card";

const Rest = () => {
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
      <div className="max-w-[1200px] mx-auto flex justify-between items-center mb-2">
        <div>
          <h1 className="text-3xl font-bold">what is the trend in wardha ?</h1>
        </div>
        <div className="flex gap-1 ">
          <div className="bg-red-950 flex justify-center items-center w-[30px] cursor-pointer h-[30px] rounded-full">
            <TiArrowLeftThick />
          </div>
          <div className="bg-red-950 flex justify-center items-center w-[30px] cursor-pointer h-[30px] rounded-full">
            <TiArrowRightThick />
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto my-9">
        <div className="flex gap-5 overflow-hidden">
          {data.map((item, index) => {
            return <Card {...item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Rest;
