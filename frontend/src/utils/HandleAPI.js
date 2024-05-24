import axios from "axios";
const baseURL = "http://localhost:5000";

const getAllToDo = (setToDO) => {
  axios.get(baseURL).then(({ data }) => {
    console.log("data --->", data);
    setToDO(data);
  });
};

export {getAllToDo};
