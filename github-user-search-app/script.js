import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const octokit = new Octokit({
  auth: "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",
});

await octokit
  .request("GET /users/{username}/hovercard", {
    username: "TEKAC",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {});

// 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
