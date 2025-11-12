# WordPress Implementation Guide

## Overview
คู่มือการนำ mockup HTML/CSS/JS ไปพัฒนาเป็นเว็บไซต์ WordPress สำหรับแพลตฟอร์มคอร์สวิดีโอ

## Table of Contents
1. [Recommended Plugins](#recommended-plugins)
2. [Custom Post Types](#custom-post-types)
3. [Page Templates](#page-templates)
4. [Theme Development](#theme-development)
5. [Database Structure](#database-structure)
6. [Implementation Steps](#implementation-steps)

---

## Recommended Plugins

### Essential Plugins

#### 1. Learning Management System (LMS)
**LearnDash** (แนะนำ) หรือ **Tutor LMS**
- จัดการคอร์สและบทเรียน
- ระบบ progress tracking
- Quiz และ assignments
- Certificate generation

```php
// LearnDash installation
// Download from: https://www.learndash.com/
// หรือติดตั้งผ่าน WordPress admin
```

#### 2. Page Builder
**Elementor Pro** หรือ **Beaver Builder**
- สร้างหน้าตามดีไซน์ mockup
- Drag-and-drop interface
- Custom widgets

#### 3. Custom Fields
**Advanced Custom Fields (ACF) Pro**
- เพิ่ม custom fields สำหรับ courses และ videos
- Flexible content layouts

#### 4. Video Management
**Presto Player** หรือ **FV Flowplayer**
- HTML5 video player
- Playlist support
- Video analytics

#### 5. Performance & Optimization
- **WP Rocket** - Caching
- **Smush** - Image optimization
- **Autoptimize** - CSS/JS minification

#### 6. SEO
**Yoast SEO** หรือ **Rank Math**
- Meta tags optimization
- XML sitemaps
- Schema markup

### Optional Plugins
- **WPForms** - Contact forms
- **UpdraftPlus** - Backup
- **Wordfence** - Security
- **WPML** - Multi-language support

---

## Custom Post Types

### 1. Course Post Type

```php
// functions.php หรือ custom plugin
function register_course_post_type() {
    $labels = array(
        'name' => 'คอร์ส',
        'singular_name' => 'คอร์ส',
        'add_new' => 'เพิ่มคอร์สใหม่',
        'add_new_item' => 'เพิ่มคอร์สใหม่',
        'edit_item' => 'แก้ไขคอร์ส',
        'new_item' => 'คอร์สใหม่',
        'view_item' => 'ดูคอร์ส',
        'search_items' => 'ค้นหาคอร์ส',
        'not_found' => 'ไม่พบคอร์ส',
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-video-alt3',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'courses'),
        'show_in_rest' => true, // Enable Gutenberg
    );
    
    register_post_type('course', $args);
}
add_action('init', 'register_course_post_type');
```

### 2. Video Post Type

```php
function register_video_post_type() {
    $labels = array(
        'name' => 'วิดีโอ',
        'singular_name' => 'วิดีโอ',
        'add_new' => 'เพิ่มวิดีโอใหม่',
    );
    
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-video-alt2',
        'supports' => array('title', 'editor', 'thumbnail'),
        'rewrite' => array('slug' => 'videos'),
        'show_in_rest' => true,
    );
    
    register_post_type('video', $args);
}
add_action('init', 'register_video_post_type');
```


### 3. Custom Taxonomies

```php
// Course Categories
function register_course_taxonomy() {
    register_taxonomy('course_category', 'course', array(
        'label' => 'หมวดหมู่คอร์ส',
        'hierarchical' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'register_course_taxonomy');
```

### 4. Custom Fields (ACF)

**Course Fields:**
- `instructor_name` (Text)
- `course_rating` (Number, 0-5)
- `total_duration` (Text, e.g., "5 ชั่วโมง")
- `video_count` (Number)
- `course_level` (Select: Beginner, Intermediate, Advanced)
- `course_price` (Number)

**Video Fields:**
- `video_url` (URL or File)
- `video_duration` (Text, e.g., "10:30")
- `video_order` (Number)
- `parent_course` (Relationship to Course)
- `is_free_preview` (True/False)

---

## Page Templates

### 1. Course Catalog Template (page-courses.php)

```php
<?php
/**
 * Template Name: Course Catalog
 */
get_header();
?>

<div class="hero-section">
    <div class="container">
        <h1>คอร์สเรียนออนไลน์คุณภาพ</h1>
        <p>เรียนรู้ได้ทุกที่ ทุกเวลา</p>
        <a href="#courses" class="btn btn-primary">ดูคอร์สทั้งหมด</a>
    </div>
</div>


<div id="courses" class="courses-section">
    <div class="container">
        <div class="course-grid">
            <?php
            $args = array(
                'post_type' => 'course',
                'posts_per_page' => -1,
                'orderby' => 'date',
                'order' => 'DESC'
            );
            $courses = new WP_Query($args);
            
            if ($courses->have_posts()) :
                while ($courses->have_posts()) : $courses->the_post();
                    get_template_part('template-parts/course', 'card');
                endwhile;
                wp_reset_postdata();
            endif;
            ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
```

### 2. Course Detail Template (single-course.php)

```php
<?php
/**
 * Single Course Template
 */
get_header();

while (have_posts()) : the_post();
    $instructor = get_field('instructor_name');
    $rating = get_field('course_rating');
    $duration = get_field('total_duration');
    $video_count = get_field('video_count');
?>

<div class="breadcrumb">
    <a href="<?php echo home_url(); ?>">หน้าแรก</a> &gt;
    <a href="<?php echo get_post_type_archive_link('course'); ?>">คอร์สทั้งหมด</a> &gt;
    <span><?php the_title(); ?></span>
</div>


<div class="course-detail">
    <div class="course-header">
        <div class="course-thumbnail">
            <?php the_post_thumbnail('course-thumbnail'); ?>
        </div>
        <div class="course-info">
            <h1><?php the_title(); ?></h1>
            <div class="course-rating">
                <?php echo str_repeat('⭐', round($rating)); ?> (<?php echo $rating; ?>)
            </div>
            <div class="course-meta">
                <span>👤 <?php echo esc_html($instructor); ?></span>
                <span>📹 <?php echo esc_html($video_count); ?> วิดีโอ</span>
                <span>⏱ <?php echo esc_html($duration); ?></span>
            </div>
        </div>
    </div>
    
    <div class="course-description">
        <?php the_content(); ?>
    </div>
    
    <div class="video-list">
        <h2>เนื้อหาในคอร์ส</h2>
        <?php
        $videos = new WP_Query(array(
            'post_type' => 'video',
            'meta_key' => 'parent_course',
            'meta_value' => get_the_ID(),
            'orderby' => 'meta_value_num',
            'meta_key' => 'video_order',
            'order' => 'ASC'
        ));
        
        if ($videos->have_posts()) :
            $index = 1;
            while ($videos->have_posts()) : $videos->the_post();
                get_template_part('template-parts/video', 'item', array('index' => $index++));
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
    </div>
</div>

<?php
endwhile;
get_footer();
?>
```


### 3. Video Player Template (single-video.php)

```php
<?php
/**
 * Single Video Template
 */
get_header();

while (have_posts()) : the_post();
    $video_url = get_field('video_url');
    $duration = get_field('video_duration');
    $course_id = get_field('parent_course');
?>

<div class="breadcrumb">
    <a href="<?php echo home_url(); ?>">หน้าแรก</a> &gt;
    <a href="<?php echo get_permalink($course_id); ?>"><?php echo get_the_title($course_id); ?></a> &gt;
    <span><?php the_title(); ?></span>
</div>

<div class="video-player-page">
    <div class="video-main">
        <div class="video-player">
            <video controls>
                <source src="<?php echo esc_url($video_url); ?>" type="video/mp4">
            </video>
        </div>
        
        <div class="video-info">
            <h1><?php the_title(); ?></h1>
            <div class="video-description">
                <?php the_content(); ?>
            </div>
            
            <div class="video-navigation">
                <?php
                // Get previous and next videos
                $prev_video = get_adjacent_post(false, '', true, 'video');
                $next_video = get_adjacent_post(false, '', false, 'video');
                ?>
                
                <?php if ($prev_video) : ?>
                    <a href="<?php echo get_permalink($prev_video); ?>" class="btn btn-secondary">
                        ← ก่อนหน้า
                    </a>
                <?php endif; ?>
                
                <?php if ($next_video) : ?>
                    <a href="<?php echo get_permalink($next_video); ?>" class="btn btn-primary">
                        ถัดไป →
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </div>

    
    <div class="video-playlist">
        <h3>วิดีโออื่นๆ ในคอร์ส</h3>
        <?php
        $playlist = new WP_Query(array(
            'post_type' => 'video',
            'meta_key' => 'parent_course',
            'meta_value' => $course_id,
            'orderby' => 'meta_value_num',
            'meta_key' => 'video_order',
            'order' => 'ASC'
        ));
        
        if ($playlist->have_posts()) :
            while ($playlist->have_posts()) : $playlist->the_post();
                $is_current = (get_the_ID() == $post->ID);
                ?>
                <div class="playlist-item <?php echo $is_current ? 'active' : ''; ?>">
                    <a href="<?php the_permalink(); ?>">
                        <?php the_post_thumbnail('video-thumbnail-small'); ?>
                        <span><?php the_title(); ?></span>
                        <span class="duration"><?php echo get_field('video_duration'); ?></span>
                    </a>
                </div>
                <?php
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
    </div>
</div>

<?php
endwhile;
get_footer();
?>
```

---

## Theme Development

### 1. Theme Structure

```
your-theme/
├── style.css
├── functions.php
├── header.php
├── footer.php
├── index.php
├── page-courses.php
├── single-course.php
├── single-video.php
├── template-parts/
│   ├── course-card.php
│   └── video-item.php
├── assets/
│   ├── css/
│   │   ├── variables.css
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
└── inc/
    ├── custom-post-types.php
    └── custom-fields.php
```


### 2. functions.php Setup

```php
<?php
// Enqueue styles and scripts
function course_platform_enqueue_assets() {
    // CSS
    wp_enqueue_style('variables', get_template_directory_uri() . '/assets/css/variables.css');
    wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/styles.css');
    
    // JavaScript
    wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'course_platform_enqueue_assets');

// Theme support
function course_platform_setup() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('html5', array('search-form', 'comment-form', 'gallery'));
    
    // Image sizes
    add_image_size('course-thumbnail', 800, 450, true);
    add_image_size('video-thumbnail', 640, 360, true);
    add_image_size('video-thumbnail-small', 320, 180, true);
    
    // Navigation menus
    register_nav_menus(array(
        'primary' => 'Primary Menu',
        'footer' => 'Footer Menu'
    ));
}
add_action('after_setup_theme', 'course_platform_setup');

// Include custom post types
require_once get_template_directory() . '/inc/custom-post-types.php';
?>
```

### 3. Template Parts

**template-parts/course-card.php:**
```php
<div class="course-card">
    <a href="<?php the_permalink(); ?>">
        <div class="course-thumbnail">
            <?php the_post_thumbnail('course-thumbnail'); ?>
        </div>
        <div class="course-content">
            <h3 class="course-title"><?php the_title(); ?></h3>
            <p class="course-description"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
            <div class="course-meta">
                <span>👤 <?php echo esc_html(get_field('instructor_name')); ?></span>
                <span>📹 <?php echo esc_html(get_field('video_count')); ?> วิดีโอ</span>
            </div>
            <button class="btn btn-primary">เริ่มเรียน →</button>
        </div>
    </a>
</div>
```


**template-parts/video-item.php:**
```php
<?php
$index = isset($args['index']) ? $args['index'] : 1;
$duration = get_field('video_duration');
?>
<div class="video-item">
    <div class="video-play-icon">▶</div>
    <div class="video-thumbnail">
        <?php the_post_thumbnail('video-thumbnail-small'); ?>
    </div>
    <div class="video-info">
        <div class="video-title"><?php echo $index; ?>. <?php the_title(); ?></div>
    </div>
    <div class="video-duration"><?php echo esc_html($duration); ?></div>
</div>
```

---

## Database Structure

### Posts Table
- `post_type = 'course'` - Course posts
- `post_type = 'video'` - Video posts

### Postmeta Table
**Course Meta:**
- `instructor_name` - Instructor name
- `course_rating` - Rating (0-5)
- `total_duration` - Total duration
- `video_count` - Number of videos
- `course_level` - Difficulty level
- `course_price` - Price

**Video Meta:**
- `video_url` - Video file URL
- `video_duration` - Duration (MM:SS)
- `video_order` - Order number
- `parent_course` - Course ID (relationship)
- `is_free_preview` - Boolean

### Terms Table
- `taxonomy = 'course_category'` - Course categories

---

## Implementation Steps

### Phase 1: Setup (Week 1)
1. ติดตั้ง WordPress
2. ติดตั้ง plugins ที่จำเป็น
3. สร้าง child theme หรือ custom theme
4. นำเข้า CSS/JS จาก mockup

### Phase 2: Custom Post Types (Week 1-2)
1. สร้าง Course post type
2. สร้าง Video post type
3. สร้าง taxonomies
4. ตั้งค่า ACF fields


### Phase 3: Templates (Week 2-3)
1. สร้าง page-courses.php
2. สร้าง single-course.php
3. สร้าง single-video.php
4. สร้าง template parts
5. ปรับแต่ง header.php และ footer.php

### Phase 4: Styling (Week 3)
1. นำเข้า CSS variables
2. ปรับแต่ง responsive design
3. เพิ่ม animations และ transitions
4. ทดสอบ cross-browser

### Phase 5: Functionality (Week 4)
1. เพิ่ม JavaScript interactions
2. ตั้งค่า video player
3. สร้าง search functionality
4. เพิ่ม user progress tracking (ถ้าใช้ LMS plugin)

### Phase 6: Content & Testing (Week 4-5)
1. เพิ่มข้อมูลตัวอย่าง (courses, videos)
2. ทดสอบ responsive design
3. ทดสอบ performance
4. ทดสอบ accessibility
5. SEO optimization

### Phase 7: Launch (Week 5)
1. Final testing
2. Backup
3. Deploy to production
4. Monitor performance

---

## Best Practices

### Performance
1. ใช้ caching plugin (WP Rocket)
2. Optimize images (WebP format)
3. Minify CSS/JS
4. Use CDN สำหรับ static assets
5. Lazy load images และ videos

### Security
1. ติดตั้ง security plugin (Wordfence)
2. ใช้ strong passwords
3. Regular backups
4. Keep WordPress และ plugins updated
5. Use SSL certificate

### SEO
1. ใช้ SEO plugin (Yoast/Rank Math)
2. Optimize meta titles และ descriptions
3. Create XML sitemap
4. Use schema markup สำหรับ courses
5. Optimize images alt text


### Accessibility
1. Use semantic HTML
2. Add ARIA labels
3. Ensure keyboard navigation
4. Maintain color contrast ratios
5. Add alt text to all images

---

## Additional Features to Consider

### User Management
- User registration และ login
- User profiles
- Course enrollment system
- Progress tracking
- Certificates

### Payment Integration
- WooCommerce integration
- Stripe/PayPal payment gateway
- Subscription plans
- Coupon codes

### Social Features
- Course reviews และ ratings
- Discussion forums
- Social sharing
- Comments on videos

### Analytics
- Google Analytics integration
- Course completion rates
- Popular courses tracking
- User engagement metrics

---

## Troubleshooting

### Common Issues

**Issue: Videos not playing**
- ตรวจสอบ video format (MP4 recommended)
- ตรวจสอบ file permissions
- ใช้ video hosting service (YouTube, Vimeo)

**Issue: Slow page load**
- Optimize images
- Enable caching
- Reduce HTTP requests
- Use lazy loading

**Issue: Responsive layout broken**
- ตรวจสอบ CSS media queries
- Test on multiple devices
- Use browser dev tools

---

## Resources

### Documentation
- WordPress Codex: https://codex.wordpress.org/
- LearnDash Docs: https://www.learndash.com/support/docs/
- ACF Documentation: https://www.advancedcustomfields.com/resources/

### Tutorials
- WordPress Theme Development: https://developer.wordpress.org/themes/
- Custom Post Types: https://developer.wordpress.org/plugins/post-types/
- WP_Query: https://developer.wordpress.org/reference/classes/wp_query/

### Tools
- Local by Flywheel - Local development
- Query Monitor - Debugging plugin
- Theme Check - Theme validation

---

## Support & Maintenance

### Regular Tasks
- Weekly: Check for plugin/theme updates
- Monthly: Review analytics และ performance
- Quarterly: Full backup และ security audit
- Yearly: Review และ update content

### Monitoring
- Uptime monitoring (UptimeRobot)
- Performance monitoring (GTmetrix)
- Error logging (Query Monitor)
- User feedback collection

---

## Conclusion

คู่มือนี้ให้แนวทางในการนำ mockup HTML/CSS/JS ไปพัฒนาเป็น WordPress theme สำหรับแพลตฟอร์มคอร์สวิดีโอ 
ควรปรับแต่งตามความต้องการเฉพาะของโปรเจกต์ และทดสอบอย่างละเอียดก่อน launch

สำหรับคำถามเพิ่มเติม สามารถดูเอกสารอ้างอิงหรือติดต่อ WordPress community
