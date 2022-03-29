import React from "react";
import User from "./User";

export default function Header() {
  return (
    <header className="flex justify-between w-full px-4 py-4 shadow-sm">
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
