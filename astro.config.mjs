// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	outDir: "docs", // Github pages requires this directory
	integrations: [
		starlight({
			title: 'Rocket Handbook 🎉',
			description: 'A starter template for creating an organization handbook',
			social: {
				github: 'https://github.com/saurabhnemade/organization-handbook-starter',
			},
			sidebar: [
				{
					label: 'Guideline',
					autogenerate: { directory: 'guidelines' },
				},
				{
					label: 'how-to',
					autogenerate: { directory: 'how-to' },
				},
				{
					label: 'What to use?',
					items: [
						{ label: 'Tools', slug: 'tools' },
					]
				}
			],
		}),
	],
});
