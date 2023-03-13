import{_ as s,r as t,o as d,c as i,a as e,b as o,e as n,d as l}from"./app.5805b0e6.js";const r={},c=e("p",null,"[toc]",-1),h=e("p",null,"https://zhuanlan.zhihu.com/p/268732230",-1),u=e("h2",{id:"_1-web-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-web-components","aria-hidden":"true"},"#"),n(" 1.Web Components")],-1),m=e("p",null,"Web Components \u662F\u4E00\u5957\u4E0D\u540C\u7684\u6280\u672F\uFF0C\u5141\u8BB8\u60A8\u521B\u5EFA\u53EF\u91CD\u7528\u7684\u5B9A\u5236\u5143\u7D20\uFF08\u5B83\u4EEC\u7684\u529F\u80FD\u5C01\u88C5\u5728\u60A8\u7684\u4EE3\u7801\u4E4B\u5916\uFF09\u5E76\u4E14\u5728\u60A8\u7684web\u5E94\u7528\u4E2D\u4F7F\u7528\u5B83\u4EEC\u3002",-1),_=n("\u6765\u81EA "),v={href:"https://zhuanlan.zhihu.com/p/268732230",target:"_blank",rel:"noopener noreferrer"},p=n("https://zhuanlan.zhihu.com/p/268732230"),b=l(`<h2 id="_2-\u76EE\u7684" tabindex="-1"><a class="header-anchor" href="#_2-\u76EE\u7684" aria-hidden="true">#</a> 2.\u76EE\u7684</h2><p>\u7EC4\u4EF6\uFF1A\u6700\u521D\u7684\u76EE\u7684\u662F\u4EE3\u7801\u91CD\u7528\uFF0C\u529F\u80FD\u76F8\u5BF9\u5355\u4E00\u6216\u8005\u72EC\u7ACB\u3002\u5728\u6574\u4E2A\u7CFB\u7EDF\u7684\u4EE3\u7801\u5C42\u6B21\u4E0A\u4F4D\u4E8E\u6700\u5E95\u5C42\uFF0C\u88AB\u5176\u4ED6\u4EE3\u7801\u6240\u4F9D\u8D56\uFF0C\u6240\u4EE5\u8BF4\u7EC4\u4EF6\u5316\u662F\u7EB5\u5411\u5206\u5C42\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u6765\u81EA &lt;https://zhuanlan.zhihu.com/p/268732230&gt; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> 3.\u4F7F\u7528\u65B9\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u521B\u5EFA\u4E00\u4E2A\u7C7B\u6216\u51FD\u6570\u6765\u6307\u5B9Aweb\u7EC4\u4EF6\u7684\u529F\u80FD\uFF0C\u63A8\u8350\u8BF7\u4F7F\u7528 ECMAScript 2015 \u7684\u7C7B\u8BED\u6CD5\u3002

2. \u4F7F\u7528 CustomElementRegistry.define() \u65B9\u6CD5\u6CE8\u518C\u81EA\u5DF1\u7684\u65B0\u81EA\u5B9A\u4E49\u5143\u7D20 \uFF0C\u5E76\u5411\u5176\u4F20\u9012\u8981\u5B9A\u4E49\u7684\u5143\u7D20\u540D\u79F0\u3001\u6307\u5B9A\u5143\u7D20\u529F\u80FD\u7684\u7C7B\u3001\u4EE5\u53CA\u53EF\u9009\u7684\u5176\u6240\u7EE7\u627F\u81EA\u7684\u5143\u7D20\u3002

3. \u5982\u679C\u9700\u8981\u7684\u8BDD\uFF0C\u4F7F\u7528Element.attachShadow() \u65B9\u6CD5\u5C06\u4E00\u4E2Ashadow DOM\u9644\u52A0\u5230\u81EA\u5B9A\u4E49\u5143\u7D20\u4E0A\u3002\u4F7F\u7528\u539F\u751F\u7684DOM\u65B9\u6CD5\u5411shadow DOM\u4E2D\u6DFB\u52A0\u5B50\u5143\u7D20\u3001\u4E8B\u4EF6\u76D1\u542C\u5668\u7B49\u3002

4. \u5982\u679C\u9700\u8981\u7684\u8BDD\uFF0C\u4F7F\u7528 &lt;template&gt;\u548C&lt;slot&gt; \u5B9A\u4E49\u4E00\u4E2AHTML\u6A21\u677F\u3002\u518D\u6B21\u4F7F\u7528\u5E38\u89C4DOM\u65B9\u6CD5\u514B\u9686\u6A21\u677F\u5E76\u5C06\u5176\u9644\u52A0\u5230shadow DOM\u4E2D\u3002

5. \u6700\u540E\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\uFF0C\u5C31\u50CF\u4F7F\u7528\u539F\u751FHTML\u5143\u7D20\u4E00\u6837

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Shadow DOM Shadow DOM\u5141\u8BB8\u60A8\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u4E0E\u5168\u5C40\u7684\u6837\u5F0F\u8FDB\u884C\u9694\u79BB\uFF0C\u56E0\u6B64\u65E0\u8BBA\u5168\u5C40CSS\u4E2D\u53D1\u751F\u4EC0\u4E48\uFF0C\u90FD\u53EF\u4EE5\u786E\u4FDD\u7EC4\u4EF6\u7684\u5916\u89C2\u548C\u884C\u4E3A\u76F8\u540C\u3002\u8FD9\u610F\u5473\u7740\u7EC4\u4EF6\u4E2D\u4E0D\u4F1A\u51FA\u73B0\u4EFB\u4F55\u6837\u5F0F\u6CC4\u6F0F\u3002</p><h2 id="shadow-dom" tabindex="-1"><a class="header-anchor" href="#shadow-dom" aria-hidden="true">#</a> Shadow DOM</h2><p>ShadowDom\u88AB\u7528\u5230\u4E86\u5FAE\u524D\u7AEF\u67B6\u6784\u4E2D\u3002</p>`,8);function x(w,f){const a=t("ExternalLinkIcon");return d(),i("div",null,[c,h,u,m,e("p",null,[_,e("a",v,[p,o(a)])]),b])}var M=s(r,[["render",x],["__file","000\u8BB0\u5F55webcomponets\u89C4\u8303.html.vue"]]);export{M as default};
