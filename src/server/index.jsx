import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "../src/App";
import { mediaStyle } from "../src/media/breakpoints";

import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const html = `
        <html lang="en">
        <head>
        <title>Fresnel SSR example</title>
        <style type="text/css">${mediaStyle}</style>
        <link rel="stylesheet" href="app.css">
        <script src="app.js" async defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `;
  res.send(html);
});

app.use(express.static("./built"));

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});