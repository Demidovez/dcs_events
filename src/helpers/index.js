// Pretty view of numbers
export const formatNumber = (num) =>
  num ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") : num;

export const getApiUrl = () => {
  const API_PORT = process.env.REACT_APP_API_PORT;

  let api_url = "";

  if (process.env.NODE_ENV === "development") {
    api_url = process.env.REACT_APP_API_DEV_HOST;
  } else {
    api_url = "http://" + window.location.hostname + ":" + API_PORT;
  }

  return api_url;
};
