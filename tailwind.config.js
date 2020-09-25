const theme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');

//const colorBrand = 'var(--color-pretty)';

// Utils
const round = (num) => num.toFixed(7).replace(/(\.[0-9]+?)0+$/, '$1').replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

module.exports = {
	important: true, // See https://tailwindcss.com/docs/configuration#important
	experimental: {
		// See https://github.com/tailwindlabs/tailwindcss/pull/2159
		applyComplexClasses: true
	},
	theme: {
		extend: {
		  colors: {
			pejGreen: "#008060",
			pejRed: "#ED1C24"
		  }
		},
	  },
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'production',
		content: [ './hugo_stats.json' ],
		options: {
			//whitelist: [ 'pl-1', 'pl-3' ],
			defaultExtractor: (content) => {
				let els = JSON.parse(content).htmlElements;
				els = els.tags.concat(els.classes, els.ids);
				return els;
			}
		}
	},
	plugins: [ typography ]
};