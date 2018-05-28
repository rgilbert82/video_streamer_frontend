export default (user_id) => {
  return new Promise((resolve, reject) => {
    const userObj = {
      comments: [1, 2, 3],
      user: { name: 'Alice', id: '123' }
    };

    resolve(userObj);
  });
}
