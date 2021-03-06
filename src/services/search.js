import { API_KEY } from "utils/constants";

const load = async searchTerm => {
  const query = {
    method: "GET"
  };
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`,
    query
  );
  const json = await response.json();
  return json;
};

export { load };
