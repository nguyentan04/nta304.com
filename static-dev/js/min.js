const MAX_SLIDE = 19;
const MIN_SLIDE = 0;
const THEME = 'THEME';
const THEME_DARK = 'dark';
const THEME_LIGHT = '';
const SLIDE_SHOW_ITEM_5 = 5;
const SLIDE_SHOW_ITEM_4 = 4;
const SLIDE_SHOW_ITEM_2 = 2;
const WIDTH_SHOW_2 = 720;
const WIDTH_SHOW_3 = 1280;
const TIME_OUT_SLIDE_SHOW = 5000;
const TOOLTIP_INFO = "tooltipInfo";
const ID_TOOL_TIP = "item-detail-info";
const SCROLL_BUTTON_ID = 'bottom-up';

var countSlideShow = 0;

var autoInterval;
var isAutoShow = true;

function funcDisplayById(id, style) {
    document.getElementById(id).style.display = style;
}

function funcChangeValueById(value, id) {
    document.getElementById(id).innerHTML = value;
}

function funcChangeWidthById(idSet, idGet, idental) {
    document.getElementById(idSet).style.width = (document.getElementById(idGet).offsetWidth + idental) + 'px';
}

function funcPushSlide(n) {
    if (!!n) {
        countSlideShow += n;
        funcShowSlide()
    }
}

function funcShowSlide(n) {
    var itemShow;
    if (!!n) {
        countSlideShow = n;
    }

    itemShow = SLIDE_SHOW_ITEM_2;
    if (window.innerWidth > WIDTH_SHOW_3) {
        itemShow = SLIDE_SHOW_ITEM_5;
    } else if (window.innerWidth > WIDTH_SHOW_2) {
        itemShow = SLIDE_SHOW_ITEM_4;
    }

    if (countSlideShow > MAX_SLIDE / itemShow) {
        countSlideShow = Math.floor(MIN_SLIDE / itemShow);
    }
    if (countSlideShow < MIN_SLIDE / itemShow) {
        countSlideShow = Math.floor(MAX_SLIDE / itemShow);
    }

    Array.prototype.slice.call(document.getElementsByClassName('item-image')).forEach(function(element, index) {
        if (countSlideShow == Math.floor(index / itemShow)) {
            element.style.display = "grid";
        } else {
            element.style.display = "none";
        }
    });
}

function lightNavFunc(theme) {
    if (!!theme) {
        document.body.className = theme;
    } else {
        if (document.body.className === THEME_DARK) {
            document.body.className = THEME_LIGHT;
            localStorage.setItem(THEME, THEME_LIGHT);
        } else {
            document.body.className = THEME_DARK;
            localStorage.setItem(THEME, THEME_DARK);
        }
    }
}

function funcSetDataToolTip(id, value) {
    //title,img,alternative,author,update,view,genres,summary
    var element = document.getElementById(id);
    element.getElementsByClassName('detail-title')[0].innerHTML = value.title;
    element.getElementsByTagName('img')[0].src = value.img;
    element.getElementsByClassName('body-alternative')[0].innerHTML = value.alternative;
    element.getElementsByClassName('body-author')[0].innerHTML = value.author;
    element.getElementsByClassName('body-update')[0].innerHTML = value.update;
    element.getElementsByClassName('body-view')[0].innerHTML = value.view;
    element.getElementsByClassName('body-genres')[0].innerHTML = value.genres;
}

function funcMapToJson(map) {
    return JSON.stringify(Array.from(map));
}

function funcJsonToMap(json) {
    var array = JSON.parse(json);
    var newMap = new Map();
    array.forEach(function(element, index) {
        newMap.set(element[0], element[1]);
    });
    return newMap;
}

function funcChangePositionById(id, event) {
    var element = document.getElementById(id);
    element.style.top = event.pageY - 30 + 'px';
    element.style.left = event.pageX + 30 + 'px';
}

function funcTop() {    
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
} 

function funcScroll(id) {
    var top = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTo;
    if(top > 20) {
        funcDisplayById(id, 'block');
    } else {
        funcDisplayById(id, 'none');
    }
}

window.onscroll = function() {
    funcScroll(SCROLL_BUTTON_ID);
}

window.onload = function() {
    Array.prototype.slice.call(document.getElementById('menu-drop-content').getElementsByTagName('div')).forEach(function(value, index) {
        value.onclick = function() {
            funcChangeValueById(value.innerHTML, 'menu-drop-button')
        }
    });
    Array.prototype.slice.call(document.getElementById('search-display').getElementsByTagName('input')).forEach(function(value, index) {
        value.onclick = function() {
            funcDisplayById('search-result', 'block');
            funcChangeWidthById('search-result', 'search-display', -15);
        };
        value.onblur = function() {
            funcDisplayById('search-result', 'none');
        };
        value.autocomplete = "off";
    });
    
    funcChangeWidthById('search-result', 'search-display', -15);
    funcDisplayById('search-result', 'none');
   
    Array.prototype.slice.call(document.getElementsByClassName('item-prev')).forEach(function(value, index){
        value.onclick = function() {
            funcPushSlide(-1);
        }
    });

    Array.prototype.slice.call(document.getElementsByClassName('item-next')).forEach(function(value, index){
        value.onclick = function() {
            funcPushSlide(1);
        }        
    });

    Array.prototype.slice.call(document.getElementsByClassName('func-light')).forEach(function(value, index){
        value.onclick = function() {
            lightNavFunc();
        } 
    });

    debugger;
    funcShowSlide();

    autoInterval = setInterval(function() {
        if (isAutoShow) {
            funcPushSlide(1);
        } else {
            clearInterval(autoInterval);
        }
    }, TIME_OUT_SLIDE_SHOW);

    //set content
    var newMap = new Map();
    var obj1 = {
        title: "Manga 1",
        img: "https://avatar.novelonlinefree.com/avatar_novels/21177-the_diary_of_the_koi_prince.jpg",
        alternative: "ssssssssss",
        author: "sssssssssssssssssssssssssssssssssssss",
        update: "ssssssssssssssssssssssss",
        view: "ssssssssssss",
        genres: "ssssssssssss",
        summary: "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    }
    var obj2 = {
        title: "Manga 2",
        img: "https://avatar.novelonlinefree.com/avatar_novels/21182-setoutsumi.jpg",
        alternative: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        author: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        update: "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        view: "wwwwwwwwwwwwwwwwwwwwww",
        genres: "wwwwwwwwwwwwwwwwwwwwwwwww",
        summary: "wwwwwwwwwwwwwwwwwwwwwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
    var obj3 = {
        title: "Manga 3",
        img: "https://avatar.novelonlinefree.com/avatar_novels/21142-gibberish.jpg",
        alternative: "333333333333333333333333333333333333333333333333333333",
        author: "33333333333333333333333333333333333333333333333",
        update: "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
        view: "444444444444444444444444444444444444",
        genres: "44444444444",
        summary: "4wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
    }
    newMap.set("key1", obj1);
    newMap.set("key2", obj2);
    newMap.set("key3", obj3);

    //get content
    localStorage.setItem(TOOLTIP_INFO, funcMapToJson(newMap));
    var tooltipInfo = funcJsonToMap(localStorage.getItem(TOOLTIP_INFO));

    //getToolTip
    var itemTooltips = document.getElementsByClassName('item-tooltip');
    Array.prototype.slice.call(itemTooltips).forEach(function(element, index) {
        element.onmouseout = function(event) {
            funcDisplayById(ID_TOOL_TIP, 'none');
        }
        element.onmouseenter = function(event) {
            funcSetDataToolTip(ID_TOOL_TIP, tooltipInfo.get(element.getAttribute('data')));
        }
        element.onmousemove = function(event) {
            funcDisplayById(ID_TOOL_TIP, 'block');
            funcChangePositionById(ID_TOOL_TIP, event);
        }
    });

    //scroll function
    document.getElementById(SCROLL_BUTTON_ID).onclick = function() {
        funcTop();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    theme = localStorage.getItem(THEME);
    if (!!theme) {
        if (theme == THEME_DARK) {
            lightNavFunc(THEME_DARK);
        }
    };
});