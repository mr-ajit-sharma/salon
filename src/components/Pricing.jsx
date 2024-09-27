import React from "react";
import PriceCard from "./PriceCard";


const Pricing = () => {
  const priceData = [
    {
      title: "haircut and Beardcut service",
      data: [
        {
          name: "man's hair cut",
          price: "70 ",
        },
        {
          name: "man's stylish hair cut",
          price: "100",
        },
        {
          name: "kids hair cut",
          price: "50",
        },
        {
          name: "kids stylish hair cut",
          price: "70",
        },
        {
          name: "normal shaving",
          price: "40",
        },
        {
          name: "special shaving",
          price: "50",
        },
        {
          name: "trimming",
          price: "30",
        },
        {
          name: "beard setting",
          price: "50",
        },
        {
          name: "stylish beard setting",
          price: "60",
        },
        {
          name: "rounding and cutline",
          price: "40",
        },
      ],
    },
    {
      title: "hair-coloring service",
      data: [
        {
          name: "normal dye/color",
          price: "100 ",
        },
        {
          name: "garnier color",
          price: "150",
        },
        {
          name: "full high-light",
          price: "400",
        },
        {
          name: "drop high-light",
          price: "350",
        },
      ],
    },
    {
      title: "Special service",
      data: [
        {
          name: "eye-brow threading",
          price: "40 ",
        },
        {
          name: "face threading",
          price: "70 ",
        },
        {
          name: "head massage",
          price: "80 ",
        },
        {
          name: "body massage",
          price: "100 ",
        },
        {
          name: "face clean",
          price: "100 ",
        },
        {
          name: "special face massage",
          price: "250",
        },
        {
          name: "facial",
          price: "400",
        },
        {
          name: "d-tain",
          price: "250",
        },
        {
          name: "temporary hair-straightening",
          price: "800",
        },
        {
          name: "permanent hair-straightening",
          price: "1500",
        },
      ],
    },
  ];
  console.log(priceData,"pricedata data")
  return (
    <div className="pricing">
      <h1>Service menu</h1>
      <div>
        {priceData.map((item,index) => (
          <PriceCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
