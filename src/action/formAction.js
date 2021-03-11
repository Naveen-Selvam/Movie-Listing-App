export const startAddData = (data) => {
  return { type: "ADD", payload: data };
};

export const startDeleteData = (id) => {
  return { type: "DELETE", payload: id };
};

export const startEditData = (data) => {
  return { type: "EDIT", payload: data };
};
