/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                DG: '#263800',
                LG: '#46620B',
                NG: '#05A801',
                AM: '#ECBD00',
                PYL: '#FFFBE5',
                PWL: '#FFFCEC',
            },
        },
    },
    plugins: [],
}

