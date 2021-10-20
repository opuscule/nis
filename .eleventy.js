module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('/src/css/styles.css');
	eleventyConfig.addPassthroughCopy('/src/images');
	eleventyConfig.addPassthroughCopy('/src/js');
	eleventyConfig.addPassthroughCopy('/src/_redirects');
	return {
		dir: {
			input:"src",
			output:"public"
		},
		passthroughFileCopy: true
	};	
}