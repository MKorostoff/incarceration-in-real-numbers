var prisoners = document.getElementById('prisoners');
var counter = document.getElementById('counter');
var title = document.getElementById('title');
var scroll_count = 0;

function setHeight() {
  var browser_width = window.innerWidth || document.body.clientWidth;
  var icons_per_card = 200;
  var cards_per_row = browser_width / 400;
  var icons_per_row = icons_per_card * cards_per_row;
  var number_of_rows = 2300000/icons_per_row;
  var height = Math.floor(number_of_rows * 500);
  prisoners.style.height = height + "px";
}
setHeight();

window.addEventListener("orientationchange", setHeight);
window.addEventListener("resize", setHeight);


var observer = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      prisoners.style.backgroundImage = "url('img/bg/" + entry.target.dataset.background + "')"
    }
  })
})
var obervables = ['blue','red','pretrial','preconvicted', 'unsurprisingly', 'unconvicted'];
obervables.forEach(function(id){
  var target = document.getElementById(id);
  observer.observe(target);
})

var freedomObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      document.getElementsByTagName('body')[0].classList.add('not-free');
    }
    else {
      document.getElementsByTagName('body')[0].classList.remove('not-free');
    }
  })
})
var freedom = document.getElementById('freedom');
freedomObserver.observe(freedom);

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
