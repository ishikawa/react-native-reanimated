"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[8872],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6933:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l={id:"withDecay",title:"withDecay",sidebar_label:"withDecay"},o=void 0,c={unversionedId:"api/withDecay",id:"version-2.0.0/api/withDecay",isDocsHomePage:!1,title:"withDecay",description:'Starts a velocity based "scroll" animation.',source:"@site/versioned_docs/version-2.0.0/api/withDecay.md",sourceDirName:"api",slug:"/api/withDecay",permalink:"/react-native-reanimated/docs/2.0.0/api/withDecay",version:"2.0.0",frontMatter:{id:"withDecay",title:"withDecay",sidebar_label:"withDecay"},sidebar:"version-2.0.0/docs",previous:{title:"withSpring",permalink:"/react-native-reanimated/docs/2.0.0/api/withSpring"},next:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/2.0.0/api/cancelAnimation"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Starts a velocity based "scroll" animation.'),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"options-object"},(0,i.kt)("inlineCode",{parentName:"h4"},"options")," ","[object]"),(0,i.kt)("p",null,"Object containing animation configuration.\nAllowed parameters are listed below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Options"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"velocity"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial velocity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deceleration"),(0,i.kt)("td",{parentName:"tr",align:null},"0.998"),(0,i.kt)("td",{parentName:"tr",align:null},"Rate of decay")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clamp"),(0,i.kt)("td",{parentName:"tr",align:null},"[]"),(0,i.kt)("td",{parentName:"tr",align:null},"Array of two animation boundaries (optional)")))),(0,i.kt)("h4",{id:"callback-functionoptional"},(0,i.kt)("inlineCode",{parentName:"h4"},"callback")," ","[function]","(","optional",")"),(0,i.kt)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,i.kt)("a",{parentName:"p",href:"useAnimatedStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n  useAnimatedGestureHandler,\n} from 'react-native-reanimated';\nimport { PanGestureHandler } from 'react-native-gesture-handler';\n\nfunction App() {\n  const x = useSharedValue(0);\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onStart: (_, ctx) => {\n      ctx.startX = x.value;\n    },\n    onActive: (event, ctx) => {\n      x.value = ctx.startX + event.translationX;\n    },\n    onEnd: (evt) => {\n      x.value = withDecay({\n        velocity: evt.velocityX,\n        clamp: [0, 200], // optionally define boundaries for the animation\n      });\n    },\n  });\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </PanGestureHandler>\n  );\n}\n")))}s.isMDXComponent=!0}}]);