import { BASE_URL } from "./client-request";

export const CarsleApiRequest = async (url, method = "GET", data = null) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    if (token) {
      headers.Authorization = `Token ${token}`;
    }

    const options = {
      method,
      headers
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${BASE_URL}${url}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};
