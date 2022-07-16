import React, { useContext } from "react";
import Card from "./components/Card";

export default function Home(props) {
  return (
    <div className="">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="px-2 py-10 mx-auto">
          <h1 className="text-xl md:text-3xl font-bold ">BHAGWAD GEETA</h1>
          <div className="flex flex-wrap justify-center xl:justify-start m-4">
            {props.allBooks.data.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                thumbnailUrl={data.thumbnailUrl}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/fetchBooks");
  let allBooks = await data.json();
  return {
    props: { allBooks }, // will be passed to the page component as props
  };
}
