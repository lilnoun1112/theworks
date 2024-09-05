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

  eleventyConfig.addCollection("publications", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
      return new Date(b.date) - new Date(a.date);  // Sort by date, most recent first
    });
  });

  eleventyConfig.addCollection("recentPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => b.date - a.date) // Sort by date, newest first
      .slice(0, 3); // Get only the 3 most recent posts
  });
  

  eleventyConfig.addCollection("team", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/team/*.md"); // Adjust the path as needed
  });


    return {
        dir: {
          input: "src",
          output: "public"
        }
      };
}