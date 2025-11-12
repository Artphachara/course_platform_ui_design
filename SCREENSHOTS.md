# Screenshots Guide

คู่มือการถ่าย screenshots สำหรับเอกสารโปรเจกต์

## 📸 รายการ Screenshots ที่ต้องการ

### หน้า Course Catalog (index.html)

#### Desktop View (1920px)
- [ ] Full page view พร้อม hero section และ course grid
- [ ] Hero section closeup
- [ ] Course cards hover state
- [ ] Header navigation

**ชื่อไฟล์:**
- `images/screenshots/01-course-catalog-desktop-full.png`
- `images/screenshots/02-course-catalog-hero.png`
- `images/screenshots/03-course-card-hover.png`

#### Tablet View (768px)
- [ ] Full page view (2 column grid)
- [ ] Mobile menu

**ชื่อไฟล์:**
- `images/screenshots/04-course-catalog-tablet.png`

#### Mobile View (375px)
- [ ] Full page view (1 column grid)
- [ ] Mobile menu opened
- [ ] Course card mobile

**ชื่อไฟล์:**
- `images/screenshots/05-course-catalog-mobile.png`
- `images/screenshots/06-mobile-menu-open.png`

---

### หน้า Course Detail (pages/course-detail.html)

#### Desktop View
- [ ] Full page view
- [ ] Course header section
- [ ] Video list section
- [ ] Video item hover state

**ชื่อไฟล์:**
- `images/screenshots/07-course-detail-desktop.png`
- `images/screenshots/08-course-header.png`
- `images/screenshots/09-video-list.png`

#### Mobile View
- [ ] Full page view
- [ ] Stacked course header
- [ ] Mobile video list

**ชื่อไฟล์:**
- `images/screenshots/10-course-detail-mobile.png`

---

### หน้า Video Player (pages/video-player.html)

#### Desktop View
- [ ] Full page with sidebar playlist
- [ ] Video player closeup
- [ ] Playlist sidebar
- [ ] Active video indicator

**ชื่อไฟล์:**
- `images/screenshots/11-video-player-desktop.png`
- `images/screenshots/12-video-player-closeup.png`
- `images/screenshots/13-playlist-sidebar.png`

#### Mobile View
- [ ] Stacked layout (player + playlist below)
- [ ] Mobile playlist

**ชื่อไฟล์:**
- `images/screenshots/14-video-player-mobile.png`

---

### หน้า Style Guide (pages/style-guide.html)

- [ ] Color palette section
- [ ] Typography scale
- [ ] Button variations
- [ ] Component library

**ชื่อไฟล์:**
- `images/screenshots/15-style-guide-colors.png`
- `images/screenshots/16-style-guide-typography.png`
- `images/screenshots/17-style-guide-buttons.png`
- `images/screenshots/18-style-guide-components.png`

---

### Components Closeups

- [ ] Header desktop
- [ ] Header mobile (hamburger)
- [ ] Footer
- [ ] Course card
- [ ] Video list item
- [ ] Breadcrumb navigation

**ชื่อไฟล์:**
- `images/screenshots/19-header-desktop.png`
- `images/screenshots/20-header-mobile.png`
- `images/screenshots/21-footer.png`
- `images/screenshots/22-course-card.png`
- `images/screenshots/23-video-list-item.png`
- `images/screenshots/24-breadcrumb.png`

---

## 🛠 วิธีการถ่าย Screenshots

### วิธีที่ 1: ใช้ Chrome DevTools (แนะนำ)

1. เปิดหน้าที่ต้องการถ่ายใน Chrome
2. กด `F12` เพื่อเปิด DevTools
3. กด `Ctrl+Shift+M` (Windows) หรือ `Cmd+Shift+M` (Mac) เพื่อเปิด Device Toolbar
4. เลือกขนาดหน้าจอ:
   - Desktop: Responsive → ตั้งเป็น 1920 x 1080
   - Tablet: iPad → 768 x 1024
   - Mobile: iPhone SE → 375 x 667
5. ถ่าย screenshot:
   - กด `Ctrl+Shift+P` (Windows) หรือ `Cmd+Shift+P` (Mac)
   - พิมพ์ "screenshot"
   - เลือก "Capture full size screenshot" หรือ "Capture screenshot"

### วิธีที่ 2: ใช้ Firefox Developer Tools

1. เปิดหน้าที่ต้องการถ่ายใน Firefox
2. กด `F12` เพื่อเปิด Developer Tools
3. กด `Ctrl+Shift+M` เพื่อเปิด Responsive Design Mode
4. เลือกขนาดหน้าจอจาก dropdown
5. คลิกไอคอน camera ที่มุมขวาบน หรือ
6. คลิกขวาที่หน้าเว็บ → "Take a Screenshot"

### วิธีที่ 3: ใช้ Browser Extensions

**Chrome Extensions:**
- [Full Page Screen Capture](https://chrome.google.com/webstore/detail/full-page-screen-capture/)
- [Awesome Screenshot](https://chrome.google.com/webstore/detail/awesome-screenshot-screen/)
- [GoFullPage](https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/)

**Firefox Add-ons:**
- [Fireshot](https://addons.mozilla.org/en-US/firefox/addon/fireshot/)
- [Nimbus Screenshot](https://addons.mozilla.org/en-US/firefox/addon/nimbus-screenshot/)

### วิธีที่ 4: ใช้ Desktop Tools

**Windows:**
- Snipping Tool (Win + Shift + S)
- Snip & Sketch

**Mac:**
- Screenshot (Cmd + Shift + 4)
- Cmd + Shift + 5 (macOS Mojave+)

---

## 📐 ข้อกำหนดรูปภาพ

### ขนาดหน้าจอ

| Device | Width | Height | Use Case |
|--------|-------|--------|----------|
| Desktop | 1920px | Auto | Full desktop view |
| Laptop | 1366px | Auto | Standard laptop |
| Tablet | 768px | 1024px | iPad portrait |
| Mobile | 375px | 667px | iPhone SE |
| Mobile Large | 414px | 896px | iPhone 11 Pro Max |

### รูปแบบไฟล์

- **Format**: PNG (แนะนำสำหรับ UI screenshots)
- **Quality**: High (90-100% สำหรับ PNG)
- **Color**: RGB
- **Compression**: ใช้ tools เช่น TinyPNG, ImageOptim

### การตั้งชื่อไฟล์

รูปแบบ: `[number]-[page]-[device]-[description].png`

ตัวอย่าง:
- `01-course-catalog-desktop-full.png`
- `05-course-catalog-mobile.png`
- `11-video-player-desktop.png`

---

## 🎨 Tips สำหรับ Screenshots ที่ดี

### 1. ความละเอียดและคุณภาพ
- ใช้ความละเอียดจริงของหน้าจอ (ไม่ zoom in/out)
- ตั้ง browser zoom เป็น 100%
- ปิด browser extensions ที่ไม่จำเป็น

### 2. เนื้อหาในภาพ
- แสดงเนื้อหาที่สมบูรณ์และมีความหมาย
- ใช้ข้อมูลตัวอย่างที่เหมาะสม (ไม่ใช่ Lorem Ipsum)
- แสดง hover states และ interactions

### 3. การจัดองค์ประกอบ
- Full page: แสดงทั้งหน้าจาก header ถึง footer
- Section: โฟกัสที่ส่วนที่สำคัญ
- Component: แสดง component พร้อม context รอบข้าง

### 4. Consistency
- ใช้ขนาดหน้าจอเดียวกันสำหรับหน้าเดียวกัน
- ใช้ browser เดียวกัน (แนะนำ Chrome)
- ถ่ายในโหมด light mode

---

## 🔄 การอัพเดท Screenshots

### เมื่อไหร่ควรอัพเดท

- เมื่อมีการเปลี่ยนแปลง design ที่สำคัญ
- เมื่อเพิ่ม features ใหม่
- เมื่อแก้ไข bugs ที่มองเห็นได้
- เมื่อเปลี่ยน color scheme หรือ typography

### Checklist ก่อนอัพเดท

- [ ] ตรวจสอบว่าทุกหน้าทำงานถูกต้อง
- [ ] Clear browser cache
- [ ] ใช้ข้อมูลตัวอย่างที่สมบูรณ์
- [ ] ทดสอบบนขนาดหน้าจอที่กำหนด
- [ ] ตรวจสอบ responsive behavior

---

## 📝 การเพิ่ม Screenshots ใน README

หลังจากถ่าย screenshots แล้ว ให้เพิ่มใน README.md:

```markdown
## 📸 Screenshots

### Course Catalog
![Course Catalog Desktop](images/screenshots/01-course-catalog-desktop-full.png)
*หน้าแสดงรายการคอร์สทั้งหมด - Desktop View*

![Course Catalog Mobile](images/screenshots/05-course-catalog-mobile.png)
*หน้าแสดงรายการคอร์สทั้งหมด - Mobile View*

### Course Detail
![Course Detail](images/screenshots/07-course-detail-desktop.png)
*หน้ารายละเอียดคอร์สและรายการวิดีโอ*

### Video Player
![Video Player](images/screenshots/11-video-player-desktop.png)
*หน้าเล่นวิดีโอพร้อม playlist sidebar*

### Style Guide
![Style Guide](images/screenshots/15-style-guide-colors.png)
*Design System - Color Palette*
```

---

## 🎯 Quick Start

### ถ่าย Screenshots ทั้งหมดอย่างรวดเร็ว

1. เปิด Chrome และติดตั้ง "Full Page Screen Capture" extension
2. เปิด `index.html` ในเบราว์เซอร์
3. ตั้งขนาดหน้าจอเป็น 1920px
4. คลิก extension icon และบันทึกเป็น `01-course-catalog-desktop-full.png`
5. เปลี่ยนเป็น 768px และถ่ายอีกครั้ง
6. เปลี่ยนเป็น 375px และถ่ายอีกครั้ง
7. ทำซ้ำกับหน้าอื่นๆ

### Automation (Optional)

สามารถใช้ tools เช่น Puppeteer หรือ Playwright เพื่อถ่าย screenshots อัตโนมัติ:

```javascript
// Example with Puppeteer
const puppeteer = require('puppeteer');

async function takeScreenshots() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Desktop
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:8000/index.html');
  await page.screenshot({ 
    path: 'images/screenshots/01-course-catalog-desktop-full.png',
    fullPage: true 
  });
  
  // Mobile
  await page.setViewport({ width: 375, height: 667 });
  await page.screenshot({ 
    path: 'images/screenshots/05-course-catalog-mobile.png',
    fullPage: true 
  });
  
  await browser.close();
}
```

---

## ✅ Checklist

ใช้ checklist นี้เพื่อตรวจสอบว่าได้ screenshots ครบถ้วน:

### Course Catalog
- [ ] Desktop full page
- [ ] Tablet view
- [ ] Mobile view
- [ ] Hero section
- [ ] Course card hover
- [ ] Mobile menu

### Course Detail
- [ ] Desktop full page
- [ ] Mobile view
- [ ] Course header
- [ ] Video list

### Video Player
- [ ] Desktop with sidebar
- [ ] Mobile stacked
- [ ] Playlist closeup

### Style Guide
- [ ] Color palette
- [ ] Typography
- [ ] Components

### Global Components
- [ ] Header desktop
- [ ] Header mobile
- [ ] Footer
- [ ] Breadcrumb

---

**หมายเหตุ**: Screenshots เป็นส่วนสำคัญของเอกสาร ช่วยให้ผู้ใช้และนักพัฒนาเข้าใจ design และ functionality ได้ง่ายขึ้น
