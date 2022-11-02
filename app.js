/*
 * File: c:\Users\jsolomon11\JBS\Courses\SSD\Intake28\Node\Assignments\Solutions\Node-A01-GitToNodeYou\SSD28-A01-GitToNodeYou\index.js
 * Created Date: Friday, October 28th 2022, 11:56:34 am
 * Author: Josh Solomon
 * Copyright (c) 2022 Josh Solomon
 */

// Set strict mode
"use strict";

// * Load the core HTTP module so that we can create a server
const http = require("http")
// * Load the file helper functions with object destructuring from utils
const utils = require("./utils/fileHelper")
// hostname and port are needed in order for the http server to listen for requests
// * declare variables for these using 127.0.0.1 for hostname
const hostname = "127.0.0.1";
const port = 3000;
// * process.env.PORT will be defined by some hosts.  If undefined, use 3000.

// Initialize our server
const server = http.createServer((req, res) => {
  // branch based on the URL of the request
  switch (req.url) {
    // Home page
    // * Add a case that responds to / which sends "Hello Node Server" with a 200
    case ("/"):
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Git to node you");
      break;
    // Profiles Listing Page
    // * Add a case that responds to /profiles which sends "Profiles List" with a 200
    case ("/profiles"):
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Profiles List");
      break;
    //   Individual Profile
    case "/profiles/kriti":
      console.log("kriti is here.  Loading profile...");
      loadProfile(req, res);
      break;
    case "/profiles/sara":
      console.log("kriti is here.  Loading profile...");
      loadProfile(req, res);
      break;
    case "/profiles/ceilidh":
      console.log("kriti is here.  Loading profile...");
      loadProfile(req, res);
      break;
    /* Add in a cases pointing at your personal profiles below */

    //   Unhandled URL
    default:
      // Handle static requests
      const validStaticTypes = ["images", "styles", "scripts"];
      const pathSegments = req.url.split("/");
      if (validStaticTypes.includes(pathSegments[3])) {
        loadStatic(req, res);
      } else {
        // * set statusCode to 404
        // * use res.setHeader to specify "Content-Type", "text/html"
        // * send "File not found"
        res.statusCode(404);
        res.setHeader("Content-Type", "text/plain");
        res.end("File not found :(")
      }
  }
});

// * Set the HTTP server to listen on port, hostname as declared above
// * Within the callback console.log  `Server running at http://${hostname}:${port}/`
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});