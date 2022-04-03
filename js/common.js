/*
   From here you can add custom js.
   -----
*/

$(document).ready(function () {
  burgerMenu();
  $("#welcomeModal").modal("show");
});
function burgerMenu() {
  $(".menu-icon").click(function () {
    $(this).toggleClass("menu-icon-close");
    $(".burger-menu").toggleClass("burger-menu--open");
  });
}
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  var y = document.getElementsByClassName("tab-img");
  x[n].style.display = "block";
  y[n].style.display = "flex";
  if (n == 0) {
    document.getElementById("prevBtn").innerHTML = "Hoppa över";
  } else {
    document.getElementById("prevBtn").innerHTML = "Tillbaka";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Avsluta";
  } else {
    document.getElementById("nextBtn").innerHTML = "Nästa";
  }
  document.getElementById("currentStep").innerHTML = n + 1;
  document.getElementById("allSteps").innerHTML = x.length;
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  var y = document.getElementsByClassName("tab-img");
  x[currentTab].style.display = "none";
  y[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length || currentTab < 0) {
    $("#welcomeModal").modal("hide");
    return false;
  }
  showTab(currentTab);
}
