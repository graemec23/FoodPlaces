export async function makePost(path, data = {}) {
  let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };

  const callConfig = {
    method: "GET",
    headers: new Headers(headers),
  };

  await fetch(path, callConfig)
    .then(res => res.json())
    .then((message) => console.log(message))
};

export function getUsersJson() {

  const promise = new Promise(async (resolve, reject) => {
    const response = await makePost("./data/users.json");
    console.log("response", response);
    // console.log("response", response);
    // if (response.data) {
    //   resolve();
    // } else {
    //   reject();
    // }
    resolve();
  });

  return promise;
}
