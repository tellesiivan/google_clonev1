import React from "react";
import User from "./User";

export default function Header() {
  return (
    <header className="flex w-full justify-between px-4 py-4 shadow-md">
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
