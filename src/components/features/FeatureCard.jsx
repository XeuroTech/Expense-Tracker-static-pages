import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        p: 1,
        border: '1px solid',
        borderColor: 'divider',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 6,
          borderColor: 'primary.main',
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            backgroundImage: 'linear-gradient(135deg, rgba(91,91,246,0.12) 0%, rgba(16,185,129,0.12) 100%)',
          }}
        >
          <Icon sx={{ color: 'primary.main', fontSize: '1.6rem' }} />
        </Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
