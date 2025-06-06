module.exports = {
  // Explizite Plugin-Liste OHNE @semantic-release/npm
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};