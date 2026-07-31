import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Seo from '../components/common/Seo';
import PageHeader from '../components/common/PageHeader';
import Reveal from '../components/common/Reveal';
import PlaceholderImage from '../components/common/PlaceholderImage';
import ContactForm from '../components/contact/ContactForm';

const contactDetails = [
  { icon: EmailOutlinedIcon, label: 'Email', value: 'support@expensext.app' },
  { icon: PhoneOutlinedIcon, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: LocationOnOutlinedIcon, label: 'Address', value: '123 Finance Street, Suite 400, San Francisco, CA 94103' },
];

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with the ExpenseXT team — send us a message, or find our email, phone, and office address."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        subtitle="Questions, feedback, or partnership ideas — send us a message and our team will respond shortly."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal>
                <Stack spacing={3}>
                  {contactDetails.map((detail) => (
                    <Paper
                      key={detail.label}
                      variant="outlined"
                      sx={{ p: 2.5, border: '1px solid', borderColor: 'divider', borderRadius: 3 }}
                    >
                      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            flexShrink: 0,
                            borderRadius: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundImage: 'linear-gradient(135deg, rgba(91,91,246,0.12) 0%, rgba(16,185,129,0.12) 100%)',
                          }}
                        >
                          <detail.icon sx={{ color: 'primary.main' }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                            {detail.label}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {detail.value}
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  ))}

                  {/* Swap for a real embedded <iframe> map once an address is finalized */}
                  <PlaceholderImage label="Google Maps Placeholder" ratio="4 / 3" icon={MapOutlinedIcon} />
                </Stack>
              </Reveal>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Reveal delay={150}>
                <ContactForm />
              </Reveal>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
