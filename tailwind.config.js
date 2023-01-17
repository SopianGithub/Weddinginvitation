const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                'kurale': ['"Kurale"', '"serif"'],
                'alice' : ['"Alice"', '"serif"'],
                'dancing-script': '"Dancing Script"',
                'lobster' : '"Lobster"',
                'great-vibes' : '"Great Vibes"',
                'marck-script' : '"Marck Script"',
                'tangerine' : '"Tangerine"',
                'amiri-quran' : '"Amiri Quran"',
                'berkshire-swash' : '"Berkshire Swash"',
                'aladin' : '"Aladin"',
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require("daisyui")],
};
