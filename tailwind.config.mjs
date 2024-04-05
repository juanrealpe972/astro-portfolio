/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bluedev:"#1E2530",
				bluedev1:"#22262F",
				bluedev2:"#272B36",
				bluedev3:"#2D3037",
				orangedev:"#E95E30",
				orangedev1:"#F57148",
				whitedev:"#FCFBFA",
				dark: "#242422",
				light: "#FDFBF6",
				blue: "#33d2ff",
				gray: {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#4b5563",
					700: "#374151",
					800: "#1f2937",
					900: "#111827",
					950: "#030712",
				},
			}
		},
		plugins: []
	}
}
