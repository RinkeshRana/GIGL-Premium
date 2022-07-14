import React from "react";
import Card from "./components/Card";

export default function Home(props) {
 
  return (
    <div className="">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-3xl font-bold ">Premium Summeries</h1>
          <div className="flex flex-wrap xl:justify-start justify-center m-4">
            {props.allBooks.data.map((data) => (
              <Card
                key={data.id}
                id={data.id}
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

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/fetchBooks");
  let allBooks = await data.json();
  return {
    props: {allBooks}, // will be passed to the page component as props
  }
}
