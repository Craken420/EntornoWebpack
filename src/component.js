'use strict';
require("./component.css");

module.exports = function () {
    var element = document.createElement('h1');
    element.innerHTML = 'Hola Mundo';
    return element;
};