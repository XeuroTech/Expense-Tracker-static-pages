import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Reveal from '../common/Reveal';
import ProFeatureCard from './ProFeatureCard';
import PlanComparisonTable from './PlanComparisonTable';
import proFeatures from '../../data/proFeatures';

/**
 * Body content for the dedicated Pro page — three flagship Pro-only
 * features, a Free vs Pro comparison table, and a CTA. The page-level
 * heading (eyebrow/title/subtitle) lives in `PageHeader` on `ProPage.jsx`.
 */
export default function ProSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCtaClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault();
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      event.preventDefault();
      navigate('/');
      setTimeout(() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mb: { xs: 5, md: 7 } }}>
          {proFeatures.map((feature, index) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal delay={index * 60} sx={{ height: '100%' }}>
                <ProFeatureCard {...feature} />
              </Reveal>
            </Grid>
          ))}
        </Grid>

        <Reveal delay={100}>
          <Box sx={{ maxWidth: 640, mx: 'auto' }}>
            <PlanComparisonTable />
          </Box>
        </Reveal>

        <Reveal delay={150}>
          <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 5 } }}>
            <Button
              component={RouterLink}
              to="/#hero"
              onClick={handleCtaClick}
              variant="contained"
              size="large"
              sx={{
                backgroundImage: 'linear-gradient(135deg, #FFA502 0%, #FF6B6B 100%)',
                boxShadow: '0 10px 30px rgba(255,165,2,0.35)',
                '&:hover': { boxShadow: '0 12px 36px rgba(255,165,2,0.45)' },
              }}
            >
              Upgrade to Pro
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
