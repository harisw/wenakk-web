/** @type {import('prettier').Config} */
export default {
  tabWidth: 2,
  singleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
  // tailwindcss
  tailwindAttributes: ["theme"],
  tailwindFunctions: ["twMerge", "createTheme"],
};
