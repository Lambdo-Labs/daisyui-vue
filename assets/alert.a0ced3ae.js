import{u as s,g as a,h as t,a as n,k as l,j as p,o as e,f as o}from"./vendor.596f70a4.js";const c={class:"markdown-body"},r=p("h1",null,"Alert",-1),m=p("p",null,"alert",-1),i=o("Lorem ipsum dolor sit amet, consectetur adip!"),u=p("p",null,"alert state: info",-1),d=o("Lorem ipsum dolor sit amet, consectetur adip!"),h=p("p",null,"alert state: success",-1),j=o(" Lorem ipsum dolor sit amet, consectetur adip! "),g=p("p",null,"alert state: warning",-1),v=o(" Lorem ipsum dolor sit amet, consectetur adip! "),f=p("p",null,"alert state: error",-1),q=o(" Lorem ipsum dolor sit amet, consectetur adip! "),L=p("p",null,"alert with actions",-1),y=o(" Lorem ipsum dolor sit amet, consectetur adip! "),_=o("cancel"),b=o("apply"),x=p("p",null,"alert",-1),z=o(" Lorem ipsum dolor sit amet, consectetur adip! "),w=o(" Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur adip! "),I=p("h2",null,"Attributes",-1),A=p("h3",null,"Alert",-1),k=p("h3",null,"Alert Slots",-1),S={setup(p,{expose:o}){o({frontmatter:{meta:[]}});return s({meta:[]}),(s,p)=>{const o=a("dv-alert"),S=a("Playground"),M=a("dv-button"),P=a("dv-icon-heart"),T=a("dv-icon-dots"),B=a("MarkdownTable");return e(),t("div",c,[r,m,n(S,{code:'<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adip!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n'},{default:l((()=>[n(o,null,{default:l((()=>[i])),_:1})])),_:1}),u,n(S,{code:'<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adip!<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n'},{default:l((()=>[n(o,{type:"info"},{default:l((()=>[d])),_:1})])),_:1}),h,n(S,{code:'<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n  Lorem ipsum dolor sit amet, consectetur adip!\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n'},{default:l((()=>[n(o,{type:"success"},{default:l((()=>[j])),_:1})])),_:1}),g,n(S,{code:'<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\n  Lorem ipsum dolor sit amet, consectetur adip!\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n'},{default:l((()=>[n(o,{type:"warning"},{default:l((()=>[v])),_:1})])),_:1}),f,n(S,{code:'<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>\n  Lorem ipsum dolor sit amet, consectetur adip!\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n'},{default:l((()=>[n(o,{type:"error"},{default:l((()=>[q])),_:1})])),_:1}),L,n(S,{code:'<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>\n    Lorem ipsum dolor sit amet, consectetur adip!\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;actions&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-2&quot;</span>&gt;</span>cancel<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>apply<span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n'},{default:l((()=>[n(o,{type:"error"},{default:l((()=>[y])),actions:l((()=>[n(M,{type:"ghost",size:"sm",class:"mr-2"},{default:l((()=>[_])),_:1}),n(M,{type:"primary",size:"sm"},{default:l((()=>[b])),_:1})])),_:1})])),_:1}),x,n(S,{code:'<span class="hljs-tag">&lt;<span class="hljs-name">dv-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-heart</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ef3636&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:default</span>&gt;</span>\n    Lorem ipsum dolor sit amet, consectetur adip!\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:content</span>&gt;</span>\n    Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet,\n    consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum\n    dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur\n    adip!Lorem ipsum dolor sit amet, consectetur adip!\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:actions</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">dv-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;ghost&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mr-2&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">dv-icon-dots</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.5em&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">dv-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">dv-alert</span>&gt;</span>\n'},{default:l((()=>[n(o,null,{icon:l((()=>[n(P,{color:"#ef3636"})])),default:l((()=>[z])),content:l((()=>[w])),actions:l((()=>[n(M,{type:"ghost",size:"sm",class:"mr-2"},{default:l((()=>[n(T,{size:"1.5em"})])),_:1})])),_:1})])),_:1}),I,A,n(B,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1},{title:"type",dataIndex:2},{title:"default",dataIndex:3}],dataSource:[{0:"type",1:"alert color type",2:"info, success, warning, error",3:"-"}]}),k,n(B,{columns:[{title:"name",dataIndex:0},{title:"description",dataIndex:1}],dataSource:[{0:"default",1:"alert title"},{0:"content",1:"alert content"},{0:"actions",1:"alert actions"}]})])}}};export{S as default};
