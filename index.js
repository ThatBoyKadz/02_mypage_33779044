var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  
  // Simple HTML content about me
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>About Me</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            margin: 50px;
          }
          .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h1 {
            color: rgba(221, 59, 59, 1);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Hello, I'm Danny Kadir</h1>
          <p>Welcome to my personal web page!</p>
          <p>I’m a web enthusiast who enjoys learning about coding, technology, and creative projects.</p>
          <p>Here’s a little about me:</p>
          <ul>
            <li><strong>Hobbies:</strong> Reading, gaming, coding</li>
            <li><strong>Skills:</strong> JavaScript, HTML, Python</li>
            <li><strong>Goal:</strong> To become a full-stack developer</li>
          </ul>
        </div>
      </body>
    </html>
  `;
  
  res.end(html);
}).listen(port, function() {
  console.log(`Node server is running on port ${port}...`);
});
