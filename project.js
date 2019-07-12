window.onscroll = function() {ScrollFunction()};

var header = document.getElementById("main_header");
var sticky = header.offsetTop;
var title = document.getElementById('title');
var title_tooltip = document.getElementById('title_tooltip');
var developer_tooltip = document.getElementById('developer_tooltip');
var developer_tool_text = document.getElementById('developer_tool_text');

title.onmouseover = function(){ShowTitleTooltip()};
title.onmouseleave = function (){HideTitleTooltip()};

developer_tooltip.onmouseover = function () {
    developer_tool_text.classList.add("show_developer_tool");}
developer_tooltip.onmouseleave = function () {
    developer_tool_text.classList.remove("show_developer_tool");}

function ScrollFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        title.classList.add("animation");
    } else {
        header.classList.remove("sticky");
        title.classList.remove("animation");
    }
}

function ShowTitleTooltip(){
    title_tooltip.classList.add("show_title_tooltip");
}
function HideTitleTooltip(){
    title_tooltip.classList.remove("show_title_tooltip");
}
