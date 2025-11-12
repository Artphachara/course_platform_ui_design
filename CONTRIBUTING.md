# Contributing Guide

คู่มือสำหรับการมีส่วนร่วมในการพัฒนาโปรเจกต์ Video Course Platform

## 🎯 การมีส่วนร่วม

เรายินดีรับการมีส่วนร่วมจากทุกคน ไม่ว่าจะเป็น:

- 🐛 รายงาน bugs
- 💡 เสนอ features ใหม่
- 📝 ปรับปรุงเอกสาร
- 🎨 ปรับปรุง design
- 💻 เขียน code
- 🧪 เพิ่ม tests

## 📋 ก่อนเริ่มต้น

### อ่านเอกสารเหล่านี้ก่อน

1. [README.md](README.md) - ภาพรวมโปรเจกต์
2. [Design Document](.kiro/specs/video-course-platform/design.md) - Design system
3. [Requirements](.kiro/specs/video-course-platform/requirements.md) - Requirements
4. [Style Guide](pages/style-guide.html) - Component library

### เครื่องมือที่ต้องการ

- Text editor (VS Code, Sublime Text, etc.)
- เบราว์เซอร์สมัยใหม่ (Chrome แนะนำสำหรับ DevTools)
- Git (สำหรับ version control)
- (Optional) Local server (Python, Node.js, PHP)

## 🔄 Process การมีส่วนร่วม

### 1. Fork และ Clone

```bash
# Fork repository บน GitHub
# จากนั้น clone fork ของคุณ
git clone https://github.com/YOUR-USERNAME/video-course-platform.git
cd video-course-platform
```

### 2. สร้าง Branch ใหม่

```bash
# สร้าง branch จาก main
git checkout -b feature/your-feature-name

# หรือสำหรับ bug fix
git checkout -b fix/bug-description
```

### 3. ทำการเปลี่ยนแปลง

- เขียน code ตาม coding standards (ดูด้านล่าง)
- ทดสอบการเปลี่ยนแปลงบนเบราว์เซอร์ต่างๆ
- ทดสอบ responsive design
- อัพเดทเอกสารถ้าจำเป็น

### 4. Commit การเปลี่ยนแปลง

```bash
# เพิ่มไฟล์ที่เปลี่ยนแปลง
git add .

# Commit พร้อม message ที่ชัดเจน
git commit -m "Add: course card hover animation"
```

### 5. Push และสร้าง Pull Request

```bash
# Push ไปยัง fork ของคุณ
git push origin feature/your-feature-name

# จากนั้นสร้าง Pull Request บน GitHub
```

## 📝 Coding Standards

### HTML

#### Structure
```html
<!-- ใช้ semantic HTML5 -->
<header>
  <nav>
    <ul>
      <li><a href="#">Link</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>Section Title</h2>
    <p>Content...</p>
  </section>
</main>

<footer>
  <!-- Footer content -->
</footer>
```

#### Best Practices
- ใช้ semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- เพิ่ม `alt` attribute สำหรับรูปภาพทั้งหมด
- ใช้ ARIA labels สำหรับ icons และ interactive elements
- Indent ด้วย 2 spaces
- ใช้ lowercase สำหรับ tags และ attributes

### CSS

#### Naming Convention
```css
/* ใช้ kebab-case สำหรับ class names */
.course-card { }
.video-player { }
.btn-primary { }

/* ใช้ BEM notation สำหรับ components ที่ซับซ้อน */
.course-card { }
.course-card__title { }
.course-card__description { }
.course-card--featured { }
```

#### Organization
```css
/* 1. Variables */
:root {
  --color-primary: #7C3AED;
}

/* 2. Reset/Base */
* {
  margin: 0;
  padding: 0;
}

/* 3. Layout */
.container { }
.grid { }

/* 4. Components */
.course-card { }
.video-player { }

/* 5. Utilities */
.text-center { }
.mt-4 { }

/* 6. Media Queries */
@media (max-width: 768px) { }
```

#### Best Practices
- ใช้ CSS custom properties (variables) จาก `css/variables.css`
- Mobile-first approach (เขียน base styles สำหรับ mobile ก่อน)
- ใช้ Flexbox และ Grid สำหรับ layout
- เพิ่ม comments เป็นภาษาไทยหรืออังกฤษ
- Indent ด้วย 2 spaces
- เว้นบรรทัดระหว่าง rule sets

#### Example
```css
/* Course Card Component */
.course-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Responsive */
@media (max-width: 768px) {
  .course-card {
    padding: var(--spacing-md);
  }
}
```

### JavaScript

#### Naming Convention
```javascript
// ใช้ camelCase สำหรับ variables และ functions
const courseData = [];
function getCourseById(id) { }

// ใช้ PascalCase สำหรับ classes
class CourseManager { }

// ใช้ UPPER_CASE สำหรับ constants
const API_URL = 'https://api.example.com';
const MAX_COURSES = 100;
```

#### Best Practices
```javascript
// ใช้ const และ let แทน var
const courses = [];
let currentVideo = null;

// ใช้ arrow functions
const getCourse = (id) => {
  return courses.find(course => course.id === id);
};

// ใช้ template literals
const message = `Found ${courses.length} courses`;

// เพิ่ม comments
// Get course by ID and update UI
function displayCourse(courseId) {
  const course = getCourse(courseId);
  // Update DOM...
}

// Error handling
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Failed to parse JSON:', error);
}
```

#### Code Organization
```javascript
// 1. Constants
const API_URL = 'https://api.example.com';

// 2. State/Data
let courses = [];
let currentVideo = null;

// 3. Helper Functions
function formatDuration(seconds) { }

// 4. Main Functions
function loadCourses() { }
function displayCourses() { }

// 5. Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  loadCourses();
});
```

## 🎨 Design Guidelines

### ใช้ Design System

ทุกการเปลี่ยนแปลงต้องสอดคล้องกับ design system:

```css
/* Colors - ใช้จาก variables.css */
var(--purple-primary)
var(--purple-dark)
var(--gray-600)

/* Spacing - ใช้ spacing scale */
var(--spacing-sm)   /* 8px */
var(--spacing-md)   /* 16px */
var(--spacing-lg)   /* 24px */

/* Typography - ใช้ defined sizes */
var(--text-base)    /* 16px */
var(--text-lg)      /* 18px */
var(--text-2xl)     /* 24px */
```

### Responsive Design

```css
/* Mobile First */
.element {
  /* Base styles for mobile */
  width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    width: 33.333%;
  }
}
```

### Accessibility

- Color contrast ratio ≥ 4.5:1
- Touch targets ≥ 44px x 44px
- Keyboard navigation support
- ARIA labels สำหรับ icons
- Alt text สำหรับรูปภาพ

## 🧪 Testing

### Manual Testing Checklist

#### Functionality
- [ ] ทุก links ทำงานถูกต้อง
- [ ] Navigation menu เปิด/ปิดได้
- [ ] Video player controls ทำงาน
- [ ] Previous/Next navigation ทำงาน
- [ ] Hover states แสดงผลถูกต้อง

#### Responsive Design
- [ ] ทดสอบบน Desktop (1920px, 1366px, 1024px)
- [ ] ทดสอบบน Tablet (768px)
- [ ] ทดสอบบน Mobile (375px, 414px)
- [ ] Grid layout ปรับตัวถูกต้อง
- [ ] Typography readable ทุกขนาด

#### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Accessibility
- [ ] Keyboard navigation ทำงาน
- [ ] Focus indicators มองเห็นได้
- [ ] Alt text ครบถ้วน
- [ ] ARIA labels ถูกต้อง
- [ ] Color contrast เพียงพอ

### Testing Tools

```bash
# ใช้ browser DevTools
# Chrome: F12 → Lighthouse → Run audit

# ทดสอบ responsive
# Chrome: F12 → Toggle device toolbar (Ctrl+Shift+M)

# ทดสอบ accessibility
# Chrome: F12 → Lighthouse → Accessibility
```

## 📦 Pull Request Guidelines

### PR Title Format

```
[Type] Brief description

Types:
- Add: เพิ่ม feature ใหม่
- Fix: แก้ไข bug
- Update: อัพเดท existing feature
- Refactor: ปรับปรุง code structure
- Docs: เปลี่ยนแปลงเอกสาร
- Style: เปลี่ยนแปลง styling
```

### PR Description Template

```markdown
## Description
อธิบายการเปลี่ยนแปลงโดยสังเขป

## Changes
- เปลี่ยนแปลงอะไรบ้าง
- ไฟล์ไหนที่ถูกแก้ไข

## Screenshots (ถ้ามี)
แนบ screenshots ของการเปลี่ยนแปลง

## Testing
- [ ] ทดสอบบน Chrome
- [ ] ทดสอบบน Firefox
- [ ] ทดสอบ responsive design
- [ ] ทดสอบ accessibility

## Related Issues
Closes #123
```

### Review Process

1. **Automated Checks** (ถ้ามี)
   - Code linting
   - Build success

2. **Manual Review**
   - Code quality
   - Design consistency
   - Documentation
   - Testing coverage

3. **Approval**
   - อย่างน้อย 1 approval
   - ผ่าน all checks

## 🐛 Bug Reports

### Template

```markdown
## Bug Description
อธิบาย bug ที่พบ

## Steps to Reproduce
1. ไปที่หน้า...
2. คลิกที่...
3. เห็น error...

## Expected Behavior
ควรจะเป็นอย่างไร

## Actual Behavior
เป็นอย่างไรจริงๆ

## Screenshots
แนบ screenshots ถ้ามี

## Environment
- Browser: Chrome 120
- OS: Windows 11
- Screen size: 1920x1080
```

## 💡 Feature Requests

### Template

```markdown
## Feature Description
อธิบาย feature ที่ต้องการ

## Use Case
ใช้งานในกรณีไหน

## Proposed Solution
เสนอวิธีการทำ

## Alternatives
มีทางเลือกอื่นไหม

## Additional Context
ข้อมูลเพิ่มเติม
```

## 📚 Resources

### เอกสารอ้างอิง

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript
- [CSS Tricks](https://css-tricks.com/) - CSS techniques
- [Web.dev](https://web.dev/) - Best practices
- [A11y Project](https://www.a11yproject.com/) - Accessibility

### Tools

- [Can I Use](https://caniuse.com/) - Browser compatibility
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Color contrast
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit

## ❓ Questions?

หากมีคำถามหรือต้องการความช่วยเหลือ:

1. เปิด Issue บน GitHub
2. ดูเอกสารใน `/docs` folder
3. ตรวจสอบ existing issues และ PRs

## 🙏 Thank You!

ขอบคุณสำหรับการมีส่วนร่วมในโปรเจกต์!

---

**Happy Coding! 🚀**
