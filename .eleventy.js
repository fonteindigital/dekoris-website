module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");

  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/products/*.md").sort((a, b) => {
      return (a.data.order || 10) - (b.data.order || 10);
    });
  });

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/blog/*.md").sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  eleventyConfig.addCollection("gallery", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/gallery/*.md");
  });

  eleventyConfig.addCollection("faqs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/faqs/*.md").sort((a, b) => {
      return (a.data.order || 10) - (b.data.order || 10);
    });
  });

  eleventyConfig.addFilter("getFeatured", function(posts) {
    return (posts || []).find(function(p) { return p.data && p.data.featured; });
  });

  eleventyConfig.addFilter("slug", function(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  });

  eleventyConfig.addFilter("commaNumber", function(num) {
    return Number(num).toLocaleString();
  });

  eleventyConfig.addFilter("date", function(value, format) {
    const d = (value instanceof Date) ? value : new Date(value);
    if (isNaN(d.getTime())) return "";
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    if (format === "MMMM YYYY") return months[d.getMonth()] + " " + d.getFullYear();
    if (format === "MMM YYYY") return months[d.getMonth()].slice(0,3) + " " + d.getFullYear();
    if (format === "YYYY-MM-DD") return d.toISOString().slice(0,10);
    return d.toDateString();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
