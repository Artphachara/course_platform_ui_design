# Video Course Platform - Design Mockup

แพลตฟอร์มคอร์สวิดีโอออนไลน์ที่ออกแบบด้วย HTML, CSS และ JavaScript เพื่อใช้เป็น mockup อ้างอิงสำหรับการพัฒนาใน WordPress

## 📋 สารบัญ

- [ภาพรวมโปรเจกต์](#ภาพรวมโปรเจกต์)
- [คุณสมบัติหลัก](#คุณสมบัติหลัก)
- [เทคโนโลยีที่ใช้](#เทคโนโลยีที่ใช้)
- [โครงสร้างโปรเจกต์](#โครงสร้างโปรเจกต์)
- [การติดตั้งและใช้งาน](#การติดตั้งและใช้งาน)
- [หน้าต่างๆ ในเว็บไซต์](#หน้าต่างๆ-ในเว็บไซต์)
- [Design System](#design-system)
- [Responsive Design](#responsive-design)
- [Browser Compatibility](#browser-compatibility)
- [การนำไปพัฒนาใน WordPress](#การนำไปพัฒนาใน-wordpress)
- [เอกสารเพิ่มเติม](#เอกสารเพิ่มเติม)

## 🎯 ภาพรวมโปรเจกต์

โปรเจกต์นี้เป็น design mockup สำหรับแพลตฟอร์มคอร์สวิดีโอออนไลน์ที่พัฒนาด้วย HTML, CSS และ JavaScript แบบ vanilla เพื่อใช้เป็นแนวทางในการพัฒนาเว็บไซต์จริงด้วย WordPress ในอนาคต

### วัตถุประสงค์

- สร้าง mockup ที่สามารถใช้งานได้จริงเพื่อทดสอบ UX/UI
- กำหนด design system และ style guide ที่ชัดเจน
- เป็นเอกสารอ้างอิงสำหรับทีมพัฒนา WordPress
- ทดสอบ responsive design บนอุปกรณ์ต่างๆ

## ✨ คุณสมบัติหลัก

### 1. หน้าแสดงรายการคอร์ส (Course Catalog)
- แสดงคอร์สทั้งหมดในรูปแบบ grid layout
- Course cards พร้อม thumbnail, title, description และข้อมูลเบื้องต้น
- Hover effects และ animations
- Responsive grid (3 columns → 2 columns → 1 column)

### 2. หน้ารายละเอียดคอร์ส (Course Detail)
- แสดงข้อมูลคอร์สแบบละเอียด
- รายการวิดีโอทั้งหมดในคอร์ส
- Breadcrumb navigation
- Video list พร้อม thumbnail และ duration

### 3. หน้าเล่นวิดีโอ (Video Player)
- Video player พร้อม playlist sidebar
- Previous/Next navigation
- Active video indicator
- Responsive layout (sidebar → bottom playlist บน mobile)

### 4. Global Components
- Responsive header พร้อม navigation
- Mobile hamburger menu
- Footer พร้อมข้อมูลติดต่อ
- Breadcrumb navigation

### 5. Design System
- Color palette (Purple & White theme)
- Typography system
- Spacing และ layout utilities
- Component library

## 🛠 เทคโนโลยีที่ใช้

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript (Vanilla)** - ไม่ใช้ framework เพื่อความเรียบง่าย
- **Google Fonts** - Inter, Noto Sans Thai, Poppins

### ไม่มี Dependencies
โปรเจกต์นี้ไม่ต้องการ build tools หรือ package manager เพียงแค่เปิดไฟล์ HTML ในเบราว์เซอร์

## 📁 โครงสร้างโปรเจกต์

```
video-course-platform/
│
├── index.html                          # หน้าแสดงรายการคอร์ส
│
├── pages/
│   ├── course-detail.html             # หน้ารายละเอียดคอร์ส
│   ├── video-player.html              # หน้าเล่นวิดีโอ
│   └── style-guide.html               # Style guide และ component library
│
├── css/
│   ├── variables.css                  # CSS custom properties
│   ├── styles.css                     # Global styles และ components
│   └── browser-compatibility.css      # Browser-specific fixes
│
├── js/
│   └── main.js                        # JavaScript สำหรับ interactions
│
├── images/
│   ├── icons/                         # SVG icons
│   └── placeholders/                  # Placeholder images
│
├── .kiro/
│   └── specs/
│       └── video-course-platform/
│           ├── requirements.md        # เอกสาร requirements
│           ├── design.md              # เอกสาร design
│           └── tasks.md               # Implementation plan
│
└── docs/
    ├── BROWSER-COMPATIBILITY-REPORT.md
    ├── BROWSER-TESTING-CHECKLIST.md
    ├── RESPONSIVE-TESTING-REPORT.md
    └── WORDPRESS-IMPLEMENTATION-GUIDE.md
```

## 🚀 การติดตั้งและใช้งาน

### ⚡ Quick Start

```bash
# 1. Clone โปรเจกต์
git clone [repository-url]
cd video-course-platform

# 2. เปิดด้วย local server (แนะนำ)
python -m http.server 8000
# หรือ
npx serve

# 3. เปิดเบราว์เซอร์ไปที่
http://localhost:8000
```

**หรือ** เพียงแค่ double-click ที่ `index.html` เพื่อเปิดในเบราว์เซอร์

### ความต้องการของระบบ

- เบราว์เซอร์สมัยใหม่ (Chrome, Firefox, Safari, Edge)
- ไม่ต้องการ web server (สามารถเปิดไฟล์ HTML โดยตรง)
- ไม่ต้องการ Node.js, npm หรือ build tools

### วิธีการใช้งาน

#### 1. Clone หรือ Download โปรเจกต์

```bash
# Clone repository
git clone [repository-url]
cd video-course-platform
```

#### 2. เปิดไฟล์ในเบราว์เซอร์

**วิธีที่ 1: เปิดไฟล์โดยตรง**
- Double-click ที่ `index.html`
- หรือคลิกขวา → Open with → เลือกเบราว์เซอร์

**วิธีที่ 2: ใช้ Local Server (แนะนำ)**

```bash
# ใช้ Python
python -m http.server 8000

# ใช้ Node.js (npx)
npx serve

# ใช้ PHP
php -S localhost:8000
```

จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:8000`

#### 3. สำรวจหน้าต่างๆ

- **หน้าแรก**: `index.html` - Course catalog
- **รายละเอียดคอร์ส**: `pages/course-detail.html`
- **เล่นวิดีโอ**: `pages/video-player.html`
- **Style Guide**: `pages/style-guide.html`

## 📸 Screenshots

Screenshots ของแต่ละหน้าจะถูกเก็บไว้ใน `images/screenshots/` directory

> **หมายเหตุ**: ดูคู่มือการถ่าย screenshots ได้ที่ [SCREENSHOTS.md](SCREENSHOTS.md)

### วิธีการดู Screenshots

1. เปิดไฟล์ HTML ในเบราว์เซอร์เพื่อดูหน้าจริง
2. ดู screenshots ใน `images/screenshots/` (ถ้ามี)
3. ดู mockups ใน `pages/style-guide.html`

### Screenshots ที่ควรมี

- Course Catalog (Desktop, Tablet, Mobile)
- Course Detail (Desktop, Mobile)
- Video Player (Desktop, Mobile)
- Style Guide (Color Palette, Typography, Components)
- Global Components (Header, Footer, Navigation)

สำหรับคำแนะนำการถ่าย screenshots โดยละเอียด ดูที่ [SCREENSHOTS.md](SCREENSHOTS.md)

---

## 📱 หน้าต่างๆ ในเว็บไซต์

### 1. Course Catalog (index.html)

หน้าแสดงรายการคอร์สทั้งหมด

**คุณสมบัติ:**
- Hero section พร้อม gradient background
- Course grid แบบ responsive (3/2/1 columns)
- Course cards พร้อม hover effects
- Loading states และ animations

**Screenshot:**
```
┌─────────────────────────────────────────┐
│         Header (Logo + Nav)             │
├─────────────────────────────────────────┤
│                                         │
│         Hero Section                    │
│    "คอร์สเรียนออนไลน์คุณภาพ"            │
│                                         │
├─────────────────────────────────────────┤
│  [Card]    [Card]    [Card]            │
│  [Card]    [Card]    [Card]            │
├─────────────────────────────────────────┤
│         Footer                          │
└─────────────────────────────────────────┘
```

### 2. Course Detail (pages/course-detail.html)

หน้ารายละเอียดคอร์สและรายการวิดีโอ

**คุณสมบัติ:**
- Breadcrumb navigation
- Course header พร้อม thumbnail และข้อมูล
- Video list พร้อม play icons
- Responsive layout

**Screenshot:**
```
┌─────────────────────────────────────────┐
│  Home > คอร์สทั้งหมด > ชื่อคอร์ส        │
├─────────────────────────────────────────┤
│  [Thumbnail]  Course Title              │
│               ⭐⭐⭐⭐⭐                   │
│               Instructor | 15 videos    │
├─────────────────────────────────────────┤
│  Course Description...                  │
├─────────────────────────────────────────┤
│  เนื้อหาในคอร์ส                         │
│  [▶] 1. Video Title 1      [10:30]     │
│  [▶] 2. Video Title 2      [15:45]     │
│  [▶] 3. Video Title 3      [12:20]     │
└─────────────────────────────────────────┘
```

### 3. Video Player (pages/video-player.html)

หน้าเล่นวิดีโอพร้อม playlist

**คุณสมบัติ:**
- Video player (16:9 aspect ratio)
- Playlist sidebar (desktop) / bottom (mobile)
- Previous/Next navigation
- Active video indicator
- Video navigation JavaScript

**Screenshot (Desktop):**
```
┌──────────────────────────┬──────────────┐
│                          │  Playlist    │
│    Video Player          │  [Active]    │
│    (16:9)                │  [ Video ]   │
│                          │  [ Video ]   │
├──────────────────────────┤              │
│  Video Title             │              │
│  [← Prev]  [Next →]      │              │
└──────────────────────────┴──────────────┘
```

### 4. Style Guide (pages/style-guide.html)

เอกสาร design system และ component library

**เนื้อหา:**
- Color palette
- Typography scale
- Spacing system
- Button variations
- Component examples

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--purple-primary: #7C3AED;
--purple-dark: #5B21B6;
--purple-light: #A78BFA;
--purple-pale: #EDE9FE;

/* Neutral Colors */
--white: #FFFFFF;
--gray-50: #F9FAFB;
--gray-200: #E5E7EB;
--gray-600: #4B5563;
--gray-900: #111827;
```

### Typography

```css
/* Font Families */
--font-primary: 'Inter', 'Noto Sans Thai', sans-serif;
--font-heading: 'Poppins', 'Noto Sans Thai', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Spacing System

```css
/* 8px base unit */
--spacing-xs: 0.25rem;  /* 4px */
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 1.5rem;   /* 24px */
--spacing-xl: 2rem;     /* 32px */
--spacing-2xl: 3rem;    /* 48px */
--spacing-3xl: 4rem;    /* 64px */
```

## 📐 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
```

### Responsive Behavior

| Component | Mobile (<768px) | Tablet (768-1023px) | Desktop (1024px+) |
|-----------|----------------|---------------------|-------------------|
| Course Grid | 1 column | 2 columns | 3 columns |
| Header | Hamburger menu | Hamburger menu | Full navigation |
| Video Layout | Stacked | Stacked | Sidebar |
| Typography | Smaller | Medium | Full size |

### ทดสอบแล้วบน

- ✅ Desktop: 1920px, 1366px, 1024px
- ✅ Tablet: 768px, 834px
- ✅ Mobile: 375px, 414px, 390px

## 🌐 Browser Compatibility

### รองรับเบราว์เซอร์

- ✅ Chrome 90+ (Latest 2 versions)
- ✅ Firefox 88+ (Latest 2 versions)
- ✅ Safari 14+ (Latest 2 versions)
- ✅ Edge 90+ (Latest 2 versions)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

### CSS Features ที่ใช้

- CSS Custom Properties (Variables)
- CSS Grid Layout
- Flexbox
- CSS Transitions & Animations
- Media Queries

### Fallbacks

- ใช้ `browser-compatibility.css` สำหรับ browser-specific fixes
- Graceful degradation สำหรับเบราว์เซอร์เก่า

## 🔧 การนำไปพัฒนาใน WordPress

### Plugins ที่แนะนำ

1. **LearnDash** หรือ **Tutor LMS** - จัดการคอร์สและวิดีโอ
2. **Elementor** หรือ **Beaver Builder** - Page builder
3. **Advanced Custom Fields (ACF)** - Custom fields
4. **Custom Post Type UI** - สร้าง custom post types

### Custom Post Types ที่ต้องสร้าง

```php
// Course Post Type
- Title, Description, Thumbnail
- Custom Fields: instructor, rating, duration, video_count

// Video Post Type  
- Title, Description, Video URL
- Custom Fields: duration, order, course_id
- Relationship: Belongs to Course
```

### Page Templates ที่ต้องสร้าง

- `page-courses.php` - Course catalog
- `single-course.php` - Course detail
- `single-video.php` - Video player

### การใช้ Design System

1. นำ CSS variables จาก `css/variables.css` ไปใช้ใน WordPress theme
2. ใช้ component styles จาก `css/styles.css` เป็นแนวทาง
3. อ้างอิง `pages/style-guide.html` สำหรับ component library

## 📚 เอกสารเพิ่มเติม

### 📖 เอกสารหลัก

| เอกสาร | คำอธิบาย |
|--------|----------|
| [README.md](README.md) | เอกสารหลักของโปรเจกต์ (คุณอยู่ที่นี่) |
| [CHANGELOG.md](CHANGELOG.md) | ประวัติการเปลี่ยนแปลงและ version history |
| [CONTRIBUTING.md](CONTRIBUTING.md) | คู่มือการมีส่วนร่วมและ coding standards |
| [SCREENSHOTS.md](SCREENSHOTS.md) | คู่มือการถ่าย screenshots |

### 📋 เอกสาร Specification

| เอกสาร | คำอธิบาย |
|--------|----------|
| [Requirements](.kiro/specs/video-course-platform/requirements.md) | User stories, acceptance criteria, glossary |
| [Design](.kiro/specs/video-course-platform/design.md) | Design system, component specs, data models |
| [Tasks](.kiro/specs/video-course-platform/tasks.md) | Implementation plan และ task checklist |

### 🧪 เอกสารการทดสอบ

| เอกสาร | คำอธิบาย |
|--------|----------|
| [Browser Compatibility Report](BROWSER-COMPATIBILITY-REPORT.md) | ผลการทดสอบบนเบราว์เซอร์ต่างๆ |
| [Browser Testing Checklist](BROWSER-TESTING-CHECKLIST.md) | Checklist และ test cases |
| [Responsive Testing Report](RESPONSIVE-TESTING-REPORT.md) | ผลการทดสอบ responsive design |

### 🔧 คู่มือการพัฒนา

| เอกสาร | คำอธิบาย |
|--------|----------|
| [WordPress Implementation Guide](WORDPRESS-IMPLEMENTATION-GUIDE.md) | คำแนะนำการนำไปพัฒนาใน WordPress |
| [Assets README](images/ASSETS-README.md) | คำอธิบาย assets และ image specs |
| [Style Guide](pages/style-guide.html) | Component library และ design system (HTML) |

### 📂 โครงสร้างเอกสาร

```
docs/
├── README.md                           # เอกสารหลัก
├── CHANGELOG.md                        # Version history
├── CONTRIBUTING.md                     # Contribution guide
├── SCREENSHOTS.md                      # Screenshot guide
├── BROWSER-COMPATIBILITY-REPORT.md     # Browser testing
├── BROWSER-TESTING-CHECKLIST.md        # Test checklist
├── RESPONSIVE-TESTING-REPORT.md        # Responsive testing
└── WORDPRESS-IMPLEMENTATION-GUIDE.md   # WordPress guide
```

## 🎯 Features และ Highlights

### Accessibility

- ✅ Semantic HTML5
- ✅ ARIA labels สำหรับ icons
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Alt text สำหรับรูปภาพทั้งหมด
- ✅ Color contrast ratio ≥ 4.5:1

### Performance

- ✅ ไม่มี external dependencies
- ✅ Optimized CSS (no unused styles)
- ✅ Minimal JavaScript
- ✅ Fast loading time

### Code Quality

- ✅ Clean, readable code
- ✅ Consistent naming conventions
- ✅ Comments ภาษาไทยและอังกฤษ
- ✅ Modular CSS structure
- ✅ Reusable components

## 🤝 การมีส่วนร่วม

เรายินดีรับการมีส่วนร่วมจากทุกคน! 

### Quick Start

1. Fork โปรเจกต์
2. สร้าง feature branch (`git checkout -b feature/amazing-feature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add: amazing feature'`)
4. Push ไปยัง branch (`git push origin feature/amazing-feature`)
5. สร้าง Pull Request

### คู่มือโดยละเอียด

อ่านคู่มือการมีส่วนร่วมแบบละเอียดได้ที่ [CONTRIBUTING.md](CONTRIBUTING.md)

รวมถึง:
- Coding standards (HTML, CSS, JavaScript)
- Design guidelines
- Testing checklist
- Pull request process
- Bug report และ feature request templates

### Coding Standards (สรุป)

- **HTML**: Semantic HTML5, 2 spaces indent
- **CSS**: kebab-case classes, CSS variables, mobile-first
- **JavaScript**: camelCase variables, ES6+, comments

## 📝 License

โปรเจกต์นี้สร้างขึ้นเพื่อใช้เป็น design mockup และ reference สำหรับการพัฒนา WordPress

สามารถนำไปใช้และดัดแปลงได้ตามต้องการ

## 📞 ติดต่อและสนับสนุน

### ต้องการความช่วยเหลือ?

- 📖 อ่านเอกสารใน [เอกสารเพิ่มเติม](#เอกสารเพิ่มเติม)
- 🎨 ดู [Style Guide](pages/style-guide.html) สำหรับ component library
- 🐛 เปิด [Issue](../../issues) สำหรับรายงาน bugs
- 💡 เปิด [Discussion](../../discussions) สำหรับคำถามและไอเดีย

### มีคำถาม?

1. ตรวจสอบ [README.md](README.md) และเอกสารที่เกี่ยวข้อง
2. ดู [existing issues](../../issues) ว่ามีคนถามคำถามเดียวกันหรือไม่
3. เปิด issue ใหม่พร้อมรายละเอียดที่ชัดเจน

## 🎯 Project Status

### Current Version: 1.0.0

✅ **Complete** - Design mockup พร้อมสำหรับการนำไปพัฒนาใน WordPress

### What's Included

- ✅ 3 main pages (Course Catalog, Course Detail, Video Player)
- ✅ Style guide และ component library
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Browser compatibility (Chrome, Firefox, Safari, Edge)
- ✅ Accessibility features (WCAG 2.1 AA)
- ✅ Complete documentation
- ✅ WordPress implementation guide

### Next Steps

1. **Review**: ทบทวน design และ functionality
2. **Screenshots**: ถ่าย screenshots ตาม [SCREENSHOTS.md](SCREENSHOTS.md)
3. **WordPress**: เริ่มพัฒนาใน WordPress ตาม [WordPress Guide](WORDPRESS-IMPLEMENTATION-GUIDE.md)

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| Pages | 4 (Catalog, Detail, Player, Style Guide) |
| Components | 10+ (Header, Footer, Cards, etc.) |
| CSS Variables | 50+ |
| Lines of Code | ~2,000+ |
| Documentation | 8 files |
| Browser Support | 6+ browsers |
| Responsive Breakpoints | 4 |

## 🏆 Features Highlights

### Design
- 🎨 Modern purple & white theme
- 📱 Mobile-first responsive design
- ✨ Smooth animations and transitions
- 🎯 Consistent design system

### Development
- 🚀 No dependencies (vanilla HTML/CSS/JS)
- ⚡ Fast loading and performance
- 🧩 Modular and reusable components
- 📝 Well-documented code

### Accessibility
- ♿ WCAG 2.1 AA compliant
- ⌨️ Keyboard navigation
- 🎯 Focus indicators
- 📱 Touch-friendly (44px targets)

### Documentation
- 📚 Comprehensive README
- 🔧 WordPress implementation guide
- 🧪 Testing reports and checklists
- 🤝 Contribution guidelines

## 🙏 Acknowledgments

### Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling (Grid, Flexbox, Custom Properties)
- **JavaScript** - Vanilla JS for interactions
- **Google Fonts** - Inter, Noto Sans Thai, Poppins

### Inspiration

- Modern e-learning platforms
- Material Design principles
- Tailwind CSS design system
- WordPress theme best practices

---

<div align="center">

**สร้างด้วย ❤️ สำหรับการพัฒนา WordPress Video Course Platform**

**Version 1.0.0** | **Last Updated: November 2024**

[📖 Documentation](#เอกสารเพิ่มเติม) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues) • [🤝 Contribute](CONTRIBUTING.md)

---

⭐ ถ้าโปรเจกต์นี้มีประโยชน์ อย่าลืม star repository นี้!

</div>
#   c o u r s e _ p l a t f o r m _ u i _ d e s i g n  
 