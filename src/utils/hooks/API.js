import axios from "axios";
import config from "../../config/config";

const baseURL = config.baseURL;

export const fetchAllLinks = async () => {
  const response = await axios
    .get(`${baseURL}url`)
    .catch((err) => console.log(err));

  return response.data;
};

export const fetchLong = async (short) => {
  const response = await axios
    .get(`${baseURL}${short}`)
    .catch((err) => console.log(err));

  return response.data;
};

export const postNewLink = async (url) => {
  const response = await axios
    .post(`${baseURL}url`, {
      url: url,
    })
    .catch((err) => console.log(err));

  console.log(response.data);
  return response.data;
};

export const deleteLink = async (url) => {
  const response = await axios
    .delete(`${baseURL}url`, {
      data: {
        shortUrl: url,
      },
    })
    .catch((err) => console.log(err));

  return response.data;
};
