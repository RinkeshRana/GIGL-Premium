import React, { useState } from "react";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";

export default function Home(props) {
  const [books, setBooks] = useState(props.allBooks.data);
  const [hasMore, setHasMore] = useState(true);
  const [bookId, setBookId] = useState(1);

  const getMoreBooks = async () => {
    const res = await fetch(
      `https://www.greatideasgreatlife.tk/api/fetchBooks?bookid=${bookId}`
    );
    const allBooks = await res.json();
    setBookId(bookId + 1);
    setBooks((book) => [...book, ...allBooks.data]);
    if (bookId === 10) {
      setHasMore(false);
    }
  };
  return (
    <div className="">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>:: Welcome to GIGL ::</title>
        <meta
          name="meta_tags"
          content="great ideas great life,book summaries, hindi audiobook,business and investment courses,gigl,hindi audiobook summaries,free audiobooks,free hindi audiobooks,free hindi courses"
        />
        <meta
          name="description"
          content="We provide free hindi audiobooks and video courses such as business, investment"
        />
        <meta
          name="keywords"
          content="great ideas great life,book summaries, hindi audiobook,business and investment courses,gigl,hindi audiobook summaries,free audiobooks,free hindi audiobooks,free hindi courses"
        />

        <meta
          name="facebook-domain-verification"
          content="61vbivju4za5lh5htup9kodzt22dtd"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
const data = await fetch("https://www.greatideasgreatlife.tk/api/fetchBooks?bookid=topbooks");
  
let allBooks = await data.json();
  return {
    props: { allBooks }, // will be passed to the page component as props
  };
}
