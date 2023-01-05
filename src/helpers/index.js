// Pretty view of numbers
export const formatNumber = (num) =>
  num ? num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") : num;

export const getApiUrl = () => {
  // const API_PORT = process.env.REACT_APP_API_PORT;

  let api_url = "";

  if (process.env.NODE_ENV === "development") {
    api_url = process.env.REACT_APP_API_DEV_HOST;
  } else {
    // api_url = "http://" + window.location.hostname + ":" + API_PORT;
    api_url = process.env.REACT_APP_API_DEV_HOST;
  }

  return api_url;
};

export const getTimeMode = (modeValue) => {
  let mode = {};

  switch (modeValue) {
    case "today":
      mode = {
        title: "За сегодня",
        value: modeValue,
        days: 0,
      };
      break;
    case "tomorrow":
      mode = {
        title: "За вчера",
        value: modeValue,
        days: 1,
      };
      break;
    case "days_3":
      mode = {
        title: "За 3 дня",
        value: modeValue,
        days: 3,
      };
      break;
    case "week_1":
      mode = {
        title: "За 1 неделю",
        value: modeValue,
        days: 7,
      };
      break;
    case "month_1":
      mode = {
        title: "За 1 месяц",
        value: modeValue,
        days: 30,
      };
      break;
    case "month_2":
      mode = {
        title: "За 2 месяца",
        value: modeValue,
        days: 60,
      };
      break;
    case "month_3":
      mode = {
        title: "За 3 месяца",
        value: modeValue,
        days: 90,
      };
      break;
    case "month_6":
      mode = {
        title: "За 6 месяцев",
        value: modeValue,
        days: 180,
      };
      break;
    default:
      mode = {
        title: "За 1 неделю",
        value: modeValue,
        days: 7,
      };
  }

  return mode;
};
