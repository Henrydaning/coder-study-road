<<<<<<<< HEAD:dist/assets/004各种css拓展小知识补充.html.4c36b22e.js
import{_ as l,r,o as a,c as i,a as e,b as o,w as t,d as c,e as s}from"./app.659177ce.js";const d={},u={class:"table-of-contents"},v=s("1.color-convert"),_=c(`<h2 id="_1-color-convert" tabindex="-1"><a class="header-anchor" href="#_1-color-convert" aria-hidden="true">#</a> 1.color-convert</h2><p>\u989C\u8272\u8F6C\u6362\u5668\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var convert = require(&#39;color-convert&#39;);
========
import{_ as l,r,o as a,c as i,a as e,b as o,w as t,d as c,e as s}from"./app.98cbd08f.js";const d={},u={class:"table-of-contents"},v=s("1.color-convert"),_=c(`<h2 id="_1-color-convert" tabindex="-1"><a class="header-anchor" href="#_1-color-convert" aria-hidden="true">#</a> 1.color-convert</h2><p>\u989C\u8272\u8F6C\u6362\u5668\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var convert = require(&#39;color-convert&#39;);
>>>>>>>> 896fb2c474bc6d0911b8756a0c0fe9878234b899:dist/assets/004各种css拓展小知识补充.html.474d47e0.js
 
convert.rgb.hsl(140, 200, 100);             // [96, 48, 59]
convert.keyword.rgb(&#39;blue&#39;);
\u989C\u8272\u8F6C\u4E3A\u5341\u516D\u8FDB\u5236
convert.rgb.hex(123, 45, 67);      // &#39;7B2D43&#39;
convert.rgb.hex([123, 45, 67]);    // &#39;7B2D43&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8865\u5145\u5404\u79CD\u989C\u8272\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145\u5404\u79CD\u989C\u8272\u6A21\u578B" aria-hidden="true">#</a> \u8865\u5145\u5404\u79CD\u989C\u8272\u6A21\u578B</h4><ul><li>HSV(hue,saturation,value)\u989C\u8272\u7A7A\u95F4\u7684\u6A21\u578B\uFF0CHSV\u6A21\u578B\u5BF9\u5E94\u4E8E\u753B\u5BB6\u914D\u8272\u7684\u65B9\u6CD5</li><li>HSI\u8272\u5F69\u7A7A\u95F4\u662F\u4ECE\u4EBA\u7684\u89C6\u89C9\u7CFB\u7EDF\u51FA\u53D1\uFF0CHSI\u8272\u5F69\u7A7A\u95F4\u548CRGB\u8272\u5F69\u7A7A\u95F4\u53EA\u662F\u540C\u4E00\u7269\u7406\u91CF\u7684\u4E0D\u540C\u8868\u793A\u6CD5\uFF0C\u56E0\u800C\u5B83\u4EEC\u4E4B\u95F4\u5B58\u5728\u7740 \u8F6C\u6362\u5173\u7CFB\u3002</li><li>RGB(red,green,blue)\u989C\u8272\u7A7A\u95F4\u6700\u5E38\u7528\u7684\u7528\u9014\u5C31\u662F\u663E\u793A\u5668\u7CFB\u7EDF</li><li>CMYK(cyan,magenta,yellow)\u989C\u8272\u7A7A\u95F4\u5E94\u7528\u4E8E\u5370\u5237\u5DE5\u4E1A</li><li>HSL(hue,saturation,lightness)\u989C\u8272\u7A7A\u95F4\uFF0C\u8FD9\u4E2A\u989C\u8272\u7A7A\u95F4\u90FD\u662F\u7528\u6237\u53F0\u5F0F\u673A\u56FE\u5F62\u7A0B\u5E8F\u7684\u989C\u8272\u8868\u793A</li><li>HSB(hue,saturation,brightness)\u989C\u8272\u7A7A\u95F4\uFF0C\u8FD9\u4E2A\u989C\u8272\u7A7A\u95F4\u90FD\u662F\u7528\u6237\u53F0\u5F0F\u673A\u56FE\u5F62\u7A0B\u5E8F\u7684\u989C\u8272\u8868\u793A\uFF0C</li><li>Lab\u989C\u8272\u7A7A\u95F4\u662F\u7531CIE(\u56FD\u9645\u7167\u660E\u59D4\u5458\u4F1A)\u5236\u5B9A\u7684\u4E00\u79CD\u8272\u5F69\u6A21\u5F0F\u3002\u81EA\u7136\u754C\u4E2D\u4EFB\u4F55\u4E00\u70B9\u8272\u90FD\u53EF\u4EE5\u5728Lab\u7A7A\u95F4 \u4E2D\u8868\u8FBE\u51FA\u6765\uFF0C\u5B83\u7684\u8272\u5F69\u7A7A\u95F4\u6BD4RGB\u7A7A\u95F4\u8FD8\u8981\u5927\u3002\u4EE5\u6570\u5B57\u5316\u65B9\u5F0F\u6765\u63CF\u8FF0\u4EBA\u7684\u89C6\u89C9\u611F\u5E94\uFF0C \u4E0E\u8BBE\u5907\u65E0\u5173\uFF0C\u6240\u4EE5\u5B83\u5F25\u8865\u4E86RGB\u548CCMYK\u6A21\u5F0F\u5FC5\u987B\u4F9D\u8D56\u4E8E\u8BBE\u5907\u8272\u5F69\u7279\u6027\u7684\u4E0D\u8DB3\u3002\uFF08<code>hwb()</code>\uFF0C<code>lab()</code>\u5E76\u4E14<code>lch()</code>\u76EE\u524D\u4EC5\u5728 Safari \u4E2D\u53D7\u652F\u6301\u3002\uFF09</li><li>YUV\u989C\u8272\u7A7A\u95F4\u5728\u73B0\u4EE3\u5F69\u8272\u7535\u89C6\u7CFB\u7EDF</li></ul>`,5);function h(b,m){const n=r("RouterLink");return a(),i("div",null,[e("nav",u,[e("ul",null,[e("li",null,[o(n,{to:"#_1-color-convert"},{default:t(()=>[v]),_:1})])])]),_])}var f=l(d,[["render",h],["__file","004\u5404\u79CDcss\u62D3\u5C55\u5C0F\u77E5\u8BC6\u8865\u5145.html.vue"]]);export{f as default};
