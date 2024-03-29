import React, { useContext } from "react";
import Link from "next/link";
import BookContext from "../context/BookContext";
import Image from "next/image";

const Card = (props) => {
  const { setBookState } = useContext(BookContext);

  return (
    <div className="p-2 shadow-2xl ">
      <Link href={`/book/${props.id}`}>
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
          <div className="lg:h-64  md:h-50 w-65  object-cover object-center">
            <Image src={props.thumbnailUrl}   alt={props.title} width={500} height={820} />
          </div>
          <div className="p-2 h-32 bg-slate-800">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-200 mb-1">
              {props.title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
