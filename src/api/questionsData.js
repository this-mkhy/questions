import axios from "axios";

export const questionsData = ({ category = "", difficulty = "easy" }) => {
  return axios.get(`https://opentdb.com/api.php?amount=1&category=${category.id || ""}&difficulty=${difficulty}`);
};