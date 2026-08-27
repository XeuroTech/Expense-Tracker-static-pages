'use client';

import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';

// Section links scroll on the home page; route links navigate to a page.
const navLinks = [
  { label: 'Home', href: '/', type: 'route' },
  { label: 'Features', href: '/#features', type: 'section' },
  { label: 'FAQ', href: '/#faq', type: 'section' },
  { label: 'Contact', href: '/contact', type: 'route' },
  { label: 'About', href: '/about', type: 'route' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Navigation (including scrolling to a section's hash, from any page) is
  // handled by <ScrollToTop> on every route change — this just closes the
  // mobile drawer after a link is tapped.
  const closeMobileDrawer = () => setMobileOpen(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(18,18,18,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid' : '1px solid transparent',
          borderColor: 'divider',
          transition: 'all 0.25s ease',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.25, justifyContent: 'space-between' }}>
            <Stack
              component={NextLink}
              href="/"
              direction="row"
              spacing={1}
              sx={{ textDecoration: 'none', color: 'text.primary', alignItems: 'center' }}
            >
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
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                AI-Expense <Box component="span" sx={{ color: 'primary.main' }}>Tracker</Box>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  component={NextLink}
                  href={link.href}
                  onClick={closeMobileDrawer}
                  sx={{ color: 'text.primary', fontWeight: 500, borderRadius: 2 }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>

            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="outlined"
                component={NextLink}
                href="/pro"
                onClick={closeMobileDrawer}
                sx={{
                  color: '#FFA502',
                  borderColor: 'rgba(255,165,2,0.5)',
                  '&:hover': { borderColor: '#FFA502', bgcolor: 'rgba(255,165,2,0.08)' },
                }}
              >
                Go Pro
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={NextLink}
                href="/#hero"
                onClick={closeMobileDrawer}
              >
                Get Started
              </Button>
            </Stack>

            <IconButton
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: '80vw', maxWidth: 300, pt: 2 }} role="presentation">
          <Stack direction="row" sx={{ px: 2, pb: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Menu
            </Typography>
            <IconButton onClick={() => setMobileOpen(false)} aria-label="Close navigation menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton component={NextLink} href={link.href} onClick={closeMobileDrawer}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ mt: 1 }}>
              <Stack spacing={1.5} sx={{ width: '100%' }}>
                <Button
                  fullWidth
                  variant="outlined"
                  component={NextLink}
                  href="/pro"
                  onClick={closeMobileDrawer}
                  sx={{
                    color: '#FFA502',
                    borderColor: 'rgba(255,165,2,0.5)',
                    '&:hover': { borderColor: '#FFA502', bgcolor: 'rgba(255,165,2,0.08)' },
                  }}
                >
                  Go Pro
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  component={NextLink}
                  href="/#hero"
                  onClick={closeMobileDrawer}
                >
                  Get Started
                </Button>
              </Stack>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
