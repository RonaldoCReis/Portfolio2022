(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9167)}])},9167:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ek}});var i=a(5893),s=a(7294),l=a(4480),n=a(5913),r=a.n(n);(0,l.cn)({key:"mainScrollState",default:0});let c=(0,l.cn)({key:"coursesScrollState",default:0}),o=(0,l.cn)({key:"portfolioScrollState",default:0}),d=(0,l.cn)({key:"skillsScrollState",default:0}),A=(0,l.cn)({key:"contactScrollState",default:0}),h=(0,l.cn)({key:"modalState",default:{isOpen:!1,imgUrl:"",title:"",desc:"",techs:[]}});var g=a(9649),m=a.n(g);let x=e=>{let{children:t}=e;return(0,i.jsx)("h2",{className:m().title,children:t})},u=()=>{let[e,t]=(0,l.FV)(A),a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{a.current&&t(a.current.getBoundingClientRect().y+window.pageYOffset)},[t]),(0,i.jsxs)("section",{className:r().container,ref:a,children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(x,{children:"Contact me"})}),(0,i.jsxs)("div",{className:r().links,children:[(0,i.jsx)("a",{href:"https://api.whatsapp.com/send?phone=5511942594783",target:"_blank",children:"55 11 94259-4783"}),(0,i.jsx)("a",{href:"mailto:ronaldocreis7@gmail.com",children:"ronaldocreis7@gmail.com"}),(0,i.jsx)("a",{href:"https://linkedin.com/in/ronaldocreis",target:"_blank",children:"linkedin.com/in/ronaldocreis"})]})]})};var f=a(8089),j=a.n(f);let b=e=>{let{children:t,subtitle:a,white:s}=e;return(0,i.jsxs)("div",{className:j().container,children:[(0,i.jsx)("h2",{style:s?{color:"#fff"}:{},className:j().title,children:t}),(0,i.jsx)("p",{style:s?{color:"#fff"}:{},className:j().subtitle,children:a})]})};var p=a(3739),v=a.n(p),_=a(1851),w=a.n(_);let U=e=>{let{children:t,transparent:a}=e;return(0,i.jsx)("h3",{className:"".concat(w().h3," ").concat(a?w().transparent:""),children:t})};var k=a(6582),C=a.n(k);let N=e=>{let{title:t,subtitle:a,year:s,right:l}=e;return(0,i.jsxs)("div",{className:"".concat(C().card," ").concat(l?C().right:""),"data-aos":l?"fade-left":"fade-right",children:[(0,i.jsx)(U,{transparent:!0,children:t}),(0,i.jsx)("p",{children:a}),(0,i.jsx)("span",{children:s})]})};var R=a(9057),S=a.n(R);let y=e=>{let{children:t,href:a}=e;return(0,i.jsxs)("a",{className:S().link,href:a,target:"_blank",children:[t," ",(0,i.jsx)("span",{children:"→"})]})},H=()=>{let[e,t]=(0,l.FV)(c),a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{a.current&&t(a.current.getBoundingClientRect().y+window.pageYOffset)},[t]),(0,i.jsxs)("section",{className:"container-small ".concat(v().container),ref:a,children:[(0,i.jsx)(b,{subtitle:"More about my formations and courses",children:"Studies"}),(0,i.jsxs)("div",{className:v().courses,children:[(0,i.jsx)(N,{title:"Internet IT Technician",subtitle:"Etec de Po\xe1",year:"2017 - 2019"}),(0,i.jsx)(N,{title:"Complete Web Design",subtitle:"Origamid",year:"2020",right:!0}),(0,i.jsx)(N,{title:"Bachelor in Information Systems",subtitle:"Universidade Paulista",year:"2020 - 2023"}),(0,i.jsx)(N,{title:"Advanced CSS",subtitle:"Origamid",year:"2020",right:!0}),(0,i.jsx)(N,{title:"Complete React",subtitle:"Origamid",year:"2022",right:!0})]}),(0,i.jsx)("div",{style:{textAlign:"right"},children:(0,i.jsx)(y,{href:"https://www.linkedin.com/in/ronaldocreis/",children:"See all courses at LinkedIn"})})]})},L=()=>(0,i.jsx)("div",{style:{background:"#222127"},children:(0,i.jsx)("p",{style:{textAlign:"center",color:"#F8F6FB",padding:"30px"},children:"Made with \uD83D\uDC9B by Ronaldo Reis"})});var D=a(3254),E=a.n(D);let G=e=>{let{children:t,onClick:a}=e;return(0,i.jsx)("button",{onClick:a,className:E().button,children:t})};var B=a(4103),M=a.n(B),I=a(3075),V=a.n(I);let O=e=>{let{children:t,active:a,scrollTo:s=0}=e;return(0,i.jsx)("a",{className:"".concat(V().navLink," ").concat(a===t?V().active:""),onClick:function(){window.scrollTo({top:s,behavior:"smooth"})},children:t})};var Q=a(6022),z=a(7800);let J=()=>{let[e,t]=s.useState("Home"),a=[{title:"Home",scroll:"main"},{title:"Stack",scroll:"skills"},{title:"Portfolio",scroll:"portfolio"},{title:"Studies",scroll:"courses"}],n=(0,l.sJ)(d),r=(0,l.sJ)(o),h=(0,l.sJ)(c),g=(0,l.sJ)(A),[m,x]=(0,s.useState)({skills:0,portfolio:0,main:0,courses:0}),[u,f]=(0,s.useState)(!1),[j,b]=(0,s.useState)(!1);function p(e){window.pageYOffset>35?f(!0):f(!1),b(!1);let a=screen.height/2.5;window.pageYOffset>=Math.floor(h-a)?t("Studies"):window.pageYOffset>=Math.floor(r-a)?t("Portfolio"):window.pageYOffset>=Math.floor(n-a)?t("Stack"):t("Home")}return(0,s.useEffect)(()=>{x({skills:n,portfolio:r,main:0,courses:h})},[n,r,h]),(0,s.useEffect)(()=>(window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)}),[n,r,h]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"".concat(M().menuHamburger," ").concat(j?M().mobile:""),children:(0,i.jsx)("button",{className:M().mobileButton,onClick:()=>b(!j),children:(0,i.jsx)(Q.Z,{size:32})})}),(0,i.jsx)("div",{className:"".concat(M().headerContainer," ").concat(u?M().scroll:""," ").concat(j?M().mobile:""),children:(0,i.jsxs)("header",{className:"".concat(M().header," container"),children:[(0,i.jsxs)("nav",{className:M().nav,children:[(0,i.jsx)("button",{className:M().mobileButton,onClick:()=>b(!j),children:(0,i.jsx)(z.Z,{size:32})}),a&&a.map(t=>(0,i.jsx)(O,{active:e,scrollTo:m[t.scroll],children:t.title},t.title))]}),(0,i.jsx)(G,{onClick:function(){window.scrollTo({top:g,behavior:"smooth"})},children:"Contact me"})]})})]})};var P=a(5675),Y=a.n(P),T=a(4985),X=a.n(T),F={src:"/_next/static/media/Donut.8716cdf4.png",height:1608,width:1364,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA6ElEQVR42mMAgZIsbbGIQOXtQd7qH2PCTJ9kpdinMYBAbKgcv7+H7BVvF+n/Xs7S/33cNP+HB1n+z01zCmHwdZOZ5eMq9z8iQO5TUoT8Vj8PhV++Hob/4yOtbgMl5Z4F+yj+jw1VaGYAAiD7naeL1v8Qf4NfDAGeCl9iQtT+Z8arhJZkaWkHein+d3NU+R/orfGWIdRX/nZUkOr/3BTte7FhKk89nOX+uzrI/Q/zV57PkBSplBLsI/c/wFPuv5eLzH93R6n/QP616gJdQQYQiAlWyArxlX0c4CnzKdRPbmVLpYEwAwMDAwBJ51BP5ZG98QAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8};let W=()=>(0,i.jsxs)("main",{className:"".concat(X().main," container"),children:[(0,i.jsxs)("div",{className:X().intro,children:[(0,i.jsx)("h1",{children:"Hi, I'm Ronaldo Reis A Front end dev"}),(0,i.jsx)("h2",{children:"Also a web designer with passion for learning "})]}),(0,i.jsx)("div",{className:X().donut,children:(0,i.jsx)(Y(),{alt:"Donut 3d",src:F})})]});var K=a(3801),Z=a.n(K),q=a(6550),$=a.n(q),ee=a(6265);let et=()=>{let[e,t]=(0,l.FV)(h);(0,s.useEffect)(()=>{e&&e.isOpen?(0,ee.disablePageScroll)():(0,ee.enablePageScroll)()},[e]);let a=(0,s.useRef)(null);return e.isOpen?(0,i.jsx)("div",{ref:a,className:"".concat($().backdrop),onClick:function(i){let{target:s}=i;s===a.current&&(t({...e,isOpen:!1}),(0,ee.enablePageScroll)())},children:(0,i.jsxs)("div",{className:"".concat($().modal," ").concat(e.isOpen&&$().animateIn," container"),children:[(0,i.jsx)("div",{className:$().img,children:(0,i.jsx)("img",{loading:"lazy",src:e.imgUrl,alt:e.title})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:$().title,children:e.title}),(0,i.jsx)("p",{className:$().desc,children:e.desc}),(0,i.jsx)("h3",{className:$().title2,children:"Ferramentas"}),(0,i.jsx)("ul",{className:$().techList,children:e.techs.map(e=>(0,i.jsx)("li",{children:e},e))})]})]})}):null},ea=()=>{let[e,t]=(0,l.FV)(o),[a,n]=(0,l.FV)(h),r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{r.current&&t(r.current.getBoundingClientRect().y+window.pageYOffset),console.log(e)},[t]),(0,i.jsxs)("section",{className:"container ".concat(Z().container),ref:r,children:[(0,i.jsx)(b,{subtitle:"Some of my projects and how they were made",children:"Portfolio"}),(0,i.jsx)(et,{}),(0,i.jsx)("div",{className:Z().projects,children:[{title:"Little Invest",imgUrl:"/img/littleInvest.png",desc:"Website de uma corretora de investimentos. O design foi desenvolvido durante o curso de Adobe XD da origamid",techs:["HTML5","SCSS","Javascript","Adobe Xd"]},{title:"Dogs",imgUrl:"/img/dogs.png",desc:"Uma rede social para cachorros!",techs:["React","CSS Modules","Javascript","Figma"]},{title:"Imovel Guide",imgUrl:"/img/guide.png",desc:"Portal imobili\xe1rio onde atuei como desenvolvedor front end e UI Designer",techs:["HTML5","Bootstrap","CSS5","Javascript","Jquery","Adobe XD"]},{title:"Design System - Ignite",imgUrl:"/img/ignite.png",desc:"Design system desenvolvido no figma e passado para o storybook",techs:["React","Typescript","Vite ","Tailwind","Storybook","Figma"]},{title:"Blocks",imgUrl:"/img/blocks.png",desc:"Uma aplica\xe7\xe3o web de blocos de anota\xe7\xe3o e design system com storybook",techs:["React","Typescript","Recoil","Vitest","Storybook","Figma"]}].map((e,t)=>(0,i.jsx)("div",{className:"".concat(Z().project),"data-aos":"zoom-in","data-aos-delay":50*t-50,onClick(){n({...e,isOpen:!0})},children:(0,i.jsx)("img",{alt:e.title,src:e.imgUrl})},e.title+t))}),(0,i.jsx)(y,{href:"https://github.com/RonaldoCReis/",children:"See more on github"})]})};var ei=a(328),es=a.n(ei),el=a(6741),en=a.n(el);let er=e=>{let{children:t,container:a}=e;return(0,i.jsx)("div",{className:"".concat(a?"container":""," ").concat(en().card),children:t})};var ec={src:"/_next/static/media/react.b7b900d8.png",height:172,width:198,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAATlBMVEVg2vtg2vtg2vth2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vtg2vvAiaaXAAAAGnRSTlMAExQhISIvMDk6Tk9WYmlqcXR2d4aHiJSVrKLfbfsAAAA5SURBVHjaNctFDgAhAATBWcHd4f8fRRKunWpAGK0NB6D+mokEWBrOjcgQXt+bf8IudhW6zFeOudcEUMECjVknhbQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},eo={src:"/_next/static/media/typescript.2fba5ace.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAtUlEQVR42mNgqDyDHTFUnuaqOiNXe0a+9oxw9RnxmjMyNWeAggy81WcYSk8xpB8HoYKTIJRxHCTBUHIqtO/iop0PFu96UD7/OhDN2XafD6iaoey0Q9v5U9ffPHr5pWX5zdcffqw//ARkh2LtGYbkY81Lb+4584LB//Cag49PXnsTN+kSgxTQqqwT0zfdPXLplVr92Q1Hnjx48WXhzgcM3FVAy0HWFM+9xlB8CmjBjM33GCpOAwD2L2nQ5GQpWgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},ed={src:"/_next/static/media/javascript.38e7dc2d.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEX/7CD+5h/+5R/74x764R754R733x733x323x333h323h313R303R3p0hvn0RvkzhrfyhrWwRjOuRfKthbJtRbDsBXCrxXBrhS+qxS4phOwnxKdjQ+Jewt7bgl5bAmO5ubMAAAAQklEQVR42g3BCQJAMAwEwEWb6MYtRV3/fyYzYNJfq0gUkkaoMMSmFpBh7Cc30KpyvsUgHfK+XAMofh/+bGCcs63OD17LAy1z11BLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},eA={src:"/_next/static/media/vite.9673b9cd.png",height:640,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA00lEQVR42mNAB30TYoT+3GTghws4zD4q5Lf1QyRD9x3Ljxd9Zv29Zfr6xIaFrYGWv/1nlO4RAalhD1nz/Uj6kn//v52J/f//MsP/kwuP/m+L/X2MgYGBgwEE/DIOWJX3/P1/b/38v/+PM/w903/yvzXDMzsGEFiz8j8ziC5K+TZnRfWb/28W9v2f6/phMUjsdRdQbmfUf0YGMFisujbuw+ejafd/uzAc1QGJnDGEyj1N+c8ENs3mWdM6k9c9IPYLL4gYAjQVglTzMbAx8ItEMjDChAEXJVwrETPbPQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},eh={src:"/_next/static/media/jest.0745a6e5.png",height:300,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAjklEQVR42k3KMQuCUBTF8UufIGiooaG2hojGlgbBIShqqSVoqRxEB5/o4ibiJCi4qKPf1P+DJ3jgx7lwj7TWfSaE3qFrrYdLO6jwlslgDg8LbHDDWcxza/qLBhWy8XlChBA+ajTIcdQDGz0+KKHwR4qXHjxRIIEtJtwxLvoIsMcKB/hQuI7LNRIo/LCUSQY7EU+8VnlLjQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},eg={src:"/_next/static/media/recoil.b2469b71.svg",height:2500,width:2368},em={src:"/_next/static/media/css.d977244d.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42mOQLNsnyFC0t40hbGsfQ/i2boa4Hd0MMTt6GYr3NQPlBBgYMneJipft+143/9z/qnln/5cvufS/avmV/6L1R74xBG4QYWDw2MQKVHlj96lH/99//vHr////v87effufo+HIdQaGQBYGMMjcdWbzkfv/f//5+/fTt19/1514/J+h9MBJBjhI37Vz27EH/yvnnfszeeutP7eefvzPkLl3KwMcRG9fB1Lw5NXnnw9fffmx9vij/wxpe1YwwABf6b4qhuzd/zMmn/yfPvv8f4byg/+FyveXMCADq9oDCgxR27MZorblOBXtUoSJAwD4qHvdRY401AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},ex={src:"/_next/static/media/scss.03e017f4.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42mMAgYtVS7ROBk08dCp00u8rHWt+X5+06dBh1kYtsOSF8kVaJ4Mnvb/atfb/ixPX/j/dd+7/411n/t9fc+j9boZULQag5KHrEzf+f3v53s8r7av/H7Po/H9rzo6fD9Yf/X/Co/cQw3GXnt8vjl/9f3PGtv9nU2cBdR7+/3Djsf9n02b9P5My8zfDmcTpv4HW/H+88/T/G1O3/L/ctPI/0D0gSZCi3wxAxqGz6bP+P9p28ueL49f+35y1/f+l+uU/gRr/A8UPMexgiNS6NW/n+9fnb/+/1rfh/+n46f/P5c/7D9T4HqgA6pOyRVqXW1cdOpM04/eZ1Jm/zyTPOHQ2YzZYEgAJy6gVyPO2KwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},eu={src:"/_next/static/media/bootstrap.4b3d21bb.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42mMItam+FG5X89+KIe+fNEPKfxGG5P92zAX/wu1r/oPkGEAMP8OK/wtnbfh/YM/J/4f3n/4/qXPpf2/tsv8RDrX/GaKc6/4Bdf9/++b9/+tX7vzfseXw/9+/fv8vSe37761Z9o8h0qnuvx1Dwf8nj1/8v3rpNtiEF89f/w+zrfkfYlX9H6zAhiH//9MnL/6fPHbx/+Supf/fvf3wf0r3sv+2QHG4FW9ev/9/68b9/2uX7/z/C2jF9L4VYIdDHGkAdeRuoCMPnPk/DSjprlQCcSS6NwUZkkFW/gNKgr0JAAaLnZURleIsAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},ef={src:"/_next/static/media/figma.ce1ef960.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5UlEQVR42hXMsS6DURjH4Xc2ilTYDJZG6/va/3vO+VRLkzKIRFIGiUhcgYmIxCAWIVyHpLNoN3EBtbgGsRhcwflJ5yd5rC1Nkwtrh2xlxNYKrGjl5M7MrHKxLOeu44x3St5Phtzv7bJQtthwx7Zc2VqJj4HBocH5AZ/HfaxRsh08W+VdltrG7WDM6/4v16Mf+k8TinkjVD0shh6rTeNiOOH56g97+ab28EZaNFR1MW3GHK3O3OgM+7qhE4xUMxQjLmVTCvjKOsXlEfXHU7yZUKqQC7ljLk0VnVBrzCYUfAbZJSRN/wFEFXI4vfj5cQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},ej={src:"/_next/static/media/adobexd.e96e002a.png",height:195,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+ElEQVR42h3Iu0rDYBiA4ff7U1oh2gNCh9ZiMam7FELFTbCDICjdAuLi5SiCk4Or2bwBRyctCC6digSEmkpFG89Jm/xKn/GRNs5FxLdrGgUdJT8CQlZldZD2pcyKp0SUWytZPCe+LMwVKZmLvKZD2WkcoJThCpBet6/k6WNAvVDn9OaEZs2hs9rh8HJfqxaWnN+dzcIPfTbtLXYbe/xOI0CLGvFAc8lhHI2pzFdpVdbpvfRIdIKZy6NyGNou2hx3j3iPQ7rBLXbRYvgVMIoGWraNDf2Y3JOnyht9MpiEfGICNRwykyT2ljNrrv5XkrIAiCgNWibT2PsDvB5cTEJZFcoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},eb={src:"/_next/static/media/Storybook.629e4d4b.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+ElEQVR42g3KTyhDcQAH8C9nF25uysHZiSI5qGknJ0Vx4eJCZq24zJ63pWZJDnjlYv7GSe1C2m1pmxJzoXZ1nPJm7T2/73e/w+f2ASedXkYzcY4ms8SSZ93w9bNEJ+9ZgJnZHbZJms9JTxXp4kFaPZLm9moW8L9xMkTEmnr7IputkH4rYOZSRKJs2RA7HmB3wlehJPp/5F3RcDYrTu1ULSBczPVzbLshJy8+18h2YOiei4NbVQsIDm77iPVvfdTFn9+QxgQ8LYiIly2gvXLYw4lUQwv7UvFFunqUxlPSdPrdAupAl4mmNzmSPCOWr4m1e0bciuUx4qID6+Sp2BluYPcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},ep={src:"/_next/static/media/tailwind.2b5e6299.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEUGttUHtdQGtdUGttUGtdUHtdQHtdQGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGttUGtdUGttV+HHcvAAAAIXRSTlMAAAABAQIDBAoLDg8VGR0fJCkwMzlKTn+FkZe9v8/Q+/7KlLwIAAAAP0lEQVR42h3BhxGAMBAEsX0OMDmZnN1/k8wg8UslQL4zwDHfYcsbyCpb33PAH89idQFtuYdrwgHWjzEgJRDBB1kQAnzdXsmoAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},ev=a(5818);let e_=()=>((0,s.useEffect)(()=>{ev.Z.fromTo("#wave1",{path:"#wave1"},{path:"#wave2"},{repeat:999,duration:6e3,yoyo:!0}).start()},[]),(0,i.jsx)("div",{className:"waveContainer",children:(0,i.jsxs)("svg",{className:"wave",viewBox:"0 0 1280 416",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("g",{children:(0,i.jsx)("path",{id:"wave1",d:"M454 28.1845C223 61.1845 277.5 -49.3155 -5 28.1845L-29 415.184H1372C1374.83 362.018 1386.5 225 1343.5 225C1285.48 225 1284 119.795 1146 136.5C1008 153.205 971.38 73.2013 849.5 79.5C656 89.5 685 -4.81552 454 28.1845Z",fill:"#26252C"})}),(0,i.jsx)("g",{style:{visibility:"hidden"},children:(0,i.jsx)("path",{id:"wave2",d:"M454 23.1847C230.475 -40.3627 271.5 53.0002 -5 23.1847L-29 410.185H1372C1374.83 357.018 1372 354.5 1343.5 220C1331.47 163.239 1245.5 184 1146 131.5C1046.5 79.0006 986.5 160.5 849.5 74.5002C720 -6.7915 634.5 74.5002 454 23.1847Z",fill:"#26252C"})})]})})),ew=()=>{let[e,t]=(0,l.FV)(d),a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{a.current&&t(a.current.getBoundingClientRect().y+window.pageYOffset-100)},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e_,{}),(0,i.jsx)("div",{ref:a,className:"container",children:(0,i.jsx)(b,{white:!0,subtitle:"Techs and Stacks that I use on my projects",children:"Stack"})}),(0,i.jsx)("section",{className:es().container,children:(0,i.jsx)("div",{className:"container ".concat(es().card),children:(0,i.jsx)(er,{children:(0,i.jsxs)("div",{className:es().skills,children:[(0,i.jsxs)("div",{className:es().row,children:[(0,i.jsx)(U,{children:"Coding"}),(0,i.jsxs)("ul",{className:es().list,children:[(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:ec,alt:"React Logo"})}),(0,i.jsx)("p",{children:"React"})]}),(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"100",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:eo,alt:"Typescript Logo"})}),(0,i.jsx)("p",{children:"Typescript"})]}),(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"200",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:ed,alt:"Javascript Logo"})}),(0,i.jsx)("p",{children:"Javascript"})]}),(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"300",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:eA,alt:"Vite Logo"})}),(0,i.jsx)("p",{children:"Vite"})]}),(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"400",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:eh,alt:"Jest Logo"})}),(0,i.jsx)("p",{children:"Jest"})]}),(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"400",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:eg,alt:"Recoil Logo"})}),(0,i.jsx)("p",{children:"Recoil"})]})]})]}),(0,i.jsxs)("div",{className:es().row,children:[(0,i.jsx)(U,{children:"Styling"}),(0,i.jsxs)("ul",{className:es().list,children:[(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"0",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:em,alt:"Css Logo"})}),(0,i.jsx)("p",{children:"CSS3"})]}),(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"100",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:ex,alt:"Scss Logo"})}),(0,i.jsx)("p",{children:"SCSS"})]}),(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"200",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:eb,alt:"Storybook Logo"})}),(0,i.jsx)("p",{children:"Storybook"})]}),(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"300",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:eu,alt:"bootstrap Logo"})}),(0,i.jsx)("p",{children:"Bootstrap"})]}),(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"300",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:ep,alt:"tailwind Logo"})}),(0,i.jsx)("p",{children:"Tailwind"})]})]})]}),(0,i.jsxs)("div",{className:es().row,children:[(0,i.jsx)(U,{children:"UX & UI Design"}),(0,i.jsxs)("ul",{className:es().list,children:[(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"0",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:ef,alt:"Figma Logo"})}),(0,i.jsx)("p",{children:"Figma"})]}),(0,i.jsxs)("li",{className:es().item,"data-aos":"fade-down","data-aos-delay":"100",children:[(0,i.jsx)("i",{className:es().icon,children:(0,i.jsx)(Y(),{loading:"lazy",src:ej,alt:"Adobe XD Logo"})}),(0,i.jsx)("p",{children:"Adobe XD"})]})]})]}),(0,i.jsx)(y,{href:"https://www.linkedin.com/in/ronaldocreis/",children:"See more on my LinkedIn"})]})})})})]})},eU=()=>(0,i.jsxs)(l.Wh,{children:[(0,i.jsx)(J,{}),(0,i.jsx)(W,{}),(0,i.jsx)(ew,{}),(0,i.jsx)(ea,{}),(0,i.jsx)(H,{}),(0,i.jsx)(u,{}),(0,i.jsx)(L,{})]});function ek(){return(0,i.jsx)(eU,{})}},3254:function(e){e.exports={button:"Button_button__kdfq_"}},5913:function(e){e.exports={container:"Contact_container__uTFxm",links:"Contact_links__hDV8x"}},3739:function(e){e.exports={container:"Courses_container__vRFC1",courses:"Courses_courses__TWGsU"}},4103:function(e){e.exports={headerContainer:"Header_headerContainer__o532o",scroll:"Header_scroll__C2ATC",header:"Header_header__ZiXwm",nav:"Header_nav__iQTOw",menuHamburger:"Header_menuHamburger__ZGJ95",mobileButton:"Header_mobileButton__HbqkX",mobile:"Header_mobile__H0USm"}},3075:function(e){e.exports={navLink:"HeaderLink_navLink__Z1_cm",linkBar:"HeaderLink_linkBar__I5lhY",active:"HeaderLink_active__QC7kL"}},4985:function(e){e.exports={main:"Home_main__n_l1o",intro:"Home_intro__t3Ye_",donut:"Home_donut__mq2ak"}},3801:function(e){e.exports={container:"Portfolio_container__yUt4h",projects:"Portfolio_projects__Q7RhG",project:"Portfolio_project__3HeCg",active:"Portfolio_active__7os2o"}},328:function(e){e.exports={container:"Skills_container__yZUSs",skills:"Skills_skills__TEedN",list:"Skills_list__tbNHE",item:"Skills_item__XY9RX",icon:"Skills_icon___nFwQ",row:"Skills_row__aW_zP"}},6741:function(e){e.exports={card:"Card_card__wJARV"}},9649:function(e){e.exports={title:"CenterTitle_title__OhPGj"}},6582:function(e){e.exports={card:"CourseCard_card__mzorl",right:"CourseCard_right__jvijw"}},8089:function(e){e.exports={container:"H2_container__dnkDC",title:"H2_title___CmM_",subtitle:"H2_subtitle__C9WKq"}},1851:function(e){e.exports={h3:"H3_h3__PB5zz",transparent:"H3_transparent__hjYtv"}},9057:function(e){e.exports={link:"Link_link__UjM3q"}},6550:function(e){e.exports={backdrop:"Modal_backdrop__XOboE",modal:"Modal_modal__Erfgy",img:"Modal_img__AAUx_",title:"Modal_title__cfcxL",desc:"Modal_desc__SUvOg",title2:"Modal_title2__mu9Zi",techList:"Modal_techList__6F5T8",animateIn:"Modal_animateIn__OPQmn"}}},function(e){e.O(0,[107,557,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);