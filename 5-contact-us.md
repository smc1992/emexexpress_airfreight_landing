
<summary_title>Contact us</summary_title>

<image_analysis>
Core Purpose:
- Enable users to send inquiries/messages
- Provide multiple contact methods (form, email, phone)
- Display business contact information
- Offer immediate support options

Key Components:
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Subject
  - Message
  - Submit button
- Contact information display:
  - Business address
  - Phone numbers
  - Email addresses
  - Operating hours
- Interactive map
- Social media links
- Live chat widget (optional)

Layout Structure:
- Two-column layout (desktop):
  - Left: Contact form
  - Right: Contact information
- Single-column layout (mobile):
  - Stacked sections
- Prominent CTA buttons
- Clear visual separation between sections

Component Architecture:
- ContactPage (parent)
  - ContactForm
  - ContactInfo
  - MapComponent
  - SocialLinks
  - ChatWidget

Design System:
- Font hierarchy:
  - Headings: 24px/20px/18px
  - Body: 16px
  - Labels: 14px
- Spacing:
  - Section padding: 2rem
  - Field margins: 1rem
  - Button padding: 1rem 2rem

Style Architecture:
- CSS Modules or Styled Components
- Mobile-first approach
- Breakpoints: 768px, 1024px
- Form validation animations
- Submit button loading states

Quality Assurance:
- Form validation testing
- Cross-browser compatibility
- WCAG 2.1 compliance
- Loading state handling
- Error message display
- Response time optimization
</image_analysis>

<development_planning>
Component Architecture:
- Component breakdown
- State management
- Data flow
</development_planning>