import React from "react";

const Card = (props) => {
  console.log(props);
  const bookPage = () => {
    console.log("clicked");
    window.location.href = "/book?id=" + props.id;
  };
  return (
    <div className="p-2  ">
      <div
        onClick={bookPage}
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
          {/* <h1 className="title-font text-lg font-medium text-black mb-3">
            {props.subtitle}
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
