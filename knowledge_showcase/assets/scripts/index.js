document.addEventListener("DOMContentLoaded", function () {
  const dashboardBtn = document.getElementById("dashboard-btn");
  const logo = document.querySelector(".logo");
  const logoShort = document.querySelector(".logo-short");
  const logoFull = document.querySelector(".logo-full");

  let isToggled = false;

  dashboardBtn.addEventListener("click", function () {
    if (!isToggled) {
      // Minimize logo and toggle visibility
      logo.style.width = "50px";
      logo.style.paddingLeft = "5px";
      logo.style.paddingRight = "5px";
      logoShort.style.display = "inline";
      logoFull.style.display = "none";
    } else {
      // Revert to the original state
      logo.style.width = "350px";
      logo.style.paddingLeft = "";
      logo.style.paddingRight = "";
      logoShort.style.display = "none";
      logoFull.style.display = "inline";
    }
    isToggled = !isToggled;
  });
});