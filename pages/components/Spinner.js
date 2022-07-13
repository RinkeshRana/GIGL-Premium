import React from 'react';



const Spinner = () => {
  return (
    <div>
    <h2>NextJs Spinner Loader - GeeksforGeeks</h2>
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} 
    /> </div>
  )
}

export default Spinner