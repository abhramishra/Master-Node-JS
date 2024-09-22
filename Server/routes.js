const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write(
      '<form action="/message" method="POST"><input type="text"></input><button type="submit">Send</button</form>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("Hi");
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      fs.writeFileSync("abhra.txt", "Hi Abhra");
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.write("<h1>Msg</h1>");
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Home Page</h1>");
  res.end();
};

module.exports = requestHandler
// exports.handler = requestHandler;