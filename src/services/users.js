const generateConfig = (body) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(body),
  };
};

export const create = async (body) => {
  const requestConfig = generateConfig(body);
  const response = await fetch(
    "https://kodemia-18g-default-rtdb.firebaseio.com/.json",
    requestConfig
  );
  const data = await response.json();
  return data;
};

export const retrieve = async (id) => {
  const response = await fetch(
    `https://kodemia-18g-default-rtdb.firebaseio.com/${id}.json`
  );
  const data = await response.json();
  return data;
};
