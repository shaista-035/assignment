
import React, { useState } from "react";
const Counter = () => {
    const [count, setcount] = useState(0); 





  return (
    <>
      <div className="container text-center ">
        <h1 className="text-8xl text-center">{count}</h1>
        <button
          onClick={() => setcount(count - 1)}
          className="text-white px-7 py-3 cursor-pointer bg-blue-600 hover:bg-blue-900 active:bg-blue-800  rounded-md hover:shadow-lg transition-all duration-200 ease-in-out mx-2"
        >
          Decrease
        </button>

        <button
          onClick={() => setcount(0)}
          className='text-white px-7 py-3 cursor-pointer bg-pink-600 hover:bg-pink-900 active:bg-pink-800  rounded-md hover:shadow-lg transition-all duration-200 ease-in-out mx-2"
        >'
        >
          {" "}
          Reset
        </button>

        <button
          onClick={() => setcount(count + 1)}
          className="text-white px-7 py-3 cursor-pointer bg-purple-600 hover:bg-purple-900 active:bg-purple-800  rounded-md hover:shadow-lg transition-all duration-200 ease-in-out mx-2"
        >  Increase
        </button>
      </div>
    </>
  );
}

export default Counter