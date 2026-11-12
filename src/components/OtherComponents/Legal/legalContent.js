// ===========================================
// LEGAL PAGES: /terms and /privacy-policy
// DRAFT text written from what the site does today (an e-mail enquiry form,
// phone/WhatsApp links, analytics once enabled, Vercel hosting, the TilesView
// tool). The client's legal adviser must review and confirm it before it
// goes live. Update LAST_UPDATED on every change.
// ===========================================

const LAST_UPDATED = "2026-11-12";
const COMPANY = "Sanson Floorings LLP, which trades as GAIA by Sanson Floorings";
const EMAIL = "contact@sansonfloorings.com";
const ADDRESS =
  "B-5B, Plot No. 70, 1st Floor, Rama Road Industrial Area, New Delhi 110015, India";

// sections: [{ heading, paragraphs: [string] }]. Plain text only.
export const LEGAL_PAGES = {
  terms: {
    path: "/terms",
    title: "Terms of Use",
    seoTitle: "Terms of Use | GAIA by Sanson Floorings",
    metaDescription:
      "The terms that apply when you use sansonfloorings.com, the website of GAIA by Sanson Floorings: product information, brochures, enquiries and intellectual property.",
    lastUpdated: LAST_UPDATED,
    intro: `These terms apply to your use of sansonfloorings.com (the "site"), run by ${COMPANY} ("GAIA", "we", "us"). By using the site you agree to them.`,
    sections: [
      {
        heading: "Product information",
        paragraphs: [
          "We describe our carpet tiles, broadloom carpets, acoustic PET panels and artificial grass as accurately as we can. Colours on screen, photographs and brochure images can differ from the physical product. Specifications may change as products are improved.",
          "Nothing on the site is an offer to sell. Prices, availability, lead times and specifications for an order are confirmed only in a written quotation from us.",
        ],
      },
      {
        heading: "Enquiries and samples",
        paragraphs: [
          "When you send an enquiry or ask for a sample, we use your details only to reply to you, as described in our Privacy Policy. Sending an enquiry does not create a contract.",
        ],
      },
      {
        heading: "Brochures and content",
        paragraphs: [
          "The text, images, designs, brochures and logos on the site belong to GAIA or its licensors. You may view and download them to evaluate our products. You may not copy, sell or republish them without our written permission.",
        ],
      },
      {
        heading: "Third-party tools and links",
        paragraphs: [
          "The site links to services run by others, such as the TilesView room visualiser, LinkedIn and WhatsApp. Their own terms and privacy policies apply when you use them, and we are not responsible for their content.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "We provide the site as it is. To the extent the law allows, we are not liable for any loss arising from your use of the site or your reliance on its content. Our liability for products you buy is set out in the quotation and terms of sale for that order.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These terms are governed by the laws of India. The courts of New Delhi have jurisdiction over any dispute about them.",
        ],
      },
      {
        heading: "Changes and contact",
        paragraphs: [
          "We may update these terms. The date at the top shows when they last changed.",
          `Questions about these terms: ${EMAIL}, or write to us at ${ADDRESS}.`,
        ],
      },
    ],
  },
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy",
    seoTitle: "Privacy Policy | GAIA by Sanson Floorings",
    metaDescription:
      "How GAIA by Sanson Floorings collects, uses and protects personal data from sansonfloorings.com enquiries, and the rights you have under Indian data protection law.",
    lastUpdated: LAST_UPDATED,
    intro: `This policy explains what personal data ${COMPANY} ("GAIA", "we", "us") collects through sansonfloorings.com, why, and the choices you have. We follow the Digital Personal Data Protection Act, 2023.`,
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "Enquiries: when you contact us through the enquiry form, by e-mail, phone or WhatsApp, we receive the details you give us, such as your name, e-mail address, phone number, company and project needs.",
          "Usage data: our hosting provider records technical data such as your IP address, browser and the pages you request, to run and secure the site. If we use website analytics, it records how visitors use the site, such as the pages viewed and links clicked, without identifying you by name.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "We use your enquiry details to answer you, send quotations and samples, and follow up on your project. We use usage data to keep the site working, secure and useful. We do not sell your personal data.",
        ],
      },
      {
        heading: "Who we share it with",
        paragraphs: [
          "We share data only with service providers that help us run the site and our business, such as our hosting provider (Vercel), e-mail provider and, if enabled, Google Analytics, and with authorities where the law requires it. These providers may process data outside India.",
        ],
      },
      {
        heading: "How long we keep it",
        paragraphs: [
          "We keep enquiry details for as long as we need them to deal with your enquiry and any resulting order, and as required by law. We then delete them.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          `You can ask us for a summary of the personal data we hold about you, ask us to correct or erase it, withdraw consent, or raise a grievance. Write to ${EMAIL}. If you are not satisfied with our reply, you may complain to the Data Protection Board of India.`,
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "The site itself does not use advertising cookies. If analytics is enabled, it uses cookies to count visits; you can block or delete cookies in your browser settings.",
        ],
      },
      {
        heading: "Changes and contact",
        paragraphs: [
          "We may update this policy. The date at the top shows when it last changed.",
          `Grievances and questions: ${EMAIL}, or ${ADDRESS}.`,
        ],
      },
    ],
  },
};
