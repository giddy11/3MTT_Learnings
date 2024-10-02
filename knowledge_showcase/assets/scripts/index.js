document.addEventListener("DOMContentLoaded", function () {
  const dashboardBtn = document.getElementById("dashboard-btn");
  const logo = document.querySelector(".logo");
  const logoShort = document.querySelector(".logo-short");
  const logoFull = document.querySelector(".logo-full");

  const side_bar = document.getElementById("side-bar");
  const side_bar_p = document.querySelectorAll(".details");


  let isToggled = false;

  dashboardBtn.addEventListener("click", function () {
    if (!isToggled) {
      // Minimize logo and toggle visibility
      logo.style.width = "50px";
      logo.style.paddingLeft = "5px";
      logo.style.paddingRight = "5px";
      logoShort.style.display = "inline";
      logoFull.style.display = "none";

      side_bar.style.width = "50px";
      side_bar_p.forEach((p) => (p.style.display = "none"));
    } else {
      // Revert to the original state
      logo.style.width = "350px";
      logo.style.paddingLeft = "";
      logo.style.paddingRight = "";
      logoShort.style.display = "none";
      logoFull.style.display = "inline";

      side_bar.style.width = "340px";
      side_bar_p.forEach((p) => (p.style.display = "inline"));

    }
    isToggled = !isToggled;
  });
});