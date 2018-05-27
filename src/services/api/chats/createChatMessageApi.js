export default (accessToken, commentData) => {
  return new Promise((resolve, reject) => {
    const path    = `${process.env.REACT_APP_API_URL}/comments`;
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject(request.responseText);
        }
      }
    }

    request.open('POST', path);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', accessToken);
    request.send(JSON.stringify(commentData));
  });
}
