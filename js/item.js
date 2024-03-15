
// Xử lý sự kiện click vào các mục trong dropdown
var dropdownItems = document.querySelectorAll('.dropdown-item');

for (var i = 0; i < dropdownItems.length; i++) {
  var addButton = dropdownItems[i].querySelector('.add-btn');
  var itemCount = dropdownItems[i].querySelector('.item-count');
  var itemType = dropdownItems[i].getAttribute('data-type');

  // Tăng số lượng khi click nút "+"
  addButton.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent dropdown close
  
    // Get the item type of the clicked dropdown item
    var itemType = this.parentNode.getAttribute('data-type');
  
    var count = parseInt(this.parentNode.getAttribute('data-count')) + 1;
    this.parentNode.setAttribute('data-count', count);
  
    // Update count based on item type
    if (itemType === 'room') {
      document.getElementById("room-item-count").textContent = count;
    } else if (itemType === 'adults') {
      document.getElementById("adults-item-count").textContent = count;
    } else if (itemType === 'children') {
      document.getElementById("children-item-count").textContent = count;
    }
    updateDropdownButton(); // Update dropdown button
  });
}

// Cập nhật nội dung nút dropdown
function updateDropdownButton() {
  var roomCount = parseInt(document.getElementById("room-item-count").textContent);
  var adultsCount = parseInt(document.getElementById("adults-item-count").textContent);
  var childrenCount = parseInt(document.getElementById("children-item-count").textContent);
  dropdownBtn.innerHTML = roomCount +  " Room, "+  adultsCount +" Adults, "+ childrenCount + " Children ";
}
document.addEventListener('click', function(event) {
  var dropdown = document.getElementById("myDropdown");
  var dropdownBtn = document.getElementById("dropbtn");
  var target = event.target;
  var dropdownClicked = dropdown.contains(target);
  var dropdownBtnClicked = dropdownBtn.contains(target);
  if (!dropdownClicked && !dropdownBtnClicked) {
      dropdown.style.display = 'none';
  }
});

// Function to toggle the dropdown when clicking on the button
document.getElementById("dropbtn").addEventListener("click", function() {
var dropdown = document.getElementById("myDropdown");
if (dropdown.style.display === "none" || dropdown.style.display === "") {
  dropdown.style.display = "block";
} else {
  dropdown.style.display = "none";
}
});