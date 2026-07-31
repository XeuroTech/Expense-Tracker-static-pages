import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
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
  { label: 'Screenshots', href: '/#screenshots', type: 'section' },
  { label: 'About', href: '/about', type: 'route' },
  { label: 'Privacy', href: '/privacy-policy', type: 'route' },
  { label: 'FAQ', href: '/#faq', type: 'section' },
  { label: 'Contact', href: '/contact', type: 'route' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (link) => (event) => {
    setMobileOpen(false);
    if (link.type !== 'section') return;

    const hash = link.href.split('#')[1];
    if (location.pathname === '/') {
      event.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Let the router navigate to "/", then scroll after the page mounts.
      event.preventDefault();
      navigate('/');
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
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
              component={RouterLink}
              to="/"
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
                  backgroundImage: 'linear-gradient(135deg, #5B5BF6 0%, #10B981 100%)',
                }}
              >
                <AccountBalanceWalletRoundedIcon sx={{ color: '#fff', fontSize: '1.35rem' }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Expense<Box component="span" sx={{ color: 'primary.main' }}>XT</Box>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  component={RouterLink}
                  to={link.href}
                  onClick={handleNavClick(link)}
                  sx={{ color: 'text.primary', fontWeight: 500, borderRadius: 2 }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>

            <Button
              variant="contained"
              color="primary"
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
              component={RouterLink}
              to="/#hero"
              onClick={handleNavClick({ type: 'section', href: '/#hero' })}
            >
              Get the App
            </Button>

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
        <Box sx={{ width: 280, pt: 2 }} role="presentation">
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
                <ListItemButton component={RouterLink} to={link.href} onClick={handleNavClick(link)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ mt: 1 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/#hero"
                onClick={handleNavClick({ type: 'section', href: '/#hero' })}
              >
                Get the App
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
