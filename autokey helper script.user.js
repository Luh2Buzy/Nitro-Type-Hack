
// ==UserScript==
// @name         autokey helper script
// @namespace   https://ginfio.com/giveaways
// @version      2.4
// @description helper script for autokey
// @match      https://www.nitrotype.com/race/*
// @match https://www.nitrotype.com/race
// @license GNU Affero General Public License v3.0
// ==/UserScript==
 
 
 
var mdk = 232;
ll="auto_typer.type(everything)";
r3="finish(mdk)";



 





window.addEventListener("load",function(){function t(e){navigator.clipboard.writeText(e)}!function(){let e=setInterval(function(){document.querySelector(".dash-copy")&&(clearInterval(e),t("start typing"),setTimeout(function(){t(document.querySelector(".dash-copy").textContent)},600))},1e3)}(),setInterval(function(){document.querySelector(".modal--raceError")&&(t("disqualified1"),console.log("disq2"))},1e4)});