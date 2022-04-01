import React from "react";
import User from "./User";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header
      className={`${
        pathname === "/search" ? "hidden" : "flex"
      } justify-between w-full px-4 py-4 shadow-sm bg-slate-100 `}
    >
      <ul className="flexLinks">
        <li className="link">About</li>
        <li className="link">Store</li>
      </ul>
      <ul className="flexLinks">
        <li className="link">Gmail</li>
        <li className="link">Images</li>
        <User />
      </ul>
    </header>
  );
}
