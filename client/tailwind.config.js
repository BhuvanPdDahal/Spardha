/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                "20px": "20px",
                "50px": "50px",
                "70px": "70px",
                "100px": "100px",
                "150px": "150px",
                "200px": "250px",
            },
            colors: {
                "lightgrey": "#eee",
                "grey": "#ccc",
                "darkgrey": "#aaa",
                "medium": "#999",
                "normal": "#555",
                "dark": "#21232e",
                "lightdark": "#404457",
                "primary": "#3d4673",
                "primarydark": "#2b3252",
                "secondary": "#f5793b",
                "dim": "rgba(255, 255, 255, 0.2)"
            },
            boxShadow: {
                "card": "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                "board": "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
            }
        },
    },
    plugins: [],
}