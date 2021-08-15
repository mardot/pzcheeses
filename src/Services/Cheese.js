// Service makes an api request
// then stores the request as an object

import axios from "axios";
// store url as env variable so easily changed later
const baseUrl = "/api/cheeses";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

// more services can be added here
// - serve JWT token for login function
// - admin could create more cheeses
// - update the cheese data/description/pictures

export default { getAll };
