module.exports = function(eleventyConfig) {

  // As a workaround uncomment the next line for eleventy 0.3.4 and higher
  // eleventyConfig.addPassthroughCopy('src/js');

  // In eleventy < 0.3.4 the "js" templateFormat passthrough file copy would copy
  // the src/js/*.js files to the buidl directory
  return {
    templateFormats: ["css", "njk", "js"],
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "build"
    }
  };
};
