/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '2rem', // You can adjust the padding as needed
            },
            spacing: {
                '8': '2rem', // You can adjust the spacing as needed
            },
        },
    },
    plugins: [require('daisyui')],
};
