document.getElementById("searchbar").addEventListener("keyup", (e) => {
  search(e.target.value);
});
document.getElementById("searchbar2").addEventListener("keyup", (e) => {
  search(e.target.value);
});
function search(inp) {
  var input = inp;
  input = input.toLowerCase();
  var x = document.getElementsByClassName("searchItem");
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}
var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

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

/*scroll to top*/
document.addEventListener("DOMContentLoaded", function () {
  var t = document.querySelector(".vanillatop");
  function e(n) {
    var o = window.pageYOffset,
      a = Math.floor(Date.now());
    !(function t() {
      Math.easeInOutQuad = function (t) {
        return t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1;
      };
      var e = Math.min(1, (Math.floor(Date.now()) - a) / n);
      window.scroll(0, Math.ceil(Math.easeInOutQuad(e) * (0 - o) + o)),
        0 === window.pageYOffset && callback(),
        requestAnimationFrame(t);
    })();
  }
  t.addEventListener("click", function () {
    window.requestAnimationFrame ? e(700) : window.scrollTo(0, 0);
  }),
    window.addEventListener("scroll", function () {
      280 < document.body.scrollTop || 280 < document.documentElement.scrollTop
        ? (t.removeAttribute("style", "transform: translateX(120px);"),
          t.setAttribute("style", "transform: translateX(0);"))
        : (t.removeAttribute("style", "transform: translateX(0);"),
          t.setAttribute("style", "transform: translateX(120px);"));
    });
});
