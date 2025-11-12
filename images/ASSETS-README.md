# Assets Documentation

## Overview
รวบรวม assets ทั้งหมดที่ใช้ในโปรเจกต์ Video Course Platform สำหรับใช้เป็นแนวทางในการพัฒนา WordPress

## Directory Structure

```
images/
├── icons/              # SVG icons
├── placeholders/       # Placeholder images
└── ASSETS-README.md    # This file
```

## Icons (SVG)

### Navigation Icons
- **menu-icon.svg** - Hamburger menu icon (24x24px)
- **close-icon.svg** - Close/X icon (24x24px)
- **search-icon.svg** - Search icon (24x24px)

### Video Player Icons
- **play-icon.svg** - Play button with purple circle (24x24px)
- **pause-icon.svg** - Pause button with purple circle (24x24px)
- **next-icon.svg** - Next arrow icon (24x24px)
- **previous-icon.svg** - Previous arrow icon (24x24px)

### UI Icons
- **user-icon.svg** - User/instructor icon (16x16px)
- **video-icon.svg** - Video camera icon (16x16px)
- **clock-icon.svg** - Duration/time icon (16x16px)
- **star-icon.svg** - Rating star icon (16x16px)

### Icon Usage
```html
<!-- Inline SVG -->
<img src="images/icons/play-icon.svg" alt="Play">

<!-- As background image in CSS -->
.play-button {
  background-image: url('../images/icons/play-icon.svg');
}
```

## Placeholder Images (SVG)

### Course Thumbnails
- **course-placeholder-1.svg** (800x450px) - Light purple background
- **course-placeholder-2.svg** (800x450px) - Medium purple background

### Video Thumbnails
- **video-placeholder.svg** (640x360px) - Gray background with play icon

### Hero Section
- **hero-background.svg** (1920x400px) - Purple gradient with decorative circles

### Logo
- **logo-placeholder.svg** (180x40px) - Purple logo with text

### Recommended Sizes for Production

#### Course Thumbnails
- **Desktop:** 800x450px (16:9 ratio)
- **Tablet:** 600x338px
- **Mobile:** 400x225px
- **Format:** JPG (quality 85%) or WebP

#### Video Thumbnails
- **Standard:** 640x360px (16:9 ratio)
- **Small:** 320x180px (for playlist items)
- **Format:** JPG (quality 80%) or WebP

#### Hero Images
- **Desktop:** 1920x400px
- **Tablet:** 1024x300px
- **Mobile:** 768x300px
- **Format:** JPG (quality 85%) or WebP

## Color Palette Reference

### Primary Colors
- Purple Primary: `#7C3AED`
- Purple Dark: `#5B21B6`
- Purple Light: `#A78BFA`
- Purple Pale: `#EDE9FE`

### Neutral Colors
- White: `#FFFFFF`
- Gray 50: `#F9FAFB`
- Gray 200: `#E5E7EB`
- Gray 600: `#4B5563`
- Gray 900: `#111827`

## WordPress Implementation

### Featured Images
ใน WordPress ควรตั้งค่า Featured Image sizes:

```php
// functions.php
add_theme_support('post-thumbnails');

// Course thumbnail
add_image_size('course-thumbnail', 800, 450, true);

// Video thumbnail
add_image_size('video-thumbnail', 640, 360, true);

// Video thumbnail small (for playlist)
add_image_size('video-thumbnail-small', 320, 180, true);
```

### Media Library Organization
แนะนำให้จัดระเบียบไฟล์ใน Media Library:
- `/courses/` - Course thumbnails
- `/videos/` - Video thumbnails
- `/icons/` - UI icons
- `/hero/` - Hero section images

### Optimization Tips
1. ใช้ WebP format สำหรับรูปภาพเพื่อลดขนาดไฟล์
2. ติดตั้ง plugin เช่น Smush หรือ ShortPixel สำหรับ image optimization
3. ใช้ lazy loading สำหรับรูปภาพที่อยู่ด้านล่างหน้า
4. สร้าง responsive images ด้วย `srcset` attribute

### Example Usage in WordPress

```php
<?php
// Get course thumbnail
$thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'course-thumbnail');
?>

<div class="course-card">
  <img src="<?php echo esc_url($thumbnail_url); ?>" 
       alt="<?php the_title(); ?>"
       loading="lazy">
</div>
```

## Icon Font Alternative

หากต้องการใช้ icon font แทน SVG สามารถใช้:
- **Font Awesome** - https://fontawesome.com/
- **Material Icons** - https://fonts.google.com/icons
- **Heroicons** - https://heroicons.com/

## Social Media Icons

สำหรับ footer social media links แนะนำให้ใช้:
- Facebook: https://fontawesome.com/icons/facebook
- Twitter/X: https://fontawesome.com/icons/x-twitter
- Instagram: https://fontawesome.com/icons/instagram
- YouTube: https://fontawesome.com/icons/youtube

## Notes

- ไฟล์ SVG ทั้งหมดสามารถแก้ไขสีได้ผ่าน CSS `fill` property
- Placeholder images เป็น SVG เพื่อให้ขนาดไฟล์เล็กและ scalable
- ในการใช้งานจริง ควรแทนที่ placeholder ด้วยรูปภาพจริง
- ตรวจสอบให้แน่ใจว่ารูปภาพทั้งหมดมี alt text สำหรับ accessibility

## License

Assets เหล่านี้สร้างขึ้นสำหรับโปรเจกต์นี้โดยเฉพาะ สามารถใช้และแก้ไขได้ตามต้องการ
