/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
    colors: {
      cta: "var(--cta)",
      ctaHoverBackground: "var(--cta-hover-background)",
      headings: "var(--headings)",
      white: "var(--white)",
      footerText: "var(--footer)",
      bodyCopy: "var(--body-copy)",
      footerBackground: "var(--footer-background)",
      gradientHeroLightRed: "var(--gradient-very-light-red)",
      gradientHeroRed: "var(--gradient-light-red)",
      gradientDarkFeatures: "var(--gradient-dark-gray-blue)",
      gradientLightFeatures: "var(--gradient-dark-desaturated-blue)",
      mobileDropdownBackground: "var(--mobile-dropdown-background)",
    },
    fontFamily: {
      overpass: ["Overpass"],
      ubuntu: ["Ubuntu"],
    },
    extend: {
      backgroundImage: {
        logo: "url('./src/assets/logo.svg')",
        hero: "url('./src/assets/bg-pattern-intro-desktop.svg')",
        introducing: "url('src/assets/illustration-editor-desktop.svg')",
        whiteArrow: "url('./src/assets/icon-arrow-light.svg')",
      },
    },
  },
  plugins: [],
};
