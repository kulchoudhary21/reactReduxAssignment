const iState = {
  name: "k",
  email: "",
  gender: "",
  date: "",
  select: "",
  passwd: "",
  list: [],
};
const reducer = (state = iState, action) => {
  if (action.type === "SUBMIT") {
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      date: action.payload.date,
      gender: action.payload.gender,
      select: action.payload.select,
      list: action.payload.list,
    };
  }

  if (action.type === "DELETE") {
    return {
      ...state,
      list: action.payload.list,
    };
  }
  if (action.type === "EDIT") {
    return {
      ...state,
      list: action.payload.list,
    };
  }

  return state;
};

export default reducer;
