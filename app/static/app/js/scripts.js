function submitSearchForm(event) {
  event.preventDefault();
  // ngăn chặn hành vi mặc định của sự kiện gốc
  // Lấy giá trị từ ô input
  var searchTerm = document.getElementById('searchInput').value;

  // Thêm giá trị vào một hidden input (nếu cần)
  var hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = 'searched';
  hiddenInput.value = searchTerm;
  document.getElementById('searchForm1').appendChild(hiddenInput);

  // Kích thích sự kiện submit trên form
  document.getElementById('searchForm1').submit();
}

function submitSearchForm1(event) {
  event.preventDefault();
  // ngăn chặn hành vi mặc định của sự kiện gốc
  // Lấy giá trị từ ô input
  var searchTerm = document.getElementById('searchInput1').value;

  // Thêm giá trị vào một hidden input (nếu cần)
  var hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = 'searched';
  hiddenInput.value = searchTerm;
  document.getElementById('searchForm').appendChild(hiddenInput);

  // Kích thích sự kiện submit trên form
  document.getElementById('searchForm').submit();
}