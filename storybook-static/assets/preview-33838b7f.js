import{_ as a}from"./iframe-38cb6b7c.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-e3e611d8.js").then(r=>r.D),["./DocsRenderer-K4EAMTCU-e3e611d8.js","./iframe-38cb6b7c.js","./index-c6dae603.js","./client-11b7e729.js","./index-02182706.js","./_getPrototype-7f6bfca6.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
