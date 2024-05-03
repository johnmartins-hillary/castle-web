import Cookie from "js-cookie";
import moment, { duration } from "moment";
export const getParameterByName = (name?: string, url?: string) => {
  if (typeof window !== "undefined") {
    if (!url) url = window.location.href;
    name = name?.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  return null;
};

export const dateFormatter = (date: any) => {
  const result = moment(date).format("MMMM DD YYYY");
  return result;
};

export const TokenChecker = () => {
  let token = Cookie.get("authorization");
  // if (typeof window !== "undefined") {

  //   token = localStorage.getItem("authorization") || null;

  // }

  if (token) {
    return true;
  } else {
    return false;
  }
};

export const getLocalStorageData = (key: string) => {
  if (typeof window !== "undefined") {
    const localData = localStorage?.getItem(key);

    if (localData) {
      try {
        const parsedData = JSON.parse(localData);
        return parsedData;
      } catch (error) {
        console.error("Error parsing JSON data:", error);
        return null; // Or handle the error in another way
      }
    } else {
      console.warn(`No data found in localStorage for key: ${key}`);
      return null; // Or handle the absence of data in another way
    }
  }
};

export function formatDate(time?: string): string {
  if (!time) {
    return ""; // Or any default value or message you prefer
  }

  const date = moment(time);
  if (!date.isValid()) {
    return "Invalid date"; // Or any error message you prefer
  }

  const currentDate = moment();
  const diff = currentDate.diff(date, "seconds");
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / (60 * 60));
  const days = Math.floor(diff / (24 * 60 * 60));

  if (diff < 60) {
    return "Just now";
  } else if (minutes < 60) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else if (hours < 24 && date.isSame(currentDate, "day")) {
    return `Today, ${date.format("h:mm A")}`;
  } else if (
    hours < 48 &&
    date.isSame(currentDate.clone().subtract(1, "day"), "day")
  ) {
    return `Yesterday, ${date.format("h:mm A")}`;
  } else if (days < 7) {
    return `${date.format("dddd")}, ${date.format("h:mm A")}`;
  } else {
    return date.format("MMM D, h:mm A");
  }
}

export const chatTimer = (
  duration: number,
  state: any,
  setState: any,
  seconds?: any,
  setSeconds?: any
) => {
  const interval = setInterval(() => {
    if (seconds === 0) {
      if (state === 0) {
        clearInterval(interval);
      } else {
        setState((preveState: any) => preveState - 1);
        setSeconds(59);
      }
    } else {
      setSeconds((prevState: any) => prevState - 1);
    }
  }, 1000);

  return () => {
    clearInterval(interval);
  };
};
