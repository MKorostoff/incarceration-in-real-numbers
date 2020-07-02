var prisoners = document.getElementById('prisoners');
var counter = document.getElementById('counter');
var title = document.getElementById('title');
var scroll_count = 0;

var observer = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      document.getElementById('prisoners').style = 'background-image: url(img/bg/' + entry.target.dataset.background + ');'
    }
  })
})
var obervables = ['blue','red','pretrial','preconvicted', 'disagree', 'unconvicted'];
obervables.forEach(function(id){
  var target = document.getElementById(id);
  observer.observe(target);
})

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
