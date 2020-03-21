class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

module.exports = {    
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }), 
    require('tailwindcss')('./themes/pejtheme/assets/css/tailwind.js'),    
    require('autoprefixer')({
      grid: true,
      browsers: ['>1%']
    }),    
  ]
}