import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PageHeader from "../../components/common/PageHeader";
import Reveal from "../../components/common/Reveal";

const contactDetails = [
  {
    icon: EmailOutlinedIcon,
    label: "Email",
    value: "support@expense-tracker.xeurotech.com",
    href: "mailto:support@expense-tracker.xeurotech.com",
  },
];

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with XeuroTech, the team behind AI Expense Tracker — reach us by email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        subtitle="Questions, feedback, or partnership ideas — reach out and the XeuroTech team will respond shortly."
      />

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <Reveal>
            <Stack spacing={3} sx={{ alignItems: "center" }}>
              {contactDetails.map((detail) => (
                <Paper
                  key={detail.label}
                  variant="outlined"
                  sx={{
                    p: 3.5,
                    width: "100%",
                    textAlign: "center",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 3,
                  }}
                >
                  <Stack spacing={1.5} sx={{ alignItems: "center" }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundImage:
                          "linear-gradient(135deg, rgba(255,107,107,0.12) 0%, rgba(78,205,196,0.12) 100%)",
                      }}
                    >
                      <detail.icon
                        sx={{ color: "primary.main", fontSize: "1.6rem" }}
                      />
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      {detail.label}
                    </Typography>
                    <Typography
                      variant="body1"
                      component={Link}
                      href={detail.href}
                      underline="hover"
                      sx={{
                        color: "text.secondary",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {detail.value}
                    </Typography>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Reveal>
        </Container>
      </Box>
    </>
  );
}
