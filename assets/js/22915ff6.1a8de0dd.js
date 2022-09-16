"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[442],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var a=n(3117),r=(n(7294),n(3905));const l={id:"useFrameCallback",title:"useFrameCallback",sidebar_label:"useFrameCallback"},o=void 0,i={unversionedId:"api/hooks/useFrameCallback",id:"api/hooks/useFrameCallback",title:"useFrameCallback",description:"This hook allows you to run a piece of code on every frame update.",source:"@site/docs/api/hooks/useFrameCallback.md",sourceDirName:"api/hooks",slug:"/api/hooks/useFrameCallback",permalink:"/react-native-reanimated/docs/next/api/hooks/useFrameCallback",draft:!1,tags:[],version:"current",frontMatter:{id:"useFrameCallback",title:"useFrameCallback",sidebar_label:"useFrameCallback"},sidebar:"docs",previous:{title:"useEvent",permalink:"/react-native-reanimated/docs/next/api/hooks/useEvent"},next:{title:"useHandler",permalink:"/react-native-reanimated/docs/next/api/hooks/useHandler"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>callback</code> Function",id:"callback-function",level:4},{value:"<code>autostart</code> boolean",id:"autostart-boolean",level:4},{value:"Returns",id:"returns",level:3},{value:"Types",id:"types",level:3},{value:"<code>FrameCallback: [object]</code>",id:"framecallback-object",level:4},{value:"<code>FrameInfo: [object]</code>",id:"frameinfo-object",level:4},{value:"Example",id:"example",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This hook allows you to run a piece of code on every frame update."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useFrameCallback(callback: (frameInfo: frameInfo) => void, autostart = true): [FrameCallback]\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"callback-function"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback")," ","[Function]"),(0,r.kt)("p",null,"A single worklet function that will be called on every frame update.\nThis function receives a ",(0,r.kt)("a",{parentName:"p",href:"#frameinfo-object"},(0,r.kt)("inlineCode",{parentName:"a"},"FrameInfo"))," object as an argument."),(0,r.kt)("h4",{id:"autostart-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"autostart")," ","[boolean]"),(0,r.kt)("p",null,"Optional boolean that specifies if the callback should start running when\nregistration is complete. This argument defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An object of type ",(0,r.kt)("a",{parentName:"p",href:"#framecallback-object"},(0,r.kt)("inlineCode",{parentName:"a"},"FrameCallback"))," which allows you to read and control the\ncallback state."),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("h4",{id:"framecallback-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"FrameCallback: [object]")),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setActive: (isActive: boolean) => void"),": begins / stops listening for frame updates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isActive: boolean"),": indicates whether the callback is active (",(0,r.kt)("inlineCode",{parentName:"li"},"true"),")\nor not (",(0,r.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callbackId: number"),": a unique identifier of the callback function")),(0,r.kt)("h4",{id:"frameinfo-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"FrameInfo: [object]")),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp: number"),": the system time (in milliseconds) when the last\nframe was rendered"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeSincePreviousFrame: number | null"),": time (in milliseconds) since last frame. This value\nwill be ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," on the first frame after activation. Starting from the second frame,\nit should be ~16 ms on 60 Hz or ~8 ms on 120 Hz displays (when there is no lag)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeSinceFirstFrame: number"),": time (in milliseconds) since the callback was last activated")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{13-21}","{13-21}":!0},"import Animated, {\n  useAnimatedStyle,\n  useFrameCallback,\n  useSharedValue,\n} from 'react-native-reanimated';\nimport {Button, View} from 'react-native';\n\nimport React from 'react';\n\nexport default function FrameCallbackExample() {\n  const x = useSharedValue(0);\n\n  const frameCallback = useFrameCallback((frameInfo) => {\n    if (frameInfo.timeSincePreviousFrame === null) {\n      console.log('First frame!');\n    } else {\n      console.log(`${frameInfo.duration} ms have passed since the previous frame`);\n    }\n    // Move the box by one pixel on every frame\n    x.value += 1;\n  }, false);\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        }\n      ],\n    };\n  });\n\n  return (\n    <View>\n      <Animated.View style={[styles.box, animatedStyle1]} />\n      <Button title={'Start/stop'} onPress={() => frameCallback.setActive(!frameCallback.isActive)}>\n    </View>\n  );\n}\n")))}m.isMDXComponent=!0}}]);