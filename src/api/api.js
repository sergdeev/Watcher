export const API_URL = "https://api.themoviedb.org/3";

export const API_KEY_3 = "82e907ae230e3979723f46972af5c31d";

export const API_KEY_4 =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmU5MDdhZTIzMGUzOTc5NzIzZjQ2OTcyYWY1YzMxZCIsInN1YiI6IjViZjg0MzVjMGUwYTI2MjY3NDBmYTIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wwjNTtEgVE7xgYtBwLFK7Kw8wDaYeh4-DtUP56n7mzY";


  export const fetchApi = (url, options = {}) => {
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(response => {
          if (response.status < 400) {
            return response.json();
          } else {
            throw response;
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(response => {
          response.json().then(error => {
            reject(error);
          });
        });
    });
  };
