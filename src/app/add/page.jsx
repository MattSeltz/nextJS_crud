"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title && !description) {
      return alert("Title and Description are required");
    }

    try {
      const res = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();

        setTitle("");
        setDescription("");

        router.push("/");
        router.refresh();
      } else {
        alert("Error, try again...");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form autoComplete="off" className="flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        className="text-black p-1 rounded-sm"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        type="text"
        id="description"
        name="description"
        className="resize-none text-black p-1 rounded-sm"
        rows={3}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="submit"
        value="Send"
        className="bg-slate-500 mt-4 rounded-sm transition-colors hover:bg-slate-400 cursor-pointer"
      />
    </form>
  );
}
