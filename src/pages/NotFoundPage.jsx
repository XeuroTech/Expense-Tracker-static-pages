import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Seo from '../components/common/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" />
      <Box sx={{ py: { xs: 12, md: 18 } }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: { xs: '4rem', md: '6rem' }, fontWeight: 800, color: 'primary.main', lineHeight: 1 }}>
            404
          </Typography>
          <Typography variant="h4" sx={{ mt: 2, mb: 1.5 }}>
            Page not found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            The page you're looking for doesn't exist or has been moved.
          </Typography>
          <Button component={RouterLink} to="/" variant="contained" color="primary" size="large">
            Back to Home
          </Button>
        </Container>
      </Box>
    </>
  );
}
