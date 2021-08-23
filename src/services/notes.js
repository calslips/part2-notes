import axios from "axios";

// const baseURL = "http://localhost:3001/api/notes";

const baseURL = "https://young-plateau-08143.herokuapp.com/";

/*  GET request to test ERROR handling & errorMessage
const getAll = () => {
  const request = axios.get(baseURL)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}
*/

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseURL, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return request.then((response) => response.data);
};

const noteRequests = { getAll, create, update };

export default noteRequests;
