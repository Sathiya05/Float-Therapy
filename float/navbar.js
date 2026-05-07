document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<header id="mainNavbar"
  class="fixed top-0 left-0 w-full z-50 bg-white text-[#38BDF8] shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300">

  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

    <!-- Logo (left) -->
    <div class="flex items-center">
      <h1 class="text-2xl text-slate-900 dark:text-white font-bold">
          <a href="index.html">
            STATIC <span class="text-[#38BDF8] font-bold">LABS</span>
          </a>
        </h1>
    </div>

    <!-- Desktop Navigation (center) -->
    <div id="centerLinksWrapper" class="hidden lg:flex flex-1 justify-center">
      <ul class="flex items-center gap-8 font-medium text-sm text-black" id="navLinks">

        <!-- Home Dropdown -->
        <li class="relative">
          <button id="homeDropdownBtn" class="flex items-center gap-1 hover:text-[#38BDF8] transition">
            Home <i class="bi bi-chevron-down text-xs"></i>
          </button>
          <ul id="homeDropdownMenu"
            class="absolute left-0 mt-3 w-44 bg-white text-black rounded-xl shadow-xl border border-slate-100 hidden z-50">
            <li><a href="index.html" class="block px-4 py-2 rounded-t-xl hover:text-[#38BDF8] hover:bg-slate-50">Home 1</a></li>
            <li><a href="home2.html" class="block px-4 py-2 rounded-b-xl hover:text-[#38BDF8] hover:bg-slate-50">Home 2</a></li>
          </ul>
        </li>

        <li><a href="about.html" class="hover:text-[#38BDF8] transition">About</a></li>
        <li><a href="service.html" class="hover:text-[#38BDF8] transition">Services</a></li>
        <li><a href="benefits.html" class="hover:text-[#38BDF8] transition">Benefits</a></li>
        <li><a href="packages.html" class="hover:text-[#38BDF8] transition">Packages</a></li>
        <li><a href="faq.html" class="hover:text-[#38BDF8] transition">FAQ</a></li>
        <li><a href="contact.html" class="hover:text-[#38BDF8] transition">Contact</a></li>

        <!-- Dashboard Dropdown -->
        <li class="relative">
          <button id="dashboardDropdownBtn" class="flex items-center gap-1 hover:text-[#38BDF8] transition">
            Dashboard <i class="bi bi-chevron-down text-xs"></i>
          </button>
          <ul id="dashboardDropdownMenu"
            class="absolute left-0 mt-3 w-40 bg-white text-black rounded-xl shadow-xl border border-slate-100 hidden z-50">
            <li><a href="user.html" class="block px-4 py-2 hover:text-[#38BDF8] hover:bg-slate-50 rounded-t-xl">User</a></li>
            <li><a href="admin.html" class="block px-4 py-2 hover:text-[#38BDF8] hover:bg-slate-50 rounded-b-xl">Admin</a></li>
          </ul>
        </li>

      </ul>
    </div>

    <!-- Right Side -->
    <div class="flex items-center gap-3">

      <!-- Desktop buttons (hidden on mobile/tablet) -->
      <div id="rightButtons" class="hidden lg:flex items-center gap-4">

        <!-- Theme -->
        <button id="theme-toggle" class="text-lg text-black hover:text-[#38BDF8] transition">
          <i class="themeIcon bi bi-moon-stars-fill"></i>
        </button>

        <!-- RTL -->
        <button id="rtlToggle" class="text-lg text-black hover:text-[#38BDF8] transition">
          <i class="bi bi-arrow-left-right"></i>
        </button>

        <!-- Sign Up (secondary outlined) -->
        <a href="sign.html"
          class="w-24 text-center py-3 rounded-xl border-2 border-[#38BDF8] text-[#38BDF8] text-sm font-bold hover:bg-[#38BDF8] hover:text-white transition duration-200">
          Sign Up
        </a>

        <!-- Login (primary CTA pill) -->
        <a href="login.html"
          class="w-24 text-center py-3 rounded-xl bg-[#38BDF8] text-white text-sm font-bold hover:bg-sky-500 hover:shadow-md transition duration-200">
          Login
        </a>

      </div>

      <!-- Hamburger (mobile/tablet only) -->
      <button id="hamburgerBtn" class="flex items-center justify-center text-3xl text-[#38BDF8]">
        <i class="bi bi-list" id="hamburgerIcon"></i>
      </button>

    </div>

  </div>
</header>

<!-- Mobile Overlay -->
<div id="mobileMenuOverlay"
  class="fixed inset-0 bg-black bg-opacity-40 hidden z-40"></div>

<!-- Mobile Menu -->
<div id="mobileMenu"
  class="fixed top-0 right-0 h-full w-72 bg-white text-[#38BDF8] z-50
         transform translate-x-full transition-transform duration-300 shadow-2xl">

  <!-- Header -->
  <div class="flex items-center justify-between p-5 border-b border-white">
    <h2 class="text-xl font-bold">Menu</h2>
    <button id="closeMenuBtn" class="text-3xl">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>

  <!-- Menu Items -->
  <div class="p-6 overflow-y-auto h-full">
    <ul class="space-y-4">

      <!-- Home -->
      <li>
        <button id="mobileDropdownBtn"
          class="w-full flex items-center justify-between py-2">
          <span>Home</span>
          <i id="mobileHomeChevron"
            class="bi bi-chevron-down transition-transform duration-300"></i>
        </button>
        <ul id="mobileDropdownMenu" class="hidden mt-2 ml-4 space-y-2 rounded-xl shadow-lg p-2">
          <li><a href="index.html" class="block py-1">Home 1</a></li>
          <li><a href="home2.html" class="block py-1">Home 2</a></li>
        </ul>
      </li>

      <li><a href="about.html" class="block py-2">About</a></li>
      <li><a href="service.html" class="block py-2">Services</a></li>
       <li><a href="benefits.html" class="block py-2">Benefits</a></li>
        <li><a href="packages.html"class="block py-2">Packages</a></li>
        <li><a href="faq.html" class="block py-2">FAQ</a></li>
      <li><a href="contact.html" class="block py-2">Contact</a></li>

      <!-- Dashboard -->
      <li>
        <button id="mobileDashboardBtn"
          class="w-full flex items-center justify-between py-2">
          <span>Dashboard</span>
          <i id="mobileDashboardChevron"
            class="bi bi-chevron-down transition-transform duration-300"></i>
        </button>
        <ul id="mobileDashboardMenu" class="hidden mt-2 ml-4 space-y-2 rounded-xl shadow-lg p-2">
          <li><a href="user.html" class="block py-1">User</a></li>
          <li><a href="admin.html" class="block py-1">Admin</a></li>
        </ul>
      </li>

      <!-- Mobile Extras -->
      <li class="pt-6 border-t border-slate-200 space-y-4">

        <!-- Auth CTA buttons -->
        <div class="flex gap-3">
          <a href="sign.html"
            class="flex-1 text-center px-4 py-3 rounded-xl border-2 border-[#38BDF8] text-[#38BDF8] text-sm font-bold hover:bg-[#38BDF8] hover:text-white transition duration-200">
            Sign Up
          </a>
          <a href="login.html"
            class="flex-1 text-center px-4 py-3 rounded-xl bg-[#38BDF8] text-white text-sm font-bold hover:bg-sky-500 hover:shadow-md transition duration-200">
            Login
          </a>
        </div>

        <!-- Controls row -->
        <div class="flex justify-around">
          <button id="mobile-theme-toggle" class="text-2xl">
            <i class="bi bi-moon-fill"></i>
          </button>
          <button id="mobile-rtl-toggle" class="text-2xl">
            <i class="bi bi-arrow-left-right"></i>
          </button>
        </div>

      </li>

    </ul>
  </div>
</div>
`;

  // Mobile Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const body = document.body;

  // Toggle mobile menu
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    body.classList.toggle('mobile-menu-open');


    // Close mobile dropdown when closing menu
    if (!mobileMenu.classList.contains('active')) {
      mobileDropdownMenu.classList.remove('show');
    }
  }

  // Open mobile menu
  hamburgerBtn.addEventListener('click', toggleMobileMenu);

  // Close mobile menu
  closeMenuBtn.addEventListener('click', toggleMobileMenu);
  mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

  // Close menu when clicking a link (optional)
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });

  // Mobile dropdown functionality
  const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
  const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');

  if (mobileDropdownBtn) {
    mobileDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDropdownMenu.classList.toggle('show');
    });
  }

  // Close mobile dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileDropdownBtn && mobileDropdownMenu &&
      !mobileDropdownBtn.contains(e.target) &&
      !mobileDropdownMenu.contains(e.target)) {
      mobileDropdownMenu.classList.remove('show');
    }
  });
  const mobileDashboardBtn = document.getElementById("mobileDashboardBtn");
  const mobileDashboardMenu = document.getElementById("mobileDashboardMenu");
  const mobileDashboardChevron = document.getElementById("mobileDashboardChevron");

  mobileDashboardBtn?.addEventListener("click", (e) => {
    e.stopPropagation();

    mobileDashboardMenu.classList.toggle("hidden");
  });

  // Desktop dropdown functionality
  const homeDropdownBtn = document.getElementById('homeDropdownBtn');
  const homeDropdownMenu = document.getElementById('homeDropdownMenu');

  if (homeDropdownBtn) {
    homeDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      homeDropdownMenu.classList.toggle('hidden');
    });

    // Close desktop dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!homeDropdownBtn.contains(e.target) && !homeDropdownMenu.contains(e.target)) {
        homeDropdownMenu.classList.add('hidden');
      }
    });
  }

  // Close mobile menu on window resize above 900px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      body.classList.remove('mobile-menu-open');
      if (mobileDropdownMenu) {
        mobileDropdownMenu.classList.remove('show');
      }
    }
  });

  // Close dropdowns on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDropdownMenu) {
        mobileDropdownMenu.classList.remove('show');
      }

      if (homeDropdownMenu) {
        homeDropdownMenu.classList.add('hidden');
      }

      if (window.innerWidth <= 820) {
        toggleMobileMenu();
      }
    }
  });

  // Prevent body scroll when mobile menu is open
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        if (body.classList.contains('mobile-menu-open')) {
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.documentElement.style.overflow = '';
        }
      }
    });
  });

  observer.observe(body, { attributes: true });
  // Dark/light mode toggle
  const toggleBtn = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleBtn.innerHTML = savedTheme === "dark"
      ? `<i class="bi bi-brightness-high-fill"></i>`
      : `<i class="themeIcon bi bi-moon-stars-fill"></i>`;
  }

  toggleBtn.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = `<i class="themeIcon bi bi-moon-stars-fill"></i>`;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
  });

  // RTL toggle
  const rtlToggle = document.getElementById("rtlToggle");

  rtlToggle.onclick = () => {
    const html = document.documentElement;

    if (html.getAttribute("dir") === "rtl") {
      html.setAttribute("dir", "ltr");
    } else {
      html.setAttribute("dir", "rtl");
    }
  };

  // Highlight active nav link
  const currentPath = window.location.pathname.split("/").pop();

  const allNavLinks = document.querySelectorAll(
    '#navLinks > li > a, #mobileMenu > ul > li > a'
  );

  allNavLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    if (linkPath === currentPath) {
      link.classList.add("nav-active");
    }
  });

  // Make Home dropdown button bold and remove underline
  if (currentPath === "index.html" || currentPath === "home2.html") {
    document.getElementById("homeDropdownBtn")?.classList.add("home-active");
    document.getElementById("mobileDropdownBtn")?.classList.add("home-active");
  }
  //profile dropdown (desktop)
  const authBtn = document.getElementById("authBtn");
  const authMenu = document.getElementById("authMenu");

  if (authBtn && authMenu) {
    authBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      authMenu.classList.toggle("hidden");
    });

    // Close on outside click
    document.addEventListener("click", () => {
      authMenu.classList.add("hidden");
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        authMenu.classList.add("hidden");
      }
    });
  }
  // dashboard
  const dashboardBtn = document.getElementById("dashboardDropdownBtn");
  const dashboardMenu = document.getElementById("dashboardDropdownMenu");

  if (dashboardBtn) {
    dashboardBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dashboardMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (!dashboardBtn.contains(e.target) &&
        !dashboardMenu.contains(e.target)) {
        dashboardMenu.classList.add("hidden");
      }
    });
  }

  // ===== ACTIVE NAV (DESKTOP + MOBILE) =====
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  // Desktop links
  document.querySelectorAll("#navLinks a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("nav-active");
    }
  });

  // Mobile links (✅ FIXED selector)
  document.querySelectorAll("#mobileMenu a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("nav-active");

      // If Home submenu is active → open dropdown + bold Home
      if (link.closest("#mobileDropdownMenu")) {
        document.getElementById("mobileDropdownMenu")?.classList.add("show");
        document.getElementById("mobileDropdownBtn")?.classList.add("home-active");
      }
    }
  });

  // Desktop Home dropdown button
  if (currentPage === "index.html" || currentPage === "home2.html") {
    document.getElementById("homeDropdownBtn")?.classList.add("home-active");
  }
  // ===== PROFILE DROPDOWN =====
  const profileBtn = document.getElementById("profileBtn");
  const profileMenu = document.getElementById("profileMenu");

  if (profileBtn && profileMenu) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      // close other dropdowns
      document.getElementById("homeDropdownMenu")?.classList.add("hidden");
      document.getElementById("dashboardDropdownMenu")?.classList.add("hidden");

      profileMenu.classList.toggle("hidden");
    });

    // close on outside click
    document.addEventListener("click", (e) => {
      if (!profileBtn.contains(e.target) &&
        !profileMenu.contains(e.target)) {
        profileMenu.classList.add("hidden");
      }
    });

    // close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        profileMenu.classList.add("hidden");
      }
    });
  }
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");

  mobileThemeToggle?.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      mobileThemeToggle.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      mobileThemeToggle.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
  });

  const mobileRtlToggle = document.getElementById("mobile-rtl-toggle");

  mobileRtlToggle?.addEventListener("click", () => {
    const html = document.documentElement;

    if (html.getAttribute("dir") === "rtl") {
      html.setAttribute("dir", "ltr");
    } else {
      html.setAttribute("dir", "rtl");
    }
  });

  const mobileProfileBtn = document.getElementById("mobileProfileBtn");
  const mobileProfileMenu = document.getElementById("mobileProfileMenu");

  mobileProfileBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileProfileMenu.classList.toggle("hidden");
  });

  // close on outside click
  document.addEventListener("click", (e) => {
    if (!mobileProfileBtn?.contains(e.target) &&
      !mobileProfileMenu?.contains(e.target)) {
      mobileProfileMenu?.classList.add("hidden");
    }
  });

});
