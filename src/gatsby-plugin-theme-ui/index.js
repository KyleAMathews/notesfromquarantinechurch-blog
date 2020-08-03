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

export default {
  ...baseStyles,
  fonts: {
    ...baseStyles.fonts,
  },
  styles: {
    ...baseStyles.styles,
  },
}
