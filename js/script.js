// ================= typing animation ================
let typed = new Typed(".typing", {
  strings: ["", "MERNStack"],
  typeSpeed: 80,
  BackSpeed: 50,
  loop: true,
});

// ===================== Aside ======================
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;


const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  document.querySelector(".aside").classList.toggle("open");
});


const hireMeButtons = document.querySelectorAll(".hire-me");
hireMeButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.getAttribute("href").split("#")[1];
    showSection(target);
    document.querySelector(".aside").classList.remove("open");
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    const contactLink = document.querySelector(`.nav li a[href="#${target}"]`);
    if (contactLink) {
      contactLink.classList.add("active");
    }
  });
});

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
        navList[j].querySelector("a").classList.remove("active");
      }
    }
    this.classList.add("active");
    showSection(this.getAttribute("href").split("#")[1]);
    document.querySelector(".aside").classList.remove("open");
  });
}

function showSection(target) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const targetSection = document.querySelector("#" + target);
  if (targetSection) {
    targetSection.classList.add("active");

    try {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (e) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  } else {
    console.error(`Section with id "${target}" not found.`);
  }
}


