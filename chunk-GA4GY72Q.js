import{c as f}from"./chunk-EGDUX52C.js";var l={};f(l,{__externref_table_alloc:()=>LA,__wbg_primenumber_free:()=>$A,__wbindgen_exn_store:()=>KA,__wbindgen_export_2:()=>JA,__wbindgen_free:()=>HA,__wbindgen_malloc:()=>PA,__wbindgen_start:()=>w,anyFactorIn:()=>kA,factorList:()=>wA,factorListIn:()=>bA,isEven:()=>lA,isFactor:()=>uA,isOdd:()=>fA,memory:()=>dA,primenumber_anyPrimeFactorIn:()=>yA,primenumber_closestPrime:()=>vA,primenumber_filterPrimes:()=>MA,primenumber_isPrime:()=>hA,primenumber_nth:()=>FA,primenumber_prime:()=>DA,primenumber_primeFactorList:()=>OA,primenumber_primeFactorListIn:()=>GA,primenumber_random:()=>xA,primenumber_randomRange:()=>IA,primenumber_rangeList:()=>gA,sqrt:()=>mA});var m="./media/primes_bg-GNUXVETK.wasm";var k={};f(k,{PrimeNumber:()=>p,__wbg_buffer_609cc3eee51ed158:()=>P,__wbg_call_672a4d21634d4a24:()=>H,__wbg_call_7cccdd69e0791ae2:()=>N,__wbg_crypto_ed58b8e10a292839:()=>R,__wbg_getRandomValues_bcb4912f16000dc4:()=>W,__wbg_msCrypto_0a36e2ec3a343d26:()=>S,__wbg_new_a12002a7f91c75be:()=>U,__wbg_newnoargs_105ed471475aaf50:()=>C,__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a:()=>z,__wbg_newwithlength_a381634e90c276d4:()=>T,__wbg_node_02999533c4ea02e3:()=>X,__wbg_process_5c1d670bc53614b8:()=>V,__wbg_randomFillSync_ab2cfe79ebbf2740:()=>Q,__wbg_require_79b1e9274cde3c87:()=>Z,__wbg_set_65595bdd868b3009:()=>Y,__wbg_set_wasm:()=>d,__wbg_static_accessor_GLOBAL_88a902d13a557d07:()=>AA,__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0:()=>jA,__wbg_static_accessor_SELF_37c5d418e4bf5819:()=>rA,__wbg_static_accessor_WINDOW_5de37043a91a9c40:()=>eA,__wbg_subarray_aa9065fa9dc5df96:()=>tA,__wbg_versions_c71aa1626a93e0a1:()=>nA,__wbindgen_init_externref_table:()=>sA,__wbindgen_is_function:()=>iA,__wbindgen_is_object:()=>oA,__wbindgen_is_string:()=>_A,__wbindgen_is_undefined:()=>cA,__wbindgen_memory:()=>EA,__wbindgen_string_new:()=>aA,__wbindgen_throw:()=>BA,anyFactorIn:()=>O,factorList:()=>M,factorListIn:()=>D,isEven:()=>h,isFactor:()=>G,isOdd:()=>K,sqrt:()=>L});var e;function d(A){e=A}function c(A){let j=e.__externref_table_alloc();return e.__wbindgen_export_2.set(j,A),j}function E(A,j){try{return A.apply(this,j)}catch(r){let t=c(r);e.__wbindgen_exn_store(t)}}var v=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder,$=new v("utf-8",{ignoreBOM:!0,fatal:!0});$.decode();var a=null;function y(){return(a===null||a.byteLength===0)&&(a=new Uint8Array(e.memory.buffer)),a}function u(A,j){return A=A>>>0,$.decode(y().subarray(A,A+j))}function q(A){return A==null}function G(A,j){return e.isFactor(A,j)!==0}var B=null;function g(){return(B===null||B.byteLength===0)&&(B=new Uint32Array(e.memory.buffer)),B}var o=0;function _(A,j){let r=j(A.length*4,4)>>>0;return g().set(A,r/4),o=A.length,r}function O(A,j){let r=_(j,e.__wbindgen_malloc),t=o;return e.anyFactorIn(A,r,t)!==0}function i(A,j){return A=A>>>0,g().subarray(A/4,A/4+j)}function D(A,j){let r=_(j,e.__wbindgen_malloc),t=o,n=e.factorListIn(A,r,t);var s=i(n[0],n[1]).slice();return e.__wbindgen_free(n[0],n[1]*4,4),s}function M(A){let j=e.factorList(A);var r=i(j[0],j[1]).slice();return e.__wbindgen_free(j[0],j[1]*4,4),r}function h(A){return e.isEven(A)!==0}function K(A){return e.isOdd(A)!==0}function L(A){return e.sqrt(A)>>>0}var J=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(A=>e.__wbg_primenumber_free(A>>>0,1)),p=class{__destroy_into_raw(){let j=this.__wbg_ptr;return this.__wbg_ptr=0,J.unregister(this),j}free(){let j=this.__destroy_into_raw();e.__wbg_primenumber_free(j,0)}static rangeList(j,r){let t=e.primenumber_rangeList(j,r);var n=i(t[0],t[1]).slice();return e.__wbindgen_free(t[0],t[1]*4,4),n}static nth(j){let r=e.primenumber_nth(j);return r===4294967297?void 0:r}static randomRange(j,r){let t=e.primenumber_randomRange(j,r);return t===4294967297?void 0:t}static random(){let j=e.primenumber_random();return j===4294967297?void 0:j}static closestPrime(j,r){let t=e.primenumber_closestPrime(j,r);return t===4294967297?void 0:t}static anyPrimeFactorIn(j,r){let t=_(r,e.__wbindgen_malloc),n=o;return e.primenumber_anyPrimeFactorIn(j,t,n)!==0}static primeFactorListIn(j,r){let t=_(r,e.__wbindgen_malloc),n=o,s=e.primenumber_primeFactorListIn(j,t,n);var I=i(s[0],s[1]).slice();return e.__wbindgen_free(s[0],s[1]*4,4),I}static primeFactorList(j){let r=e.primenumber_primeFactorList(j);var t=i(r[0],r[1]).slice();return e.__wbindgen_free(r[0],r[1]*4,4),t}static prime(j){let r=e.primenumber_prime(j);return r===4294967297?void 0:r}static filterPrimes(j){let r=_(j,e.__wbindgen_malloc),t=o,n=e.primenumber_filterPrimes(r,t);var s=i(n[0],n[1]).slice();return e.__wbindgen_free(n[0],n[1]*4,4),s}static isPrime(j){return e.primenumber_isPrime(j)!==0}};function P(A){return A.buffer}function H(){return E(function(A,j){return A.call(j)},arguments)}function N(){return E(function(A,j,r){return A.call(j,r)},arguments)}function R(A){return A.crypto}function W(){return E(function(A,j){A.getRandomValues(j)},arguments)}function S(A){return A.msCrypto}function U(A){return new Uint8Array(A)}function C(A,j){return new Function(u(A,j))}function z(A,j,r){return new Uint8Array(A,j>>>0,r>>>0)}function T(A){return new Uint8Array(A>>>0)}function X(A){return A.node}function V(A){return A.process}function Q(){return E(function(A,j){A.randomFillSync(j)},arguments)}function Z(){return E(function(){return module.require},arguments)}function Y(A,j,r){A.set(j,r>>>0)}function AA(){let A=typeof global>"u"?null:global;return q(A)?0:c(A)}function jA(){let A=typeof globalThis>"u"?null:globalThis;return q(A)?0:c(A)}function rA(){let A=typeof self>"u"?null:self;return q(A)?0:c(A)}function eA(){let A=typeof window>"u"?null:window;return q(A)?0:c(A)}function tA(A,j,r){return A.subarray(j>>>0,r>>>0)}function nA(A){return A.versions}function sA(){let A=e.__wbindgen_export_2,j=A.grow(4);A.set(0,void 0),A.set(j+0,void 0),A.set(j+1,null),A.set(j+2,!0),A.set(j+3,!1)}function iA(A){return typeof A=="function"}function oA(A){let j=A;return typeof j=="object"&&j!==null}function _A(A){return typeof A=="string"}function cA(A){return A===void 0}function EA(){return e.memory}function aA(A,j){return u(A,j)}function BA(A,j){throw new Error(u(A,j))}var b;async function qA(A){if(b)return await WebAssembly.instantiate(b,A);let j=await WebAssembly.instantiateStreaming(fetch(new URL(m,import.meta.url),{integrity:"sha256-YqFzMj5GchxKx/vxD3kXsgc2g6DRdELPq/Pf/rpNPII="}),A);return b=j.module,j.instance}var F=Object.create(null);F["./primes_bg.js"]=k;var pA=await qA(F),{memory:dA,isFactor:uA,anyFactorIn:kA,factorListIn:bA,factorList:wA,isEven:lA,isOdd:fA,sqrt:mA,__wbg_primenumber_free:$A,primenumber_rangeList:gA,primenumber_nth:FA,primenumber_randomRange:IA,primenumber_random:xA,primenumber_closestPrime:vA,primenumber_anyPrimeFactorIn:yA,primenumber_primeFactorListIn:GA,primenumber_primeFactorList:OA,primenumber_prime:DA,primenumber_filterPrimes:MA,primenumber_isPrime:hA,__wbindgen_exn_store:KA,__externref_table_alloc:LA,__wbindgen_export_2:JA,__wbindgen_malloc:PA,__wbindgen_free:HA,__wbindgen_start:w}=pA.exports;d(l);w();export{p as PrimeNumber,P as __wbg_buffer_609cc3eee51ed158,H as __wbg_call_672a4d21634d4a24,N as __wbg_call_7cccdd69e0791ae2,R as __wbg_crypto_ed58b8e10a292839,W as __wbg_getRandomValues_bcb4912f16000dc4,S as __wbg_msCrypto_0a36e2ec3a343d26,U as __wbg_new_a12002a7f91c75be,C as __wbg_newnoargs_105ed471475aaf50,z as __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a,T as __wbg_newwithlength_a381634e90c276d4,X as __wbg_node_02999533c4ea02e3,V as __wbg_process_5c1d670bc53614b8,Q as __wbg_randomFillSync_ab2cfe79ebbf2740,Z as __wbg_require_79b1e9274cde3c87,Y as __wbg_set_65595bdd868b3009,d as __wbg_set_wasm,AA as __wbg_static_accessor_GLOBAL_88a902d13a557d07,jA as __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0,rA as __wbg_static_accessor_SELF_37c5d418e4bf5819,eA as __wbg_static_accessor_WINDOW_5de37043a91a9c40,tA as __wbg_subarray_aa9065fa9dc5df96,nA as __wbg_versions_c71aa1626a93e0a1,sA as __wbindgen_init_externref_table,iA as __wbindgen_is_function,oA as __wbindgen_is_object,_A as __wbindgen_is_string,cA as __wbindgen_is_undefined,EA as __wbindgen_memory,aA as __wbindgen_string_new,BA as __wbindgen_throw,O as anyFactorIn,M as factorList,D as factorListIn,h as isEven,G as isFactor,K as isOdd,L as sqrt};
