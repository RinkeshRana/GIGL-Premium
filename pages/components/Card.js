import Link from "next/link";
import React from "react";

const Card = (props) => {
  // console.log(props);
  const id = props.id;
  // console.log(id);

  return (
    <div className="p-2  ">
      <Link href={`/book/${id}`}>
        <div className="h-96 hover:cursor-pointer hover:scale-110   w-40 border-2 border-gray-800 rounded-lg overflow-hidden">
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
