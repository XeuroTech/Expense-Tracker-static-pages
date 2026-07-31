import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  // No backend is wired up yet — this simply confirms the form works and
  // resets it. Connect to your API/email service when ready.
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <Paper
      variant="outlined"
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: { xs: 3, md: 4 }, border: '1px solid', borderColor: 'divider', borderRadius: 4 }}
    >
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Full Name"
            fullWidth
            required
            value={form.name}
            onChange={handleChange('name')}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            required
            value={form.email}
            onChange={handleChange('email')}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            label="Subject"
            fullWidth
            required
            value={form.subject}
            onChange={handleChange('subject')}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            label="Message"
            fullWidth
            required
            multiline
            minRows={5}
            value={form.message}
            onChange={handleChange('message')}
          />
        </Grid>
        <Grid size={12}>
          <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained" color="primary" endIcon={<SendRoundedIcon />} size="large">
              Send Message
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <Snackbar
        open={submitted}
        autoHideDuration={4000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSubmitted(false)} sx={{ width: '100%' }}>
          Thanks for reaching out! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Paper>
  );
}
