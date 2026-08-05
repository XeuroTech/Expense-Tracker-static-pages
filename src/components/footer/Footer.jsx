import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/#features' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-conditions' },
];

const socials = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        backgroundImage: 'linear-gradient(180deg, #0A0A0A 0%, #1A1010 100%)',
        color: 'rgba(255,255,255,0.75)',
        pt: { xs: 6, md: 8 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2, alignItems: 'center' }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
                }}
              >
                <AccountBalanceWalletRoundedIcon sx={{ color: '#fff', fontSize: '1.35rem' }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>
                Expense-<Box component="span" sx={{ color: '#FF8A8A' }}>Tracker</Box>
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ maxWidth: 320, lineHeight: 1.7 }}>
              A modern, secure, and simple way to track expenses, plan budgets, and take
              control of your financial life.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              {socials.map(({ icon: Icon, label, href }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  aria-label={label}
                  size="small"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    bgcolor: 'rgba(255,255,255,0.06)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.14)' },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1.25}>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.to}
                  underline="hover"
                  color="inherit"
                  sx={{ fontSize: '0.9rem', '&:hover': { color: '#fff' } }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
              Legal
            </Typography>
            <Stack spacing={1.25}>
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.to}
                  underline="hover"
                  color="inherit"
                  sx={{ fontSize: '0.9rem', '&:hover': { color: '#fff' } }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
              Contact
            </Typography>
            <Stack spacing={1.25} sx={{ fontSize: '0.9rem' }}>
              <Typography variant="body2">support@expense-tracker.app</Typography>
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} Expense-Tracker. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Built with React, Vite &amp; Material UI
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
