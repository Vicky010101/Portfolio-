# React Component Structure

Visual guide to understanding the component hierarchy and data flow.

## 🏗️ Component Tree

```
App.js (Root Component)
│
├── ParticlesBackground.js (Background canvas animation)
│
├── CursorTrail.js (Cursor effect overlay)
│
├── Navbar.js (Sticky navigation)
│   ├── State: isOpen (mobile menu toggle)
│   └── Methods: handleNavClick (smooth scroll)
│
├── Hero.js (Landing section)
│   ├── State: currentRole (typing animation)
│   ├── Effect: Role rotation timer
│   └── Methods: handleScrollClick
│
├── About.js (About section)
│   ├── Refs: statsRef[] (counter elements)
│   └── Effect: IntersectionObserver for stats animation
│
├── Projects.js (Projects showcase)
│   ├── State: activeFilter (filter selection)
│   ├── Data: projects[] (project list)
│   └── Computed: filteredProjects (filtered list)
│
├── Skills.js (Skills display)
│   ├── Refs: barsRef[] (progress bar elements)
│   ├── Data: skills[] (skills list)
│   └── Effect: IntersectionObserver for bar animation
│
├── Certifications.js (Certifications grid)
│   └── Data: certifications[] (cert list)
│
├── Education.js (Education timeline)
│   └── Data: education[] (education list)
│
├── Contact.js (Contact form)
│   ├── State: formData (form fields)
│   ├── State: errors (validation errors)
│   ├── State: status (submission status)
│   ├── State: isSubmitting (loading state)
│   ├── Effect: EmailJS initialization
│   ├── Methods: validateForm, validateEmail
│   ├── Methods: handleChange, handleSubmit
│   └── Integration: EmailJS API
│
└── Footer.js (Footer section)
    └── Computed: currentYear
```

## 📊 Data Flow Diagram

```
User Interaction
       ↓
   Component
       ↓
   State Update (useState)
       ↓
   React Re-render
       ↓
   DOM Update
       ↓
   Visual Change
```

## 🔄 Component Lifecycle Examples

### 1. Navbar Component

```
Mount
  ↓
Render initial state (isOpen: false)
  ↓
User clicks hamburger
  ↓
setIsOpen(true)
  ↓
Re-render with menu open
  ↓
User clicks nav link
  ↓
handleNavClick() → smooth scroll
  ↓
setIsOpen(false) on mobile
  ↓
Re-render with menu closed
```

### 2. Hero Component

```
Mount
  ↓
Render with role[0]
  ↓
useEffect sets interval
  ↓
Every 2200ms:
  setCurrentRole(next)
  ↓
  Re-render with new role
  ↓
Unmount
  ↓
Cleanup interval
```

### 3. About Component

```
Mount
  ↓
Render with stats at 0
  ↓
useEffect creates IntersectionObserver
  ↓
Stats scroll into view
  ↓
Observer triggers animation
  ↓
requestAnimationFrame updates numbers
  ↓
Re-render on each frame
  ↓
Animation complete
  ↓
Unmount
  ↓
Disconnect observer
```

### 4. Projects Component

```
Mount
  ↓
Render all projects (filter: 'all')
  ↓
User clicks filter button
  ↓
setActiveFilter('ai')
  ↓
filteredProjects recalculated
  ↓
Re-render with filtered list
```

### 5. Contact Component

```
Mount
  ↓
Initialize EmailJS
  ↓
Render empty form
  ↓
User types in field
  ↓
handleChange() updates formData
  ↓
Re-render with new value
  ↓
Clear error if exists
  ↓
User submits form
  ↓
handleSubmit() validates
  ↓
If valid: Send via EmailJS
  ↓
Update status message
  ↓
Re-render with success/error
```

## 🎯 State Management Map

### Local State (useState)

| Component | State | Type | Purpose |
|-----------|-------|------|---------|
| Navbar | isOpen | boolean | Mobile menu toggle |
| Hero | currentRole | number | Typing animation index |
| Projects | activeFilter | string | Project filter selection |
| Contact | formData | object | Form field values |
| Contact | errors | object | Validation errors |
| Contact | status | string | Submission status |
| Contact | isSubmitting | boolean | Loading state |

### Refs (useRef)

| Component | Ref | Purpose |
|-----------|-----|---------|
| About | statsRef | Stats counter elements |
| Skills | barsRef | Progress bar elements |
| ParticlesBackground | canvasRef | Canvas element |
| ParticlesBackground | particlesRef | Particle data |
| ParticlesBackground | animationRef | Animation frame ID |
| CursorTrail | trailRef | Trail element |

### Effects (useEffect)

| Component | Effect | Trigger | Cleanup |
|-----------|--------|---------|---------|
| Hero | Role rotation | Mount | Clear interval |
| About | Stats animation | Mount | Disconnect observer |
| Skills | Bar animation | Mount | Disconnect observer |
| Contact | EmailJS init | Mount | None |
| ParticlesBackground | Canvas animation | Mount, resize | Cancel animation |
| CursorTrail | Mouse tracking | Mount | Remove listener |

## 🔌 External Integrations

### EmailJS Flow

```
Contact Component
       ↓
useEffect (mount)
       ↓
emailjs.init(PUBLIC_KEY)
       ↓
User submits form
       ↓
Validate form data
       ↓
emailjs.send(SERVICE_ID, TEMPLATE_ID, data)
       ↓
Promise resolves/rejects
       ↓
Update status message
       ↓
Reset form on success
```

### Environment Variables

```
.env file
    ↓
process.env.REACT_APP_*
    ↓
Contact.js reads values
    ↓
EmailJS configuration
```

## 🎨 Styling Architecture

```
src/styles/index.css
    ↓
CSS Variables (:root)
    ↓
Global Styles (body, html)
    ↓
Component Classes (.nav, .hero, etc.)
    ↓
Responsive Media Queries
    ↓
Applied to components via className
```

## 📦 Props Flow

Since this is a simple portfolio, most components don't receive props. They're self-contained with their own data and state.

```
App.js (No props passed)
  ↓
All components are independent
  ↓
Each manages its own state/data
```

This is intentional for:
- Simplicity
- Easy maintenance
- Clear separation of concerns

## 🔄 Event Flow Examples

### Smooth Scroll Navigation

```
User clicks nav link
       ↓
onClick handler
       ↓
handleNavClick(e, '#section')
       ↓
e.preventDefault()
       ↓
document.querySelector('#section')
       ↓
scrollIntoView({ behavior: 'smooth' })
       ↓
Close mobile menu if needed
```

### Project Filtering

```
User clicks filter button
       ↓
onClick handler
       ↓
setActiveFilter('ai')
       ↓
Component re-renders
       ↓
filteredProjects recalculated
       ↓
Map over filtered array
       ↓
Render matching projects
```

### Form Submission

```
User types in input
       ↓
onChange handler
       ↓
handleChange(e)
       ↓
Update formData state
       ↓
Clear field error
       ↓
Re-render with new value
       ↓
User clicks submit
       ↓
onSubmit handler
       ↓
handleSubmit(e)
       ↓
e.preventDefault()
       ↓
validateForm()
       ↓
If invalid: Show errors
       ↓
If valid: Send email
       ↓
Update status
       ↓
Reset form on success
```

## 🎭 Animation Triggers

### Intersection Observer Pattern

```
Component mounts
       ↓
useEffect creates observer
       ↓
Observer watches elements
       ↓
Element enters viewport
       ↓
isIntersecting = true
       ↓
Trigger animation
       ↓
Unobserve element
       ↓
Component unmounts
       ↓
Disconnect observer
```

Used in:
- About.js (stats counter)
- Skills.js (progress bars)

### RequestAnimationFrame Pattern

```
Component mounts
       ↓
useEffect starts animation
       ↓
draw() function
       ↓
Update positions/values
       ↓
Render to canvas/DOM
       ↓
requestAnimationFrame(draw)
       ↓
Loop continues
       ↓
Component unmounts
       ↓
cancelAnimationFrame()
```

Used in:
- ParticlesBackground.js
- About.js (stats counter)

## 🧩 Component Dependencies

```
All Components
    ↓
React (useState, useEffect, useRef)
    ↓
Font Awesome (icons)
    ↓
index.css (styles)

Contact Component
    ↓
@emailjs/browser
    ↓
Environment variables
```

## 📱 Responsive Behavior

```
Window width > 990px
    ↓
Desktop layout
    ↓
Full navigation menu
    ↓
Multi-column grids

Window width < 990px
    ↓
Tablet layout
    ↓
Adjusted grids
    ↓
Hamburger menu

Window width < 680px
    ↓
Mobile layout
    ↓
Single column
    ↓
Collapsible menu
```

## 🎯 Key Patterns Used

1. **Functional Components** - All components use functions
2. **Hooks** - useState, useEffect, useRef
3. **Controlled Components** - Form inputs controlled by state
4. **Event Handlers** - onClick, onChange, onSubmit
5. **Conditional Rendering** - Show/hide based on state
6. **List Rendering** - Map over arrays
7. **Refs for DOM Access** - Canvas, animations
8. **Intersection Observer** - Scroll-triggered animations
9. **RequestAnimationFrame** - Smooth animations
10. **Environment Variables** - Secure configuration

---

This structure provides a clean, maintainable, and scalable React application!
