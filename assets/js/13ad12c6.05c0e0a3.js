"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[3700],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||l[m]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9463:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o={id:"useAnimatedRef",title:"useAnimatedRef",sidebar_label:"useAnimatedRef"},c=void 0,s={unversionedId:"api/useAnimatedRef",id:"version-2.1.0/api/useAnimatedRef",isDocsHomePage:!1,title:"useAnimatedRef",description:"This hook provides extended functionality of a standard ref. You can assign it to some component like ` and then access the target component via animatedRef.current. Besides, on the UI thread animated reference also contains the view tag of the target. It can be accessed like this: const viewTag = animatedRef(). This comes handy when using native methods like scrollTo and measure`.",source:"@site/versioned_docs/version-2.1.0/api/useAnimatedRef.md",sourceDirName:"api",slug:"/api/useAnimatedRef",permalink:"/react-native-reanimated/docs/2.1.0/api/useAnimatedRef",version:"2.1.0",frontMatter:{id:"useAnimatedRef",title:"useAnimatedRef",sidebar_label:"useAnimatedRef"},sidebar:"version-2.1.0/docs",previous:{title:"useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/2.1.0/api/useAnimatedGestureHandler"},next:{title:"useAnimatedReaction",permalink:"/react-native-reanimated/docs/2.1.0/api/useAnimatedReaction"}},u=[{value:"Example",id:"example",children:[]}],d={toc:u};function l(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This hook provides extended functionality of a standard ref. You can assign it to some component like ",(0,i.kt)("inlineCode",{parentName:"p"},"<View ref={ animatedRef } />")," and then access the target component via ",(0,i.kt)("inlineCode",{parentName:"p"},"animatedRef.current"),". Besides, on the UI thread animated reference also contains the view tag of the target. It can be accessed like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"const viewTag = animatedRef()"),". This comes handy when using native methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollTo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"measure"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef()\n\n  useDerivedValue(() => {\n    const viewTag = aref();\n    // ...\n  })\n\n  const componentRef = aref.current\n  // ...\n\n  return <View ref={aref} />;\n}\n")))}l.isMDXComponent=!0}}]);