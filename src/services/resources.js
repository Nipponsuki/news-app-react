import { API_KEY } from "utils/constants";

const load = async () => {
  const query = {
    method: "GET"
  };
  const response = await fetch(
    `http://newsapi.org/v2/sources?&apiKey=${API_KEY}`,
    query
  );
  const json = await response.json();
  return json;
};

export { load };
