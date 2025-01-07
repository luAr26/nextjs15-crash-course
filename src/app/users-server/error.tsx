"use client";

import { useEffect } from "react";

function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return <div>Error fetching users data.</div>;
}

export default Error;
