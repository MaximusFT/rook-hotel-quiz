// Quiz 4
function quizVerThreeFour(recipe) {
  var server_echo;
  var json = {
    json: JSON.stringify({
      a: 1,
      b: 2
    }),
    delay: 3
  };
  fetch("/echo/", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body:
      "json=" +
      encodeURIComponent(JSON.stringify(json.json)) +
      "&delay=" +
      json.delay
  })
    .then(function (response) {
      // Here strange param 'echo'... maybe some something came from server
      server_echo = response.json().echo;
      return response.json();
    })
    .then(function (result) {
      alert(result);
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
  // Line called before Fetch compleated work (async/await or move to second "than")
  // Cannot read properties of undefined (reading 'forEach')
  server_echo.forEach((element) => console.log(element));
}