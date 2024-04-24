import Cookie from "js-cookie";
import moment from "moment";
export const getParameterByName = (name?: string, url?: string) => {
  if (!url) url = window.location.href;
  name = name?.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
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
    const parsedData = JSON?.parse(localData);

    return parsedData;
  }
};
