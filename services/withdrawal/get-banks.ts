export const getBanksRequest = async () => {
  const request = await fetch("https://nigerianbanks.xyz", {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  });

  const parsedResponse = request.json();

  return parsedResponse;
};
