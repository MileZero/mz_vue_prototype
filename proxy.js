'use strict';
const http = require('http'),
    httpProxy = require('http-proxy');

let proxiedCookie = '';

const proxy = httpProxy.createProxyServer({
     target: "https://milevision-stage.milezero.com",
     headers: {
         host: 'milevision-stage.milezero.com'
     },
    ws: true,
    secure: false,
    changeOrigin: true,
}).on('proxyReq', function (proxyReq, req, res) {
    if (proxiedCookie) {
      proxyReq.setHeader('cookie', proxiedCookie);
    }
}).on('proxyRes', function (proxyRes, req, res) {
    proxyRes.headers["Access-Control-Allow-Origin"] = req.headers.origin;
    proxiedCookie = proxyRes.headers['set-cookie'][1];
    if (proxiedCookie && proxiedCookie.includes('mz_auth_token') && proxiedCookie.includes(' secure;')) {
      proxyRes.headers['set-cookie'][1] = proxiedCookie.split(' secure;').join('');
    }
}).on('error', function (e) {
    console.error("Proxy encountered error: " + e);
});

http.createServer(function (req, res) {
    console.log("HTTP/" + req.httpVersion + " " + req.method + " " + req.url);
    if (req.method === "OPTIONS") {
        res.writeHead(200, {
            "Access-Control-Allow-Origin": req.headers.origin,
            "Access-Control-Allow-Headers": req.headers["access-control-request-headers"],
            "Access-Control-Allow-Methods": req.headers["access-control-allow-methods"]
        });
        res.end();
    } else if (req.url.startsWith('/mvb-svc/api/milevision')) {
        proxy.web(req, res, {target: 'https://milevision-stage.milezero.com'});
    } else if (req.url.startsWith('/mvb-svc/api/websocket')) {
        proxy.ws(req, res, {target: 'wss://milevision-stage.milezero.com'});
    } else if (req.url.startsWith('/mv')) {
        proxy.web(req, res, {target: 'https://view.stage.milezero.com/mv/'});
    }
    // } else {
        // proxy.web(req, res, {target: 'https://milevision-stage.milezero.com'});
    // }
}).on('upgrade', function (req, socket, head) {
    console.log("HTTP/" + req.httpVersion + " " + req.method + " " + req.url);
    proxy.ws(req, socket, head, {target: 'wss://milevision-stage.milezero.com'});
}).on('error', function (e) {
    console.error("Proxy encountered error: " + e);
}).listen(3001);