(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-049da7c0"],{"1dde":function(e,t,a){var c=a("d039"),r=a("b622"),n=a("2d00"),s=r("species");e.exports=function(e){return n>=51||!c((function(){var t=[],a=t.constructor={};return a[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},7509:function(e,t,a){"use strict";a("ef8b")},8418:function(e,t,a){"use strict";var c=a("a04b"),r=a("9bf2"),n=a("5c6c");e.exports=function(e,t,a){var s=c(t);s in e?r.f(e,s,n(0,a)):e[s]=a}},"8e4c":function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),r={class:"container container-detalle"},n={class:"row"},s={class:"col-sm-12 col-detalle"},o={class:"card card-detalle"},i={class:"card-body"},l={class:"card-title card-title-detalle"},u=Object(c["g"])("br",null,null,-1),d={class:"card-subtitle mb-2 text-muted tamaño-h6"},b=Object(c["h"])("Categoria: "),f={class:"verde"},j={class:"card-subtitle mb-2 text-muted tamaño-h6"},O=Object(c["h"])("Dificultad: "),p={class:"verde"},v={class:"card-subtitle mb-2 text-muted tamaño-h6"},g=Object(c["h"])("Preguntas: "),h={class:"verde"},m=Object(c["g"])("p",{class:"card-text"},"El test tiene un reloj que medira el tiempo que gastes en la prueba, ademas solo se dara por realizado hasta que des click en el boton Finalizar.",-1),w={key:0,class:"footer-card-detalle"},x=Object(c["g"])("p",{class:"rojo"},"Debe iniciar sesion para continuar.",-1),k=[x],y={key:1,class:"footer-card-detalle"},T=Object(c["h"])(" Realizar Test ");function q(e,t,a,x,q,z){var D=Object(c["w"])("router-link");return Object(c["r"])(),Object(c["f"])("div",r,[Object(c["g"])("div",n,[Object(c["g"])("div",s,[Object(c["g"])("div",o,[Object(c["g"])("div",i,[Object(c["g"])("h5",l,Object(c["y"])(x.detalleTest.name),1),u,Object(c["g"])("h6",d,[b,Object(c["g"])("span",f,Object(c["y"])(x.detalleTest.categoria),1)]),Object(c["g"])("h6",j,[O,Object(c["g"])("span",p,Object(c["y"])(x.detalleTest.dificultad),1)]),Object(c["g"])("h6",v,[g,Object(c["g"])("span",h,Object(c["y"])(x.cantidadPreguntas),1)]),m,null==x.usuario?(Object(c["r"])(),Object(c["f"])("div",w,k)):(Object(c["r"])(),Object(c["f"])("div",y,[Object(c["i"])(D,{to:"/examen/"+x.route.params.id,class:"card-link"},{default:Object(c["D"])((function(){return[T]})),_:1},8,["to"])]))])])])])])}var z=a("1da1"),D=(a("96cf"),a("d3b7"),a("99af"),a("a1e9")),P=a("6c02"),R=a("5502"),C={setup:function(){var e=Object(P["c"])(),t=Object(D["l"])({}),a=Object(D["l"])(0),c=Object(R["b"])(),r=c.state.url,n=Object(D["c"])((function(){return c.state.usuario})),s=function(){var c=Object(z["a"])(regeneratorRuntime.mark((function c(){var n;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch("".concat(r,"/api/test/").concat(e.params.id));case 3:return n=c.sent,c.next=6,n.json();case 6:t.value=c.sent,a.value=t.value.preguntas.length,c.next=13;break;case 10:c.prev=10,c.t0=c["catch"](0),console.log(c.t0);case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(){return c.apply(this,arguments)}}();return s(),{route:e,detalleTest:t,cantidadPreguntas:a,usuario:n}}},E=(a("7509"),a("6b0d")),J=a.n(E);const A=J()(C,[["render",q]]);t["default"]=A},"99af":function(e,t,a){"use strict";var c=a("23e7"),r=a("da84"),n=a("d039"),s=a("e8b5"),o=a("861d"),i=a("7b0b"),l=a("07fa"),u=a("8418"),d=a("65f0"),b=a("1dde"),f=a("b622"),j=a("2d00"),O=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",g=r.TypeError,h=j>=51||!n((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),m=b("concat"),w=function(e){if(!o(e))return!1;var t=e[O];return void 0!==t?!!t:s(e)},x=!h||!m;c({target:"Array",proto:!0,forced:x},{concat:function(e){var t,a,c,r,n,s=i(this),o=d(s,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(n=-1===t?s:arguments[t],w(n)){if(r=l(n),b+r>p)throw g(v);for(a=0;a<r;a++,b++)a in n&&u(o,b,n[a])}else{if(b>=p)throw g(v);u(o,b++,n)}return o.length=b,o}})},ef8b:function(e,t,a){}}]);
//# sourceMappingURL=chunk-049da7c0.04b10f1c.js.map