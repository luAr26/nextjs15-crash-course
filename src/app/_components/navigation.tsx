"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className='flex gap-4 p-4'>
        <li>
          <Link href='/' className={pathname === "/" ? "font-bold" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className={pathname === "/about" ? "font-bold" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='products'
            className={pathname === "/products" ? "font-bold" : ""}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href='/users-server'
            className={pathname === "/users-server" ? "font-bold" : ""}
          >
            Users Server
          </Link>
        </li>
        <li>
          <Link
            href='/mock-users'
            className={pathname === "/mock-users" ? "font-bold" : ""}
          >
            Mock Users
          </Link>
        </li>
        <li className='flex items-center gap-4 mx-6'>
          <SignedOut>
            <SignInButton mode='modal' />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
