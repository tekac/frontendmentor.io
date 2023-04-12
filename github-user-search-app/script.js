import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const octokit = new Octokit({
    auth: "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",
});

async function getUserHovercard(username) {
    try {
        const result = await octokit.request("GET /users/{username}/hovercard", {
            username,
        });
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

getUserHovercard("TEKAC");
