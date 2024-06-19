import React from "react";
import wedding from "../assets/wedding.png";
import construction from "../assets/construction.png";
import emergency from "../assets/emergency.png";
import food from "../assets/food.png";
import homeservice from "../assets/homeservice.png";
import transport from "../assets/transport.png";
import agriculture from '../assets/agriculture.png'
import automobile from '../assets/automobile.png'
import education from '../assets/education.png'
import professional from '../assets/professional.png'
import rental from '../assets/rental.png'
import shops from '../assets/shops.png'
import { Link } from "react-router-dom";
const ServiceIcons = () => {
  const data = [
    {
      url: wedding,
      title: "Wedding",
      href: "/wedding",
    },
    {
      url: construction,
      title: "Construction",
      href: "/construction",
    },
    {
      url: emergency,
      title: "Emergency",
      href: "/emergency",
    },
    {
      url: food,
      title: "Food",
      href: "/food",
    },
    {
      url: homeservice,
      title: "Home_Service",
      href: "/homeservice",
    },
    {
      url: transport,
      title: "Transport",
      href: "/transportation",
    },
    {
      url: agriculture,
      title: "Agriculture",
      href: "/agriculture",
    },
    {
      url: rental,
      title: "Rent & Hire",
      href: "/rental",
    },
    {
      url: automobile,
      title: "Automobile",
      href: "/automobile",
    },
    {
      url: shops,
      title: "Shops",
      href: "/shop",
    },
    {
      url: education,
      title: "Educational",
      href: "/education",
    },
    {
      url: professional,
      title: "Professional",
      href: "/professionalservices",
    },
  ];
  return (
    <div>
      <div className="mx-auto my-10 grid md:grid-cols-6 grid-cols-2">
        {data.map((item, id) => {
          return (
            <div className="mx-auto md:my-5 my-8 flex flex-col items-center ">
              <div
                key={id}
                className="border-1 border-gray-400  border hover:shadow-xl  duration-150 rounded-md h-16 w-20 "
              >
                <Link to={item.href}>
                  {" "}
                  <img
                    src={item.url}
                    alt=""
                    className=" h-12 w-16 mx-auto my-2"
                  />
                  
                </Link>
              </div>
                <h3 className=" text-gray-700 text-base">
                    {item.title}
                </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceIcons;
