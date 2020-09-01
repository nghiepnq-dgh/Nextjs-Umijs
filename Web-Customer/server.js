/porta* eslint-disable no-undef */;
require("dotenv").config();
const express = require("express");
const next = require("next");
const { parse } = require("url");

const nextI18NextMiddleware = require("next-i18next/middleware").default;
var path = require("path");
const fs = require("fs");
const nextI18next = require("./i18n");
const cookieParser = require("cookie-parser");
const port = parseInt(process.env.APP_PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const { promisify } = require("util");
const handle = app.getRequestHandler();
const readFileAsync = pm2(fs.readFile)(async () => {
  await app.prepare();
  const server = express();

  server.use(cookieParser());

  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    return handle(req, res, parsedUrl);
  });

  server.get("/dashboard", async (req, res) => {
    const file = await readFileAsync("public/admin/index.html");
    res.end(file);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
