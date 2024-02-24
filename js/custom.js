const dot = document.querySelector(".dots");
const header = document.querySelector("header");
dot.addEventListener("click", (e) => {
  const navRight = e.target.parentNode.parentNode.parentNode.children[2];

  if (navRight.style.maxHeight) {
    navRight.style.maxHeight = null;
    header.classList.remove('custom-padd')
    
  } else {
    navRight.style.maxHeight = navRight.scrollHeight + "%";
    header.classList.add('custom-padd')
  }
});
