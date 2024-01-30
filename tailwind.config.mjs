/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class", '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: "#111111",
				light: "#FFFFFF",
				blue: "#33d2ff",
				gray: "#C4C4C4",
				"dark-gray": "#1A1A1A",
			}
		},
	},
	plugins: [],
}
