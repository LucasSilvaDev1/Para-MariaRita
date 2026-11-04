export default function initScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const columnsLeft = document.querySelectorAll("[data-anime='sideLeft']");
  const columnsRight = document.querySelectorAll("[data-anime='sideRight']");
  if (sections.length) {
    const windownMetade = window.innerHeight * 0.7;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windownMetade < 0;
        if (isSectionVisible) section.classList.add("ativo1");
        else section.classList.remove("ativo1");
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
  if (columnsLeft.length) {
    const windownMetade = window.innerHeight * 0.6;
    function animaScrollSides1() {
      columnsLeft.forEach((image) => {
        const sectionTop = image.getBoundingClientRect().top;
        const isImageVisible = sectionTop - windownMetade < 0;
        if (isImageVisible) image.classList.add("ativo-left");
        else image.classList.remove("ativo-left");
      });
    }
    animaScrollSides1();
    window.addEventListener("scroll", animaScrollSides1);
  }

  if (columnsRight.length) {
    const windownMetade = window.innerHeight * 0.6;
    function animaScrollSides2() {
      columnsRight.forEach((image) => {
        const sectionTop = image.getBoundingClientRect().top;
        const isImageVisible = sectionTop - windownMetade < 0;
        if (isImageVisible) image.classList.add("ativo-right");
        else image.classList.remove("ativo-right");
      });
    }
    animaScrollSides2();
    window.addEventListener("scroll", animaScrollSides2);
  }
}
