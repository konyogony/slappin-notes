import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
    darkMode: 'class',
    theme: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                gray: {
                    ...colors.zinc,
                    500: '#30363d',
                    600: '#252A35',
                    700: '#161b22',
                    800: '#0d1117',
                },
            },
            height: {
                '2/12': '16.6666667%',
                '5/12': '41.6666667%',
            },
            gridTemplateColumns: {
                '20': 'repeat(20, minmax(0, 1fr))',
            },
            animation: {
                enter: 'enter .2s ease-out',
                leave: 'leave .15s ease-in forwards',
            },
            keyframes: {
                enter: {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(.9)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                },
                leave: {
                    '0%': {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'scale(.9)',
                    },
                },
            },
        },
    },
    content: ['./src/**/*.tsx', 'node_modules/flowbite-react/lib/esm/**/*.js'],
    plugins: [],
} satisfies Config;
