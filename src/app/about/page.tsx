"use client";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ad?</p>
      <button onClick={() => router.push("/")} className='p-4 border'>
        Go home
      </button>
    </>
  );
}
