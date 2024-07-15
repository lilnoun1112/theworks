module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/styles.css');
  eleventyConfig.addPassthroughCopy('./src/hamburgers.css');
  eleventyConfig.addPassthroughCopy('./src/normalize.css');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./static');

  eleventyConfig.addCollection("featured", function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      return item.data.featured === true;
    });
  });


    return {
        dir: {
          input: "src",
          output: "public"
        }
      };
}