/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'100': '#DBFEB8',
  				DEFAULT: 'hsl(var(--primary))',
  				main: '#4F46E5',
  				light: '#E2FFF5',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
        secondary: {
					DEFAULT: '#F9FAF3',
					main: '#F9FAF3'
				},
				status: {
					success: '#1FBB82',
					pending: {
						yellow: '',
						red: '#FF5A5A'
					},
				},
				light: {
					'100': '#E6EDCE',
					'200': '#4B5563',
					'300': '#1F2937',
				},  	
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  		},
      screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}