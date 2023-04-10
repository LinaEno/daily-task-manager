export const theme = {
  fontSizes: {
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '25px',
    xxl: '45px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 0px 10px 1px #b9b8b8',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
};

//box-shadow: ${({ theme }) => theme.shadows.regular};
//   background: ${({ theme }) => theme.bgcButton};
// padding-top: ${({ theme }) => theme.spacing(5)};
//   padding-bottom: ${({ theme }) => theme.spacing(5)};
//   border-bottom: 2px solid ${({ theme }) => theme.text};
