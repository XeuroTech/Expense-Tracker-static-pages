'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import ComparisonCard from './ComparisonCard';
import whyChooseUs from '../../data/whyChooseUs';

export default function WhyChooseUsSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built to be better, in every way"
          subtitle="AI-Expense Tracker is designed from the ground up to be the most reliable finance companion you will use."
        />
        <Grid container spacing={3}>
          {whyChooseUs.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal delay={index * 60} sx={{ height: '100%' }}>
                <ComparisonCard {...item} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
