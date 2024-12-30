/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {},
			fontWeight: {},
			backgroundColor: {},
			textColor: {},
		},
		keyframes: {
			meteor: {
				"0%": {
					transform: "translateX(200%) translateY(-200%)",
					opacity: 0,
				},
				"10%": {
					opacity: 1,
				},
				"90%": {
					opacity: 1,
				},
				"100%": {
					transform: "translateX(-200%) translateY(200%)",
					opacity: 0,
				},
			},
			meteorGlow: {
				"0%": {
					filter: "drop-shadow(0 0 20px rgba(35, 247, 219, 0.3))",
				},
				"50%": {
					filter: "drop-shadow(0 0 40px rgba(35, 247, 219, 0.6))",
				},
				"100%": {
					filter: "drop-shadow(0 0 20px rgba(35, 247, 219, 0.3))",
				},
			},
		},
		animation: {
			meteor: "meteor 5s linear infinite",
			"meteor-glow": "meteorGlow 2s ease-in-out infinite",
		},
	},
	plugins: [],
};
