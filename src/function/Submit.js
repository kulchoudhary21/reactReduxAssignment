export const forSubmit = (name, email, date, gender, select, list) => {
  return {
    type: "SUBMIT",
    payload: {
      name: name,
      email: email,
      date: date,
      gender: gender,
      select: select,
      list: list,
    },
  };
};
