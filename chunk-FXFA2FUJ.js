import{c as l}from"./chunk-EGDUX52C.js";var m={};l(m,{__externref_table_alloc:()=>LA,__wbg_primenumber_free:()=>$A,__wbindgen_exn_store:()=>KA,__wbindgen_export_2:()=>JA,__wbindgen_free:()=>PA,__wbindgen_malloc:()=>HA,__wbindgen_start:()=>b,anyFactorIn:()=>kA,factorList:()=>bA,factorListIn:()=>uA,isEven:()=>mA,isFactor:()=>dA,isOdd:()=>lA,memory:()=>wA,primenumber_anyPrimeFactorIn:()=>yA,primenumber_closestPrime:()=>vA,primenumber_filterPrimes:()=>MA,primenumber_isPrime:()=>hA,primenumber_nth:()=>FA,primenumber_prime:()=>DA,primenumber_primeFactorList:()=>OA,primenumber_primeFactorListIn:()=>GA,primenumber_random:()=>xA,primenumber_randomRange:()=>IA,primenumber_rangeList:()=>gA,sqrt:()=>fA});var f="./media/primes_bg-MGSZIDNX.wasm";var k={};l(k,{PrimeNumber:()=>p,__wbg_buffer_61b7ce01341d7f88:()=>H,__wbg_call_500db948e69c7330:()=>P,__wbg_call_b0d8e36992d9900d:()=>N,__wbg_crypto_ed58b8e10a292839:()=>R,__wbg_getRandomValues_bcb4912f16000dc4:()=>S,__wbg_msCrypto_0a36e2ec3a343d26:()=>W,__wbg_new_3ff5b33b1ce712df:()=>C,__wbg_newnoargs_fd9e4bf8be2bc16d:()=>U,__wbg_newwithbyteoffsetandlength_ba35896968751d91:()=>T,__wbg_newwithlength_34ce8f1051e74449:()=>z,__wbg_node_02999533c4ea02e3:()=>V,__wbg_process_5c1d670bc53614b8:()=>Y,__wbg_randomFillSync_ab2cfe79ebbf2740:()=>X,__wbg_require_79b1e9274cde3c87:()=>Z,__wbg_set_23d69db4e5c66a6e:()=>Q,__wbg_set_wasm:()=>w,__wbg_static_accessor_GLOBAL_0be7472e492ad3e3:()=>AA,__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb:()=>jA,__wbg_static_accessor_SELF_1dc398a895c82351:()=>rA,__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a:()=>eA,__wbg_subarray_46adeb9b86949d12:()=>tA,__wbg_versions_c71aa1626a93e0a1:()=>nA,__wbindgen_init_externref_table:()=>iA,__wbindgen_is_function:()=>oA,__wbindgen_is_object:()=>sA,__wbindgen_is_string:()=>_A,__wbindgen_is_undefined:()=>EA,__wbindgen_memory:()=>cA,__wbindgen_string_new:()=>BA,__wbindgen_throw:()=>aA,anyFactorIn:()=>O,factorList:()=>M,factorListIn:()=>D,isEven:()=>h,isFactor:()=>G,isOdd:()=>K,sqrt:()=>L});var e;function w(A){e=A}function E(A){let j=e.__externref_table_alloc();return e.__wbindgen_export_2.set(j,A),j}function c(A,j){try{return A.apply(this,j)}catch(r){let t=E(r);e.__wbindgen_exn_store(t)}}var v=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder,$=new v("utf-8",{ignoreBOM:!0,fatal:!0});$.decode();var B=null;function y(){return(B===null||B.byteLength===0)&&(B=new Uint8Array(e.memory.buffer)),B}function d(A,j){return A=A>>>0,$.decode(y().subarray(A,A+j))}function q(A){return A==null}function G(A,j){return e.isFactor(A,j)!==0}var a=null;function g(){return(a===null||a.byteLength===0)&&(a=new Uint32Array(e.memory.buffer)),a}var s=0;function _(A,j){let r=j(A.length*4,4)>>>0;return g().set(A,r/4),s=A.length,r}function O(A,j){let r=_(j,e.__wbindgen_malloc),t=s;return e.anyFactorIn(A,r,t)!==0}function o(A,j){return A=A>>>0,g().subarray(A/4,A/4+j)}function D(A,j){let r=_(j,e.__wbindgen_malloc),t=s,n=e.factorListIn(A,r,t);var i=o(n[0],n[1]).slice();return e.__wbindgen_free(n[0],n[1]*4,4),i}function M(A){let j=e.factorList(A);var r=o(j[0],j[1]).slice();return e.__wbindgen_free(j[0],j[1]*4,4),r}function h(A){return e.isEven(A)!==0}function K(A){return e.isOdd(A)!==0}function L(A){return e.sqrt(A)>>>0}var J=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(A=>e.__wbg_primenumber_free(A>>>0,1)),p=class{__destroy_into_raw(){let j=this.__wbg_ptr;return this.__wbg_ptr=0,J.unregister(this),j}free(){let j=this.__destroy_into_raw();e.__wbg_primenumber_free(j,0)}static rangeList(j,r){let t=e.primenumber_rangeList(j,r);var n=o(t[0],t[1]).slice();return e.__wbindgen_free(t[0],t[1]*4,4),n}static nth(j){let r=e.primenumber_nth(j);return r===4294967297?void 0:r}static randomRange(j,r){let t=e.primenumber_randomRange(j,r);return t===4294967297?void 0:t}static random(){let j=e.primenumber_random();return j===4294967297?void 0:j}static closestPrime(j,r){let t=e.primenumber_closestPrime(j,r);return t===4294967297?void 0:t}static anyPrimeFactorIn(j,r){let t=_(r,e.__wbindgen_malloc),n=s;return e.primenumber_anyPrimeFactorIn(j,t,n)!==0}static primeFactorListIn(j,r){let t=_(r,e.__wbindgen_malloc),n=s,i=e.primenumber_primeFactorListIn(j,t,n);var I=o(i[0],i[1]).slice();return e.__wbindgen_free(i[0],i[1]*4,4),I}static primeFactorList(j){let r=e.primenumber_primeFactorList(j);var t=o(r[0],r[1]).slice();return e.__wbindgen_free(r[0],r[1]*4,4),t}static prime(j){let r=e.primenumber_prime(j);return r===4294967297?void 0:r}static filterPrimes(j){let r=_(j,e.__wbindgen_malloc),t=s,n=e.primenumber_filterPrimes(r,t);var i=o(n[0],n[1]).slice();return e.__wbindgen_free(n[0],n[1]*4,4),i}static isPrime(j){return e.primenumber_isPrime(j)!==0}};function H(A){return A.buffer}function P(){return c(function(A,j,r){return A.call(j,r)},arguments)}function N(){return c(function(A,j){return A.call(j)},arguments)}function R(A){return A.crypto}function S(){return c(function(A,j){A.getRandomValues(j)},arguments)}function W(A){return A.msCrypto}function C(A){return new Uint8Array(A)}function U(A,j){return new Function(d(A,j))}function T(A,j,r){return new Uint8Array(A,j>>>0,r>>>0)}function z(A){return new Uint8Array(A>>>0)}function V(A){return A.node}function Y(A){return A.process}function X(){return c(function(A,j){A.randomFillSync(j)},arguments)}function Z(){return c(function(){return module.require},arguments)}function Q(A,j,r){A.set(j,r>>>0)}function AA(){let A=typeof global>"u"?null:global;return q(A)?0:E(A)}function jA(){let A=typeof globalThis>"u"?null:globalThis;return q(A)?0:E(A)}function rA(){let A=typeof self>"u"?null:self;return q(A)?0:E(A)}function eA(){let A=typeof window>"u"?null:window;return q(A)?0:E(A)}function tA(A,j,r){return A.subarray(j>>>0,r>>>0)}function nA(A){return A.versions}function iA(){let A=e.__wbindgen_export_2,j=A.grow(4);A.set(0,void 0),A.set(j+0,void 0),A.set(j+1,null),A.set(j+2,!0),A.set(j+3,!1)}function oA(A){return typeof A=="function"}function sA(A){let j=A;return typeof j=="object"&&j!==null}function _A(A){return typeof A=="string"}function EA(A){return A===void 0}function cA(){return e.memory}function BA(A,j){return d(A,j)}function aA(A,j){throw new Error(d(A,j))}var u;async function qA(A){if(u)return await WebAssembly.instantiate(u,A);let j=await WebAssembly.instantiateStreaming(fetch(new URL(f,import.meta.url),{integrity:"sha256-vKQz3jxIJew4atnjZU3it7IdPjZRLmeTsHH6RBCDEN4="}),A);return u=j.module,j.instance}var F=Object.create(null);F["./primes_bg.js"]=k;var pA=await qA(F),{memory:wA,isFactor:dA,anyFactorIn:kA,factorListIn:uA,factorList:bA,isEven:mA,isOdd:lA,sqrt:fA,__wbg_primenumber_free:$A,primenumber_rangeList:gA,primenumber_nth:FA,primenumber_randomRange:IA,primenumber_random:xA,primenumber_closestPrime:vA,primenumber_anyPrimeFactorIn:yA,primenumber_primeFactorListIn:GA,primenumber_primeFactorList:OA,primenumber_prime:DA,primenumber_filterPrimes:MA,primenumber_isPrime:hA,__wbindgen_exn_store:KA,__externref_table_alloc:LA,__wbindgen_export_2:JA,__wbindgen_malloc:HA,__wbindgen_free:PA,__wbindgen_start:b}=pA.exports;w(m);b();export{p as PrimeNumber,H as __wbg_buffer_61b7ce01341d7f88,P as __wbg_call_500db948e69c7330,N as __wbg_call_b0d8e36992d9900d,R as __wbg_crypto_ed58b8e10a292839,S as __wbg_getRandomValues_bcb4912f16000dc4,W as __wbg_msCrypto_0a36e2ec3a343d26,C as __wbg_new_3ff5b33b1ce712df,U as __wbg_newnoargs_fd9e4bf8be2bc16d,T as __wbg_newwithbyteoffsetandlength_ba35896968751d91,z as __wbg_newwithlength_34ce8f1051e74449,V as __wbg_node_02999533c4ea02e3,Y as __wbg_process_5c1d670bc53614b8,X as __wbg_randomFillSync_ab2cfe79ebbf2740,Z as __wbg_require_79b1e9274cde3c87,Q as __wbg_set_23d69db4e5c66a6e,w as __wbg_set_wasm,AA as __wbg_static_accessor_GLOBAL_0be7472e492ad3e3,jA as __wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb,rA as __wbg_static_accessor_SELF_1dc398a895c82351,eA as __wbg_static_accessor_WINDOW_ae1c80c7eea8d64a,tA as __wbg_subarray_46adeb9b86949d12,nA as __wbg_versions_c71aa1626a93e0a1,iA as __wbindgen_init_externref_table,oA as __wbindgen_is_function,sA as __wbindgen_is_object,_A as __wbindgen_is_string,EA as __wbindgen_is_undefined,cA as __wbindgen_memory,BA as __wbindgen_string_new,aA as __wbindgen_throw,O as anyFactorIn,M as factorList,D as factorListIn,h as isEven,G as isFactor,K as isOdd,L as sqrt};
