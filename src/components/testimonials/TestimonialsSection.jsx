import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import TestimonialCard from './TestimonialCard';
import testimonials from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by thousands of users"
          subtitle="Here's what people are saying about their experience with ExpenseXT."
        />
        <Grid container spacing={3}>
          {testimonials.map((item, index) => (
            <Grid key={item.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <Reveal delay={index * 60} sx={{ height: '100%' }}>
                <TestimonialCard {...item} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
