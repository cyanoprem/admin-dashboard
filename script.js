var dashboardDropdown = document.querySelector('#mobile-dashbord-dropdown');
dashboardDropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dashboardDropdown.classList.toggle('is-active');
});

var profileDropdown = document.querySelector('#mobile-profile-dropdown');
profileDropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  profileDropdown.classList.toggle('is-active');
});