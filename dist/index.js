"use strict";var l=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var g=l(function(H,p){
var E=require('@stdlib/number-float64-base-to-float32/dist'),x=require('@stdlib/math-base-assert-is-nanf/dist');function O(i,u,t,m,o){var s,f,n,r,a,e;if(i<=0)return NaN;for(t<0?n=(1-i)*t:n=0,o<0?r=(1-i)*o:r=0,e=0;e<i&&m[r]!==0;e++)n+=t,r+=o;if(e===i)return NaN;if(f=u[n],x(f))return f;for(s=f,e+=1,e;e<i;e++)if(n+=t,r+=o,!m[r]){if(a=u[n],x(a))return a;a<f?f=a:a>s&&(s=a)}return E(s-f)}p.exports=O
});var b=l(function(I,j){
var h=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/math-base-assert-is-nanf/dist');function k(i,u,t,m,o,s,f){var n,r,a,e,q,v;if(i<=0)return NaN;for(a=m,e=f,v=0;v<i&&o[e]!==0;v++)a+=t,e+=s;if(v===i)return NaN;if(r=u[a],y(r))return r;for(n=r,v+=1,v;v<i;v++)if(a+=t,e+=s,!o[e]){if(q=u[a],y(q))return q;q<r?r=q:q>n&&(n=q)}return h(n-r)}j.exports=k
});var T=l(function(J,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=g(),z=b();w(F,"ndarray",z);R.exports=F
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=T(),c,_=B(A(__dirname,"./native.js"));C(_)?c=D:c=_;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
