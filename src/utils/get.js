export const getTasks = async () => {
  try {
    const res = await fetch(`${process.env.ENVIRONMENT}/api`);

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