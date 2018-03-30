/**
 * Created by mac on 2017/12/19.
 * @desc 常用dom工具函数
 */

const dom = {};
/*global document*/
/*eslint no-undef: "error"*/
dom.$ = function(selector) {
    return document.querySelectorAll(selector);
};

dom.$$ = function(sel) {
    return document.querySelector(sel);
};

dom.addClass = function(el, name) {
    el.classList.add(name);
};

dom.removeClass = function(el, name) {
    el.classList.remove(name);
};
dom.hasClass = function(el, name) {
    el.classList.contains(name);
};

dom.toggleClass = function(el, name) {
    el.classList.toggle(name);
};

dom.remove = function(el) {
    el.parentNode.removeChild(el);
};

dom.closest = function(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector;

    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        } else {
            el = el.parentElement;
        }
    }
    return null;
};

export default dom;
