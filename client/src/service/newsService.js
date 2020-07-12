function postNews(article) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(article)
  };

  return fetch(`${process.env.API_URL}news`, requestOptions)
    .then(handleResponse)
    .then(news => news)
    .catch(error => error);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        //handle error 401
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

module.exports ={postNews};