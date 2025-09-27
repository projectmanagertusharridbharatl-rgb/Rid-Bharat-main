/**
 * MAIN APPLICATION SCRIPT
 * This file contains all JavaScript functionality for the application
 * Organized into logical sections with clear comments
 */

document.addEventListener('DOMContentLoaded', function () {
  // ==================== MOBILE MENU TOGGLE ====================
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const mobileNav = document.getElementById('mobileNav');
  let isMenuOpen = false;

  function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle('active', isMenuOpen);
    mobileNav.classList.toggle('active', isMenuOpen);
    
    const icon = menuToggle?.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars', !isMenuOpen);
      icon.classList.toggle('fa-times', isMenuOpen);
    }
    
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (!isMenuOpen) return;
    isMenuOpen = false;
    navMenu?.classList.remove('active');
    mobileNav?.classList.remove('active');
    
    const icon = menuToggle?.querySelector('i');
    if (icon) {
      icon.classList.replace('fa-times', 'fa-bars');
    }
    
    document.body.style.overflow = '';
  }

  // Mobile menu event listeners
  if (menuToggle) {
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // ==================== THEME TOGGLE ====================
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      const icon = themeToggle.querySelector('i');
      if (document.body.classList.contains('dark-mode')) {
        icon?.classList.replace('fa-moon', 'fa-sun');
      } else {
        icon?.classList.replace('fa-sun', 'fa-moon');
      }
    });
  }

  // ==================== SIDEBAR FUNCTIONALITY ====================
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');

  function toggleSidebar() {
    sidebar?.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  }

  // Initialize sidebar toggle button
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }

  // Close sidebar when clicking on links (mobile)
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 992) {
        sidebar?.classList.remove('open');
        document.body.classList.remove('no-scroll');
      }
    });
  });

  // ==================== EVENT LISTENERS ====================
  // Close menus when clicking outside
  document.addEventListener('click', function (e) {
    // Mobile menu
    if (isMenuOpen && !navMenu?.contains(e.target) && !menuToggle?.contains(e.target)) {
      closeMobileMenu();
    }
    
    // Sidebar (mobile only)
    if (window.innerWidth <= 992 && sidebar && 
        !sidebar.contains(e.target) && 
        e.target !== sidebarToggle && 
        !sidebarToggle?.contains(e.target)) {
      sidebar.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  });

  // Close mobile menu with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMobileMenu();
    }
  });

  // Responsive behavior - close mobile menu on larger screens
  window.addEventListener('resize', function () {
    if (window.innerWidth > 992) {
      closeMobileMenu();
    }
  });

  // ==================== COMPONENT LOADING ====================
  // Navbar loader
  fetch("h.html")
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById("navbar-container");
      if (container) container.innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));

  // Generic component loader
  function loadComponent(componentName) {
    fetch(`deshbord/components/${componentName}.html`)
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById('content-area');
        if (container) container.innerHTML = html;
      })
      .catch(err => console.error("Component load error:", err));
  }

  // Load initial components
  loadComponent('profile');
  loadComponent('feedback');
});
