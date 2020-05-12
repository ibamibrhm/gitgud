const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status,
    statusText,
  });
};

export default mockResponse;
