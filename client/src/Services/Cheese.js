// Service makes an api request
// then stores the request as an object

import axios from "axios";
const baseUrl = "/api/cheeses";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

// more services can be added here
// - add JWT token for login function
// - admin could create more cheeses
// - update the cheese data/description/pictures

export default { getAll };
