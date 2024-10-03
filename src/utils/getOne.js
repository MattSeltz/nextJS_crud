export const getTask = async (id) => {
  try {
    const res = await fetch(`${process.env.ENVIRONMENT}/api/${id}`, {
      method: "GET",
    });

    if (res.ok) {
      const data = await res.json();

      return data;
    } else {
      return res;
    }
  } catch (error) {
    return error.message;
  }
};