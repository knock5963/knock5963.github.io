function c1(e,r){null!=r&&""!=r||(r="/");var n=e+"";return n.substr(0,4)+r+n.substr(4,2)+r+n.substr(6,2)}function c2(e,r,n){null!=r&&""!=r||(r="/");var o=e+"";return(n?parseInt(o.substr(4,2))+"":o.substr(4,2))+r+(n?parseInt(o.substr(6,2))+"":o.substr(6,2))}$(document).ready(function(){return console.log("welcome aboard~"),new QRCode("page_qr",{text:window.location.href,colorDark:"#223c7d",colorLight:"#ebf0fd",correctLevel:QRCode.CorrectLevel.H}),$(".page-header-fixed .navbar.scroll-hide").mouseover(function(){return $(".page-header-fixed .navbar.scroll-hide").removeClass("closed"),setTimeout(function(){return $(".page-header-fixed .navbar.scroll-hide").css({overflow:"visible"})},150)}),$(function(){var r;return r=0,$(window).scroll(function(){var e;return e=$(this).scrollTop(),Math.abs(r-e)<=50?void 0:(r<e?$(".page-header-fixed .navbar.scroll-hide").addClass("closed"):$(".page-header-fixed .navbar.scroll-hide").removeClass("closed"),r=e)})}),$(".navbar-toggle").click(function(){return $("body, html").toggleClass("nav-open")}),$(window).resize()});