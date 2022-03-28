const config = {
    mode: 'jit',
    content: ['./src/**/*.svelte'],

    theme: {
        extend: {},
    },

    plugins: [require('daisyui')],
    daisyui: {
        themes: ['night', 'acid'],
    },
};

module.exports = config;
