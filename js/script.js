// Mobile Navigation Toggle
const hamburgerMenu = document.getElementById("hamburger-menu")
const navMenu = document.querySelector(".nav")

if (hamburgerMenu && navMenu) {
  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerMenu.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!hamburgerMenu.contains(event.target) && !navMenu.contains(event.target)) {
      hamburgerMenu.classList.remove("active")
      navMenu.classList.remove("active")
    }
  })
}

// Sticky header navigation
window.addEventListener("scroll", () => {
  var scroll = window.pageYOffset
  var header = document.querySelector("header")

  if (scroll > 200) {
    header.classList.add("background-header")
  } else {
    header.classList.remove("background-header")
  }
})

// Responsive image loading
function optimizeImages() {
  const images = document.querySelectorAll("img")

  images.forEach((img) => {
    // Add loading="lazy" for better performance
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy")
    }

    // Handle image load errors
    img.addEventListener("error", function () {
      this.style.display = "none"
    })
  })
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  optimizeImages()
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Viewport height fix for mobile browsers
function setViewportHeight() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

window.addEventListener("resize", setViewportHeight)
setViewportHeight()
