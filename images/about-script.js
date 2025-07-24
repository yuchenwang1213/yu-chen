const joinBtn = document.getElementById("join-btn");

joinBtn.addEventListener("click", function() {
  alert("Thanks for joining the community!");
});

joinBtn.addEventListener("mouseover", function() {
  console.log("Mouse is over the button");
});

joinBtn.addEventListener("mouseout", function() {
  console.log("Mouse left the button");
});
