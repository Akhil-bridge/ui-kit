const errorServiceHandling = (response) => new Promise(((resolve, reject) => {
  resolve(response.data);
  reject(response);
  return null;
}));

export default errorServiceHandling;
