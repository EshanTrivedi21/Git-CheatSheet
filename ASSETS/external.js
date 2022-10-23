  var copyButton = document.querySelectorAll(".copy-btn");
  copyButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      var code = btn.previousElementSibling.innerText;
      code = code.slice(2, code.length);
      navigator.clipboard.writeText(code);
      btn.classList.add("copied")
      setTimeout(function () {
        btn.classList.remove("copied")
      }, 800)
    });
  });

  function search() {
    var input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    var x = document.getElementsByClassName('searchItem');

    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "block";
      }
    }
  }

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

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