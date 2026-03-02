const http = require("http");

const handleAllRequests = (requestObject, responseObject) => {
  const url = requestObject.url;
  if (url === "/") {
    responseObject.writeHead(200, { "Content-Type": "text/plain" });
    responseObject.end("Welcome to my server");
  } else if (url === "/about") {
    responseObject.writeHead(200, { "Content-Type": "text/plain" });
    responseObject.end("About us");
  } else if (url === "/contact") {
    responseObject.writeHead(200, { "Content-Type": "text/plain" });
    responseObject.end("Contact us");
  } else if (url === "/time") {
    responseObject.writeHead(200, { "Content-Type": "text/plain" });
    responseObject.end(new Date().toString());
  } else if (url === "/api/student") {
    const member = {
      name: "Bless Kojo Dandzo",
      course: "Node js",
      week: 1,
    };

    responseObject.writeHead(200, {
      "Content-Type": "application/json",
    });

    responseObject.end(JSON.stringify(member));
  } else {
    responseObject.writeHead(404, { "Content-Type": "text/plain" });
    responseObject.end("404 - PAGE NOT FOUND");
  }
};

const server = http.createServer(handleAllRequests);

server.listen(7000, "127.0.0.1", () => {
  console.log("My is listening on PORT 7000, and IP: 127.0.0.1");
});
