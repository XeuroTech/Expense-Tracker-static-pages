import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PageHeader from "../../components/common/PageHeader";
import LegalSection from "../../components/common/LegalSection";
import termsSections, { lastUpdated } from "../../data/termsConditions";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the AI Expense Tracker Terms & Conditions covering account use, subscriptions, intellectual property, and liability.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using AI Expense Tracker."
      />
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="body2" color="text.secondary" sx={{ mb: 5 }}>
            Last updated: {lastUpdated}
          </Typography>
          {termsSections.map((section, index) => (
            <LegalSection key={section.title} index={index + 1} {...section} />
          ))}
        </Container>
      </Box>
    </>
  );
}
