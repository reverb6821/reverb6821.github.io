//Portfolio Filter

const filterContainer = document.querySelector('.portfolio-filter');
const filterBtns = filterContainer.children;
const totaFilterBtn = filterBtns.length;
const portfolioItems = document.querySelector('.portfolio-item');
const totalPortfolioItem = portfolioItems.length;

for(let i = 0; i < totaFilterBtn; i++){
  //console.log(this.innerHTML)
  filterBtns[i].addEventListener('click', function(){
    filterContainer.querySelector('.active').classList.remove('active');
    this.classList.add('active');
    
    const filterValue = this.getAttribute('data-filter');
    for(let k = 0; k < totalPortfolioItem; k++){
      if(filterValue === portfolioItems[k].getAttribute('data-category')){
        portfolioItems[k].classList.remove('hide');
        portfolioItems[k].classList.add('show');
      }else if(filterValue === 'all'){
        portfolioItems[k].classList.remove('hide');
        portfolioItems[k].classList.add('show');
      }else{
        portfolioItems[k].classList.remove('show');
        portfolioItems[k].classList.add('hide');
      }
    }
  })
}



// text rotation
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
// END Animated txt