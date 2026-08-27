'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Reveal from '../common/Reveal';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../../config/appLinks';

export default function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(160deg, #0A0A0A 0%, #170D0D 55%, #241414 100%)',
        display: 'flex',
        alignItems: 'center',
        // At least one screen tall (minus the navbar) so the hero reads as
        // a full "first screen" on load; it can still grow taller than that
        // on small phones so nothing gets clipped.
        minHeight: { xs: 'calc(100svh - 76px)', sm: 'calc(100svh - 84px)' },
        py: { xs: 5, md: 4 },
      }}
    >
      {/* Decorative gradient blobs */}
      <Box
        sx={{
          position: 'absolute',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,107,0.45) 0%, rgba(255,107,107,0) 70%)',
          top: -140,
          right: -100,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(78,205,196,0.35) 0%, rgba(78,205,196,0) 70%)',
          bottom: -160,
          left: -120,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 5, md: 4 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Stack
                direction="row"
                spacing={0.75}
                sx={{
                  alignItems: 'center',
                  width: 'fit-content',
                  mb: 2,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 10,
                  border: '1px solid rgba(255,138,138,0.35)',
                  bgcolor: 'rgba(255,107,107,0.08)',
                }}
              >
                <AutoAwesomeRoundedIcon sx={{ fontSize: '1rem', color: '#FF8A8A' }} />
                <Typography variant="body2" sx={{ color: '#FF8A8A', fontWeight: 600, fontSize: '0.8rem' }}>
                  AI-Powered
                </Typography>
              </Stack>
              <Typography
                variant="h1"
                sx={{
                  color: '#fff',
                  fontSize: { xs: '2.1rem', sm: '2.75rem', md: '3.5rem' },
                  lineHeight: 1.15,
                  mb: { xs: 2, md: 2.5 },
                }}
              >
                Take control of your money,{' '}
                <Box component="span" sx={{ color: '#FF8A8A' }}>
                  effortlessly
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: { xs: '0.95rem', md: '1.15rem' },
                  maxWidth: 480,
                  mb: { xs: 3, md: 4 },
                }}
              >
                Track expenses, plan budgets, and visualize your financial life with a
                beautifully simple app built to help you save more and stress less.
              </Typography>

              <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap' }}>
                {/* Store links read from `src/config/appLinks.js` — swap the
                    placeholders there for the real listing URLs once the app is live. */}
                <Box
                  component="a"
                  href={APP_STORE_URL}
                  aria-label="Download on the App Store"
                  sx={{ display: 'inline-block', lineHeight: 0, transition: 'transform 0.2s ease', '&:hover': { transform: 'translateY(-2px)' } }}
                >
                  <Box component="img" src="/badges/app-store.svg" alt="Download on the App Store" sx={{ height: 44, display: 'block' }} />
                </Box>
                <Box
                  component="a"
                  href={GOOGLE_PLAY_URL}
                  aria-label="Get it on Google Play"
                  sx={{ display: 'inline-block', lineHeight: 0, transition: 'transform 0.2s ease', '&:hover': { transform: 'translateY(-2px)' } }}
                >
                  <Box component="img" src="/badges/google-play.svg" alt="Get it on Google Play" sx={{ height: 44, display: 'block' }} />
                </Box>
              </Stack>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={150}>
              <Box sx={{ maxWidth: { xs: 220, sm: 260, md: 300 }, mx: 'auto', position: 'relative' }}>
                {/* Soft glow behind the phone so it sits naturally in the gradient */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: -30,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,107,107,0.25) 0%, rgba(255,107,107,0) 70%)',
                    filter: 'blur(10px)',
                  }}
                />
                <Box
                  component="img"
                  src="/screens/real/dashboard.jpg"
                  alt="AI-Expense Tracker app home screen preview"
                  sx={{
                    position: 'relative',
                    width: '100%',
                    display: 'block',
                    borderRadius: '34px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
                    // Fades the bottom of the screenshot into the hero's own
                    // dark gradient instead of a hard rectangular cutoff.
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%)',
                  }}
                />
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
