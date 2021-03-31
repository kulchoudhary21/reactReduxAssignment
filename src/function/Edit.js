export const forEdit = (list) => {
  return {
    type: "EDIT",
    payload: {
      list: list,
    },
  };
};
