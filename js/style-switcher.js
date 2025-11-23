/* =========================================
   ملف style-switcher.js (معدل ليعمل مع تصميمك)
   ========================================= */

// 1. فتح وإغلاق القائمة عند الضغط على الترس
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// 2. إخفاء القائمة تلقائياً عند عمل Scroll
// التعديل هنا: أضفنا "true" في النهاية لتفعيل الـ Capture
window.addEventListener(
  "scroll",
  () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
      document.querySelector(".style-switcher").classList.remove("open");
    }
  },
  true
); // <--- كلمة true هذه هي الحل السحري لمشكلتك

// 3. تغيير ألوان الثيم (Theme Colors)
const themeColors = document.querySelectorAll(".style-switcher .colors span");
themeColors.forEach((colorSpan) => {
  colorSpan.addEventListener("click", function () {
    const color = window.getComputedStyle(this).backgroundColor;
    document.documentElement.style.setProperty("--skin-color", color);
  });
});

// 4. الوضع الليلي والنهاري (Dark/Light Mode)
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
