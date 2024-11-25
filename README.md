# Azure Dive Resort 2024

[View Website](https://azurediveresort.com/)<br />
[View Preview](https://azure-dive-resort-2024.vercel.app/)

Designed by: [Razel Tan](https://razeltan.webflow.io) and Taffi Ong<br />
Developed by: [Emman Evangelista](https://emmanevangelista.com)<br />

# How to deploy to WordPress

## Exporting

1. Open the original NextJS codebase
2. Export static files using `npm run build`
3. Export Tailwind classes using `npm run build:css`

## Creating theme

1. Open the WordPress theme folder
2. Delete all files except for the following:
  - `/.vscode`
  - `/default`
  - `.gitignore`
  - `functions.php`
  - `README.md`
  - `style.css`
3. Copy the generated `tailwind-output.css` into the `/default` folder
4. Copy all files inside the generated `/build` folder into the theme folder
5. Rename all `html` files to `php`
6. Except for the files `404.php` and `index.php`, add the `page-` prefix to all `php` files
7. Replace all instances of `(--font-kelvinch)` to `(--font-kelvinch-final)`
8. Add `<?php wp_head() ?>` before `</head>` for all `php` files
9. Bump version in `style.css` as needed

## Uploading

- Upload the zipped theme folder (excluding the `.git` folder) to WordPress, or
- Use a plugin to pull from this public repository
