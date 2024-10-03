"use client";

import { useRouter } from "next/navigation";

import { handleClick } from "@/utils/delete";

export const Footer = ({ id }) => {
  const router = useRouter();

  return (
    <footer className="absolute bottom-10 right-10">
      <button
        className="bg-red-600 p-1 rounded-sm cursor-pointer transition-colors hover:bg-red-700"
        onClick={() => handleClick(id, router)}
      >
        Delete
      </button>
    </footer>
  );
};
