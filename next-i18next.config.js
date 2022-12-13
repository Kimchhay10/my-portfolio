// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'km'],
  },
  localePath: path.resolve('./public/locales'),
  react: { useSuspense: false }, // https://stackoverflow.com/questions/67894982/react-i18next-you-will-need-to-pass-in-an-i18next-instance-by-using-initreacti
}
