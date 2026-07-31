import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import FeatureCard from './FeatureCard';
import features from '../../data/features';

export default function FeaturesSection() {
  return (
    <Box id="features" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to manage your money"
          subtitle="Powerful, easy-to-use tools that help you track spending, plan budgets, and understand your finances at a glance."
        />
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal delay={index * 60} sx={{ height: '100%' }}>
                <FeatureCard {...feature} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
