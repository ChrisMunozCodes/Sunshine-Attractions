module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    screens: {
      '812breakpoint': '812px',
    },
    extend: {
      colors: {
        text: '#0a0600',
        background: '#ffffff',
        primaryButton: '#fca92c',
        secondaryButton: '#fee4be',
        accent: '#fcb345',
        grayBackdrop: 'rgba(129, 129, 129, 0.5)',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  variants: {},
};
