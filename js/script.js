var prisoners = document.getElementById('prisoners');
var thousand = document.getElementById('thousand');
var counter = document.getElementById('counter');
var title = document.getElementById('title');
var scroll_count = 0;

function setHeight() {
  var browser_width = window.innerWidth || document.body.clientWidth;
  var icons_per_card = 200;
  var pixel_height_per_card = 500;
  var pixel_width_per_card = 400;

  var cards_per_row = browser_width / pixel_width_per_card;
  var icons_per_row = icons_per_card * cards_per_row;
  var number_of_rows = 2300000/icons_per_row;

  var height = Math.floor(number_of_rows * pixel_height_per_card);
  prisoners.style.height = height + "px";

  var thousand_height = Math.floor((1000/icons_per_row) * pixel_height_per_card);
  thousand.style.height = thousand_height + "px";
}
setHeight();

window.addEventListener("orientationchange", setHeight);
window.addEventListener("resize", setHeight);

var observer = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      prisoners.classList.remove('red');
      prisoners.classList.remove('blue');
      prisoners.classList.remove('black');
      prisoners.classList.add(entry.target.dataset.background);
      document.getElementsByTagName('body')[0].classList.remove('not-free');
    }
  })
})
document.querySelectorAll('[data-background]').forEach(function(target){
  observer.observe(target);
});

var freedomObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      document.getElementsByTagName('body')[0].classList.add('not-free');
    }
  })
})
document.querySelectorAll('.freedom').forEach(function(target){
  freedomObserver.observe(target);
});

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
if (isAndroid) {
  document.body.classList.add("android");
}

window.addEventListener('scroll', function(e) {
  scroll_count = getScrollCount();
  if (scroll_count > 800) {
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

function toggleExpand(outer, inner) {
  var outerEl = document.getElementById(outer);
  var innerEl = document.getElementById(inner);
  var offset = Math.abs(outerEl.offsetTop - innerEl.offsetTop);
  innerEl.style.top = offset + 'px';
  outerEl.classList.add('expanded')
}

function showTooltip(e) {
  var tooltip = e.parentElement.getElementsByClassName('tooltip')[0]
  tooltip.classList.add('open')
}
function closeTooltip(e) {
  e.parentElement.classList.remove('open');
}
