var MAX_SLIDE = 19;
var MIN_SLIDE = 0;
var THEME = 'THEME';
var THEME_DARK = 'dark';
var THEME_LIGHT = 'light';
var SLIDE_SHOW_ITEM_5 = 5;
var SLIDE_SHOW_ITEM_4 = 4;
var SLIDE_SHOW_ITEM_2 = 2;
var WIDTH_SHOW_2 = 720;
var WIDTH_SHOW_3 = 1280;
var WIDTH_SCREEN = 720;
var TIME_OUT_SLIDE_SHOW = 5000;
var TOOLTIP_INFO = "tooltipInfo";
var SCROLL_BUTTON_ID = 'bottom-up';
var EXDAYS_COOKIE = 365;
var CSS_LIGHT = '../css/style-light.css';
var CSS_DARK = '../css/style-dark.css';

var countSlideShow = 0;
var autoInterval;
var isAutoShow = true;
var tooltipContent = [];

function funcSaveStore(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch(e) {
        funcSetCookie(key, value, EXDAYS_COOKIE);
    }
}

function funcGetStore(key) {
    try {
        return localStorage.getItem(key);
    } catch(e) {
        return fucGetCookie(key);
    }
}

function funcSetCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function fucGetCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

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

function funcGetWidthScreen() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function funcCheckBrowser(browser) {//Opera,Firefox,Safari,IE,Edge,Chrome,Blink
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    
    if(browser == 'Opera') return isOpera;
    if(browser == 'Firefox') return isFirefox;
    if(browser == 'Safari') return isSafari;
    if(browser == 'IE') return isIE;
    if(browser == 'Edge') return isEdge;
    if(browser == 'Chrome') return isChrome;
    if(browser == 'Blink') return isBlink;
}

function funcShowSlide(n) {
    var itemShow;
    if (!!n) {
        countSlideShow = n;
    }

    itemShow = SLIDE_SHOW_ITEM_2;
    if (WIDTH_SCREEN > WIDTH_SHOW_3) {
        itemShow = SLIDE_SHOW_ITEM_5;
    } else if (WIDTH_SCREEN > WIDTH_SHOW_2) {
        itemShow = SLIDE_SHOW_ITEM_4;
    }

    if (countSlideShow > MAX_SLIDE / itemShow) {
        countSlideShow = parseInt(MIN_SLIDE / itemShow);
    }
    if (countSlideShow < MIN_SLIDE / itemShow) {
        countSlideShow = parseInt(MAX_SLIDE / itemShow);
    }

    $('#slideshow-body .item-image').each(function(index, element){
        if (countSlideShow == parseInt(index / itemShow)) {
            $(element).css('display','block');
        } else {
            $(element).css('display','none');
        }
    });
}

function lightNavFunc(theme) {
    if (!!theme) {
        if (theme === THEME_LIGHT) {
            funcSaveStore(THEME, THEME_LIGHT);
            $('#style-sheet-css').attr('href', CSS_LIGHT);
        } else {
            funcSaveStore(THEME, THEME_DARK);
            $('#style-sheet-css').attr('href', CSS_DARK);
        }
    } else {
        theme = funcGetStore(THEME);
        if (!!theme) {
            if (theme === THEME_DARK) {
                funcSaveStore(THEME, THEME_LIGHT);
                $('#style-sheet-css').attr('href', CSS_LIGHT);
            } else {
                funcSaveStore(THEME, THEME_DARK);
                $('#style-sheet-css').attr('href', CSS_DARK);
            }
        } else {
            funcSaveStore(THEME, THEME_LIGHT);
            $('#style-sheet-css').attr('href', CSS_LIGHT);
        }  
    }
}

function funcSetDataToolTip(value) {
    $($('#item-detail-info .detail-title')[0]).html(value.title);
    $($('#item-detail-info img')[0]).attr("src",value.img);
    $($('#item-detail-info .body-alternative')[0]).html(value.alternative);
    $($('#item-detail-info .body-author')[0]).html(value.author);
    $($('#item-detail-info .body-update')[0]).html(value.update);
    $($('#item-detail-info .body-view')[0]).html(value.view);
    $($('#item-detail-info .body-genres')[0]).html(value.genres);
}

function funcGetValueByMapArray(map, key) {
    var index = 0; 
    var length = map.length;
    for (index = 0; index < length; index++) {
        if (!!map[index]) {
            if(map[index][0]==key) {
                return map[index][1];
            }
        }
    }
    return ''
}


function funcChangePositionById(id, event) {
    var element = document.getElementById(id);
    element.style.top = event.pageY - 30 + 'px';
    element.style.left = event.pageX + 30 + 'px';
}

function funcTop() {
    $('html, body').animate({scrollTop:0}, '300');
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

$(document).ready(function(){
    var element; 
    var theme;
    WIDTH_SCREEN = funcGetWidthScreen();
    theme = funcGetStore(THEME);
    if (!!theme) {
       lightNavFunc(theme);
    }else {
        lightNavFunc(THEME_DARK);
    }

    $('.menu-drop-content div').each(function(index, element){
        element.click(function(){
            funcChangeValueById(element.html(), 'menu-drop-button')
        }) 
    });

    $('#search-display input').each(function(index, element){
        element.click(function(){
            funcDisplayById('search-result', 'block');
            funcChangeWidthById('search-result', 'search-display', -15);
        });
        element.blur(function(){
            funcDisplayById('search-result', 'none');
        });
    });

    element = $('#item-prev');
    if(!!element) {
        element.click(function(){
            funcPushSlide(-1);
        });
    }

    element = $('#item-next');
    if(!!element) {
        element.click(function(){
            funcPushSlide(-1);
        });
    }

    $('.func-light').each(function(index, element){
        $(element).click(function(event){
            lightNavFunc();
        });
    });   
});

window.onload = function() {   
    funcChangeWidthById('search-result', 'search-display', -15);
    funcDisplayById('search-result', 'none');

    funcShowSlide();

    autoInterval = setInterval(function() {
        if (isAutoShow) {
            funcPushSlide(1);
        } else {
            clearInterval(autoInterval);
        }
    }, TIME_OUT_SLIDE_SHOW);

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

    tooltipContent = [];
    tooltipContent.push(["key1", obj1]);
    tooltipContent.push(["key2", obj2]);
    tooltipContent.push(["key3", obj3]);

    //getToolTip
    $('.item-tooltip').each(function(index, element){
        $(element).mouseout(function(event){
            funcDisplayById("item-detail-info", 'none');
        });
        $(element).mouseenter(function(event){
            funcSetDataToolTip(funcGetValueByMapArray(tooltipContent, $(element).attr('data')));
        });
        $(element).mousemove(function(event){
            funcDisplayById("item-detail-info", 'block');
            funcChangePositionById("item-detail-info", event);
        });
    }); 

    //scroll function
    document.getElementById(SCROLL_BUTTON_ID).onclick = function() {
        funcTop();
    }
}

