import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PlaceholderImage from '../common/PlaceholderImage';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Reveal from '../common/Reveal';

export default function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(160deg, #0B0B1E 0%, #1B1B49 55%, #232370 100%)',
        pt: { xs: 14, md: 18 },
        pb: { xs: 10, md: 14 },
      }}
    >
      {/* Decorative gradient blobs */}
      <Box
        sx={{
          position: 'absolute',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(91,91,246,0.45) 0%, rgba(91,91,246,0) 70%)',
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
          background: 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(16,185,129,0) 70%)',
          bottom: -160,
          left: -120,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 6, md: 4 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Chip
                label="Now available on iOS & Android"
                size="small"
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  color: '#C7C8FF',
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  color: '#fff',
                  fontSize: { xs: '2.4rem', sm: '3rem', md: '3.5rem' },
                  lineHeight: 1.15,
                  mb: 2.5,
                }}
              >
                Take control of your money,{' '}
                <Box component="span" sx={{ color: '#8A8CFF' }}>
                  effortlessly
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 480, mb: 4 }}
              >
                Track expenses, plan budgets, and visualize your financial life with a
                beautifully simple app built to help you save more and stress less.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<AppleIcon />}
                  sx={{ py: 1.4 }}
                >
                  Download for iOS
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<AndroidIcon />}
                  sx={{
                    py: 1.4,
                    color: '#fff',
                    borderColor: 'rgba(255,255,255,0.3)',
                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.06)' },
                  }}
                >
                  Download for Android
                </Button>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 34, height: 34, fontSize: '0.8rem', borderColor: '#171742' } }}>
                  <Avatar sx={{ bgcolor: '#5B5BF6' }}>SM</Avatar>
                  <Avatar sx={{ bgcolor: '#10B981' }}>JC</Avatar>
                  <Avatar sx={{ bgcolor: '#F59E0B' }}>PN</Avatar>
                  <Avatar sx={{ bgcolor: '#EF4444' }}>DO</Avatar>
                </AvatarGroup>
                <Stack>
                  <Stack direction="row" spacing={0.25}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarRoundedIcon key={i} sx={{ color: '#FBBF24', fontSize: '1.1rem' }} />
                    ))}
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)' }}>
                    Loved by 10,000+ users
                  </Typography>
                </Stack>
              </Stack>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={150}>
              <Box sx={{ maxWidth: 360, mx: 'auto' }}>
                <PlaceholderImage
                  label="App Preview Screenshot"
                  ratio="9 / 18"
                  icon={PhoneIphoneIcon}
                  rounded={36}
                  sx={{
                    boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
                    border: '1.5px dashed rgba(255,255,255,0.25)',
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
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
