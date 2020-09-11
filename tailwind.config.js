module.exports = {
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
};
