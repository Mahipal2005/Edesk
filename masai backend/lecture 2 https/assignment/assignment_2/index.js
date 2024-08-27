const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 8000;
const server = http.createServer((req, res) => {
  const reqPath = path.join(__dirname, decodeURIComponent(req.url));
  fs.stat(reqPath, (err, data) => {
    if (err) {
      res.end("File not found");
      return;
    }
    if (data.isDirectory()) {
      fs.readdir(reqPath, (err, files) => {
        if (err) {
          res.end("File not found");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        files.forEach((file,i) => {
          const filePath = path.join(reqPath, file);
          fs.stat(filePath, (err, stats) => {
            if (err) {
              res.write(`<li> ${file}</li>`);
            } else {
              const icon = stats.isDirectory() ? "📁" : "📄";
              res.write(
                `<li>${icon} <a href="${path.join(
                  req.url,
                  file
                )}">${file}</a></li>`
              );
            }
            if (i === files.length - 1) {
              res.end("</ul>");
            }
          });
        });
      });
    } else {
      fs.readFile(reqPath, (err, data) => {
        if (err) {
          res.end("File not found");
          return;
        } else {
          res.end(data);
        }
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
