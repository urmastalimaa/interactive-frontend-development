module.exports = {
  require: [
    "@babel/register",
    "global-jsdom/register",
    "test/UseSinonChai.js",
    "test/Cleanup.js",
  ],
  recursive: true,
};
