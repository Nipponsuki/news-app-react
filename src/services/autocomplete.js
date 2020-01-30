const load = async word => {
  const query = {
    method: "GET"
  };
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.datamuse.com/sug?s=${word}`,
    query
  );
  const json = await response.json();
  return json;
};

export { load };
