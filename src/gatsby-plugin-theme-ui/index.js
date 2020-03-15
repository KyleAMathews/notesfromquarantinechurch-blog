import { tailwind as baseStyles } from "@theme-ui/presets"

// console.log({ baseStyles })

export default {
  ...baseStyles,
  fonts: {
    ...baseStyles.fonts,
    body: "arvo, sans-serif",
    heading: "montserrat,sans-serif",
  },
  styles: {
    ...baseStyles.styles,
  },
}
