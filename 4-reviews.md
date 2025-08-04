
<summary_title>Reviews</summary_title>

<image_analysis>
Core Purpose:
- Display product/service reviews and ratings
- Enable users to read, filter, and submit reviews
- Showcase aggregate rating metrics

Key Components:
- Overall rating display (stars/score)
- Review list with pagination
- Filter/sort controls
- Review submission form
- Rating breakdown chart
- Verified purchase badges
- Helpful vote buttons
- Review search functionality

Layout Structure:
- Summary section at top
- Filters/controls below summary
- Review grid/list as main content
- Responsive grid switching to single column
- Sticky filter sidebar on desktop

Component Architecture:
- ReviewsContainer (parent)
  - RatingSummary
  - FilterControls  
  - ReviewList
  - ReviewCard
  - PaginationControls
  - ReviewForm

Design System:
- Star rating icons (filled/empty states)
- Review cards with consistent padding
- Clear typography hierarchy for review content
- Standardized spacing between components

Style Architecture:
- BEM naming convention
- CSS Grid for responsive layouts
- CSS variables for theming
- Smooth transitions for interactive elements

Quality Assurance:
- Unit tests for rating calculations
- E2E tests for review submission
- Lazy loading for review content
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Performance monitoring for large review sets
</image_analysis>

<development_planning>
Component Architecture:
- Component breakdown
- State management
- Data flow
</development_planning>