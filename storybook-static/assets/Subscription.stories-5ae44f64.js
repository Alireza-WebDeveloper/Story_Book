import{u as f,j as c}from"./styled-components.browser.esm-815a3819.js";import{r as C}from"./index-c6dae603.js";import{v as I}from"./v4-4a60fe23.js";const{addons:x}=__STORYBOOK_MODULE_PREVIEW_API__,{global:h}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:D}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var P="storybook/actions",w=`${P}/action-event`,l={depth:10,clearOnStoryChange:!0,limit:50},E=(t,n)=>{let e=Object.getPrototypeOf(t);return!e||n(e)?e:E(e,n)},A=t=>!!(typeof t=="object"&&t&&E(t,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof t.persist=="function"),T=t=>{if(A(t)){let n=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));n.persist();let e=Object.getOwnPropertyDescriptor(n,"view"),r=e==null?void 0:e.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...e,value:Object.create(r.constructor.prototype)}),n}return t},V=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?I():Date.now().toString(36)+Math.random().toString(36).substring(2);function N(t,n={}){let e={...l,...n},r=function(...o){var u,d;if(n.implicit){let m=(u="__STORYBOOK_PREVIEW__"in h?h.__STORYBOOK_PREVIEW__:void 0)==null?void 0:u.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(m){let i=!((d=window==null?void 0:window.FEATURES)!=null&&d.disallowImplicitActionsInRenderV8),g=new D({phase:m.phase,name:t,deprecated:i});if(i)console.warn(g);else throw g}}let a=x.getChannel(),b=V(),v=5,p=o.map(T),R=o.length>1?p:p[0],j={id:b,count:0,data:{name:t,args:R},options:{...e,maxDepth:v+(e.depth||3),allowFunction:e.allowFunction||!1}};a.emit(w,j)};return r.isAction=!0,r.implicit=n.implicit,r}var B=(...t)=>{let n=l,e=t;e.length===1&&Array.isArray(e[0])&&([e]=e),e.length!==1&&typeof e[e.length-1]!="string"&&(n={...l,...e.pop()});let r=e[0];(e.length!==1||typeof r=="string")&&(r={},e.forEach(a=>{r[a]=a}));let o={};return Object.keys(r).forEach(a=>{o[a]=N(r[a],n)}),o};const M=f.input`
  border: var(--primary) 1px solid;
  padding: 0.3rem;
  border-radius: 0.3rem;
  ::placeholder {
    text-transform: capitalize;
  }
`,S=({value:t,handleChange:n,inputClassName:e,...r})=>c.jsx(M,{value:t,onChange:o=>n(o.target.value),className:`inputClassName ${e}`,...r});S.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!0,tsType:{name:"string"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Form/Subscription"},L=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 50%;
  transform: translateX(-50%);
`,s=()=>{const[t,n]=C.useState(""),e=r=>{n(r.target.value)};return c.jsx(L,{...B("onClick","onMouseOver","onChange"),children:c.jsx(S,{handleChange:()=>{},value:t,onChange:e,className:"mb-4",placeholder:"Enter your email"})})};s.__docgenInfo={description:"",methods:[],displayName:"PrimarySubscription"};var y,_,O;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <StyledSubscription {...actions("onClick", "onMouseOver", "onChange")}>\r
      <Input handleChange={() => {}} value={value} onChange={handleChange} className="mb-4" placeholder="Enter your email" />\r
    </StyledSubscription>;
}`,...(O=(_=s.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const F=["PrimarySubscription"];export{s as PrimarySubscription,F as __namedExportsOrder,z as default};
