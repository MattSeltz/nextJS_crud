"use client";

export const handleClick = async (id,router) => {
    try {
      const res = await fetch(`/api/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        alert("Error, try again...");
      }
    } catch (error) {
      console.error(error.message);
    }
  };