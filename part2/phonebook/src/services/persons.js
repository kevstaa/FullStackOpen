import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

const create = (newObject) => {
  const req = axios.post(baseUrl, newObject);
  return req.then((res) => res.data);
};

const remove = (id) => {
  const url = `${baseUrl}/${id}`;
  const req = axios.delete(url);
  return req.then((res) => res.data);
};

const update = (personObject) => {
  const url = `${baseUrl}/${personObject}`;
  const req = axios.put(url, personObject);
  return req.then((res) => res.data);
};

export default { getAll, create, remove, update };
