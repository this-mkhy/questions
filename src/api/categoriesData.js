import axios from "axios";

export const categoriesData = () => {
  return axios.get("https://opentdb.com/api_category.php");
};