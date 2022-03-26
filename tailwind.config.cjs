const config = {
    mode: 'jit',
    content: ['./src/**/*.svelte'],

    theme: {
        extend: {},
    },

    plugins: [require('daisyui')],
    daisyui: {
        themes: ['dark', 'acid'],
    },
};

module.exports = config;
