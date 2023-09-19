const section1 = document.querySelector("#containder-section-1");
const section2 = document.querySelector("#containder-section-2");
const section3 = document.querySelector("#containder-section-3");
const section4 = document.querySelector("#containder-section-4");
const sections = [section2,section3,section4];
const gnbs = document.querySelectorAll(".gnb li a");


// 섹션 이동 스크립트 구간 //
for (let i = 0; i < gnbs.length; i++) {
    gnbs[i].addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top:sections[i].offsetTop,
        behavior:"smooth"
        })
    });
}

let $html = $("html");
let page = 1;
let lastPage = $(".center").length;
$html.animate({scrollTop: 0}, 10);

function handleScroll(e) {
  if ($html.is(":animated")) return;
  
  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  
  let posTop = (page - 1) * $(window).height();
  $html.animate({scrollTop: posTop});
}

if (window.innerWidth > 1024) {
  // 반응형 화면 크기보다 큰 경우에만 스크립트 작동
  $(window).on("wheel", handleScroll);
}
// 섹션 이동 스크립트 구간 끝 //


const gnb = document.querySelectorAll(".gnb li");
const logobar = document.querySelector(".logo");
const mognb = document.querySelectorAll(".mo_gnb li");

const section3Mobile = document.querySelector("#containder-section-3-mo");
const sectionsMobile = [section2, section3Mobile, section4]; 


for (let i = 0; i < mognb.length; i++) {
    mognb[i].addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top:sections[i].offsetTop,
        behavior:"smooth"
        })
    });
}
for (let i = 0; i < mognb.length; i++) {
    mognb[i].addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top:sectionsMobile[i].offsetTop,
        behavior:"smooth"
        })
    });
}

window.addEventListener("scroll",()=>{
	let scTop = window.scrollY;
	for(let i=0; i <sections.length; i++){
		let offsetTops = sections[i].offsetTop;
		if(scTop >= offsetTops){
			for(let j=0; j< gnb.length; j++){
				gnb[j].classList.remove("on");
				gnb[j].classList.add("out");
				logobar.classList.remove("on");
			}
			gnb[i].classList.add("on");
			gnb[i].classList.remove("out");
			logobar.classList.add("on");
		}
		if(scTop == 0){
			gnb[i].classList.remove("on");
			gnb[i].classList.remove("out");
			logobar.classList.remove("on");
			menuList.style.display = 'none';
			hamburgerIcon.classList.remove('open');
		}
	}
})
const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuList = document.querySelector('.mo_gnb');

let menuOpen = false;

hamburgerIcon.addEventListener('click', () => {
    if (!menuOpen) {
        hamburgerIcon.classList.add('open');
        menuList.style.display = 'flex';
    } else {
        hamburgerIcon.classList.remove('open');
        menuList.style.display = 'none';
    }
    menuOpen = !menuOpen;
});

class ImageSlider {
    constructor(containerSelector) {
        this.images = document.querySelectorAll(`${containerSelector} .img_slide img`);
        this.prevBtn = document.querySelector(`${containerSelector} .img_slide .img_slide_btns .prev_btn`);
        this.nextBtn = document.querySelector(`${containerSelector} .img_slide .img_slide_btns .next_btn`);
        this.currentImageIndex = 0;

        this.prevBtn.addEventListener("click", (event) => {
            event.preventDefault();
            this.changeImage(-1);
        });

        this.nextBtn.addEventListener("click", (event) => {
            event.preventDefault();
            this.changeImage(1);
        });

        this.showImage(this.currentImageIndex);
    }

    showImage(index) {
        for (let i = 0; i < this.images.length; i++) {
            this.images[i].style.opacity = i === index ? 1 : 0;
        }
    }

    changeImage(step) {
        this.currentImageIndex = (this.currentImageIndex + step + this.images.length) % this.images.length;
        this.showImage(this.currentImageIndex);
    }
}

// 각 슬라이더 초기화
const crosstargetSlider = new ImageSlider(".crosstarget_content_center");
const buyeoSlider = new ImageSlider(".buyeo_content_center");
const nabiSlider = new ImageSlider(".boknabi_content_center");
const gueongbokgungSlider = new ImageSlider(".gueongbokgung_content_center");


const portfoliobtns = document.querySelectorAll(".portfolio_btns li");

const buyeo = document.querySelector(".buyeo");
const boknabi = document.querySelector(".boknabi");
const gueongbokgung = document.querySelector(".gueongbokgung");
const crosstarget = document.querySelector(".crosstarget");


let portfoliolist = [crosstarget,buyeo,boknabi,gueongbokgung,];

for(let i=0; i< portfoliobtns.length; i++){
	portfoliobtns[i].onclick = function(event){
		event.preventDefault();
		for(let j=0; j< portfoliolist.length; j++){
			portfoliolist[j].style.display = "none";
			portfoliobtns[j].classList.remove("on");
		}
		portfoliolist[i].style.display = "flex";
		portfoliobtns[i].classList.add("on");
	}
}



