import { BASE_URL } from "@/constants";
import { useGetUserDetailsQuery } from "@/services/user";
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
  let token: any;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("authorization") || null;

  }
  
  if (token) {
    return true;
  } else {
    return false;
  }
};
