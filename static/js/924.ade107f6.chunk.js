"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[924],{6501:function(e,s,r){r.r(s);var n=r(885),t=r(6871),c=r(2791),a=r(4304),l=r(2523),o=r(3957),i=r(184);s.default=function(e){var s=e.Component,r=e.dataType,u=(0,t.UO)().id,d=(0,c.useState)(null),f=(0,n.Z)(d,2),h=f[0],m=f[1],k=(0,a.Z)(),x=k.getComic,j=k.getCharacter,p=k.clearError,_=k.process,v=k.setProcess;(0,c.useEffect)((function(){w()}),[u]);var w=function(){switch(p(),r){case"comic":x(u).then(N).then((function(){return v("confirmed")}));break;case"character":j(u).then(N).then((function(){return v("confirmed")}));break;default:throw new Error("error")}},N=function(e){m(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{}),(0,l.Z)(_,s,h)]})}},2523:function(e,s,r){r.d(s,{Z:function(){return l}});var n=r(184),t=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,n.jsxs)("div",{className:"skeleton",children:[(0,n.jsxs)("div",{className:"pulse skeleton__header",children:[(0,n.jsx)("div",{className:"pulse skeleton__circle"}),(0,n.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,n.jsx)("div",{className:"pulse skeleton__block"}),(0,n.jsx)("div",{className:"pulse skeleton__block"}),(0,n.jsx)("div",{className:"pulse skeleton__block"})]})]})},c=r(9613),a=r(3698),l=function(e,s,r){switch(e){case"waiting":return(0,n.jsx)(t,{});case"loading":return(0,n.jsx)(a.Z,{});case"confirmed":return(0,n.jsx)(s,{data:r});case"error":return(0,n.jsx)(c.Z,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=924.ade107f6.chunk.js.map