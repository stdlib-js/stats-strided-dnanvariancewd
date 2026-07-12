"use strict";var f=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=f(function(C,m){
function _(a,r,i,n,y){var u,v,s,d,q,e,t,c;if(a<=0)return NaN;if(a===1||n===0)return e=i[y],e===e&&a-r>0?0:NaN;for(d=y,s=0,v=0,t=0,c=0;c<a;c++)e=i[d],e===e&&(u=e-v,t+=1,v+=u/t,s+=u*(e-v)),d+=n;return q=t-r,q<=0?NaN:s/q}m.exports=_
});var x=f(function(D,w){
var E=require('@stdlib/strided-base-stride2offset/dist'),M=o();function O(a,r,i,n){return M(a,r,i,n,E(a,n))}w.exports=O
});var N=f(function(F,l){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),g=o();b(j,"ndarray",g);l.exports=j
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=N(),p,R=k(h(__dirname,"./native.js"));z(R)?p=A:p=R;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
