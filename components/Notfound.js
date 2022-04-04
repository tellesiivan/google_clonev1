import React from "react";
import Form from "./Body/Form";

export default function NotFound({ q }) {
  return (
    <>
      <Form />

      <div className="fixed bottom-0 flex items-center justify-center w-full bg-black h-14">
        <p className="text-xs text-gray-100">
          Unable to find results for{" "}
          <span className="text-sm font-medium text-yellow-500">{q}</span>...
          try searching again!
        </p>
      </div>
    </>
  );
}
