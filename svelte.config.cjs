const sveltePreprocess = require('svelte-preprocess');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const prepros = (isDev = false) => {
    return sveltePreprocess({
        soursMap: isDev,
        postcss: {
            plugins: [tailwindcss(), autoprefixer],
        },
    });
};

module.exports = {
    preprocess: prepros(true),
    prepros,
};
