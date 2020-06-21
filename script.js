var prisoners = document.getElementById('prisoners');
var counter = document.getElementById('counter');
var title = document.getElementById('title');
var scroll_count = 0;

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
if (isAndroid) {
  document.body.classList.add("android");
}

window.addEventListener('scroll', function(e) {
  scroll_count = getScrollCount();
  if (scroll_count > 55320) {
    counter.innerHTML = scroll_count.toLocaleString();
  }
  else {
    counter.innerHTML = '';
  }
});

function getScrollCount() {
  var body = document.documentElement || document.body;
  var total_height = prisoners.clientHeight;
  var scroll_percent = (body.scrollTop - prisoners.offsetTop + body.clientHeight) / total_height;
  var count = Math.floor(scroll_percent * 2300000);
  return count;
}
