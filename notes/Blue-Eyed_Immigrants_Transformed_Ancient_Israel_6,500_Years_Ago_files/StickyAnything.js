define("Purch/UI/StickyAnything",["jquery"],function(a){"use strict";var b=function(b){this.conf=a.extend({element:null,top:0,maxHeight:0,maxHeightContainer:null,zindex:1,mobile:!1},b||{}),!1!==this.conf.init&&this.init()};return b.prototype={init:function(){var b=this,c=a('<div class="placeholder"></div>').insertBefore(a(b.conf.element));a(window).scroll(function(){"large"!=mediaQuery&&!1===b.conf.mobile||b.stickIt(c,b.maxHeightCalc())})},maxHeightCalc:function(){var b=this;if(null!==b.conf.maxHeightContainer){var c=a(b.conf.maxHeightContainer);return c.offset().top+c.outerHeight(!0)-a(b.conf.element).outerHeight(!0)-b.conf.top}return 0!=b.conf.maxHeight?b.conf.maxHeight:null},stickIt:function(b,c){var d=this,e=b.offset(),f=e.top;if(null!==c&&a(window).scrollTop()>=c)a(d.conf.element).css("position","absolute").css("top",c+d.conf.top),a(d.conf.element).addClass("absolute");else if(a(window).scrollTop()>=f-d.conf.top){var g=b.offset(),h=g.left,i=b.css("width");a(d.conf.element).css("left",h+"px").css("top",d.conf.top+"px").css("width",i).css("position","fixed").css("z-index",d.conf.zindex).show().addClass("fixed"),a(d.conf.element).removeClass("absolute"),b.css("visibility","hidden")}else a(d.conf.element).hasClass("fixed")&&a(d.conf.element).removeAttr("style").removeClass("fixed").removeClass("absolute")}},b});