import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';

/**
 * Consistent "eyebrow + title + subtitle" heading used at the top of every
 * landing page section.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  maxWidth = 640,
}) {
  return (
    <Reveal>
      <Box
        sx={{
          textAlign: align,
          maxWidth,
          mx: align === 'center' ? 'auto' : 0,
          mb: { xs: 5, md: 7 },
        }}
      >
        {eyebrow && (
          <Chip
            label={eyebrow}
            size="small"
            color="primary"
            variant="outlined"
            sx={{
              mb: 2,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              fontSize: '0.7rem',
              borderWidth: 1.5,
            }}
          />
        )}
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' }, mb: subtitle ? 1.5 : 0 }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Reveal>
  );
}
