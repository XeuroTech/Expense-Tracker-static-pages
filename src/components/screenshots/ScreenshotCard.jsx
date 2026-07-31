import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PlaceholderImage from '../common/PlaceholderImage';

export default function ScreenshotCard({ icon, title, description }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
      }}
    >
      {/* Replace this PlaceholderImage with a real <img src="/screenshots/xxx.png" /> */}
      <PlaceholderImage label={`${title} Screenshot`} ratio="4 / 3" icon={icon} rounded={0} />
      <CardContent>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
