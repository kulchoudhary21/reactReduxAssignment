export const forDelete = (list) => {
  return {
    type: "DELETE",
    payload: {
      list: list,
    },
  };
};
