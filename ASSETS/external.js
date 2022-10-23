  //adding toggle button for light and dark mode 
  const toggleButton = document.getElementById("toggle-btn");
  toggleButton.onclick = function () {
    document.body.classList.toggle("light-theme");
    
  }

  const copyButton = document.querySelectorAll(".copy-btn");
  copyButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      var code = btn.previousElementSibling.innerText;
      code = code.slice(2, code.length);
      navigator.clipboard.writeText(code);
      // Adding Alert When text is copied and removing after 800ms
      btn.classList.add("copied")
      setTimeout(function () {
        btn.classList.remove("copied")
      }, 800)
    });
  });

  function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('searchItem');

    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "block";
      }
    }
  }

  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }


}