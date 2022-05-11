"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5894],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7546:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i={id:"getRelativeCoords",title:"getRelativeCoords",sidebar_label:"getRelativeCoords"},l=void 0,s={unversionedId:"api/miscellaneous/getRelativeCoords",id:"version-2.3.0/api/miscellaneous/getRelativeCoords",isDocsHomePage:!1,title:"getRelativeCoords",description:"Determines the location on the screen, relative to the given view. It might be useful when there are only absolute coordinates available and you need coordinates relative to the parent.",source:"@site/versioned_docs/version-2.3.0/api/miscellaneous/getRelativeCoords.md",sourceDirName:"api/miscellaneous",slug:"/api/miscellaneous/getRelativeCoords",permalink:"/react-native-reanimated/docs/api/miscellaneous/getRelativeCoords",version:"2.3.0",frontMatter:{id:"getRelativeCoords",title:"getRelativeCoords",sidebar_label:"getRelativeCoords"},sidebar:"version-2.3.0/docs",previous:{title:"Interpolate",permalink:"/react-native-reanimated/docs/api/miscellaneous/interpolate"},next:{title:"Testing with Jest",permalink:"/react-native-reanimated/docs/guide/testing"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Determines the location on the screen, relative to the given view. It might be useful when there are only absolute coordinates available and you need coordinates relative to the parent."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"animatedref"},"animatedRef"),(0,o.kt)("p",null,"The product of ",(0,o.kt)("a",{parentName:"p",href:"../hooks/useAnimatedRef"},(0,o.kt)("inlineCode",{parentName:"a"},"useAnimatedRef"))," is a Reanimated's extension of a standard React's ref(delivers view tag on the UI thread). This ref should be passed as a prop to view relative to which we want to know coordinates."),(0,o.kt)("h4",{id:"x"},"x"),(0,o.kt)("p",null,"Absolute ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," coordinate."),(0,o.kt)("h4",{id:"y"},"y"),(0,o.kt)("p",null,"Absolute ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," coordinate"),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"Object which contains relative coordinates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y"))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef();\n  // ...\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onEnd: (event) => {\n      getRelativeCoords(aref, event.absoluteX, event.absoluteY)\n    },\n  });\n\n  return <View ref={aref}>\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box]} />\n    </PanGestureHandler>\n  </View>;\n};\n")))}d.isMDXComponent=!0}}]);