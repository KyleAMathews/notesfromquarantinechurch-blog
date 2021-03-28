import { tailwind as baserStyles } from "@theme-ui/presets"
import { toTheme } from "@theme-ui/typography"

const stuff = toTheme({
  baseFontSize: 16,
  baseLineHeight: 1.5,
  blockMarginBottom: 0.8,
  scaleRatio: 2.25,
  bodyFontFamily: ["arvo", "sans-serif"],
  headerFontFamily: ["montserrat", "sans-serif"],
})

let baseStyles = { ...baserStyles, ...stuff }
baseStyles.styles.blockquote = {
  margin: 0,
  // ml: 2,
  pl: 2,
  borderLeft: `9.5px solid lightgray`,
}

export default {
  ...baseStyles,
  fonts: {
    ...baseStyles.fonts,
  },
  styles: {
    ...baseStyles.styles,
    "code, kbd, samp": {
      fontFamily: `'arvo',sans-serif`,
    },
  },
}
