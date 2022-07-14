import React, { useContext } from "react";
import Link from "next/link";
import BookContext from ".././context/bookContext";

const Card = (props) => {
  // console.log(props);
  const id = props.id;
  const { setBookState } = useContext(BookContext);

  return (
    <div className="p-2  ">
      <Link href={`/book/${id}`}>
        <div
          onClick={() => {
            setBookState(
              props.id,
              props.title,
              props.description,
              props.thumbnailUrl
            );
          }}
          className="h-96 hover:cursor-pointer hover:scale-110   w-40 border-2 border-gray-800 rounded-lg overflow-hidden"
        >
          <img
            className="lg:h-64  md:h-50 w-65  object-cover object-center"
            src={props.thumbnailUrl}
            alt="blog"
          />
          <div className="p-2 h-32 bg-yellow-100">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
              {props.title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
