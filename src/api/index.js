import axios_base from "axios";
import { getApiUrl } from "../helpers";

const axios = axios_base.create({
  withCredentials: true,
  baseURL: getApiUrl(),
});

export const getProblems = async (searchData) => {
  try {
    const { data } = await axios.post("all_problems", searchData);

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const addProblem = async (problemData) => {
  try {
    const { data } = await axios.post("add_problem", {
      problemData,
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteProblem = async (problemId) => {
  try {
    const { data } = await axios.post("delete_problem", {
      problemId,
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const editProblem = async (problem) => {
  try {
    const { data } = await axios.post("edit_problem", {
      problem,
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const tryLogin = async (options) => {
  try {
    const { data } = await axios.post("login", options);

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const tryLogout = async () => {
  try {
    const { data } = await axios.get("logout");

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getUser = async () => {
  try {
    const { data } = await axios.get("get_user");

    return data;
  } catch (e) {
    throw new Error(e);
  }
};
