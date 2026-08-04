import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function ProFeatureCard({ icon: Icon, title, description, image }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'rgba(255,165,2,0.25)',
        bgcolor: 'background.paper',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 16px 40px rgba(255,165,2,0.15)',
          borderColor: '#FFA502',
        },
      }}
    >
      {image && (
        <Box
          component="img"
          src={image}
          alt={`${title} screen preview`}
          sx={{ width: '100%', aspectRatio: '4 / 3', display: 'block', objectFit: 'cover' }}
        />
      )}
      <Box sx={{ p: 3 }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 1 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              flexShrink: 0,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'linear-gradient(135deg, #FFA502 0%, #FF6B6B 100%)',
            }}
          >
            <Icon sx={{ color: '#fff', fontSize: '1.2rem' }} />
          </Box>
          <Typography variant="h6" sx={{ fontSize: '1.05rem' }}>
            {title}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
}
