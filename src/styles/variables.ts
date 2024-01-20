const usedColors = {
  blue1: '#C7EDE6',
  blue2: '#4792DD',
  blue3: '#88BBED',
  blue4: '#C5DEF0',
  blue5: '#1E65D6',
  white1: '#FFFFFF',
  white2: '#FDFCEF',
  white3: '#EDECE6',
  black1: '#472B29',
}

export const baseTheme = {
  usedColors: { ...usedColors },
  font: ['Poppins'],
  fontSize: {
    sm: '12px',
    m: '14px',
    l: '16px',
    xl: '18px',
    xxl: '20px',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  defaultTransition: 'all 0.3s ease',
  defaultTransform: 'scale(0.95)',
}
