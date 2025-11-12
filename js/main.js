// Main JavaScript file for Video Course Platform

// ===================================
// Browser Compatibility Polyfills
// ===================================

// Polyfill for Element.closest() - for older browsers
if (!Element.prototype.closest) {
  Element.prototype.closest = function(selector) {
    var el = this;
    while (el) {
      if (el.matches(selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };
}

// Polyfill for Element.matches() - for older browsers
if (!Element.prototype.matches) {
  Element.prototype.matches = 
    Element.prototype.matchesSelector || 
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector || 
    Element.prototype.oMatchesSelector || 
    Element.prototype.webkitMatchesSelector ||
    function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}

// Polyfill for NodeList.forEach() - for IE11 and older browsers
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// Polyfill for Array.from() - for older browsers
if (!Array.from) {
  Array.from = function(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };
}

// Polyfill for Object.assign() - for older browsers
if (typeof Object.assign !== 'function') {
  Object.assign = function(target) {
    if (target === null || target === undefined) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];
      if (nextSource !== null && nextSource !== undefined) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

// Detect browser and add class to html element for browser-specific styling
(function detectBrowser() {
  var html = document.documentElement;
  var ua = navigator.userAgent.toLowerCase();
  
  if (ua.indexOf('firefox') > -1) {
    html.classList.add('browser-firefox');
  } else if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) {
    html.classList.add('browser-safari');
  } else if (ua.indexOf('chrome') > -1) {
    html.classList.add('browser-chrome');
  } else if (ua.indexOf('edge') > -1 || ua.indexOf('edg') > -1) {
    html.classList.add('browser-edge');
  }
  
  // Detect iOS
  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    html.classList.add('ios');
  }
  
  // Detect touch device
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    html.classList.add('touch-device');
  }
})();

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Video Course Platform initialized');
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize video player (if on video player page)
  initVideoPlayer();
  
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Initialize image loading
  initImageLoading();
  
  // Initialize browser-specific fixes
  initBrowserFixes();
});

/**
 * Mobile Menu Toggle Functionality
 * Handles opening/closing of mobile navigation menu
 */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const body = document.body;

  if (!hamburger || !mobileMenu) {
    console.warn('Mobile menu elements not found');
    return;
  }

  // Toggle mobile menu on hamburger click
  hamburger.addEventListener('click', function() {
    toggleMobileMenu();
  });

  // Close mobile menu when clicking on overlay
  mobileMenu.addEventListener('click', function(e) {
    // Only close if clicking on the overlay (mobile-menu element itself)
    if (e.target === mobileMenu) {
      closeMobileMenu();
    }
  });

  // Close mobile menu when clicking on a link
  const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      closeMobileMenu();
    });
  });

  // Close mobile menu on window resize to desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) {
      closeMobileMenu();
    }
  });

  /**
   * Toggle mobile menu open/closed
   */
  function toggleMobileMenu() {
    const isActive = mobileMenu.classList.contains('active');
    
    if (isActive) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  /**
   * Open mobile menu
   */
  function openMobileMenu() {
    hamburger.classList.add('active');
    mobileMenu.classList.add('active');
    body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
  }

  /**
   * Close mobile menu
   */
  function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.style.overflow = ''; // Restore body scroll
  }
}

/**
 * Video Player Navigation Functionality
 * Handles video navigation (previous/next) and playlist interaction
 */
function initVideoPlayer() {
  // Check if we're on the video player page
  const videoPlayerLayout = document.querySelector('.video-player-layout');
  if (!videoPlayerLayout) {
    return; // Not on video player page
  }

  const prevBtn = document.getElementById('prevVideoBtn');
  const nextBtn = document.getElementById('nextVideoBtn');
  const playlistItems = document.querySelectorAll('.playlist-item');
  const videoTitle = document.querySelector('.video-info-title');
  const videoDescription = document.querySelector('.video-info-description');

  if (!prevBtn || !nextBtn || playlistItems.length === 0) {
    console.warn('Video player elements not found');
    return;
  }

  // Sample video data (in a real app, this would come from a backend)
  const videos = [
    {
      id: 1,
      title: 'แนะนำคอร์สและเตรียมความพร้อม',
      description: '<p>ในวิดีโอนี้เราจะมาทำความรู้จักกับคอร์ส JavaScript สำหรับผู้เริ่มต้นกัน คุณจะได้เรียนรู้ว่าคอร์สนี้มีเนื้อหาอะไรบ้าง และควรเตรียมตัวอย่างไรก่อนเริ่มเรียน</p><p>เราจะพูดถึงเครื่องมือที่จำเป็น การติดตั้ง และแนวทางการเรียนรู้ที่มีประสิทธิภาพ เพื่อให้คุณได้รับประโยชน์สูงสุดจากคอร์สนี้</p>',
      videoUrl: '#'
    },
    {
      id: 2,
      title: 'ติดตั้ง Tools และ Environment',
      description: '<p>ในวิดีโอนี้เราจะมาติดตั้งเครื่องมือที่จำเป็นสำหรับการเขียน JavaScript กัน รวมถึง Text Editor, Browser, และ Developer Tools</p><p>คุณจะได้เรียนรู้วิธีการตั้งค่า Environment ให้พร้อมสำหรับการเขียนโค้ด และการใช้งาน Developer Tools เบื้องต้น</p>',
      videoUrl: '#'
    },
    {
      id: 3,
      title: 'ตัวแปรและชนิดข้อมูลใน JavaScript',
      description: '<p>เรียนรู้เกี่ยวกับตัวแปรใน JavaScript การประกาศตัวแปรด้วย var, let, และ const รวมถึงความแตกต่างระหว่างกัน</p><p>นอกจากนี้เรายังจะพูดถึงชนิดข้อมูลพื้นฐานใน JavaScript เช่น String, Number, Boolean, Null, Undefined และ Object</p>',
      videoUrl: '#'
    },
    {
      id: 4,
      title: 'Operators และการคำนวณ',
      description: '<p>ในวิดีโอนี้เราจะมาเรียนรู้เกี่ยวกับ Operators ต่างๆ ใน JavaScript รวมถึง Arithmetic Operators, Comparison Operators, และ Logical Operators</p><p>คุณจะได้เรียนรู้วิธีการใช้ Operators เหล่านี้ในการคำนวณและเปรียบเทียบค่าต่างๆ</p>',
      videoUrl: '#'
    },
    {
      id: 5,
      title: 'Conditions: If, Else, Switch',
      description: '<p>เรียนรู้การควบคุมการทำงานของโปรแกรมด้วย Conditional Statements เช่น if, else if, else และ switch</p><p>คุณจะได้เรียนรู้วิธีการเขียนเงื่อนไขเพื่อให้โปรแกรมทำงานตามสถานการณ์ที่แตกต่างกัน</p>',
      videoUrl: '#'
    },
    {
      id: 6,
      title: 'Loops: For, While, Do-While',
      description: '<p>ในวิดีโอนี้เราจะมาเรียนรู้เกี่ยวกับ Loops ใน JavaScript รวมถึง for loop, while loop, และ do-while loop</p><p>คุณจะได้เรียนรู้วิธีการใช้ Loops เพื่อทำงานซ้ำๆ และการเลือกใช้ Loop ที่เหมาะสมกับสถานการณ์</p>',
      videoUrl: '#'
    },
    {
      id: 7,
      title: 'Functions และการใช้งาน',
      description: '<p>เรียนรู้เกี่ยวกับ Functions ใน JavaScript การประกาศ Function, การเรียกใช้งาน และการส่งค่า Parameters</p><p>นอกจากนี้เรายังจะพูดถึง Arrow Functions, Function Expressions และ Return Values</p>',
      videoUrl: '#'
    },
    {
      id: 8,
      title: 'Arrays และการจัดการข้อมูล',
      description: '<p>ในวิดีโอนี้เราจะมาเรียนรู้เกี่ยวกับ Arrays ใน JavaScript การสร้าง Array, การเข้าถึงข้อมูล และการจัดการข้อมูลใน Array</p><p>คุณจะได้เรียนรู้ Array Methods ที่สำคัญ เช่น push, pop, shift, unshift, map, filter และ reduce</p>',
      videoUrl: '#'
    },
    {
      id: 9,
      title: 'Objects และ Properties',
      description: '<p>เรียนรู้เกี่ยวกับ Objects ใน JavaScript การสร้าง Object, การเข้าถึง Properties และ Methods</p><p>คุณจะได้เรียนรู้วิธีการทำงานกับ Objects และการใช้งาน Object ในการจัดเก็บข้อมูลที่ซับซ้อน</p>',
      videoUrl: '#'
    },
    {
      id: 10,
      title: 'DOM Manipulation พื้นฐาน',
      description: '<p>ในวิดีโอนี้เราจะมาเรียนรู้เกี่ยวกับ DOM (Document Object Model) และวิธีการจัดการ HTML Elements ด้วย JavaScript</p><p>คุณจะได้เรียนรู้วิธีการเลือก Elements, การเปลี่ยนแปลง Content, Styles และ Attributes ของ Elements</p>',
      videoUrl: '#'
    }
  ];

  let currentVideoIndex = 0;

  // Initialize the page with the first video
  updateVideoDisplay(currentVideoIndex);

  // Previous button click handler
  prevBtn.addEventListener('click', function() {
    if (currentVideoIndex > 0) {
      currentVideoIndex--;
      updateVideoDisplay(currentVideoIndex);
    }
  });

  // Next button click handler
  nextBtn.addEventListener('click', function() {
    if (currentVideoIndex < videos.length - 1) {
      currentVideoIndex++;
      updateVideoDisplay(currentVideoIndex);
    }
  });

  // Playlist item click handler
  playlistItems.forEach(function(item, index) {
    item.addEventListener('click', function() {
      currentVideoIndex = index;
      updateVideoDisplay(currentVideoIndex);
    });
  });

  /**
   * Update video display based on current index
   * @param {number} index - Current video index
   */
  function updateVideoDisplay(index) {
    const video = videos[index];

    // Update video title and description
    if (videoTitle) {
      videoTitle.textContent = video.title;
    }

    if (videoDescription) {
      videoDescription.innerHTML = video.description;
    }

    // Update active state in playlist
    playlistItems.forEach(function(item, i) {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update navigation buttons state
    updateNavigationButtons(index);

    // Scroll active playlist item into view
    const activeItem = playlistItems[index];
    if (activeItem) {
      activeItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }

    // Update breadcrumb (optional)
    updateBreadcrumb(video.title);

    // In a real application, you would also update the video source here
    // const videoPlayer = document.querySelector('.video-player');
    // if (videoPlayer) {
    //   videoPlayer.src = video.videoUrl;
    //   videoPlayer.load();
    // }
  }

  /**
   * Update navigation buttons enabled/disabled state
   * @param {number} index - Current video index
   */
  function updateNavigationButtons(index) {
    // Disable previous button if at first video
    if (index === 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }

    // Disable next button if at last video
    if (index === videos.length - 1) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
  }

  /**
   * Update breadcrumb with current video title
   * @param {string} title - Video title
   */
  function updateBreadcrumb(title) {
    const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
    if (breadcrumbActive) {
      breadcrumbActive.textContent = title;
    }
  }
}

/**
 * Smooth Scroll Functionality
 * Handles smooth scrolling to sections when clicking anchor links
 */
function initSmoothScroll() {
  // Get all anchor links that start with #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      // Get target element
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });
}

/**
 * Helper Functions for Loading and Error States
 */

/**
 * Show loading spinner in a container
 * @param {HTMLElement} container - Container element
 * @param {string} message - Loading message (optional)
 */
function showLoadingSpinner(container, message = 'กำลังโหลด...') {
  if (!container) return;
  
  const spinnerHTML = `
    <div class="loading-spinner-container">
      <div class="loading-spinner"></div>
      <p class="loading-text">${message}</p>
    </div>
  `;
  
  container.innerHTML = spinnerHTML;
}

/**
 * Show error state in a container
 * @param {HTMLElement} container - Container element
 * @param {string} title - Error title
 * @param {string} message - Error message
 * @param {Function} retryCallback - Callback function for retry button (optional)
 */
function showErrorState(container, title = 'เกิดข้อผิดพลาด', message = 'ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง', retryCallback = null) {
  if (!container) return;
  
  const retryButton = retryCallback 
    ? `<button class="error-state-button error-state-button-primary" onclick="this.retryCallback()">
         <span>🔄</span>
         <span>ลองอีกครั้ง</span>
       </button>`
    : '';
  
  const errorHTML = `
    <div class="error-state">
      <div class="error-state-icon">⚠️</div>
      <h3 class="error-state-title">${title}</h3>
      <p class="error-state-message">${message}</p>
      <div class="error-state-actions">
        ${retryButton}
        <a href="index.html" class="error-state-button error-state-button-secondary">
          <span>🏠</span>
          <span>กลับหน้าแรก</span>
        </a>
      </div>
    </div>
  `;
  
  container.innerHTML = errorHTML;
  
  if (retryCallback) {
    const btn = container.querySelector('.error-state-button-primary');
    if (btn) {
      btn.retryCallback = retryCallback;
    }
  }
}

/**
 * Show empty state in a container
 * @param {HTMLElement} container - Container element
 * @param {string} title - Empty state title
 * @param {string} message - Empty state message
 * @param {string} actionText - Action button text (optional)
 * @param {string} actionLink - Action button link (optional)
 */
function showEmptyState(container, title = 'ยังไม่มีข้อมูล', message = 'ยังไม่มีเนื้อหาในส่วนนี้', actionText = null, actionLink = null) {
  if (!container) return;
  
  const actionButton = actionText && actionLink
    ? `<a href="${actionLink}" class="empty-state-action">
         <span>${actionText}</span>
       </a>`
    : '';
  
  const emptyHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">📚</div>
      <h3 class="empty-state-title">${title}</h3>
      <p class="empty-state-message">${message}</p>
      ${actionButton}
    </div>
  `;
  
  container.innerHTML = emptyHTML;
}

/**
 * Show video error state
 * @param {HTMLElement} container - Video player container
 * @param {Function} retryCallback - Callback function for retry button
 */
function showVideoError(container, retryCallback = null) {
  if (!container) return;
  
  const errorHTML = `
    <div class="video-error-state">
      <div class="video-error-icon">⚠️</div>
      <h3 class="video-error-title">ไม่สามารถโหลดวิดีโอได้</h3>
      <p class="video-error-message">เกิดข้อผิดพลาดในการโหลดวิดีโอ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตและลองใหม่อีกครั้ง</p>
      <button class="video-error-button" id="videoRetryBtn">
        <span>🔄</span>
        <span>ลองอีกครั้ง</span>
      </button>
    </div>
  `;
  
  container.innerHTML = errorHTML;
  
  if (retryCallback) {
    const btn = container.querySelector('#videoRetryBtn');
    if (btn) {
      btn.addEventListener('click', retryCallback);
    }
  }
}

/**
 * Show skeleton loaders for course cards
 * @param {HTMLElement} container - Container element
 * @param {number} count - Number of skeleton cards to show
 */
function showSkeletonLoaders(container, count = 6) {
  if (!container) return;
  
  let skeletonHTML = '';
  
  for (let i = 0; i < count; i++) {
    skeletonHTML += `
      <div class="skeleton-course-card">
        <div class="skeleton-thumbnail"></div>
        <div class="skeleton-content">
          <div class="skeleton-title"></div>
          <div class="skeleton-description"></div>
          <div class="skeleton-description"></div>
          <div class="skeleton-meta">
            <div class="skeleton-meta-item"></div>
            <div class="skeleton-meta-item"></div>
          </div>
          <div class="skeleton-button"></div>
        </div>
      </div>
    `;
  }
  
  container.innerHTML = skeletonHTML;
}

/**
 * Add loaded class to images when they finish loading
 */
function initImageLoading() {
  const images = document.querySelectorAll('img');
  
  images.forEach(function(img) {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });
      
      img.addEventListener('error', function() {
        // Show placeholder or error state for failed images
        this.style.opacity = '0.3';
        this.alt = 'ไม่สามารถโหลดรูปภาพได้';
      });
    }
  });
}

/**
 * Show notification message
 * @param {string} message - Message text
 * @param {string} type - Message type: 'error', 'success', 'warning', 'info'
 * @param {number} duration - Duration in milliseconds (0 = no auto-hide)
 */
function showNotification(message, type = 'info', duration = 5000) {
  const typeClasses = {
    error: 'error-message',
    success: 'success-message',
    warning: 'warning-message',
    info: 'info-message'
  };
  
  const icons = {
    error: '❌',
    success: '✅',
    warning: '⚠️',
    info: 'ℹ️'
  };
  
  const notification = document.createElement('div');
  notification.className = typeClasses[type] || typeClasses.info;
  notification.innerHTML = `
    <span class="${type}-message-icon">${icons[type] || icons.info}</span>
    <span class="${type}-message-text">${message}</span>
  `;
  
  // Insert at the top of main content
  const main = document.querySelector('main');
  if (main) {
    main.insertBefore(notification, main.firstChild);
    
    // Auto-hide after duration
    if (duration > 0) {
      setTimeout(function() {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        notification.style.transition = 'all 0.3s ease-out';
        
        setTimeout(function() {
          notification.remove();
        }, 300);
      }, duration);
    }
  }
}

/**
 * Browser-Specific Fixes
 * Handles browser-specific issues that can't be fixed with CSS alone
 */
function initBrowserFixes() {
  // Fix for iOS Safari viewport height issue
  fixIOSViewportHeight();
  
  // Fix for Safari smooth scroll
  fixSafariSmoothScroll();
  
  // Fix for Firefox button focus
  fixFirefoxButtonFocus();
  
  // Add resize listener for viewport fixes
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      fixIOSViewportHeight();
    }, 250);
  });
}

/**
 * Fix iOS Safari viewport height issue
 * iOS Safari's viewport height changes when scrolling
 */
function fixIOSViewportHeight() {
  // Check if iOS
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  if (isIOS) {
    // Set CSS variable for actual viewport height
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
    
    // Update mobile menu height if it exists
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.style.height = (window.innerHeight - 64) + 'px';
    }
  }
}

/**
 * Fix Safari smooth scroll behavior
 * Safari sometimes doesn't respect scroll-behavior: smooth
 */
function fixSafariSmoothScroll() {
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
  if (isSafari) {
    // Override smooth scroll for Safari
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        
        if (href === '#') {
          e.preventDefault();
          return;
        }
        
        var targetId = href.substring(1);
        var targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Use smooth scroll with fallback
          if ('scrollBehavior' in document.documentElement.style) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          } else {
            // Fallback for older browsers
            var targetPosition = targetElement.offsetTop;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
}

/**
 * Fix Firefox button focus outline
 * Firefox adds extra padding to focused buttons
 */
function fixFirefoxButtonFocus() {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  
  if (isFirefox) {
    var buttons = document.querySelectorAll('button, .btn');
    
    buttons.forEach(function(button) {
      button.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--color-purple-primary)';
        this.style.outlineOffset = '2px';
      });
      
      button.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
      });
    });
  }
}

/**
 * Detect if browser supports a CSS feature
 * @param {string} property - CSS property to test
 * @param {string} value - CSS value to test
 * @returns {boolean} - True if supported
 */
function supportsCSSFeature(property, value) {
  var element = document.createElement('div');
  element.style[property] = value;
  return element.style[property] === value;
}

/**
 * Check if browser supports a specific feature
 * @param {string} feature - Feature to check
 * @returns {boolean} - True if supported
 */
function supportsFeature(feature) {
  switch (feature) {
    case 'grid':
      return supportsCSSFeature('display', 'grid');
    case 'flexbox':
      return supportsCSSFeature('display', 'flex');
    case 'aspectRatio':
      return supportsCSSFeature('aspectRatio', '16 / 9');
    case 'gap':
      return supportsCSSFeature('gap', '1rem');
    case 'objectFit':
      return supportsCSSFeature('objectFit', 'cover');
    default:
      return false;
  }
}

/**
 * Log browser compatibility information (for debugging)
 */
function logBrowserInfo() {
  if (console && console.log) {
    console.log('Browser Info:', {
      userAgent: navigator.userAgent,
      supportsGrid: supportsFeature('grid'),
      supportsFlexbox: supportsFeature('flexbox'),
      supportsAspectRatio: supportsFeature('aspectRatio'),
      supportsGap: supportsFeature('gap'),
      supportsObjectFit: supportsFeature('objectFit')
    });
  }
}

// Uncomment to log browser info for debugging
// logBrowserInfo();
