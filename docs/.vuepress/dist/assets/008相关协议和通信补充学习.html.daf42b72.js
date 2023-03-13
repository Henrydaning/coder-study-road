import{_ as a,r,o as d,c as l,a as e,b as i,w as n,d as c,e as t}from"./app.5805b0e6.js";const o={},_={class:"table-of-contents"},u=t("1.ws \u548C wss \u6BD4\u8F83"),v=t("2.Gerrit \u7B80\u4ECB"),m=c(`<h2 id="_1-ws-\u548C-wss-\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_1-ws-\u548C-wss-\u6BD4\u8F83" aria-hidden="true">#</a> 1.ws \u548C wss \u6BD4\u8F83</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ws\u548Cwss\u7684\u533A\u522B.
 WS: WebSocket. WSS: WebSocket Secure.
 WS\u534F\u8BAE\u548CWSS\u534F\u8BAE\u4E24\u4E2A\u5747\u662FWebSocket\u534F\u8BAE\u7684SCHEM
 WebSocket \u534F\u8BAE\u662F html5\u7684 \u4E00\u79CD\u901A\u4FE1\u534F\u8BAE\uFF0C\u53EF\u4EE5\u4F7F\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u53CC\u5411\u6570\u636E\u4F20\u8F93\u66F4\u52A0\u7B80\u5355\u5FEB\u6377\uFF0C
 \u5E76\u4E14\u5728 TCP\u8FDE\u63A5 \u8FDB\u884C\u4E00\u6B21\u63E1\u624B\u540E\uFF0C\u5C31\u53EF\u4EE5 \u6301\u4E45\u6027 \u8FDE\u63A5\uFF0C\u540C\u65F6\u5141\u8BB8\u670D\u52A1\u7AEF\u5BF9\u5BA2\u6237\u7AEF \u63A8\u9001 \u6570\u636E\u3002
 WS\u662F\u975E\u5B89\u5168\u7684\uFF0CWSS\u662F\u5B89\u5168\u7684\u3002. \u975E\u5B89\u5168\u7684\u6CA1\u6709\u8BC1\u4E66\uFF0C\u5B89\u5168\u7684\u9700\u8981SSL\u8BC1\u4E66.


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-gerrit-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-gerrit-\u7B80\u4ECB" aria-hidden="true">#</a> 2.Gerrit \u7B80\u4ECB</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uFF081\uFF09 Gerrit \u7B80\u4ECB
Gerrit \u662F\u4E00\u4E2A\u57FA\u4E8E web \u7684\u4EE3\u7801\u8BC4\u5BA1\u5DE5\u5177, \u5B83\u57FA\u4E8E git \u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u3002\u65E8\u5728\u63D0\u4F9B\u4E00\u4E2A\u8F7B \u91CF\u7EA7\u6846\u67B6, \u7528\u4E8E\u5728\u4EE3\u7801\u5165\u5E93\u4E4B\u524D\u5BF9\u6BCF\u4E2A\u63D0\u4EA4\u8FDB\u884C\u5BA1\u9605\u3002\u5F00\u53D1\u4EBA\u5458\u7684\u4FEE\u6539\u9996\u5148\u5C06\u4E0A\u8F7D\u5230 Gerrit, \u4F46 \u5B9E\u9645\u4E0A\u5E76\u4E0D\u6210\u4E3A\u9879\u76EE\u7684\u4E00\u90E8\u5206, \u76F4\u5230\u5B83\u4EEC\u88AB\u5BA1\u9605\u548C\u63A5\u53D7\u3002\u5B83\u662F\u6807\u51C6\u5F00\u6E90\u8FC7\u7A0B\u7684\u4E00\u4E2A\u5DE5\u5177\u6765\u652F\u6301\u63D0 \u4EA4\u8865\u4E01\u7A0B\u5E8F, \u7136\u540E\u7531\u9879\u76EE\u6210\u5458\u5728\u5E94\u7528\u5230\u4EE3\u7801\u5E93\u4E4B\u524D\u8FDB\u884C\u8BC4\u5BA1\u3002
Gerrit \u9996\u5148\u662F\u4E00\u4E2A\u4E34\u65F6\u533A\u57DF, \u5728\u63D0\u4EA4\u7684\u4EE3\u7801\u6210\u4E3A\u4EE3\u7801\u5E93\u7684\u4E00\u90E8\u5206\u4E4B\u524D, \u53EF\u4EE5\u5BF9\u5176\u4FEE\u6539\u8FDB\u884C \u68C0\u67E5\u3002\u666E\u901A\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u968F\u610F\u63D0\u4EA4\u4EE3\u7801\uFF0C\u4F46\u662F\u9700\u8981\u4E13\u5BB6\uFF08\u7279\u5B9A\u6743\u9650\uFF09\u5BF9\u63D0\u4EA4\u7684 \u4EE3\u7801\u8FDB\u884C\u8BC4\u5BA1 \u6253\u5206\uFF0C\u5BF9\u4E8E\u4E0D\u5408\u683C\u7684\u4EE3\u7801\uFF0C\u4E13\u5BB6\u6709\u5E9F\u5F03\u7684\u6743\u5229\uFF0C\u53EA\u6709\u68C0\u89C6\u901A\u8FC7\u7684\u4EE3\u7801\uFF0C\u624D\u80FD\u88AB\u4E13\u5BB6\u63D0\u4EA4\u5165\u5E93\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function b(h,S){const s=r("RouterLink");return d(),l("div",null,[e("nav",_,[e("ul",null,[e("li",null,[i(s,{to:"#_1-ws-\u548C-wss-\u6BD4\u8F83"},{default:n(()=>[u]),_:1})]),e("li",null,[i(s,{to:"#_2-gerrit-\u7B80\u4ECB"},{default:n(()=>[v]),_:1})])])]),m])}var x=a(o,[["render",b],["__file","008\u76F8\u5173\u534F\u8BAE\u548C\u901A\u4FE1\u8865\u5145\u5B66\u4E60.html.vue"]]);export{x as default};
