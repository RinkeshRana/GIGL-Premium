import React, { useContext, useState } from "react";
import Card from "./components/Card";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home(props) {
  const [books, setBooks] = useState(props.allBooks.data);
  const [hasMore, setHasMore] = useState(true);
  const [bookId, setBookId] = useState(1);

  const getMoreBooks = async () => {
    const res = await fetch(
      `http://localhost:3000/api/fetchBooks?bookid=${bookId}`
    );
    const allBooks = await res.json();
    console.log(allBooks);
    setBookId(bookId + 1);
    setBooks((book) => [...book, ...allBooks.data]);
    if (bookId === 10) {
      setHasMore(false);
    }
  };

  return (
    <div className="">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="px-6 py-10 mx-auto">
          <h1 className="text-xl md:text-3xl font-bold ">
            Premium Unlocked Summary
          </h1>
          {/* <div className="flex flex-wrap justify-center xl:justify-start m-4"> */}
          <InfiniteScroll
            dataLength={books.length}
            next={getMoreBooks}
            hasMore={hasMore}
            className="flex flex-wrap justify-center xl:justify-start m-4"
            loader={<h3> Loading...</h3>}
            endMessage={<h4>You reached end of this page..!</h4>}
          >
            {books.map((data, index) => (
              <Card
                key={index}
                id={data.id}
                thumbnailUrl={data.thumbnailUrl}
                title={data.title}
                description={data.shortDescription}
              />
            ))}
          </InfiniteScroll>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = await fetch(
    "http://localhost:3000/api/fetchBooks?bookid=bhagwad_geeta"
  );
  let allBooks = await data.json();
  return {
    props: { allBooks }, // will be passed to the page component as props
  };
}
