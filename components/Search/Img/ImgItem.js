import React from "react";

export default function ImgItem({ image }) {
  console.log(image);

  return (
    <div className="relative">
      <a href={image.image?.contextLink} target="_blank" rel="noreferrer">
        <div className="block w-full overflow-hidden group focus-within:ring-offset-2 focus-within:outline-none">
          <img
            src={image.link}
            alt=""
            className="object-contain w-full rounded-lg pointer-events-none h-60 group-hover:opacity-75"
          />
          <button type="button" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">View details for {"title"}</span>
          </button>
        </div>
        <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
          {image.title}
        </p>
        <p className="block text-xs font-medium text-gray-500 pointer-events-none">
          {image.displayLink}
        </p>
      </a>
    </div>
  );
}
