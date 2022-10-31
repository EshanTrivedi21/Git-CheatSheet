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

  window.addEventListener("scroll", function () {
    20 < document.body.scrollTop || 20 < document.documentElement.scrollTop
      ? (t.removeAttribute("style", "transform: translateX(120px);"),
        t.setAttribute("style", "transform: translateX(0);"))
      : (t.removeAttribute("style", "transform: translateX(0);"),
        t.setAttribute("style", "transform: translateX(120px);"));
  });
});
