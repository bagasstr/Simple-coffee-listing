import React from "react";
import { useTabs } from "../../utils/context/TabActive";

import { useState, useEffect } from "react";
import Card from "../atoms/Card";

export default function TabsItems() {
  const { isActive } = useTabs();
  const [filteredData, setFilteredData] = useState({
    available: [],
    allProduct: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const data = await res.json();
      setFilteredData({
        available: data.filter((item) => item.available === true),
        allProduct: data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const dataFilterd = isActive
    ? filteredData.allProduct
    : filteredData.available;

  return (
    <>
      <div className='flex justify-center mt-12'>
        <div className='card'>
          {dataFilterd.map((item) => (
            <>
              <Card
                title={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
                votes={item.votes}
                popular={item.popular}
                available={item.available}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
