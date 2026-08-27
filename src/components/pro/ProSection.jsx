'use client';

import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Reveal from '../common/Reveal';
import ProFeaturesShowcase from './ProFeaturesShowcase';
import PlanCards from './PlanCards';

/**
 * Body content for the dedicated Pro page — three flagship Pro-only
 * features (hover/tap a feature to preview its real screen, same pattern
 * as the home page's Features section), the Free / Pro Monthly / Pro
 * Yearly plan cards, and a CTA. The page-level heading (eyebrow/title/
 * subtitle) lives in `PageHeader` on `ProPage.jsx`.
 */
export default function ProSection() {
  // Scrolling to the hero section (including from a different page, like
  // this one) is handled by <ScrollToTop> on every route change.
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <ProFeaturesShowcase />
        </Box>

        <Reveal delay={100}>
          <PlanCards />
        </Reveal>

        <Reveal delay={150}>
          <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 5 } }}>
            <Button
              component={NextLink}
              href="/#hero"
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
