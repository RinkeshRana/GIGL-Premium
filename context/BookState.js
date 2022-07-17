import BookContext from "./bookContext";
import { useState } from "react";

const BookState = (props) => {

  const [book, setBook] = useState({id : 0, title :"null", description: "null", thumbnailUrl: "null"})

  const getBook = () => {
    return book;
  }

  const setBookState = (id, title, description, thumbnailUrl) => {
    setBook({
      id,
      title,
      description,
      thumbnailUrl,
    });
  }




    // This will return functions that will be used to update the state
    return (
        <BookContext.Provider
          value={{ getBook,setBookState }}
        >
          {props.children}
        </BookContext.Provider>
      );
}

export default BookState