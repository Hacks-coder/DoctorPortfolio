import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			base: '#070E28',
			primary: '#0B1432',
			aqua: '#14B8A6',
			purple: '#8979FF',
			dark_aqua: '#14B8A6',
			white: '#FFFFFF',
			pink: '#F19F9F',
		},
		fontFamily: {
			krona: ['Krona One'],
			main: ['Kay Pho Du'],
			rare: ['Lemonada Variable'],
			rarer: ['Sacramento'],
		},
		extend: {
			fontSize: {
				'8xl': '4rem',
			},
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
