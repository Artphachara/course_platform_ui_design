# Design Document - Video Course Platform

## Overview

การออกแบบเว็บไซต์แพลตฟอร์มคอร์สวิดีโอที่มีธีมสีม่วง-ขาวเป็นหลัก เหมาะสำหรับนำไปพัฒนาใน WordPress โดยเน้นความสะอาดตา ใช้งานง่าย และรองรับการใช้งานบนหลายอุปกรณ์

## Design System

### Color Palette

**Primary Colors:**
- Purple Primary: `#7C3AED` (สีม่วงหลัก - ใช้สำหรับ CTA, links, highlights)
- Purple Dark: `#5B21B6` (สีม่วงเข้ม - ใช้สำหรับ hover states)
- Purple Light: `#A78BFA` (สีม่วงอ่อน - ใช้สำหรับ backgrounds, accents)
- Purple Pale: `#EDE9FE` (สีม่วงจาง - ใช้สำหรับ subtle backgrounds)

**Neutral Colors:**
- White: `#FFFFFF` (พื้นหลังหลัก)
- Gray 50: `#F9FAFB` (พื้นหลังรอง)
- Gray 200: `#E5E7EB` (borders, dividers)
- Gray 600: `#4B5563` (secondary text)
- Gray 900: `#111827` (primary text)

### Typography

**Font Family:**
- Primary: 'Inter', 'Noto Sans Thai', sans-serif
- Headings: 'Poppins', 'Noto Sans Thai', sans-serif

**Font Sizes:**
- H1: 48px / 3rem (หน้าหลัก)
- H2: 36px / 2.25rem (section headers)
- H3: 24px / 1.5rem (card titles)
- H4: 20px / 1.25rem (video titles)
- Body: 16px / 1rem
- Small: 14px / 0.875rem

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Spacing System

ใช้ระบบ 8px base unit:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

### Border Radius

- Small: 4px (buttons, inputs)
- Medium: 8px (cards)
- Large: 12px (images, video player)
- XLarge: 16px (hero sections)

## Architecture

### Page Structure

```
├── Header (Global)
│   ├── Logo
│   ├── Main Navigation
│   └── Search Bar
├── Main Content Area
│   └── [Page-specific content]
└── Footer (Global)
    ├── About Section
    ├── Quick Links
    ├── Contact Info
    └── Social Media
```

### Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1919px
- Large Desktop: 1920px+

## Components and Interfaces

### 1. Header Component

**Desktop Layout (1024px+):**
```
┌─────────────────────────────────────────────────────────┐
│ [Logo]    หน้าแรก | คอร์สทั้งหมด | เกี่ยวกับเรา    [🔍]  │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 80px
- Background: White with subtle shadow
- Logo: 180px width, left-aligned
- Navigation: Center-aligned, 16px font, purple on hover
- Search: Right-aligned, expandable on click

**Mobile Layout (<768px):**
```
┌─────────────────────────────────┐
│ [☰]  [Logo]              [🔍]   │
└─────────────────────────────────┘
```

- Height: 64px
- Hamburger menu slides from left
- Full-screen overlay menu

### 2. Course Catalog Page

**Hero Section:**
```
┌──────────────────────────────────────────────┐
│                                              │
│         คอร์สเรียนออนไลน์คุณภาพ              │
│         เรียนรู้ได้ทุกที่ ทุกเวลา            │
│                                              │
│         [ดูคอร์สทั้งหมด]                      │
│                                              │
└──────────────────────────────────────────────┘
```

- Background: Gradient purple (light to primary)
- Height: 400px desktop, 300px mobile
- Text: White, center-aligned
- CTA Button: White background, purple text

**Course Grid:**
```
Desktop (3 columns):
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Course  │  │ Course  │  │ Course  │
│  Card   │  │  Card   │  │  Card   │
└─────────┘  └─────────┘  └─────────┘

Tablet (2 columns):
┌─────────┐  ┌─────────┐
│ Course  │  │ Course  │
│  Card   │  │  Card   │
└─────────┘  └─────────┘

Mobile (1 column):
┌─────────┐
│ Course  │
│  Card   │
└─────────┘
```

**Course Card Component:**
```
┌────────────────────────────┐
│                            │
│    [Thumbnail Image]       │
│                            │
├────────────────────────────┤
│ Course Title               │
│ Brief description text...  │
│                            │
│ 👤 Instructor  📹 12 วิดีโอ│
│                            │
│ [เริ่มเรียน →]             │
└────────────────────────────┘
```

**Specifications:**
- Card size: 100% width, auto height
- Thumbnail: 16:9 ratio, 12px border radius
- Padding: 20px
- Background: White
- Border: 1px gray-200
- Shadow: Subtle, increases on hover
- Hover effect: Lift up 4px, shadow increases
- Button: Purple background, white text, full width

### 3. Course Detail Page

**Layout Structure:**
```
┌─────────────────────────────────────────────┐
│ Home > คอร์สทั้งหมด > ชื่อคอร์ส             │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────────┐  Course Title            │
│  │              │  ⭐⭐⭐⭐⭐ (4.8)          │
│  │  Thumbnail   │  👤 ชื่อผู้สอน           │
│  │              │  📹 15 วิดีโอ | ⏱ 5 ชม.  │
│  └──────────────┘                           │
│                                             │
│  Course Description                         │
│  Lorem ipsum dolor sit amet...              │
│                                             │
├─────────────────────────────────────────────┤
│  เนื้อหาในคอร์ส                             │
│                                             │
│  ┌──────────────────────────────────────┐  │
│  │ 1. [▶] Video Title 1        [10:30] │  │
│  └──────────────────────────────────────┘  │
│  ┌──────────────────────────────────────┐  │
│  │ 2. [▶] Video Title 2        [15:45] │  │
│  └──────────────────────────────────────┘  │
│  ┌──────────────────────────────────────┐  │
│  │ 3. [▶] Video Title 3        [12:20] │  │
│  └──────────────────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

**Specifications:**

*Breadcrumb:*
- Font size: 14px
- Color: Gray-600
- Separator: ">"
- Current page: Purple, bold

*Course Header:*
- Thumbnail: 400px x 225px (desktop), full width (mobile)
- Title: H1, gray-900
- Rating: Yellow stars, gray text
- Meta info: Icons + text, gray-600

*Video List Item:*
- Height: 80px
- Background: White
- Border: 1px gray-200
- Border radius: 8px
- Padding: 16px
- Hover: Purple-50 background
- Play icon: Purple circle
- Duration: Right-aligned, gray-600

### 4. Video Player Page

**Desktop Layout (1024px+):**
```
┌─────────────────────────────────────────────────────────┐
│ Home > Course > Video Title                             │
├──────────────────────────────┬──────────────────────────┤
│                              │  Playlist                │
│                              │  ┌────────────────────┐  │
│                              │  │ 1. Video (Active)  │  │
│      Video Player            │  └────────────────────┘  │
│      (16:9 ratio)            │  ┌────────────────────┐  │
│                              │  │ 2. Video Title     │  │
│                              │  └────────────────────┘  │
│                              │  ┌────────────────────┐  │
│                              │  │ 3. Video Title     │  │
├──────────────────────────────┤  └────────────────────┘  │
│ Video Title                  │                          │
│ Video Description...         │                          │
│                              │                          │
│ [← ก่อนหน้า]  [ถัดไป →]     │                          │
└──────────────────────────────┴──────────────────────────┘
```

**Mobile Layout (<768px):**
```
┌─────────────────────────────┐
│                             │
│      Video Player           │
│      (16:9 ratio)           │
│                             │
├─────────────────────────────┤
│ Video Title                 │
│ Description...              │
│                             │
│ [← ก่อนหน้า]  [ถัดไป →]    │
├─────────────────────────────┤
│ วิดีโออื่นๆ ในคอร์ส         │
│ ┌─────────────────────────┐ │
│ │ 1. Video (Active)       │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ 2. Video Title          │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

**Specifications:**

*Video Player:*
- Aspect ratio: 16:9
- Background: Black
- Controls: Standard HTML5 controls styled with purple accent
- Border radius: 12px

*Main Content (Desktop):*
- Width: 70% of container
- Max-width: 1200px

*Playlist Sidebar (Desktop):*
- Width: 30% of container
- Max-height: 600px
- Overflow: Scroll
- Background: Gray-50
- Border-left: 1px gray-200

*Playlist Item:*
- Height: 60px
- Padding: 12px
- Active state: Purple background, white text
- Hover: Purple-50 background
- Thumbnail: 80px x 45px
- Title: 14px, truncate after 2 lines

*Navigation Buttons:*
- Width: 48% each (with gap)
- Height: 48px
- Border radius: 8px
- Previous: White background, purple border
- Next: Purple background, white text

### 5. Footer Component

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  เกี่ยวกับเรา          ลิงก์ด่วน          ติดต่อเรา     │
│  About text...        - หน้าแรก          📧 email      │
│                       - คอร์สทั้งหมด      📱 phone      │
│                       - เกี่ยวกับ         📍 address    │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  © 2024 Platform Name. All rights reserved.            │
│  [Facebook] [Twitter] [Instagram] [YouTube]            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Gray-900
- Text color: White
- Padding: 48px vertical
- Links: White, purple on hover
- Social icons: 32px, circular, white background
- Copyright: 14px, gray-400

## Data Models

### Course Object
```typescript
{
  id: string
  title: string
  description: string
  thumbnail: string (URL)
  instructor: string
  videoCount: number
  totalDuration: string
  rating: number
  videos: Video[]
}
```

### Video Object
```typescript
{
  id: string
  courseId: string
  title: string
  description: string
  thumbnail: string (URL)
  videoUrl: string
  duration: string
  order: number
}
```

## Responsive Design Strategy

### Mobile-First Approach

1. **Typography Scaling:**
   - H1: 32px (mobile) → 48px (desktop)
   - H2: 24px (mobile) → 36px (desktop)
   - Body: 16px (consistent)

2. **Grid Adjustments:**
   - Course cards: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
   - Video player: Full width (mobile) → 70% width (desktop)

3. **Navigation:**
   - Hamburger menu (mobile) → Horizontal menu (desktop)
   - Search: Icon only (mobile) → Full search bar (desktop)

4. **Spacing:**
   - Container padding: 16px (mobile) → 24px (tablet) → 48px (desktop)
   - Section gaps: 32px (mobile) → 48px (tablet) → 64px (desktop)

## Interaction Design

### Hover States

1. **Course Cards:**
   - Transform: translateY(-4px)
   - Shadow: Increase elevation
   - Transition: 0.3s ease

2. **Buttons:**
   - Background: Darken by 10%
   - Transform: scale(1.02)
   - Transition: 0.2s ease

3. **Links:**
   - Color: Change to purple-dark
   - Underline: Fade in
   - Transition: 0.2s ease

### Loading States

1. **Course Cards:**
   - Skeleton loader with shimmer effect
   - Gray-200 background with animated gradient

2. **Video Player:**
   - Spinner in center
   - Purple color
   - "กำลังโหลด..." text below

### Error States

1. **Empty Course List:**
   - Icon: 📚
   - Message: "ยังไม่มีคอร์สในขณะนี้"
   - CTA: "กลับหน้าแรก"

2. **Video Load Error:**
   - Icon: ⚠️
   - Message: "ไม่สามารถโหลดวิดีโอได้"
   - CTA: "ลองอีกครั้ง"

## Accessibility Considerations

1. **Color Contrast:**
   - Text on white: Minimum 4.5:1 ratio
   - Purple buttons: Use dark purple (#5B21B6) for better contrast

2. **Keyboard Navigation:**
   - All interactive elements focusable
   - Focus indicator: 2px purple outline
   - Tab order: Logical flow

3. **Screen Readers:**
   - Alt text for all images
   - ARIA labels for icons
   - Semantic HTML structure

4. **Touch Targets:**
   - Minimum size: 44px x 44px
   - Adequate spacing between clickable elements

## Implementation Notes for WordPress

### Recommended Plugins

1. **LearnDash / Tutor LMS** - สำหรับจัดการคอร์สและวิดีโอ
2. **Elementor / Beaver Builder** - สำหรับสร้างหน้าตามดีไซน์
3. **WP Video Gallery** - สำหรับจัดการวิดีโอ
4. **Custom Post Types UI** - สำหรับสร้าง custom post types

### Custom Post Types Needed

1. **Course** (custom post type)
   - Title, description, thumbnail
   - Custom fields: instructor, rating, duration

2. **Video** (custom post type)
   - Title, description, video URL
   - Relationship: Belongs to Course
   - Custom fields: duration, order

### Page Templates

1. `page-courses.php` - Course catalog page
2. `single-course.php` - Course detail page
3. `single-video.php` - Video player page

### CSS Framework Recommendation

- **Tailwind CSS** - เหมาะกับ design system ที่กำหนดไว้
- หรือ **Bootstrap 5** - ถ้าต้องการ framework ที่มี components สำเร็จ

## Design Assets Needed

1. **Logo** - SVG format, white and purple versions
2. **Course Thumbnails** - 800x450px, JPG/PNG
3. **Video Thumbnails** - 640x360px, JPG/PNG
4. **Icons** - Play, pause, next, previous, search (SVG)
5. **Placeholder Images** - For empty states

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)
