'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

/**
 * One numbered section of a legal document (Privacy Policy / Terms).
 * `body` may be a string, an array of paragraph strings, or an array of
 * bullet strings when `bullets` is true.
 */
export default function LegalSection({ index, title, body, bullets = false, intro }) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h5" sx={{ mb: 1.5 }}>
        {index}. {title}
      </Typography>
      {intro && (
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 1.5 }}>
          {intro}
        </Typography>
      )}
      {bullets ? (
        <List sx={{ listStyleType: 'disc', pl: 3, py: 0 }}>
          {paragraphs.map((line) => (
            <ListItem key={line} sx={{ display: 'list-item', px: 0, py: 0.5 }}>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {line}
              </Typography>
            </ListItem>
          ))}
        </List>
      ) : (
        paragraphs.map((line) => (
          <Typography key={line} variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 1.5 }}>
            {line}
          </Typography>
        ))
      )}
    </Box>
  );
}
