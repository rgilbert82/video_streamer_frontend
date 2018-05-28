export default (chatObj, updatingList) => {
  return new Promise((resolve, reject) => {
    resolve({ poll_interval: 3000, comments: [{ message: 'Hello' }] });
  });
}
