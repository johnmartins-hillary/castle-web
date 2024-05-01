import Cookie from "js-cookie";
import moment from "moment";
export const getParameterByName = (name?: string, url?: string) => {
  if(typeof window !== 'undefined'){
   if (!url) url = window.location.href;
   name = name?.replace(/[\[\]]/g, "\\$&");
   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
     results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return "";
   return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  return null
}

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
  // Handle case where time is undefined
  if (!time) {
    return ""; // Or any default value or message you prefer
  }

  const date = new Date(time);
  const currentDate = new Date();
  const diff = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return "Just now";
  } else if (minutes < 60) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else if (hours < 24 && date.getDate() === currentDate.getDate()) {
    const ampm = date.getHours() >= 12 ? "pm" : "am";
    const hours12 = date.getHours() % 12 || 12;
    const minutesFormatted = date.getMinutes().toString().padStart(2, "0");
    return `Today, ${hours12}:${minutesFormatted} ${ampm}`;
  } else if (hours < 48 && date.getDate() === currentDate.getDate() - 1) {
    return "Yesterday, " + formatDate(time);
  } else if (days < 7) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[date.getDay()] + ", " + formatDate(time);
  } else {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const ampm = date.getHours() >= 12 ? "pm" : "am";
    const hours12 = date.getHours() % 12 || 12;
    const minutesFormatted = date.getMinutes().toString().padStart(2, "0");
    return `${day} ${month}, ${hours12}:${minutesFormatted} ${ampm}`;
  }
}



