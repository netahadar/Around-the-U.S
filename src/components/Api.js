const fetchCall = (url, headers) => {
  return fetch(url, headers)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      Promise.reject(`ERROR: ${res.statusText}`);
    })
    .catch((err) => console.log(err));
};

class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  
  //Get user info from server:
  getUserInfo() {
    return fetchCall(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  //Get initial cards from server:
  getInitialCards() {
    return fetchCall(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }

//Send new profile data to server
sendNewData(obj) {
  return fetchCall(`${this._baseUrl}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      //new profile data:
      name: obj.name,
      about: obj.about,
    }),
  })
}


  // //add card:
  // fetch("https://around.nomoreparties.co/v1/group-12/users/cards", {
  //   method: "POST",
  //   headers: {
  //     authorization: "777d758a-9062-4c9b-9afe-60fcbfab24e6",
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //       //new card data:
  //     name: "Marie Skłodowska Curie",
  //     link: "Physicist and Chemist"
  //   })
  // })
  // .then ((res) =>{
  //     //add to page
  // })
}

export const api = new Api("https://around.nomoreparties.co/v1/group-12", {
  authorization: "12be1991-4f28-449f-a9a9-71d4704b25a2",
  "Content-Type": "application/json",
});
