"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=c(function(G,y){
var E=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/math-base-assert-is-nanf/dist');function F(r,e,t,q,u,o,m){var f,i,v,s,n,a;if(r<=0)return NaN;for(v=q,s=m,a=0;a<r&&u[s]!==0;a++)v+=t,s+=o;if(a===r)return NaN;if(i=e[v],p(i))return i;for(f=i,a+=1,a;a<r;a++)if(v+=t,s+=o,!u[s]){if(n=e[v],p(n))return n;n<i?i=n:n>f&&(f=n)}return E(f-i)}y.exports=F
});var d=c(function(H,j){
var g=require('@stdlib/strided-base-stride2offset/dist'),O=x();function T(r,e,t,q,u){var o=g(r,t),m=g(r,u);return O(r,e,t,o,q,u,m)}j.exports=T
});var _=c(function(I,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=d(),w=x();h(k,"ndarray",w);R.exports=k
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=_(),l,b=A(z(__dirname,"./native.js"));B(b)?l=C:l=b;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
