/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050505',
                foreground: '#ffffff',
                muted: '#a1a1aa',
                primary: {
                    DEFAULT: '#6366f1',
                    hover: '#4f46e5',
                },
                accent: '#ec4899',
                border: 'rgba(255, 255, 255, 0.1)',
                'glass-bg': 'rgba(255, 255, 255, 0.03)',
                'glass-border': 'rgba(255, 255, 255, 0.08)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            animation: {
                shrink: 'growBar 1.5s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1.5s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'float-reverse': 'float 8s ease-in-out infinite reverse',
            },
            keyframes: {
                slideUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                growBar: {
                    from: { transform: 'scaleY(0)' },
                    to: { transform: 'scaleY(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                }
            }
        },
    },
    plugins: [],
}
