// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@esm/index.mjs";function n(r,n,i,s,f){var a,o,d,u,m,l;if(r<=0)return NaN;for(d=i<0?(1-r)*i:0,u=f<0?(1-r)*f:0,l=0;l<r&&0!==s[u];l++)d+=i,u+=f;if(l===r)return NaN;if(o=n[d],e(o))return o;for(a=o,l+=1;l<r;l++)if(d+=i,!s[u+=f]){if(m=n[d],e(m))return m;m<o?o=m:m>a&&(a=m)}return t(a-o)}function i(r,n,i,s,f,a,o){var d,u,m,l,j,p;if(r<=0)return NaN;for(m=s,l=o,p=0;p<r&&0!==f[l];p++)m+=i,l+=a;if(p===r)return NaN;if(u=n[m],e(u))return u;for(d=u,p+=1;p<r;p++)if(m+=i,!f[l+=a]){if(j=n[m],e(j))return j;j<u?u=j:j>d&&(d=j)}return t(d-u)}r(n,"ndarray",i);export{n as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
