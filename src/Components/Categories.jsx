import React, { useEffect, useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [slides, setSlides] = useState(0);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategories(data);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    if (categories.length - slides === 8) return false;
    setSlides(slides + 3);
  };

  const prevSlide = () => {
    if (slides === 0) return false;
    setSlides(slides - 3);
  };
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="max-w-[1200px]  mx-auto flex justify-between items-center my-3">
        <div>
          <h1 className="text-3xl font-bold">final match whats happening ?</h1>
        </div>
        <div className="flex gap-1 ">
          <div
            className="bg-red-950 flex justify-center items-center w-[30px] cursor-pointer h-[30px] rounded-full"
            onClick={prevSlide}
          >
            <TiArrowLeftThick />
          </div>
          <div
            className="bg-red-950 flex justify-center items-center w-[30px] cursor-pointer h-[30px] rounded-full"
            onClick={nextSlide}
          >
            <TiArrowRightThick />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              className="w-[150px] flex-grow shrink-0  duration-500 "
              key={index}
              style={{ transform: `translateX(-${slides}00%)` }}
            >
              <img
                src={`http://localhost:5000/images/${cat.image}`}
                alt="no imagae"
              ></img>
            </div>
          );
        })}
      </div>
      <hr className="my-5 border border-black-600"></hr>
    </div>
  );
};

export default Categories;
