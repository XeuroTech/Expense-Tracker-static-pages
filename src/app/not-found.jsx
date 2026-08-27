'use client';

import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NotFound() {
  return (
    <Box sx={{ py: { xs: 12, md: 18 } }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: { xs: '4rem', md: '6rem' }, fontWeight: 800, color: 'primary.main', lineHeight: 1 }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ mt: 2, mb: 1.5 }}>
          Page not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </Typography>
        <Button component={NextLink} href="/" variant="contained" color="primary" size="large">
          Back to Home
        </Button>
      </Container>
    </Box>
  );
}
