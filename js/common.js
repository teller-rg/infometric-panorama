/*
   From here you can add custom js.
   -----
*/

$(document).ready(function () {
  burgerMenu();
});
function burgerMenu() {
  $(".menu-icon").click(function () {
    $(this).toggleClass("menu-icon-close");
    $(".burger-menu").toggleClass("burger-menu--open");
  });
}
