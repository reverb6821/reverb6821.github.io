// Navbar element

const sections = [...document.querySelectorAll('section')];
const link = (id) => document.querySelector(`a[href="#${id}"]`)

const inView = (element) => {
    var top = element.offsetTop;
    var height = element.offsetHeight;

    while(element.offsetParent){
        element = element.offsetParent;
        top += element.offsetTop;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) && (top + height) > window.pageYOffset
        );
    };

const init = () => {
    function update(){
        let next = false;

        sections.forEach(section => {
            const current = link(section.id);

            if(inView(section) && !next ){
                current.classList.add('current');
                next = true;
            } else {
                current.classList.remove('current');
            }
        } );
    }
    update();
    window.addEventListener('scroll', update);
}

init();


// scroll to top button
const scrollToTop = document.getElementById('scroll-to-top');
let dataShow = false;

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 50 && !dataShow){
        scrollToTop.setAttribute('data-show', 'true');
        dataShow = true;
    }

    if(window.scrollY <= 50 && dataShow){
        scrollToTop.setAttribute('data-show', 'false');
        dataShow = false;
    }
});

scrollToTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

