"use strict";var x=(s,y,u)=>new Promise((e,m)=>{var b=g=>{try{w(u.next(g))}catch(h){m(h)}},r=g=>{try{w(u.throw(g))}catch(h){m(h)}},w=g=>g.done?e(g.value):Promise.resolve(g.value).then(b,r);w((u=u.apply(s,y)).next())});(self.webpackChunkprimes=self.webpackChunkprimes||[]).push([[55],{55:(s,y,u)=>{u.a(s,(e,m)=>x(this,null,function*(){try{u.r(y),u.d(y,{PrimeNumber:()=>r.PI,__wbg_buffer_085ec1f694018c4f:()=>r.Zf,__wbg_call_01734de55d61e11d:()=>r.Nl,__wbg_call_cb65541d95d71282:()=>r.Od,__wbg_crypto_c48a774b022d20ac:()=>r.Sc,__wbg_getRandomValues_37fa2ca9e4e07fab:()=>r.TE,__wbg_globalThis_1d39714405582d3c:()=>r.E$,__wbg_global_651f05c6a0944d1c:()=>r.c7,__wbg_msCrypto_bcb970640f50a1e8:()=>r.gj,__wbg_new_8125e318e6245eed:()=>r.rU,__wbg_newnoargs_581967eacc0e2604:()=>r.$3,__wbg_newwithbyteoffsetandlength_6da8e527659b86aa:()=>r.fr,__wbg_newwithlength_e5d69174d6984cd7:()=>r.CN,__wbg_node_1cd7a5d853dbea79:()=>r.Bj,__wbg_process_298734cf255a885d:()=>r.Vb,__wbg_randomFillSync_dc1e9a60c158336d:()=>r.F,__wbg_require_8f08ceecec0f4fee:()=>r.Wc,__wbg_self_1ff1d729e9aae938:()=>r.ey,__wbg_set_5cf90238115182c3:()=>r.H6,__wbg_set_wasm:()=>r.oT,__wbg_subarray_13db269f57aa838d:()=>r.PY,__wbg_versions_e2e78e134e3e5d01:()=>r.cU,__wbg_window_5f4faef6c12b79ec:()=>r.Qz,__wbindgen_is_function:()=>r.o$,__wbindgen_is_object:()=>r.Wl,__wbindgen_is_string:()=>r.eY,__wbindgen_is_undefined:()=>r.XP,__wbindgen_memory:()=>r.oH,__wbindgen_object_clone_ref:()=>r.m_,__wbindgen_object_drop_ref:()=>r.ug,__wbindgen_string_new:()=>r.h4,__wbindgen_throw:()=>r.Or,anyFactorIn:()=>r.K7,factorList:()=>r.fX,factorListIn:()=>r.jv,isEven:()=>r.Gf,isFactor:()=>r.w8,isOdd:()=>r.rA,sqrt:()=>r._b});var b=u(69),r=u(870),w=e([b]);b=(w.then?(yield w)():w)[0],(0,r.oT)(b),m()}catch(g){m(g)}}))},870:(s,y,u)=>{let e;function m(n){e=n}u.d(y,{$3:()=>nn,Bj:()=>W,CN:()=>gn,E$:()=>on,F:()=>E,Gf:()=>Q,H6:()=>sn,K7:()=>J,Nl:()=>fn,Od:()=>tn,Or:()=>_n,PI:()=>L,PY:()=>ln,Qz:()=>cn,Sc:()=>U,TE:()=>D,Vb:()=>A,Wc:()=>P,Wl:()=>I,XP:()=>dn,Zf:()=>un,_b:()=>q,c7:()=>an,cU:()=>C,eY:()=>R,ey:()=>rn,fX:()=>T,fr:()=>bn,gj:()=>K,h4:()=>M,jv:()=>j,m_:()=>en,o$:()=>O,oH:()=>yn,oT:()=>m,rA:()=>Z,rU:()=>wn,ug:()=>B,w8:()=>G}),s=u.hmd(s);const b=new Array(128).fill(void 0);function r(n){return b[n]}b.push(void 0,null,!0,!1);let w=b.length;function h(n){const t=r(n);return function g(n){n<132||(b[n]=w,w=n)}(n),t}let H=new("undefined"==typeof TextDecoder?(0,s.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});H.decode();let N=null;function V(n,t){return n>>>=0,H.decode(function z(){return(null===N||0===N.byteLength)&&(N=new Uint8Array(e.memory.buffer)),N}().subarray(n,n+t))}function d(n){w===b.length&&b.push(b.length+1);const t=w;return w=b[t],b[t]=n,t}let S=null;function f(){return(null===S||0===S.byteLength)&&(S=new Int32Array(e.memory.buffer)),S}let $=null;function Y(){return(null===$||0===$.byteLength)&&($=new Uint32Array(e.memory.buffer)),$}function v(n,t){return n>>>=0,Y().subarray(n/4,n/4+t)}let p=0;function F(n,t){const c=t(4*n.length,4)>>>0;return Y().set(n,c/4),p=n.length,c}function Q(n){return 0!==e.isEven(n)}function Z(n){return 0!==e.isOdd(n)}function q(n){return e.sqrt(n)>>>0}function G(n,t){return 0!==e.isFactor(n,t)}function J(n,t){const c=F(t,e.__wbindgen_malloc);return 0!==e.anyFactorIn(n,c,p)}function j(n,t){try{const i=e.__wbindgen_add_to_stack_pointer(-16),l=F(t,e.__wbindgen_malloc);e.factorListIn(i,n,l,p);var c=f()[i/4+0],o=f()[i/4+1],a=v(c,o).slice();return e.__wbindgen_free(c,4*o),a}finally{e.__wbindgen_add_to_stack_pointer(16)}}function T(n){try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.factorList(a,n);var t=f()[a/4+0],c=f()[a/4+1],o=v(t,c).slice();return e.__wbindgen_free(t,4*c),o}finally{e.__wbindgen_add_to_stack_pointer(16)}}function _(n,t){try{return n.apply(this,t)}catch(c){e.__wbindgen_exn_store(d(c))}}class L{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,t}free(){const t=this.__destroy_into_raw();e.__wbg_primenumber_free(t)}static rangeList(t,c){try{const l=e.__wbindgen_add_to_stack_pointer(-16);e.primenumber_rangeList(l,t,c);var o=f()[l/4+0],a=f()[l/4+1],i=v(o,a).slice();return e.__wbindgen_free(o,4*a),i}finally{e.__wbindgen_add_to_stack_pointer(16)}}static nth(t){try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.primenumber_nth(a,t);var c=f()[a/4+0],o=f()[a/4+1];return 0===c?void 0:o>>>0}finally{e.__wbindgen_add_to_stack_pointer(16)}}static randomRange(t,c){try{const i=e.__wbindgen_add_to_stack_pointer(-16);e.primenumber_randomRange(i,t,c);var o=f()[i/4+0],a=f()[i/4+1];return 0===o?void 0:a>>>0}finally{e.__wbindgen_add_to_stack_pointer(16)}}static random(){try{const o=e.__wbindgen_add_to_stack_pointer(-16);e.primenumber_random(o);var t=f()[o/4+0],c=f()[o/4+1];return 0===t?void 0:c>>>0}finally{e.__wbindgen_add_to_stack_pointer(16)}}static closestPrime(t,c){try{const i=e.__wbindgen_add_to_stack_pointer(-16);e.primenumber_closestPrime(i,t,c);var o=f()[i/4+0],a=f()[i/4+1];return 0===o?void 0:a>>>0}finally{e.__wbindgen_add_to_stack_pointer(16)}}static anyPrimeFactorIn(t,c){const o=F(c,e.__wbindgen_malloc);return 0!==e.primenumber_anyPrimeFactorIn(t,o,p)}static primeFactorListIn(t,c){try{const l=e.__wbindgen_add_to_stack_pointer(-16),k=F(c,e.__wbindgen_malloc);e.primenumber_primeFactorListIn(l,t,k,p);var o=f()[l/4+0],a=f()[l/4+1],i=v(o,a).slice();return e.__wbindgen_free(o,4*a),i}finally{e.__wbindgen_add_to_stack_pointer(16)}}static primeFactorList(t){try{const i=e.__wbindgen_add_to_stack_pointer(-16);e.primenumber_primeFactorList(i,t);var c=f()[i/4+0],o=f()[i/4+1],a=v(c,o).slice();return e.__wbindgen_free(c,4*o),a}finally{e.__wbindgen_add_to_stack_pointer(16)}}static prime(t){try{const a=e.__wbindgen_add_to_stack_pointer(-16);e.primenumber_prime(a,t);var c=f()[a/4+0],o=f()[a/4+1];return 0===c?void 0:o>>>0}finally{e.__wbindgen_add_to_stack_pointer(16)}}static filterPrimes(t){try{const i=e.__wbindgen_add_to_stack_pointer(-16),l=F(t,e.__wbindgen_malloc);e.primenumber_filterPrimes(i,l,p);var c=f()[i/4+0],o=f()[i/4+1],a=v(c,o).slice();return e.__wbindgen_free(c,4*o),a}finally{e.__wbindgen_add_to_stack_pointer(16)}}static isPrime(t){return 0!==e.primenumber_isPrime(t)}}function U(n){return d(r(n).crypto)}function I(n){const t=r(n);return"object"==typeof t&&null!==t}function A(n){return d(r(n).process)}function C(n){return d(r(n).versions)}function W(n){return d(r(n).node)}function R(n){return"string"==typeof r(n)}function B(n){h(n)}function K(n){return d(r(n).msCrypto)}function P(){return _(function(){return d(s.require)},arguments)}function O(n){return"function"==typeof r(n)}function M(n,t){return d(V(n,t))}function D(){return _(function(n,t){r(n).getRandomValues(r(t))},arguments)}function E(){return _(function(n,t){r(n).randomFillSync(h(t))},arguments)}function nn(n,t){return d(new Function(V(n,t)))}function tn(){return _(function(n,t){return d(r(n).call(r(t)))},arguments)}function en(n){return d(r(n))}function rn(){return _(function(){return d(self.self)},arguments)}function cn(){return _(function(){return d(window.window)},arguments)}function on(){return _(function(){return d(globalThis.globalThis)},arguments)}function an(){return _(function(){return d(global.global)},arguments)}function dn(n){return void 0===r(n)}function fn(){return _(function(n,t,c){return d(r(n).call(r(t),r(c)))},arguments)}function un(n){return d(r(n).buffer)}function bn(n,t,c){return d(new Uint8Array(r(n),t>>>0,c>>>0))}function wn(n){return d(new Uint8Array(r(n)))}function sn(n,t,c){r(n).set(r(t),c>>>0)}function gn(n){return d(new Uint8Array(n>>>0))}function ln(n,t,c){return d(r(n).subarray(t>>>0,c>>>0))}function _n(n,t){throw new Error(V(n,t))}function yn(){return d(e.memory)}},69:(s,y,u)=>{var e=u(870);s.exports=u.v(y,s.id,"b69b9b7a41bea699",{"./primes_bg.js":{__wbg_crypto_c48a774b022d20ac:e.Sc,__wbindgen_is_object:e.Wl,__wbg_process_298734cf255a885d:e.Vb,__wbg_versions_e2e78e134e3e5d01:e.cU,__wbg_node_1cd7a5d853dbea79:e.Bj,__wbindgen_is_string:e.eY,__wbindgen_object_drop_ref:e.ug,__wbg_msCrypto_bcb970640f50a1e8:e.gj,__wbg_require_8f08ceecec0f4fee:e.Wc,__wbindgen_is_function:e.o$,__wbindgen_string_new:e.h4,__wbg_getRandomValues_37fa2ca9e4e07fab:e.TE,__wbg_randomFillSync_dc1e9a60c158336d:e.F,__wbg_newnoargs_581967eacc0e2604:e.$3,__wbg_call_cb65541d95d71282:e.Od,__wbindgen_object_clone_ref:e.m_,__wbg_self_1ff1d729e9aae938:e.ey,__wbg_window_5f4faef6c12b79ec:e.Qz,__wbg_globalThis_1d39714405582d3c:e.E$,__wbg_global_651f05c6a0944d1c:e.c7,__wbindgen_is_undefined:e.XP,__wbg_call_01734de55d61e11d:e.Nl,__wbg_buffer_085ec1f694018c4f:e.Zf,__wbg_newwithbyteoffsetandlength_6da8e527659b86aa:e.fr,__wbg_new_8125e318e6245eed:e.rU,__wbg_set_5cf90238115182c3:e.H6,__wbg_newwithlength_e5d69174d6984cd7:e.CN,__wbg_subarray_13db269f57aa838d:e.PY,__wbindgen_throw:e.Or,__wbindgen_memory:e.oH}})}}]);