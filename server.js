const https = require('https');
const fs = require('fs');
const next = require('next');
const { createServer } = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('/kce.key'),
  cert: fs.readFileSync('/cert.crt'),
};

app.prepare().then(() => {
  createServer((req, res) => {
    res.writeHead(301, {
      Location: `https://${req.headers.host}${req.url}`,
    });
    res.end();
  }).listen(80);

  https.createServer(httpsOptions, (req, res) => {
    handle(req, res);
  }).listen(443, (err) => {
    if (err) throw err;
    console.log('> Ready on https://localhost:443');
  });
});
