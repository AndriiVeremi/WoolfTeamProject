(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const l=document.querySelector(".js-contact-form-submit");l.addEventListener("click",n=>{document.querySelectorAll(".js-required-field").forEach(r=>{r.classList.add("required")})});const u=document.querySelector(".js-contact-form-submit");window.addEventListener("keydown",n=>{const t=n.code;if(t!=="Space"&&t!=="Enter"&&t!=="NumpadEnter")return;const r=document.querySelector(".radio:focus, .radio:focus-visible");if(!r)return;const e=r.closest(".js-radio-label").querySelector(".js-contact-radio");e.checked=!0,u.removeAttribute("disabled")});const a=document.querySelector(".js-contact-radio-select"),m=document.querySelector(".js-contact-form-submit");a.addEventListener("click",n=>{document.querySelector(".js-contact-radio:checked")&&m.removeAttribute("disabled")});const i=document.querySelector("form.js-contact-form"),d=document.querySelector(".js-contact-form-submit");i.addEventListener("submit",n=>{n.preventDefault(),d.classList.add("spinner"),setTimeout(()=>{d.classList.remove("spinner"),i.submit()},2e3)});(()=>{const n=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),c=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const o=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};t.addEventListener("click",c),r.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();