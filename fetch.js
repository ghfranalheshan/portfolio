const fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

// ---------------- GitHub Profile Fetch ----------------
if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  const data = JSON.stringify({
    query: `
    {
      user(login:"${GITHUB_USERNAME}") { 
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
    `
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(options, res => {
    let profileData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailed);
    }

    res.on("data", d => {
      profileData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/profile.json", profileData, err => {
        if (err) return console.log(err);
        console.log("saved file to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.write(data);
  req.end();
}

// ---------------- Medium Blogs Fetch (Safe) ----------------
if (MEDIUM_USERNAME) {
  try {
    console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
    const options = {
      hostname: "api.rss2json.com",
      path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
      port: 443,
      method: "GET"
    };

    const req = https.request(options, res => {
      let mediumData = "";

      console.log(`statusCode: ${res.statusCode}`);
      if (res.statusCode !== 200) {
        console.warn(
          `Medium fetch failed with status ${res.statusCode}, skipping blogs`
        );
        return; // skip if error
      }

      res.on("data", d => {
        mediumData += d;
      });
      res.on("end", () => {
        fs.writeFile("./public/blogs.json", mediumData, err => {
          if (err) return console.log(err);
          console.log("saved file to public/blogs.json");
        });
      });
    });

    req.on("error", error => {
      console.warn("Medium fetch request error, skipping blogs", error);
    });

    req.end();
  } catch (err) {
    console.warn("Medium fetch failed, skipping blogs", err);
  }
}
