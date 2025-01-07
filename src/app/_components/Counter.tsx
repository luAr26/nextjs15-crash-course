"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) return null;

  console.log(user);

  return (
    <>
      <div className='flex gap-2 items-center'>
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className='border py-1 px-3'
        >
          +
        </button>
        <span className='text-green-400 font-bold text-2xl'>{count}</span>
        <button
          onClick={() => setCount((prevCount) => prevCount - 1)}
          className='border py-1 px-3'
        >
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
