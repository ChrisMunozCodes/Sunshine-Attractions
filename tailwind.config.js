module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        text: '#0a0600',
        background: '#ffffff',
        primaryButton: '#fca92c',
        secondaryButton: '#fee4be',
        accent: '#fcb345',
        grayBackdrop: 'rgba(129, 129, 129, 0.5)',
      },
    },
  },
  purge: {
    enabled: true,
  },
  plugins: [require("daisyui")],
}