import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardContainer = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/fetchBooks")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  console.log(data);
  if (isLoading) return <p>No profile data</p>;

  if (!data) return <p>No profile data</p>;
  console.log(data);
  console.log(data.data.length);

  return (
    <div className="">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-3xl font-bold ">Premium Summeries</h1>
          <div className="flex flex-wrap xl:justify-start justify-center m-4">
            {data.data.map((data) => (
              <Card
                thumbnailUrl={data.thumbnailUrl}
                title={data.title}
                subtitle={data.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardContainer;
