const click = document.querySelector(".click");
const giftBox = document.querySelector(".gift-box");
const Shadow = document.querySelector(".shadow");
const giftContainer = document.querySelector(".gift-container");
const Text = document.querySelector(".text");
const Pallet = document.querySelector(".pallet-title");

click.addEventListener("click", () => {
  if (click.className === "click") {
    Pallet.classList.add("active");
    click.classList.add("active");
    giftBox.classList.add("active");
    Shadow.classList.add("active");
    giftContainer.classList.add("active");
    Text.classList.add("active");
    Text.classList.remove("active2");
  } else {
    Pallet.classList.remove("active");
    click.classList.remove("active");
    giftBox.classList.remove("active");
    Shadow.classList.remove("active");
    giftContainer.classList.remove("active");
    Text.classList.remove("active");
    Text.classList.add("active2");
  }
});

// window.location.href = "content.html";

// document.location.href="";
//    OR
// window.location.href="";

function redirect() {
  setTimeout(myURL, 4000);
  var result = document.getElementById("result");
  //    result.innerHTML = "<b> The page will redirect after delay of 5 seconds";
  result.innerHTML = "Halaman akan berpindah dalam 4 detik";
}

function myURL() {
  document.location.href = "content.html";
}
