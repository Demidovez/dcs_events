import axios_base from "axios";
import { getApiUrl } from "../helpers";

const axios = axios_base.create({
  withCredentials: true,
  baseURL: getApiUrl(),
});

export const fetchEvents = async (options) => {
  try {
    const { data } = await axios.post("events", options);

    return data;
  } catch (e) {
    throw new Error(e);
  }
};
