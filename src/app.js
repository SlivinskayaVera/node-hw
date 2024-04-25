const http = require("http");
const getUsers = require("./modules/users");

const ipAddress = "http://127.0.0.1";
const port = 3003;
const server = http.createServer((request, response) => {
  const url = new URL(request.url, ipAddress);
  const userName = url.searchParams.get("hello");

  if (request.url === "/?users") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();

    return;
  }

  if (userName) {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write(`Hello, ${userName}`);
    response.end();

    return;
  }

  if (request.url === "/?hello") {
    response.status = 400;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Enter a name");
    response.end();

    return;
  }

  response.status = 200;
  response.statusMessage = "OK";
  response.header = "Content-Type: text/plain";
  response.write("Hello world!");
  response.end();
});
server.listen(port, () => {
  console.log(`Сервер запущен по адресу http://127.0.0.1:${3003}`);
});
