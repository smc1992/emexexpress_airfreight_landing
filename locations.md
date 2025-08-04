
<summary_title>Locations</summary_title>

<image_analysis>
Core Purpose:
- Display and manage location/address information
- Allow users to view, add, edit, and delete locations
- Enable location search and filtering
- Show location details including maps integration

Key Components:
- Location list/grid view with search bar
- Add/Edit location forms
- Map integration (Google Maps/Mapbox)
- Location detail cards
- Filter/sort controls
- Action buttons (edit, delete, favorite)

Layout Structure:
- Two-column layout (list + map) for desktop
- Single column stack for mobile
- Sticky header with search/filters
- Responsive grid system
- Location cards with consistent spacing

Component Architecture:
- LocationsContainer (parent)
- LocationList
- LocationCard
- LocationForm
- MapComponent
- SearchFilter
- ActionButtons

Design System:
- Font scale: 14px/16px/18px/24px
- Spacing units: 8px/16px/24px/32px
- Color scheme for status indicators
- Consistent border radius (4px)

Style Architecture:
- CSS Modules or Styled Components
- Mobile-first breakpoints
- Grid/Flexbox layout system
- Smooth transitions for card hover/active states

Quality Assurance:
- Unit tests for location CRUD operations
- E2E tests for critical user flows
- Accessibility (ARIA labels, keyboard navigation)
- Performance optimization for map loading
- Error handling for API failures
</image_analysis>

<development_planning>
Component Architecture:
- Component breakdown
- State management
- Data flow
</development_planning>