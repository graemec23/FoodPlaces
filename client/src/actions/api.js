export async function makePost(path, data= {}) {
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const callConfig = {
      method: 'GET',
      headers: new Headers(headers),
    };

    return await fetch(path, callConfig)
    .then(res => res.json())
    .then((message) => console.log(message))
  };

export function getUsersJson() {

    const promise = new Promise(async (resolve, reject) => {

        // console.log('fields', email, username, password);
        const response = await makePost('./data/users.json');
        console.log('response', response);
        // console.log('response', response);
        // if (response.data.token) {
        //   setValue(REGISTRATION_TOKEN_KEY, response.data.token);
        //   resolve();
        // } else {
        //   reject();
        // }
        resolve();
      });

      return promise;
}
