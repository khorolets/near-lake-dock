"use strict";(self.webpackChunknear_lake_dock=self.webpackChunknear_lake_dock||[]).push([[120],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3384:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"2022-02-18-updates",title:"Mar 18, 2022 updates",authors:["khorolets","telezhnaya","frol"],tags:["updates"]},s=void 0,u={permalink:"/near-lake-dock/blog/2022-02-18-updates",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-02-18-updates.md",source:"@site/blog/2022-02-18-updates.md",title:"Mar 18, 2022 updates",description:"\ud83d\udc4b How's it going, everyone? Seems like we are renaming to Data Team \ud83e\udd37, so Data Team is here with fresh weekly updates. All the week we were working on NEAR Lake pushing it to MVP release as hard as we could.",date:"2022-02-18T00:00:00.000Z",formattedDate:"February 18, 2022",tags:[{label:"updates",permalink:"/near-lake-dock/blog/tags/updates"}],readingTime:1.46,truncated:!0,authors:[{name:"Bohdan Khorolets",title:"Indexer Wizard",url:"https://github.com/khorolets",imageURL:"https://github.com/khorolets.png",key:"khorolets"},{name:"Olga Telezhnaya",title:"Data Wizard",url:"https://github.com/telezhnaya",imageURL:"https://github.com/telezhnaya.png",key:"telezhnaya"},{name:"Vlad Frolov",title:"Data Platform Guru",url:"https://github.com/frol",imageURL:"https://github.com/frol.png",key:"frol"}],frontMatter:{slug:"2022-02-18-updates",title:"Mar 18, 2022 updates",authors:["khorolets","telezhnaya","frol"],tags:["updates"]},prevItem:{title:"Mar 25, 2022 Updates",permalink:"/near-lake-dock/blog/2022-03-25-updates"},nextItem:{title:"Feb 11, 2022 Updates",permalink:"/near-lake-dock/blog/2022-02-11-updates"}},p={authorsImageUrls:[void 0,void 0,void 0]},h=[],c={toc:h};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udc4b How's it going, everyone? Seems like we are renaming to Data Team \ud83e\udd37, so Data Team is here with fresh weekly updates. All the week we were working on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-lake"},"NEAR Lake")," pushing it to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/near/near-lake/milestone/2"},"MVP release")," as hard as we could."),(0,o.kt)("p",null,"Since the previous week:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have finished the revision of the ",(0,o.kt)("inlineCode",{parentName:"li"},"StreamerMessage")," structure and decided to leave it as-is for now. In the future, we plan to adjust the way the underlying structures are serialized to JSON, but this is going to be in the future."),(0,o.kt)("li",{parentName:"ul"},"NEAR Lake has been deployed to both testnet and mainnet networks in order to index the data from the genesis. (@khorolets)\nUnfortunately, or maybe, fortunately, yesterday we've noticed that the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-lake/issues/23"},"order of the data we get from S3 is somehow broken"),". It happens because the object keys on S3 are strings and we forgot about the way numbers represented in strings are being sorted \ud83e\udd26. But ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-lake/pull/24"},"the fix")," is on the way and we will restart the indexing process one more time. (@khorolets)"),(0,o.kt)("li",{parentName:"ul"},"Meanwhile, NEAR Lake has been empowered with the CI \ud83d\udcaa. However, some differences between the environment we build the release in and the servers we run it on causes problems. You can follow the progress by subscribing to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-lake/issues/21"},"this issue"),". We'll figure it out. (@khorolets)"),(0,o.kt)("li",{parentName:"ul"},"NEAR Lake Framework ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-lake-framework/pull/6"},"has been refactored"),". We are trying different API approaches but looks like we are done here. (@khorolets)"),(0,o.kt)("li",{parentName:"ul"},"Check out the new ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/near/near-lake-framework/blob/main/README.md"},"fancy README for NEAR Lake Framework")," we wrote this week. (@khorolets)")),(0,o.kt)("p",null,"That's all for this week, folks! Thanks for being with us all this week. Please, have a great and peaceful weekend! Looking forward to see you all next week! Let's keep rocking! \ud83e\udd18"))}m.isMDXComponent=!0}}]);