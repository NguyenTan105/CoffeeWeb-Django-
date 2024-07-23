var searchIcon = document.getElementById("searchIcon");
var searchInput = document.getElementById("searchInput");
var searchMenu = document.getElementById("searchMenu");
var searchIcon1 = document.getElementById("searchIcon1");

function toggleSearchIcon1() {
  if (searchIcon.classList.contains("fa-search")) {
    searchIcon.classList.remove("fa-search");
    searchIcon.classList.add("fa-times");
  } else {
    searchIcon.classList.remove("fa-times");
    searchIcon.classList.add("fa-search");
  }
  console.log('hello')
}

searchMenu.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleSearchIcon1();
});

document.addEventListener('click', function(event) {
  var isSearchInput = searchInput.contains(event.target);

  if (searchIcon.classList.contains("fa-times") && !isSearchInput) {
    toggleSearchIcon1();
  }
});

searchInput.addEventListener('click', function(event) {
  event.stopPropagation();
});
searchIcon1.addEventListener('click', function(event) {
    event.stopPropagation();
});

