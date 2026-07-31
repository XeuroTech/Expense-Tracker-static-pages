import { createTheme } from '@mui/material/styles';

// Central design tokens for the landing page. Swap these values to re-skin
// the whole site without touching any component.
export const palette = {
  primary: '#5B5BF6', // indigo/violet - primary brand color
  primaryDark: '#3730E0',
  secondary: '#10B981', // emerald - "money/growth" accent
  secondaryDark: '#059669',
  darkBg: '#0B0B1E', // deep navy used in hero / footer gradients
  darkBg2: '#171742',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: palette.primary,
      dark: palette.primaryDark,
      contrastText: '#ffffff',
    },
    secondary: {
      main: palette.secondary,
      dark: palette.secondaryDark,
      contrastText: '#ffffff',
    },
    background: {
      default: '#FAFAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#171733',
      secondary: '#5C5C77',
    },
    divider: 'rgba(23, 23, 51, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0 2px 8px rgba(23, 23, 51, 0.06)',
    '0 4px 12px rgba(23, 23, 51, 0.08)',
    '0 6px 16px rgba(23, 23, 51, 0.08)',
    '0 8px 20px rgba(23, 23, 51, 0.10)',
    '0 10px 24px rgba(23, 23, 51, 0.10)',
    '0 12px 28px rgba(23, 23, 51, 0.12)',
    '0 14px 32px rgba(23, 23, 51, 0.12)',
    '0 16px 36px rgba(23, 23, 51, 0.14)',
    '0 18px 40px rgba(23, 23, 51, 0.14)',
    '0 20px 44px rgba(23, 23, 51, 0.16)',
    '0 22px 48px rgba(23, 23, 51, 0.16)',
    '0 24px 52px rgba(23, 23, 51, 0.18)',
    '0 26px 56px rgba(23, 23, 51, 0.18)',
    '0 28px 60px rgba(23, 23, 51, 0.20)',
    '0 30px 64px rgba(23, 23, 51, 0.20)',
    '0 32px 68px rgba(23, 23, 51, 0.20)',
    '0 34px 72px rgba(23, 23, 51, 0.22)',
    '0 36px 76px rgba(23, 23, 51, 0.22)',
    '0 38px 80px rgba(23, 23, 51, 0.22)',
    '0 40px 84px rgba(23, 23, 51, 0.24)',
    '0 42px 88px rgba(23, 23, 51, 0.24)',
    '0 44px 92px rgba(23, 23, 51, 0.24)',
    '0 46px 96px rgba(23, 23, 51, 0.26)',
    '0 48px 100px rgba(23, 23, 51, 0.26)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 10,
          paddingBottom: 10,
        },
        containedPrimary: {
          backgroundImage: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.primaryDark} 100%)`,
          boxShadow: '0 8px 24px rgba(91, 91, 246, 0.35)',
          '&:hover': {
            boxShadow: '0 10px 30px rgba(91, 91, 246, 0.45)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
