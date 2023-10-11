export async function get({ url }: any) {
  console.log("entrou");
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      //const json = json.json();
      console.error(json);
      return json;
    })
    .catch((error) => {
      console.error("error");
    });
}

export function post({ url, body }: any) {
  console.log("entrou");

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((json) => {
      //const json = json.json();
      console.error(json);
      return json;
    })
    .catch((error) => {
      console.error(error);
    });

  //const json = response.json();
  //return json;
}
