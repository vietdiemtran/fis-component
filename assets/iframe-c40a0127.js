import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(i,_){return new URL(i,_).href},O={},o=function(_,s,c){if(!s||s.length===0)return _();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in O)return;O[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":E,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>_()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const R={"./src/components/Button/Button.stories.ts":async()=>o(()=>import("./Button.stories-417b5fa1.js"),["./Button.stories-417b5fa1.js","./jsx-runtime-8a1697f2.js","./index-8b3efc3f.js","./_commonjsHelpers-de833af9.js","./assertThisInitialized-5c219755.js","./index-f4369446.js"],import.meta.url),"./src/components/Page/Page.stories.ts":async()=>o(()=>import("./Page.stories-282e23cf.js"),["./Page.stories-282e23cf.js","./jsx-runtime-8a1697f2.js","./index-8b3efc3f.js","./_commonjsHelpers-de833af9.js"],import.meta.url)};async function P(i){return R[i]()}const{composeConfigs:w,PreviewWeb:T,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const i=await Promise.all([o(()=>import("./entry-preview-b0e60a23.js"),["./entry-preview-b0e60a23.js","./index-8b3efc3f.js","./_commonjsHelpers-de833af9.js","./react-18-5bdecf91.js","./index-f4369446.js"],import.meta.url),o(()=>import("./entry-preview-docs-d14f77b2.js"),["./entry-preview-docs-d14f77b2.js","./_getPrototype-1e53b583.js","./_commonjsHelpers-de833af9.js","./index-356e4a49.js","./index-8b3efc3f.js"],import.meta.url),o(()=>import("./preview-2ff2accb.js"),["./preview-2ff2accb.js","./index-1b441bc2.js"],import.meta.url),o(()=>import("./preview-35b9bda3.js"),[],import.meta.url),o(()=>import("./preview-d01b88e8.js"),["./preview-d01b88e8.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-30b54f76.js"),["./preview-30b54f76.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-c56bf6ac.js"),[],import.meta.url),o(()=>import("./preview-da31036b.js"),["./preview-da31036b.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-0ef86afd.js"),[],import.meta.url),o(()=>import("./preview-2d30111f.js"),["./preview-2d30111f.js","./_commonjsHelpers-de833af9.js"],import.meta.url),o(()=>import("./preview-ba2273f4.js"),[],import.meta.url)]);return w(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:S});export{o as _};
