import{c as w}from"./chunk-EGDUX52C.js";var l={};w(l,{__externref_table_alloc:()=>cA,__wbg_primenumber_free:()=>S,__wbindgen_exn_store:()=>BA,__wbindgen_export_2:()=>aA,__wbindgen_free:()=>pA,__wbindgen_malloc:()=>qA,__wbindgen_start:()=>k,anyFactorIn:()=>z,factorList:()=>C,factorListIn:()=>T,isEven:()=>H,isFactor:()=>U,isOdd:()=>N,memory:()=>P,primenumber_anyPrimeFactorIn:()=>tA,primenumber_closestPrime:()=>eA,primenumber_filterPrimes:()=>oA,primenumber_isPrime:()=>EA,primenumber_nth:()=>AA,primenumber_prime:()=>sA,primenumber_primeFactorList:()=>iA,primenumber_primeFactorListIn:()=>nA,primenumber_random:()=>rA,primenumber_randomRange:()=>jA,primenumber_rangeList:()=>Q,sqrt:()=>V});var _="./media/primes_bg-KJY3SU74.wasm";var p={};w(p,{PrimeNumber:()=>a,__wbg_getRandomValues_78e016fdd1d721cf:()=>L,__wbg_set_wasm:()=>q,__wbindgen_init_externref_table:()=>X,__wbindgen_throw:()=>J,anyFactorIn:()=>G,factorList:()=>O,factorListIn:()=>M,isEven:()=>h,isFactor:()=>D,isOdd:()=>K,sqrt:()=>R});var r;function q(j){r=j}var B=null;function m(){return(B===null||B.byteLength===0)&&(B=new Uint8Array(r.memory.buffer)),B}function g(j,A){return j=j>>>0,m().subarray(j/1,j/1+A)}function I(j){let A=r.__externref_table_alloc();return r.__wbindgen_export_2.set(A,j),A}function x(j,A){try{return j.apply(this,A)}catch(e){let t=I(e);r.__wbindgen_exn_store(t)}}var v=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder,u=new v("utf-8",{ignoreBOM:!0,fatal:!0});u.decode();function y(j,A){return j=j>>>0,u.decode(m().subarray(j,j+A))}function D(j,A){return r.isFactor(j,A)!==0}var c=null;function $(){return(c===null||c.byteLength===0)&&(c=new Uint32Array(r.memory.buffer)),c}var o=0;function E(j,A){let e=A(j.length*4,4)>>>0;return $().set(j,e/4),o=j.length,e}function G(j,A){let e=E(A,r.__wbindgen_malloc),t=o;return r.anyFactorIn(j,e,t)!==0}function s(j,A){return j=j>>>0,$().subarray(j/4,j/4+A)}function M(j,A){let e=E(A,r.__wbindgen_malloc),t=o,n=r.factorListIn(j,e,t);var i=s(n[0],n[1]).slice();return r.__wbindgen_free(n[0],n[1]*4,4),i}function O(j){let A=r.factorList(j);var e=s(A[0],A[1]).slice();return r.__wbindgen_free(A[0],A[1]*4,4),e}function h(j){return r.isEven(j)!==0}function K(j){return r.isOdd(j)!==0}function R(j){return r.sqrt(j)>>>0}var W=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(j=>r.__wbg_primenumber_free(j>>>0,1)),a=class{__destroy_into_raw(){let A=this.__wbg_ptr;return this.__wbg_ptr=0,W.unregister(this),A}free(){let A=this.__destroy_into_raw();r.__wbg_primenumber_free(A,0)}static rangeList(A,e){let t=r.primenumber_rangeList(A,e);var n=s(t[0],t[1]).slice();return r.__wbindgen_free(t[0],t[1]*4,4),n}static nth(A){let e=r.primenumber_nth(A);return e===4294967297?void 0:e}static randomRange(A,e){let t=r.primenumber_randomRange(A,e);return t===4294967297?void 0:t}static random(){let A=r.primenumber_random();return A===4294967297?void 0:A}static closestPrime(A,e){let t=r.primenumber_closestPrime(A,e);return t===4294967297?void 0:t}static anyPrimeFactorIn(A,e){let t=E(e,r.__wbindgen_malloc),n=o;return r.primenumber_anyPrimeFactorIn(A,t,n)!==0}static primeFactorListIn(A,e){let t=E(e,r.__wbindgen_malloc),n=o,i=r.primenumber_primeFactorListIn(A,t,n);var b=s(i[0],i[1]).slice();return r.__wbindgen_free(i[0],i[1]*4,4),b}static primeFactorList(A){let e=r.primenumber_primeFactorList(A);var t=s(e[0],e[1]).slice();return r.__wbindgen_free(e[0],e[1]*4,4),t}static prime(A){let e=r.primenumber_prime(A);return e===4294967297?void 0:e}static filterPrimes(A){let e=E(A,r.__wbindgen_malloc),t=o,n=r.primenumber_filterPrimes(e,t);var i=s(n[0],n[1]).slice();return r.__wbindgen_free(n[0],n[1]*4,4),i}static isPrime(A){return r.primenumber_isPrime(A)!==0}};function L(){return x(function(j,A){globalThis.crypto.getRandomValues(g(j,A))},arguments)}function X(){let j=r.__wbindgen_export_2,A=j.grow(4);j.set(0,void 0),j.set(A+0,void 0),j.set(A+1,null),j.set(A+2,!0),j.set(A+3,!1)}function J(j,A){throw new Error(y(j,A))}var d;async function Y(j){if(d)return await WebAssembly.instantiate(d,j);let A=await WebAssembly.instantiateStreaming(fetch(new URL(_,import.meta.url),{integrity:"sha256-QlGcarGuHMZEjAoLeY/Idk47YytgFJoNjN8B4EgDIwY="}),j);return d=A.module,A.instance}var f=Object.create(null);f["./primes_bg.js"]=p;var Z=await Y(f),{memory:P,isFactor:U,anyFactorIn:z,factorListIn:T,factorList:C,isEven:H,isOdd:N,sqrt:V,__wbg_primenumber_free:S,primenumber_rangeList:Q,primenumber_nth:AA,primenumber_randomRange:jA,primenumber_random:rA,primenumber_closestPrime:eA,primenumber_anyPrimeFactorIn:tA,primenumber_primeFactorListIn:nA,primenumber_primeFactorList:iA,primenumber_prime:sA,primenumber_filterPrimes:oA,primenumber_isPrime:EA,__wbindgen_exn_store:BA,__externref_table_alloc:cA,__wbindgen_export_2:aA,__wbindgen_malloc:qA,__wbindgen_free:pA,__wbindgen_start:k}=Z.exports;q(l);k();export{a as PrimeNumber,L as __wbg_getRandomValues_78e016fdd1d721cf,q as __wbg_set_wasm,X as __wbindgen_init_externref_table,J as __wbindgen_throw,G as anyFactorIn,O as factorList,M as factorListIn,h as isEven,D as isFactor,K as isOdd,R as sqrt};
