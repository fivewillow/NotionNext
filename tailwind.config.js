const BLOG = require('./blog.config')
const { fontFamilies } = require('./lib/font')

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './themes/**/*.js'],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '400',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900'
    },
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#111827'
        },
        hexo: {
          'background-gray': '#f5f5f5',
          'black-gray': '#101414',
          'light-gray': '#e5e5e5'
        }
      },
      maxWidth: {
        side: '14rem',
        '9/10': '90%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
