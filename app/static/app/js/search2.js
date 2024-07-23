var searchIcon2= document.getElementById("searchIcon2");
var searchInput1 = document.getElementById("searchInput1");
var searchMenu1 = document.getElementById("searchMenu1");
var searchIcon3 = document.getElementById("searchIcon3");

function toggleSearchIcon() {
  if (searchIcon2.classList.contains("fa-search")) {
    searchIcon2.classList.remove("fa-search");
    searchIcon2.classList.add("fa-times");
  } else {
    searchIcon2.classList.remove("fa-times");
    searchIcon2.classList.add("fa-search");
  }
  console.log('hello1')
}

searchMenu1.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleSearchIcon();
});

document.addEventListener('click', function(event) {
  var isSearchInput = searchInput1.contains(event.target);

  if (searchIcon2.classList.contains("fa-times") && !isSearchInput) {
    toggleSearchIcon();
  }
});

searchInput1.addEventListener('click', function(event) {
  event.stopPropagation();
});
searchIcon3.addEventListener('click', function(event) {
    event.stopPropagation();
});

