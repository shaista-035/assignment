
import React, { useState } from "react";
const Counter = () => {
    const [count, setcount] = useState(0); 





  return (
    <>
      <div className="container text-center ">
        <h1 className="text-8xl text-center">{count}</h1>
        <button
          onClick={() => setcount(count - 1)}
          className="text-white px-7 py-3 rounded-md cursor-pointer mx-1 active:scale-95 bg-blue-600 hover:bg-blue-800"
        > Decrease
        </button>


        <button
          onClick={() => setcount(0)}
          className="text-white px-7 py-3 rounded-md cursor-pointer mx-1 active:scale-95 bg-pink-600 hover:bg-pink-800"
        >Reset
        </button>


        
        <button
          onClick={() => setcount(count + 1)}
          className="text-white px-7 py-3 rounded-md cursor-pointer mx-1 active:scale-95 bg-purple-600 hover:bg-purple-800"
        >Increase
        </button>
      </div>
    </>
  );
}

export default Counter