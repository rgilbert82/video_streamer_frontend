export default (chatObj, updatingList) => {
  return new Promise((resolve, reject) => {
    const updateQuery = updatingList ? '&updating_list=true' : '';
    const tokenQuery  = chatObj.page_token ? `?pageToken=${chatObj.page_token}${updateQuery}` : '';
    const path        = `${process.env.REACT_APP_API_URL}/comments/${chatObj.id}${tokenQuery}`;
    const request     = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject(request.responseText);
        }
      }
    }

    request.open('GET', path);
    request.send();
  });
}
