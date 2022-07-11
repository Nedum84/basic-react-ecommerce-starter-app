1.  `yarn add --dev tailwindcss postcss autoprefixer`
2.  `npx tailwindcss init -p`
3.  replace `tailwind.config.js` with
    `module.exports = { content: [ "./src/**/*.{js,jsx,ts,tsx}", ], theme: { extend: {}, }, plugins: [], }`
4.  Add the following Tailwind CSS directives into file `index.css`:

@tailwind base;
@tailwind components;
@tailwind utilities;

5. do on App.js `import "./index.css";`
