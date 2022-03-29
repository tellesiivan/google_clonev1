import React from "react";

export default function Footer() {
  return (
    <footer className="absolute text-center left-[50%] translate-x-[-50%] bottom-2 whitespace-nowrap text-gray-500">
      <p className="text-xs">
        Copyright &copy; {new Date().getFullYear()} Ivan Telles
      </p>
    </footer>
  );
}
