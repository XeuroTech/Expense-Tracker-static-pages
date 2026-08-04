import { createTheme } from '@mui/material/styles';

// Central design tokens for the landing page, mirrored from the mobile app's
// own design system (frontend/constants/Colors.ts) so the site feels like an
// extension of the app itself: coral-red + near-black as the major colors.
export const palette = {
  primary: '#FF6B6B', // vibrant coral-red - matches the app's primary color
  primaryDark: '#E14D4D',
  secondary: '#4ECDC4', // soft teal - matches the app's secondary accent
  secondaryDark: '#3BA89F',
  darkBg: '#0A0A0A', // near-black used in hero / footer gradients
  darkBg2: '#241414', // black blending into a deep red-black tone
};

const theme = createTheme({
  palette: {
    mode: 'dark',
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
    success: {
      main: '#2ECC71',
    },
    error: {
      main: '#FF4757',
    },
    warning: {
      main: '#FFA502',
    },
    background: {
      default: '#121212', // deep dark, matches the app's background
      paper: '#1E1E1E', // matches the app's card/surface color
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0A0A0',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
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
    '0 2px 8px rgba(0, 0, 0, 0.06)',
    '0 4px 12px rgba(0, 0, 0, 0.08)',
    '0 6px 16px rgba(0, 0, 0, 0.08)',
    '0 8px 20px rgba(0, 0, 0, 0.10)',
    '0 10px 24px rgba(0, 0, 0, 0.10)',
    '0 12px 28px rgba(0, 0, 0, 0.12)',
    '0 14px 32px rgba(0, 0, 0, 0.12)',
    '0 16px 36px rgba(0, 0, 0, 0.14)',
    '0 18px 40px rgba(0, 0, 0, 0.14)',
    '0 20px 44px rgba(0, 0, 0, 0.16)',
    '0 22px 48px rgba(0, 0, 0, 0.16)',
    '0 24px 52px rgba(0, 0, 0, 0.18)',
    '0 26px 56px rgba(0, 0, 0, 0.18)',
    '0 28px 60px rgba(0, 0, 0, 0.20)',
    '0 30px 64px rgba(0, 0, 0, 0.20)',
    '0 32px 68px rgba(0, 0, 0, 0.20)',
    '0 34px 72px rgba(0, 0, 0, 0.22)',
    '0 36px 76px rgba(0, 0, 0, 0.22)',
    '0 38px 80px rgba(0, 0, 0, 0.22)',
    '0 40px 84px rgba(0, 0, 0, 0.24)',
    '0 42px 88px rgba(0, 0, 0, 0.24)',
    '0 44px 92px rgba(0, 0, 0, 0.24)',
    '0 46px 96px rgba(0, 0, 0, 0.26)',
    '0 48px 100px rgba(0, 0, 0, 0.26)',
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
          // Flat, solid coral-red — matches the app's actual Button.tsx exactly
          // (the app uses a flat COLORS.primary fill, not a gradient).
          backgroundColor: palette.primary,
          backgroundImage: 'none',
          boxShadow: '0 8px 24px rgba(255, 107, 107, 0.35)',
          '&:hover': {
            backgroundColor: palette.primaryDark,
            boxShadow: '0 10px 30px rgba(255, 107, 107, 0.45)',
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
