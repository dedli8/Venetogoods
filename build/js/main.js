// countdown init script

const myCountdown = new countdown({
    target: '.countdown',
    dayWord: ' день',
    hourWord: ' час',
    minWord: ' минут',
    secWord: ' сек'
});

const myCountdown2 = new countdown({
    target: '.countdown2',
    dayWord: ' день',
    hourWord: ' час',
    minWord: ' минут',
    secWord: ' сек'
});
const myCountdown3 = new countdown({
    target: '.countdown3',
    dayWord: ' день',
    hourWord: ' час',
    minWord: ' минут',
    secWord: ' сек'
});

// countdown init script ends

// banner script starts

// banner autoplay script starts
(function () {
    function Slideshow(element) {
        this.el = document.querySelector(element);
        this.init();
    }

    Slideshow.prototype = {
        init: function () {
            this.slides = this.el.querySelectorAll(".mySlides");
            this.index = 0;
            this.timer = null;
            this.action();
            this.stopStart();
        },
        _slideTo: function (slide) {
            var currentSlide = this.slides[slide];
            currentSlide.style.display = "block";
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides[i];
                if (slide !== currentSlide) {
                    slide.style.display = "none";
                }
            }
        },
        action: function () {
            var self = this;
            self.timer = setInterval(function () {
                self.index++;
                if (self.index == self.slides.length) {
                    self.index = 0;
                }
                self._slideTo(self.index);

            }, 3000);
        },
        stopStart: function () {
            var self = this;
            self.el.addEventListener("mouseover", function () {
                clearInterval(self.timer);
                self.timer = null;

            }, false);
            self.el.addEventListener("mouseout", function () {
                self.action();

            }, false);
        }

    };

    document.addEventListener("DOMContentLoaded", function () {

        var banner = new Slideshow(".banner");

    });

})();

// banner autoplay script ends

// banner buttons prev and next script

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slidesItem = document.getElementsByClassName("mySlides");
    if (n > slidesItem.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slidesItem.length
    }
    for (i = 0; i < slidesItem.length; i++) {
        slidesItem[i].style.display = "none";
    }
    slidesItem[slideIndex - 1].style.display = "block";
}

// banner buttons script ends

// banner script ends

// dropdown menu script starts

const menuItem = document.getElementsByClassName("goods-menu-item");
const dropdownMenuArea = document.getElementsByClassName("section-stock-counterdown")[0];
const header = document.getElementsByClassName("header")[0];
const goodsMenu = document.getElementsByClassName("goods-menu")[0];
const goodsMenuDropdown = document.getElementsByClassName("goods-menu-dropdown");
const goodsMenuArrow = document.getElementsByClassName("goods-menu-arrowup-box");

function displayDropdownArea() {
    dropdownMenuArea.style.display = "block";
    header.style.borderBottom = "1px solid #0075be";
}

function displayNoneDropdownArea() {
    dropdownMenuArea.style.display = "none";
    header.style.borderBottom = "none";
    for (let h = 0; menuItem.length > h; h++) {
        goodsMenuDropdown[h].classList.remove("goods-menu-dropdown-active");
        goodsMenuArrow[h].classList.remove("goods-menu-dropdown-active");
    }

}

for (let j = 0; menuItem.length > j; j++) {
    menuItem[j].addEventListener("mouseover", function (event) {
        if (event.target.parentElement.classList.contains("goods-menu-item")) {
            displayDropdownArea();
            for (let t = 0; menuItem.length > t; t++) {
                goodsMenuDropdown[t].classList.remove("goods-menu-dropdown-active");
                goodsMenuArrow[t].classList.remove("goods-menu-dropdown-active");
            }
            event.target.parentElement.lastElementChild.classList.add("goods-menu-dropdown-active");
            event.target.parentElement.firstElementChild.classList.add("goods-menu-dropdown-active");
        }
    });
}

goodsMenu.addEventListener("mouseleave", displayNoneDropdownArea);


// dropdown menu script ends


// btn to top script starts

// When the user scrolls down 20px from the top of the document, show the button
const btnToTop = document.getElementById("btn-to-top");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
btnToTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// btn to top script ends

// city dropdown script starts

const city = document.getElementsByClassName("city")[0];
const cityPanelWrap = document.getElementsByClassName('city-panel-wrap')[0];
const cityArrowup = document.getElementsByClassName("city-panel-arrowup")[0];
const cityText = document.getElementsByClassName("city-text")[0];
const cityItemCollection = document.getElementsByClassName('city-panel-item');

function showPanel() {
    cityPanelWrap.style.display = "block";
    cityArrowup.style.display = "block";
};

function hidePanel() {
    cityPanelWrap.style.display = 'none';
    cityArrowup.style.display = 'none';
}

function changeCity(event) {
    if (event.target.classList.contains("city-panel-item")) {
        for (var i = 0; cityItemCollection.length > i; i++) {
            cityItemCollection[i].classList.remove("city-panel-item-active");
        }
        event.target.classList.add("city-panel-item-active");
        const getText = event.target.innerHTML;
        cityText.innerHTML = getText;
        cityPanelWrap.style.display = 'none';
        cityArrowup.style.display = 'none';
        event.stopPropagation();
    }
};

city.addEventListener('click', showPanel);
cityPanelWrap.addEventListener('click', changeCity);
city.addEventListener('mouseleave', hidePanel);


// city dropdown script ends

// language dropdown script starts

const language = document.getElementsByClassName("language")[0];
const languagePanelWrap = document.getElementsByClassName('language-panel-wrap')[0];
const languageArrow = document.getElementsByClassName("language-arrow")[0];
const languagePanelText = document.getElementsByClassName('language-panel-text')[0];
var languageText = document.getElementsByClassName('language-text')[0];
var getLanguageText = "";

function showLanguagePanel() {
    languagePanelWrap.style.display = "block";
    languageArrow.style.display = "block";
    getLanguageText = languageText.innerHTML;
};

function hideLanguagePanel() {
    languagePanelWrap.style.display = 'none';
    languageArrow.style.display = 'none';
}

function changeLanguage(event) {
    if (event.target.classList.contains("language-panel-text")) {
        var getPanelText = event.target.innerHTML;
        languagePanelText.innerHTML = getLanguageText;
        languageText.innerHTML = getPanelText;
        languagePanelWrap.style.display = 'none';
        languageArrow.style.display = 'none';
        event.stopPropagation();
    }
};

language.addEventListener('click', showLanguagePanel);
languagePanelWrap.addEventListener('click', changeLanguage);
language.addEventListener('mouseleave', hideLanguagePanel);


// language dropdown script ends