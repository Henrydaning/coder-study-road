import{_ as u,r,o as v,c as t,a as e,b as n,w as d,d as l,e as i}from"./app.5805b0e6.js";var c="/dist/assets/vuepressQA.b698ba9d.png";const m={},o={class:"table-of-contents"},b=i("\uFF08000\uFF09\u51FA\u73B0\u95EE\u9898\uFF1ATypeError: Invalid value used as weak map key"),h=i("(001)vuepress \u529F\u80FD\u5F15\u5165\u63D2\u4EF6\u529F\u80FD\u8BF4\u660E"),p=i("\uFF08002\uFF09vuepress \u4E2D\u5168\u5C40\u94A9\u5B50\u548C UI \u7EC4\u4EF6"),g=i("\uFF08003\uFF09vuepress \u4E2D\u5F15\u5165\u76F8\u5BF9\u548C\u7EDD\u5BF9\u5730\u5740\u56FE\u7247"),x=i("(004)\u9759\u6001\u8D44\u6E90\u90E8\u7F72\u5230\u67D0\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B\uFF0C\u5982\u4F55\u4FDD\u8BC1\u76F8\u5BF9\u5730\u5740\u6CA1\u6709\u95EE\u9898"),_=i("\uFF08005\uFF09\u4F7F\u7528 GitHub Pages \u5EFA\u7ACB\u535A\u5BA2"),f=i("(1)vuepress1.x \u914D\u7F6E\u9879\u76EE\u53C2\u8003"),k=i("\uFF082\uFF09vuepress2.x \u76EE\u524D\u9700\u8981\u7684\u914D\u7F6E"),q=i("vuepress2 \u7CFB\u7EDF\u5316\u914D\u7F6E\u4F7F\u7528"),w=i("vuepress2.x \u4E2D head \u589E\u52A0 ico \u6807\u7B7E\u56FE"),y=i("vuepress2.x \u914D\u7F6E\u5982\u4F55\u6E05\u9664 md \u4E0B\u9762\u7684\u66F4\u65B0\u8BB0\u5F55\u5185\u5BB9"),P=i("vuepress \u6253\u5305\u540E\u7684\u90E8\u7F72 linux \u95EE\u9898\u3002"),A=i("3.\u8DF3\u8F6C\u5185\u90E8 markdown \u951A\u70B9\u4F4D\u7F6E\u548C\u5176\u4ED6 md \u6587\u4EF6\u7684\u951A\u70B9\u4F4D\u7F6E"),I=i("\u8DF3\u8F6C\u5185\u90E8 markdown \u951A\u70B9\u4F4D\u7F6E"),D=i("\u8DF3\u8F6C\u5176\u4ED6\u6587\u4EF6\u4F4D\u7F6E"),E=i("4.\u914D\u7F6E\u5165\u53E3\u548C\u51FA\u53E3\u914D\u7F6E\u5185\u5BB9 vuepress"),H=i("\u6240\u6709\u7684\u951A\u70B9\u5728 dev \u73AF\u5883\u4E0B\u6B63\u5E38\uFF0C"),j=i("5.vuepress \u6837\u5F0F\u4FEE\u6539"),G=i("vuepress1.x \u4FEE\u6539\u6837\u5F0F"),N=i("vuepress2.x \u65B9\u6848"),z=i("5.\u89E3\u51B3\u4E0A\u7EBF vuepress \u7684\u951A\u70B9\u5B9A\u4F4D\u95EE\u9898"),T=i("6.\u9ED8\u8BA4\u6837\u5F0F vuepress \u4FEE\u6539"),C=l(`<h3 id="_000-\u51FA\u73B0\u95EE\u9898-typeerror-invalid-value-used-as-weak-map-key" tabindex="-1"><a class="header-anchor" href="#_000-\u51FA\u73B0\u95EE\u9898-typeerror-invalid-value-used-as-weak-map-key" aria-hidden="true">#</a> \uFF08000\uFF09\u51FA\u73B0\u95EE\u9898\uFF1ATypeError: Invalid value used as weak map key</h3><p>\u4E00\u822C\u662F md \u6587\u4EF6\u4E2D\u6709\u6CA1\u6709\u8BC6\u522B\u7684\u95ED\u5408\u6807\u7B7E\u3002\u6BD4\u5982\u5F3A\u884C\u5C06 elementplus \u7EC4\u4EF6\u7528\u5728 md \u4E2D\u6CA1\u6709\u7279\u6B8A\u5904\u7406\u3002</p><h3 id="_001-vuepress-\u529F\u80FD\u5F15\u5165\u63D2\u4EF6\u529F\u80FD\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_001-vuepress-\u529F\u80FD\u5F15\u5165\u63D2\u4EF6\u529F\u80FD\u8BF4\u660E" aria-hidden="true">#</a> (001)vuepress \u529F\u80FD\u5F15\u5165\u63D2\u4EF6\u529F\u80FD\u8BF4\u660E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- \u5F15\u5165\u56DE\u5230\u9876\u90E8
yarn add -D @vuepress/plugin-back-to-top@next

- \u7ED9markdown\u589E\u52A0\u56FE\u6807
yarn add -D @vuepress/plugin-external-link-icon@next

- \u589E\u52A0\u8FDB\u5EA6\u6761
yarn add  -D @vuepress/plugin-nprogress@next

- \u63D0\u4F9Btoc\u529F\u80FD
yarn add -D @vuepress/plugin-toc@next

- \u70B9\u51FB\u56FE\u7247\u63D0\u4F9B\u4F38\u7F29\u529F\u80FD
yarn add -D @vuepress/plugin-medium-zoom@next

- \u5F15\u5165elementplus
clientAppEnhance.ts

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002-vuepress-\u4E2D\u5168\u5C40\u94A9\u5B50\u548C-ui-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_002-vuepress-\u4E2D\u5168\u5C40\u94A9\u5B50\u548C-ui-\u7EC4\u4EF6" aria-hidden="true">#</a> \uFF08002\uFF09vuepress \u4E2D\u5168\u5C40\u94A9\u5B50\u548C UI \u7EC4\u4EF6</h3><ul><li>client.ts \u589E\u52A0\u5168\u5C40\u94A9\u5B50\u548C\u5168\u5C40 UI \u7EC4\u4EF6 rootComponents \u662F\u4E00\u4E2A\u7EC4\u4EF6\u6570\u7EC4\uFF0C\u5B83\u4EEC\u5C06\u4F1A\u76F4\u63A5\u88AB\u653E\u7F6E\u5728\u5BA2\u6237\u7AEF Vue \u5E94\u7528\u7684\u6839\u8282\u70B9\u4E0B\u3002</li></ul>`,6),L={href:"https://v2.vuepress.vuejs.org/zh/advanced/cookbook",target:"_blank",rel:"noopener noreferrer"},V=i("\u5168\u5C40\u94A9\u5B50\u548C UI"),B=l(`<ul><li>vuepress \u4E2D\u5F15\u5165\u7EDD\u5BF9\u8DEF\u5F84\u548C\u76F8\u5173\u8DEF\u5F84</li></ul><h3 id="_003-vuepress-\u4E2D\u5F15\u5165\u76F8\u5BF9\u548C\u7EDD\u5BF9\u5730\u5740\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#_003-vuepress-\u4E2D\u5F15\u5165\u76F8\u5BF9\u548C\u7EDD\u5BF9\u5730\u5740\u56FE\u7247" aria-hidden="true">#</a> \uFF08003\uFF09vuepress \u4E2D\u5F15\u5165\u76F8\u5BF9\u548C\u7EDD\u5BF9\u5730\u5740\u56FE\u7247</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
[\u6307\u5357](/zh/guide/README.md)
&lt;!-- \u76F8\u5BF9\u8DEF\u5F84 --&gt;
![\u6210\u957F](/images/home.png)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_004-\u9759\u6001\u8D44\u6E90\u90E8\u7F72\u5230\u67D0\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B-\u5982\u4F55\u4FDD\u8BC1\u76F8\u5BF9\u5730\u5740\u6CA1\u6709\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_004-\u9759\u6001\u8D44\u6E90\u90E8\u7F72\u5230\u67D0\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B-\u5982\u4F55\u4FDD\u8BC1\u76F8\u5BF9\u5730\u5740\u6CA1\u6709\u95EE\u9898" aria-hidden="true">#</a> (004)\u9759\u6001\u8D44\u6E90\u90E8\u7F72\u5230\u67D0\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B\uFF0C\u5982\u4F55\u4FDD\u8BC1\u76F8\u5BF9\u5730\u5740\u6CA1\u6709\u95EE\u9898</h3><p>\u90E8\u7F72\u8D44\u6E90\u653E\u5728\u67D0\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B\u9762\u5982\u4F55 vuepress \u914D\u7F6E</p><p>Base Helper</p>`,6),M=i("\u5982\u679C\u4F60\u7684\u7F51\u7AD9\u90E8\u7F72\u5728\u975E\u6839\u8DEF\u5F84\u4E0B\uFF0C\u5373 "),O={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#base",target:"_blank",rel:"noopener noreferrer"},R=i("base"),S=i(" \u4E0D\u662F "),U=e("code",null,'"/"',-1),Q=i(" \uFF0C\u4F60\u9700\u8981\u628A "),F=e("code",null,"base",-1),J=i(" \u6DFB\u52A0\u5230 Public \u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u524D\u3002"),K=l(`<p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5982\u679C\u4F60\u60F3\u8981\u628A\u7F51\u7AD9\u90E8\u7F72\u5230 <code>https://foo.github.io/bar/</code> \uFF0C\u90A3\u4E48\u5E94\u8BE5\u628A <code>base</code> \u8BBE\u7F6E\u4E3A <code>&quot;/bar/&quot;</code> \uFF0C\u6B64\u65F6\u4F60\u5FC5\u987B\u5728 Markdown \u6587\u4EF6\u4E2D\u8FD9\u6837\u5F15\u7528 Public \u6587\u4EF6\uFF1A</p><h3 id="_005-\u4F7F\u7528-github-pages-\u5EFA\u7ACB\u535A\u5BA2" tabindex="-1"><a class="header-anchor" href="#_005-\u4F7F\u7528-github-pages-\u5EFA\u7ACB\u535A\u5BA2" aria-hidden="true">#</a> \uFF08005\uFF09\u4F7F\u7528 GitHub Pages \u5EFA\u7ACB\u535A\u5BA2</h3><p>\u4E0E GitHub \u5EFA\u7ACB\u597D\u94FE\u63A5\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u65B9\u4FBF\u7684\u4F7F\u7528\u5B83\u63D0\u4F9B\u7684 Pages \u670D\u52A1\uFF0C</p><p>GitHub Pages \u5206\u4E24\u79CD\uFF0C</p><h4 id="\u4E00\u79CD\u662F\u4F60\u7684-github-\u7528\u6237\u540D\u5EFA\u7ACB\u7684username-github-io\u8FD9\u6837\u7684\u7528\u6237-\u7EC4\u7EC7\u9875-\u7AD9" tabindex="-1"><a class="header-anchor" href="#\u4E00\u79CD\u662F\u4F60\u7684-github-\u7528\u6237\u540D\u5EFA\u7ACB\u7684username-github-io\u8FD9\u6837\u7684\u7528\u6237-\u7EC4\u7EC7\u9875-\u7AD9" aria-hidden="true">#</a> \u4E00\u79CD\u662F\u4F60\u7684 GitHub \u7528\u6237\u540D\u5EFA\u7ACB\u7684<code>username.github.io</code>\u8FD9\u6837\u7684\u7528\u6237&amp;\u7EC4\u7EC7\u9875\uFF08\u7AD9\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u521B\u5EFA\u597Dusername.github.io\u9879\u76EE\u4E4B\u540E\uFF0C\u63D0\u4EA4\u4E00\u4E2Aindex.html\u6587\u4EF6\uFF0C\u7136\u540Epush\u5230GitHub\u7684master\u5206\u652F\uFF08\u4E5F\u5C31\u662F\u666E\u901A\u610F\u4E49\u4E0A\u7684\u4E3B\u5E72\uFF09\u3002\u7B2C\u4E00\u6B21\u9875\u9762\u751F\u6548\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\uFF0C\u5927\u698210\u5206\u949F\u5DE6\u53F3\u3002

\u751F\u6548\u4E4B\u540E\uFF0C\u8BBF\u95EEusername.github.io\u5C31\u53EF\u4EE5\u770B\u5230\u4F60\u4E0A\u4F20\u7684\u9875\u9762\u4E86\uFF0Cbeiyuu.github.io\u5C31\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002

https://nyhxiaoning.github.io/
https://nyhxiaoning.github.io/dist/
\u652F\u6301\u591A\u7EA7\u5730\u5740\u67E5\u8BE2
\u4F46\u662F\uFF0C\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u6253\u5305\u4E4B\u540E\uFF0C\u5C06\u6587\u4EF6\u5939\u8BBE\u7F6Edist\u653E\u5165\u6839\u76EE\u5F55\uFF0C\u7136\u540E\u8BBE\u7F6Evuepress2\u4E2D\u7684base\u5730\u5740\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u6587\u4EF6\u76F8\u5BF9\u4F4D\u7F6E\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u6B63\u5E38\u3002
\u8BBF\u95EE\uFF1Ahttps://nyhxiaoning.github.io/dist/   \u6CE8\u610F\u8BBE\u7F6Ebase:/dist/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E00\u79CD\u662F\u4F9D\u9644\u9879\u76EE\u7684-pages\u3002" tabindex="-1"><a class="header-anchor" href="#\u4E00\u79CD\u662F\u4F9D\u9644\u9879\u76EE\u7684-pages\u3002" aria-hidden="true">#</a> \u4E00\u79CD\u662F\u4F9D\u9644\u9879\u76EE\u7684 pages\u3002</h4><p>CNAME \u8BBE\u7F6E\u6210\u529F\u540E\uFF0CDNS \u751F\u6548\u9700\u8981\u4E00\u5929\u5DE6\u53F3\u3002</p><p>\u5C06\u72EC\u7ACB\u57DF\u540D\u4E0E GitHub Pages \u7684\u7A7A\u95F4\u7ED1\u5B9A GitHub Pages \u7684\u8BBE\u7F6E \u53BB\u5230\u4F60\u7684 blog.io \u4ED3\u5E93\uFF0C\u70B9\u51FB CNAME,\u518D\u70B9\u51FB\u53F3\u4E0B\u89D2\u7684\u94C5\u7B14\u7F16\u8F91\uFF0C\u5C06 cnfeat.com \u6539\u6210\u4F60\u7684\u57DF\u540D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8865\u5145\u5B66\u4E60\uFF1A
A (Address) \u8BB0\u5F55\u662F\u7528\u6765\u6307\u5B9A[\u4E3B\u673A](https://baike.baidu.com/item/\u4E3B\u673A)\u540D\uFF08\u6216[\u57DF\u540D](https://baike.baidu.com/item/\u57DF\u540D/86062)\uFF09\u5BF9\u5E94\u7684[IP\u5730\u5740](https://baike.baidu.com/item/IP\u5730\u5740)\u8BB0\u5F55\u3002
\u7528\u6237\u53EF\u4EE5\u5C06\u8BE5\u57DF\u540D\u4E0B\u7684[\u7F51\u7AD9\u670D\u52A1\u5668](https://baike.baidu.com/item/\u7F51\u7AD9\u670D\u52A1\u5668/8156379)\u6307\u5411\u5230\u81EA\u5DF1\u7684\u7F51\u9875\u670D\u52A1\u5668(web server)\u4E0A\u3002\u540C\u65F6\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u57DF\u540D\u7684[\u5B50\u57DF\u540D](https://baike.baidu.com/item/\u5B50\u57DF\u540D/10937658)\u3002



\u817E\u8BAF\u4E91\u5982\u4F55\u8BBE\u7F6EA\u8BB0\u5F55
[\u8BBE\u7F6E A \u8BB0\u5F55 - DNSPod \u670D\u52A1\u4E0E\u652F\u6301](https://docs.dnspod.cn/dns/help-a/)
@\u5BF9\u5E94\u7684A\u8BB0\u5F55\u662FIP\u5730\u5740\uFF1A34.102.136.180
[www.nyhdadaning.xyz](http://www.nyhdadaning.xyz/)
eighth.dnspod.net
angelo.dnspod.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-vuepress1-x-\u914D\u7F6E\u9879\u76EE\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_1-vuepress1-x-\u914D\u7F6E\u9879\u76EE\u53C2\u8003" aria-hidden="true">#</a> (1)vuepress1.x \u914D\u7F6E\u9879\u76EE\u53C2\u8003</h2><h2 id="_2-vuepress2-x-\u76EE\u524D\u9700\u8981\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-vuepress2-x-\u76EE\u524D\u9700\u8981\u7684\u914D\u7F6E" aria-hidden="true">#</a> \uFF082\uFF09vuepress2.x \u76EE\u524D\u9700\u8981\u7684\u914D\u7F6E</h2><h3 id="vuepress2-\u7CFB\u7EDF\u5316\u914D\u7F6E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vuepress2-\u7CFB\u7EDF\u5316\u914D\u7F6E\u4F7F\u7528" aria-hidden="true">#</a> vuepress2 \u7CFB\u7EDF\u5316\u914D\u7F6E\u4F7F\u7528</h3><ul><li>\u641C\u7D22\u529F\u80FD\u548C vuepress \u76EE\u524D\u5FC5\u987B\u914D\u7F6E\u4E00\u81F4\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &quot;@vuepress/plugin-nprogress&quot;: &quot;^2.0.0-beta.46&quot;,
    &quot;@vuepress/plugin-search&quot;: &quot;2.0.0-beta.50&quot;,
    &quot;@vuepress/plugin-toc&quot;: &quot;^2.0.0-beta.46&quot;,
    &quot;cz-git&quot;: &quot;^1.3.3&quot;,
    &quot;vuepress&quot;: &quot;2.0.0-beta.50&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress2-x-\u4E2D-head-\u589E\u52A0-ico-\u6807\u7B7E\u56FE" tabindex="-1"><a class="header-anchor" href="#vuepress2-x-\u4E2D-head-\u589E\u52A0-ico-\u6807\u7B7E\u56FE" aria-hidden="true">#</a> vuepress2.x \u4E2D head \u589E\u52A0 ico \u6807\u7B7E\u56FE</h3><p>\u652F\u6301\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>url \u5730\u5740\u4F7F\u7528\u5728\u7EBF url</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  head: [
    [&#39;link&#39;, { rel: &#39;icon&#39;, href: &#39;https://vuejs.org/images/logo.png&#39; }]
  ],

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u672C\u5730\u7684\u56FE\u7247\uFF0C\u6CE8\u610F\u8FD9\u91CC\u7684\u56FE\u7247\u4F7F\u7528 dist \u6253\u5305\u540E\u7684\u5730\u5740 \u4E00\u822C\u8FD9\u91CC/images/home.png,\u4F46\u662F head \u7279\u6B8A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  head: [
    //
    [&#39;link&#39;, { rel: &#39;icon&#39;, href: &#39;/dist/images/home.png&#39; }]

  ],

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress2-x-\u914D\u7F6E\u5982\u4F55\u6E05\u9664-md-\u4E0B\u9762\u7684\u66F4\u65B0\u8BB0\u5F55\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#vuepress2-x-\u914D\u7F6E\u5982\u4F55\u6E05\u9664-md-\u4E0B\u9762\u7684\u66F4\u65B0\u8BB0\u5F55\u5185\u5BB9" aria-hidden="true">#</a> vuepress2.x \u914D\u7F6E\u5982\u4F55\u6E05\u9664 md \u4E0B\u9762\u7684\u66F4\u65B0\u8BB0\u5F55\u5185\u5BB9</h3><p>Contributors: daning, nyhxiaoning, ningyongheng</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5220\u9664\u76F8\u5173\u7684\u5185\u5BB9\uFF1A\u4E0D\u5C55\u793A\u521B\u5EFA\u4E8B\u4EF6\uFF0C\u8D21\u732E\u8005

import { gitPlugin } from &#39;@vuepress/plugin-git&#39;
\u63D2\u4EF6\u90E8\u5206\u5F15\u5165\u4E0B\u9762\u5185\u5BB9
    gitPlugin({
      createdTime: false,
      contributors: false,
      updatedTime: false
    })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuepress-\u6253\u5305\u540E\u7684\u90E8\u7F72-linux-\u95EE\u9898\u3002" tabindex="-1"><a class="header-anchor" href="#vuepress-\u6253\u5305\u540E\u7684\u90E8\u7F72-linux-\u95EE\u9898\u3002" aria-hidden="true">#</a> vuepress \u6253\u5305\u540E\u7684\u90E8\u7F72 linux \u95EE\u9898\u3002</h2><p>\u6211\u4EEC\u6253\u5305\u5B8C\u6210\u540E\uFF0C\u76F4\u63A5\u653E\u5165 github \u4E0A\u9762\u90E8\u7F72\uFF0C\u8FD9\u91CC\u8D44\u6E90\u9ED8\u8BA4\u4F1A\u88AB github \u89E3\u6790\u3002 \u4F46\u662F\u5982\u679C\u653E\u5728\u6211\u4EEC\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u89E3\u6790\uFF0C\u90A3\u4E48\u6CE8\u610F\u5C06\u8FD9\u91CC\u7684\u8D44\u6E90\u8FDB\u884C\u6574\u7406\uFF1A \u6CE8\u610F\uFF1Anginx \u914D\u7F6E\u7684\u65F6\u5019\uFF0C\u8FD9\u91CC\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u6240\u4EE5\u5C06 index.html \u548C\u5F15\u7528\u7684\u8D44\u6E90\u653E\u5165\u7236\u5B50\u7EA7\u522B\u5173\u7CFB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--index.html\u4E8C\u7EA7\u76EE\u5F55index.html
---js/xxxx.js\u4E09\u7EA7\u76EE\u5F55js\u6587\u4EF6\u5939
---css/xxx.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u8DF3\u8F6C\u5185\u90E8-markdown-\u951A\u70B9\u4F4D\u7F6E\u548C\u5176\u4ED6-md-\u6587\u4EF6\u7684\u951A\u70B9\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u8DF3\u8F6C\u5185\u90E8-markdown-\u951A\u70B9\u4F4D\u7F6E\u548C\u5176\u4ED6-md-\u6587\u4EF6\u7684\u951A\u70B9\u4F4D\u7F6E" aria-hidden="true">#</a> 3.\u8DF3\u8F6C\u5185\u90E8 markdown \u951A\u70B9\u4F4D\u7F6E\u548C\u5176\u4ED6 md \u6587\u4EF6\u7684\u951A\u70B9\u4F4D\u7F6E</h2><h3 id="\u8DF3\u8F6C\u5185\u90E8-markdown-\u951A\u70B9\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8DF3\u8F6C\u5185\u90E8-markdown-\u951A\u70B9\u4F4D\u7F6E" aria-hidden="true">#</a> \u8DF3\u8F6C\u5185\u90E8 markdown \u951A\u70B9\u4F4D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>markdown\u62D3\u5C55\u4E2D\uFF0C\u9ED8\u8BA4\u6240\u6709\u7684\u6807\u9898\uFF08\u65E0\u8BBA\u662F\u51E0\u7EA7\u6807\u9898\u90FD\u53EF\u4EE5\uFF09\uFF0C\u90FD\u4F1A\u81EA\u52A8\u7F16\u7A0Banchor\u94FE\u63A5\u3002

\u6240\u4EE5\u5185\u90E8\u7684\u8DF3\u8F6C\uFF0C\u53EA\u8981\u7528#\u52A0\u4E0A\u5F53\u524D\u7684\u6807\u9898\u5934\u540D\u79F0\u5373\u53EF\uFF0C\u8FD9\u91CC\u6CE8\u610F\u6807\u9898\u5934\u4E0D\u53EF\u4EE5\u6709\u7A7A\u683C\u3002
\u6BD4\u5982\u5728\u5F53\u524D\u7684\u6587\u4EF6\u4E2D\u8DF3\u8F6C\uFF0C\u5F53\u524D\u7684\u6587\u4EF6first,\u90A3\u4E48\u6709\u4E00\u4E2A\u6807\u9898\u662F\uFF1A\u6D4B\u8BD5\u8DF3\u8F6C\u5230\u8FD9\u91CC\uFF0C\u90A3\u4E48\u5982\u4E0B\u5199\u5373\u53EF

----------\u6CE8\u610F\u4E0B\u9762\u8BF4\u660E
[\u8DF3\u5230first\u6587\u4EF6\u7684\u6587\u4EF6\u5939\u7684\u5934\u90E8\u4F4D\u7F6E](./first/#\u6D4B\u8BD5\u8DF3\u8F6C\u5230\u8FD9\u91CC)
\u4F46\u662F\u8FD9\u6837\u53EA\u80FD\u4FDD\u8BC1\u8DF3\u8F6C\u5230\u90A3\u4E00\u4E2A\u6587\u4EF6\uFF0C\u7136\u540E\uFF0C\u6700\u540E\u505A\u4E00\u4E0B\u4E0D\u4F1A\u5B9A\u4F4D\u5230\u76F8\u5BF9\u7684\u4F4D\u7F6E\u4E0A\uFF0C\u8FD9\u91CC\u9700\u8981\u914D\u7F6E\u4E00\u4E0B

\u6CE8\u610F\u7F16\u8BD1\u4E4B\u540E\uFF0C\u6848\u4F8B\u8DF3\u8F6C\u5730\u5740\u8BF4\u660E
md\u4E2D\u5199\u6CD5

\u6848\u4F8B\u4FEE\u6539\u65B9\u6CD5
\u8DF3\u8F6C\uFF1A
#### 8.5\u6211\u8981\u8DF3\u5230\u8FD9\u91CC
\u5982\u679C\u4E4B\u7C7B\u8981\u8DF3\u8F6C\uFF0C\u90A3\u4E48\u8FD9\u91CC\u4FEE\u6539\u4E3A
_8-5\u6211\u8981\u8DF3\u5230\u8FD9\u91CC

[_8-5\u6211\u8981\u8DF3\u5230\u8FD9\u91CC](./third.md/#_8-5\u6211\u8981\u8DF3\u5230\u8FD9\u91CC)


\u6CE8\u610F\uFF1A\u8DF3\u8F6C\u7684\u6807\u9898\u4E0D\u80FD\u6709\u7A7A\u683C\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8DF3\u8F6C\u5176\u4ED6\u6587\u4EF6\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8DF3\u8F6C\u5176\u4ED6\u6587\u4EF6\u4F4D\u7F6E" aria-hidden="true">#</a> \u8DF3\u8F6C\u5176\u4ED6\u6587\u4EF6\u4F4D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--\u8DF3\u8F6C\u5230\u6839\u76EE\u5F55
[\u8DF3\u5230\u6839\u76EE\u5F55](/)

--\u8DF3\u8F6C\u5230\u548Cfirst.md\u6587\u4EF6\u540C\u7EA7\u522B\u7684third\u4E2D\u7684\u67D0\u4E00\u4E2A\u6807\u9898\u4F4D\u7F6E
[\u8DF3\u5230first\u4E4B\u5916\u7684third\u6587\u4EF6\u7684\u6587\u4EF6\u5939\u7684\u5934\u90E8\u4F4D\u7F6E](./third/#3.2\u58F0\u660E\u8BBE\u5907\u7684\u65B9\u6CD5)



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8DE8\u9875\u9762\u8DF3\u8F6C-\u4E2D\u6587\u8DF3\u8F6C\u548C\u6570\u5B57\u8DF3\u8F6C\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u9875\u9762\u8DF3\u8F6C-\u4E2D\u6587\u8DF3\u8F6C\u548C\u6570\u5B57\u8DF3\u8F6C\u533A\u522B" aria-hidden="true">#</a> \u8DE8\u9875\u9762\u8DF3\u8F6C\uFF0C\u4E2D\u6587\u8DF3\u8F6C\u548C\u6570\u5B57\u8DF3\u8F6C\u533A\u522B</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E2D\u6587\u8DF3\u8F6C
# \u4E94\u3001\u667A\u80FD\u519C\u573Ademo\u6848\u4F8B\u89E3\u6790
\u5BF9\u5E94\u8DF3\u8F6C\u65B9\u6848\uFF1A[\u8DF3\u8F6C\u5185\u5BB9\u4E94\u3001\u5C0F\u5E94\u7528\u6848\u4F8B\u89E3\u6790](./fifth.md/#\u4E94\u3001\u5C0F\u5E94\u7528\u6848\u4F8B\u89E3\u6790)

\u6570\u5B57\u8DF3\u8F6C
### 1.2.2 \u7269\u6816\u5C0F\u5E94\u7528\u5F00\u53D1\u6D41\u7A0B
\u5BF9\u5E94\u7528\u6CD5\u8DF3\u8F6C\u7684\u7ED3\u679C\uFF1A\u4F7F\u7528[\u8DF3\u8F6C\u7ED3\u679C\u662F](./first.md/###_1-2-2-\u7269\u6816\u5C0F\u5E94\u7528\u5F00\u53D1\u6D41\u7A0B)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u9875\u9762\u5185\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5185\u8DF3\u8F6C" aria-hidden="true">#</a> \u9875\u9762\u5185\u8DF3\u8F6C</h4><p>\u65B9\u6848 1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div id=&quot;jump&quot;&gt;&lt;/div&gt;

[\u6211\u8981\u8DF3\u8F6C\u5230\u8FD9\u91CC](#jump)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6848 2\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6CE8\u610Fvuepress2\u4F1A\u9ED8\u8BA4\u5C06\u5185\u5BB9\u6807\u9898\u51CF\u5C11\u4E00\u4E2A#\uFF0C\u6240\u4EE5\u8DF3\u8F6C\u9875\u9762\u5185\u7684\u65F6\u5019
\u6CE8\u610F\u4E00\u4E0B\uFF1A\u6BD4\u5982\u8DF3\u8F6C\uFF1A## 5.1\u667A\u80FD\u519C\u573Ademo\u573A\u666F\u4ECB\u7ECD
\u90A3\u4E48\u5BF9\u5E94\u9875\u9762\u5185
[\u8DF3\u8F6C\u5185\u5BB9\u4E94\u3001\u5C0F\u5E94\u7528\u6848\u4F8B\u89E3\u679055555](#_5-1\u667A\u80FD\u519C\u573Ademo\u573A\u666F\u4ECB\u7ECD)

\u8FD9\u91CC\u660E\u663E\u5C11\u4E86\u4E00\u4E2A#



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u914D\u7F6E\u5165\u53E3\u548C\u51FA\u53E3\u914D\u7F6E\u5185\u5BB9-vuepress" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6E\u5165\u53E3\u548C\u51FA\u53E3\u914D\u7F6E\u5185\u5BB9-vuepress" aria-hidden="true">#</a> 4.\u914D\u7F6E\u5165\u53E3\u548C\u51FA\u53E3\u914D\u7F6E\u5185\u5BB9 vuepress</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>base\u914D\u7F6E\u6253\u5305\u7684\u65F6\u5019\u76F8\u5BF9\u5730\u5740\u914D\u7F6E\uFF0Cdest\u914D\u7F6E\u8F93\u51FA\u6839\u6587\u4EF6\u5939\u76EE\u5F55\uFF0C\u5982\u679C\u4E0D\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u662F.vuepress\u4E0B\u7684\u5185\u5BB9


  base: process.argv[2]===&#39;dev&#39;?&quot;/apidist/&quot;:&quot;./&quot;,//\u5982\u679C\u662F\u672C\u5730dev\u4F7F\u7528appdist\u5730\u5740\uFF0C\u5982\u679C\u662F\u7EBF\u4E0A\uFF0C\u90A3\u4E48\u4F7F\u7528\u76F8\u5BF9\u5730\u5740./
  dest:&quot;dist&quot;,

  base: process.argv[2] === &#39;dev&#39; ? &quot;/&quot; : &quot;./&quot;,//\u5982\u679C\u662F\u672C\u5730dev\u4F7F\u7528/\u5982\u679C\u662F\u6253\u5305\uFF0C\u4F7F\u7528./\u8868\u793A\u76F8\u5BF9\u5730\u5740\uFF0C\u53EF\u4EE5\u4EFB\u610F\u90E8\u7F72\uFF0C
  dest: &quot;dist&quot;,//\u914D\u7F6E\u540E\uFF0C\u9ED8\u8BA4\u6839\u76EE\u5F55dist\u6587\u4EF6\u5939

\u5BF9\u4E8E\u6253\u5305\u540E\u7684\u5730\u5740\uFF0C\u770B\u770B\u9759\u6001\u9875\u9762\u662F\u5426\u5730\u5740\u662Fmd\u6216\u662Fhtml\uFF0C\u8FD9\u91CC\u9700\u8981\u786E\u8BA4\u3002TODO:\u8FD9\u4E2A\u662F\u5927\u5751

\u5177\u4F53\u539F\u56E0\u662F\u4E3A\u4EC0\u4E48


----------\u8DDF\u8E2A\u4E00\u4E0B\uFF0C\u4E3A\u4EC0\u4E48\u672C\u5730npm  run docs:dev\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u6253\u5305build\u540E\uFF0C\u8FD9\u4E9B\u5730\u5740md\u589E\u52A0\u951A\u70B9\u540E\uFF0C\u4E0D\u4F1A\u89E3\u6790\u4E86\uFF0C\u539F\u56E0


TODO:

\u4ECA\u5929\u665A\u4E0A\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6240\u6709\u7684\u951A\u70B9\u5728-dev-\u73AF\u5883\u4E0B\u6B63\u5E38" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709\u7684\u951A\u70B9\u5728-dev-\u73AF\u5883\u4E0B\u6B63\u5E38" aria-hidden="true">#</a> \u6240\u6709\u7684\u951A\u70B9\u5728 dev \u73AF\u5883\u4E0B\u6B63\u5E38\uFF0C</h3><p>\u6BD4\u5982 \u4E0B\u9762\u4F8B\u5B50:md \u7ED3\u675F\u7684\u5730\u65B9\u53EF\u4EE5\u6B63\u5E38\u89E3\u6790\u6210 html\uFF0C\u4F46\u662F\u5982\u679C\u662F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## [\u4E00\u3001\u7269\u6816\u5C0F\u5E94\u7528\u7B80\u4ECB](./pages/first.md)
[1.1 \u7269\u6816\u5C0F\u5E94\u7528\u7B80\u4ECB](./pages/first.html#_1-1-\u7269\u6816\u5C0F\u5E94\u7528\u7B80\u4ECB)&lt;br&gt;


dev\u53EF\u4EE5\u4F46\u662Fbuild\u73AF\u5883\u4E0D\u5141\u8BB8\u7684\u60C5\u51B5:dev\u53EF\u4EE5\u6B63\u5E38\u89E3\u6790\uFF0C\u4F46\u662F\u6253\u5305\u7684\u65F6\u5019\uFF0C\u4E0D\u4F1A\u88AB\u8BC6\u522B\uFF0C\u5E94\u8BE5\u662F\u6846\u67B6\u95EE\u9898\uFF1A\u5F85\u89E3\u51B3\u5904\u7406
[1.1 \u7269\u6816\u5C0F\u5E94\u7528\u7B80\u4ECB](./pages/first.md/#_1-1-\u7269\u6816\u5C0F\u5E94\u7528\u7B80\u4ECB)&lt;br&gt;

\u4E00\u4E2Abuild\u73AF\u5883\u7684\u89E3\u51B3\u65B9\u6848\uFF1A\u8FD9\u91CC\u5229\u7528
[1.1 \u7269\u6816\u5C0F\u5E94\u7528\u7B80\u4ECB](./pages/first.html#_1-1-\u7269\u6816\u5C0F\u5E94\u7528\u7B80\u4ECB)&lt;br&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-vuepress-\u6837\u5F0F\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_5-vuepress-\u6837\u5F0F\u4FEE\u6539" aria-hidden="true">#</a> 5.vuepress \u6837\u5F0F\u4FEE\u6539</h2><p>\u9ED8\u8BA4\u4FEE\u6539\u539F html \u6807\u7B7E\u6837\u5F0F\u6C47\u603B</p><h3 id="vuepress1-x-\u4FEE\u6539\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#vuepress1-x-\u4FEE\u6539\u6837\u5F0F" aria-hidden="true">#</a> vuepress1.x \u4FEE\u6539\u6837\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1\u3001.vuepress \u6587\u4EF6\u5939\u4E0B\u521B\u5EFA styles/palette.styl \uFF08\u8FD9\u91CC\u4F7F\u7528 stylus\uFF09
2\u3001\u91CD\u7F6E\u53D6\u6D88 max-width \u8BBE\u7F6E\uFF0Cclassname \u76F4\u63A5\u4ECE \u5F00\u53D1\u8005\u5DE5\u5177 \u4E2D\u590D\u5236 \u5373\u53EF


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuepress2-x-\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#vuepress2-x-\u65B9\u6848" aria-hidden="true">#</a> vuepress2.x \u65B9\u6848</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- \u4F7F\u7528\u63D2\u4EF6
\u8C03\u8272\u677F\u7CFB\u7EDF\u63D0\u53D6\u5230\u4E86 @vuepress/plugin-palette \u5F53\u4E2D\u3002


- \u8C03\u8272\u677F\u548C\u6837\u5F0F
\u8BE5\u63D2\u4EF6\u4F1A\u63D0\u4F9B\u4E00\u4E2A @vuepress/plugin-palette/palette \uFF08\u8C03\u8272\u677F\u6587\u4EF6\uFF09\u548C\u4E00\u4E2A @vuepress/plugin-palette/style \uFF08\u6837\u5F0F\u6587\u4EF6\uFF09\uFF0C
\u7528\u4E8E\u5728\u4F60\u7684\u4E3B\u9898\u6837\u5F0F\u4E2D\u5F15\u5165\u3002



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u89E3\u51B3\u4E0A\u7EBF-vuepress-\u7684\u951A\u70B9\u5B9A\u4F4D\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-\u89E3\u51B3\u4E0A\u7EBF-vuepress-\u7684\u951A\u70B9\u5B9A\u4F4D\u95EE\u9898" aria-hidden="true">#</a> 5.\u89E3\u51B3\u4E0A\u7EBF vuepress \u7684\u951A\u70B9\u5B9A\u4F4D\u95EE\u9898</h2><p>\u624B\u52A8\u5168\u90E8\u66FF\u6362\uFF0C\uFF0C\uFF0C\uFF0C\uFF0C\uFF0C\uFF0C\u539F\u56E0\uFF0C\u4E3A\u4EC0\u4E48\u672C\u5730\u53EF\u4EE5???</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>md\u6587\u4EF6\u4E2D\u540E\u9762\u4F7F\u7528#\u951A\u70B9\uFF0C\u8FD9\u91CC\u672C\u5730\u5F00\u53D1\u53EF\u4EE5\uFF0C\u4F46\u662F\u6253\u5305\u7684\u65F6\u5019\u4E0D\u53EF\u4EE5\u81EA\u52A8\u8F6C\u6362\u3002\u76EE\u524D\u89E3\u51B3\u65B9\u6848\uFF0C\u5148\u5C06\u6240\u6709\u7684\u6253\u5305\u6587\u4EF6md\u66FF\u6362\u6210html\u3002


\u672C\u5730\u5F00\u53D1\u7684\u65F6\u5019\uFF0Cmd\u6587\u4EF6\u7ED3\u675F\u540E\uFF0C
\u589E\u52A0\u951A\u70B9\u53EF\u4EE5\u751F\u6548

\u4F46\u662F\u6253\u5305\u7684\u65F6\u5019\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u5904\u7406
\u5BFC\u81F4\u672C\u5730\u8FD9\u4E9B\u751F\u6548\u7684\u951A\u70B9\uFF0C\u5BFC\u81F4\u8FD9\u4E9B\u914D\u7F6E
\u8FC7\u7684\u951A\u70B9\uFF0C\u6253\u5305\u540E\uFF0C\u5168\u90E8\u5931\u53BB\u5BFC\u822A\u7684\u951A\u70B9\u4F5C\u7528

\u5177\u4F53\u539F\u56E0\uFF1A\u6682\u65F6\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48

\u8FD9\u4E2A\u539F\u56E0\u662F\uFF1Anpm  run docs:dev\u90FD\u53EF\u4EE5\uFF0C\u4F46\u662F\u4E00\u65E6build\u540E\uFF0C\u8FD9\u4E2A\u951A\u70B9\u7684\u4F5C\u7528\u5C31\u6D88\u5931\u4E86\u3002

\u624B\u52A8\u89E3\u51B3\u65B9\u6848\uFF1A\u552F\u4E00\u89E3\u51B3\u65B9\u6848\uFF0C\u5C31\u662F\u5C06\u539F\u6765\u7684md\u90FD\u4FEE\u6539\u4E3Ahtml


\u8FD9\u91CC\u67E5\u770B\u8FD9\u91CC\u7684API\u5B98\u7F51\uFF1A\u8F6C\u6362\u539F\u7406
- \u5185\u90E8\u94FE\u63A5\u4F1A\u88AB\u8F6C\u6362\u4E3A &lt;RouterLink&gt; \u4EE5\u4FBF\u8FDB\u884C SPA \u5BFC\u822A\u3002
- \u6307\u5411 .md \u6587\u4EF6\u7684\u5185\u90E8\u94FE\u63A5\u4F1A\u88AB\u8F6C\u6362\u4E3A\u76EE\u6807\u9875\u9762\u7684 \u8DEF\u7531\u8DEF\u5F84\uFF0C\u5E76\u4E14\u652F\u6301\u7EDD\u5BF9\u8DEF\u5F84\u548C\u76F8\u5BF9\u8DEF\u5F84\u3002
- \u5916\u90E8\u94FE\u63A5\u4F1A\u88AB\u6DFB\u52A0 target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; \u5C5E\u6027

\u94FE\u63A5\u6269\u5C55\u662F\u7531\u6211\u4EEC\u7684\u5185\u7F6E\u63D2\u4EF6\u652F\u6301\u7684\u3002\u914D\u7F6E\u53C2\u8003\uFF1A markdown.links




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6848\u4F8B\u56FE\u5982\u4E0B <img src="`+c+`" alt="vuepress\u56FE\u7247\u95EE\u9898"></p><h2 id="_6-\u9ED8\u8BA4\u6837\u5F0F-vuepress-\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_6-\u9ED8\u8BA4\u6837\u5F0F-vuepress-\u4FEE\u6539" aria-hidden="true">#</a> 6.\u9ED8\u8BA4\u6837\u5F0F vuepress \u4FEE\u6539</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65B9\u6CD51\uFF1A docs/.vuepress/public/css/index.css \u4E2D\u4FEE\u6539

/* \u65E5\u95F4\u6A21\u5F0F */
:root {
    --c-brand: #409eff;
}

 \u65B9\u5F0F\u4E8C\uFF1A\u76F4\u63A5\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u627E\u5230\u8981\u4FEE\u6539\u7684\u5143\u7D20\u7684css\u540D\u79F0\uFF0C\u7136\u540E\u5728 docs/.vuepress/public/css/index.css \u4E2D\u4FEE\u6539\u5373\u53EF\u3002\u5982\uFF1A\u4FEE\u6539\u53F3\u4E0A\u89D2\u7AD9\u70B9\u540D\u7684\u5B57\u4F53\u989C\u8272\u3002

/* \u5DE6\u4E0A\u89D2\u6807\u9898 */
.navbar .site-name {
    color: #409eff;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56);function W(X,Y){const s=r("RouterLink"),a=r("ExternalLinkIcon");return v(),t("div",null,[e("nav",o,[e("ul",null,[e("li",null,[n(s,{to:"#_000-\u51FA\u73B0\u95EE\u9898-typeerror-invalid-value-used-as-weak-map-key"},{default:d(()=>[b]),_:1})]),e("li",null,[n(s,{to:"#_001-vuepress-\u529F\u80FD\u5F15\u5165\u63D2\u4EF6\u529F\u80FD\u8BF4\u660E"},{default:d(()=>[h]),_:1})]),e("li",null,[n(s,{to:"#_002-vuepress-\u4E2D\u5168\u5C40\u94A9\u5B50\u548C-ui-\u7EC4\u4EF6"},{default:d(()=>[p]),_:1})]),e("li",null,[n(s,{to:"#_003-vuepress-\u4E2D\u5F15\u5165\u76F8\u5BF9\u548C\u7EDD\u5BF9\u5730\u5740\u56FE\u7247"},{default:d(()=>[g]),_:1})]),e("li",null,[n(s,{to:"#_004-\u9759\u6001\u8D44\u6E90\u90E8\u7F72\u5230\u67D0\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B-\u5982\u4F55\u4FDD\u8BC1\u76F8\u5BF9\u5730\u5740\u6CA1\u6709\u95EE\u9898"},{default:d(()=>[x]),_:1})]),e("li",null,[n(s,{to:"#_005-\u4F7F\u7528-github-pages-\u5EFA\u7ACB\u535A\u5BA2"},{default:d(()=>[_]),_:1})]),e("li",null,[n(s,{to:"#_1-vuepress1-x-\u914D\u7F6E\u9879\u76EE\u53C2\u8003"},{default:d(()=>[f]),_:1})]),e("li",null,[n(s,{to:"#_2-vuepress2-x-\u76EE\u524D\u9700\u8981\u7684\u914D\u7F6E"},{default:d(()=>[k]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#vuepress2-\u7CFB\u7EDF\u5316\u914D\u7F6E\u4F7F\u7528"},{default:d(()=>[q]),_:1})]),e("li",null,[n(s,{to:"#vuepress2-x-\u4E2D-head-\u589E\u52A0-ico-\u6807\u7B7E\u56FE"},{default:d(()=>[w]),_:1})]),e("li",null,[n(s,{to:"#vuepress2-x-\u914D\u7F6E\u5982\u4F55\u6E05\u9664-md-\u4E0B\u9762\u7684\u66F4\u65B0\u8BB0\u5F55\u5185\u5BB9"},{default:d(()=>[y]),_:1})])])]),e("li",null,[n(s,{to:"#vuepress-\u6253\u5305\u540E\u7684\u90E8\u7F72-linux-\u95EE\u9898\u3002"},{default:d(()=>[P]),_:1})]),e("li",null,[n(s,{to:"#_3-\u8DF3\u8F6C\u5185\u90E8-markdown-\u951A\u70B9\u4F4D\u7F6E\u548C\u5176\u4ED6-md-\u6587\u4EF6\u7684\u951A\u70B9\u4F4D\u7F6E"},{default:d(()=>[A]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#\u8DF3\u8F6C\u5185\u90E8-markdown-\u951A\u70B9\u4F4D\u7F6E"},{default:d(()=>[I]),_:1})]),e("li",null,[n(s,{to:"#\u8DF3\u8F6C\u5176\u4ED6\u6587\u4EF6\u4F4D\u7F6E"},{default:d(()=>[D]),_:1})])])]),e("li",null,[n(s,{to:"#_4-\u914D\u7F6E\u5165\u53E3\u548C\u51FA\u53E3\u914D\u7F6E\u5185\u5BB9-vuepress"},{default:d(()=>[E]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#\u6240\u6709\u7684\u951A\u70B9\u5728-dev-\u73AF\u5883\u4E0B\u6B63\u5E38"},{default:d(()=>[H]),_:1})])])]),e("li",null,[n(s,{to:"#_5-vuepress-\u6837\u5F0F\u4FEE\u6539"},{default:d(()=>[j]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#vuepress1-x-\u4FEE\u6539\u6837\u5F0F"},{default:d(()=>[G]),_:1})]),e("li",null,[n(s,{to:"#vuepress2-x-\u65B9\u6848"},{default:d(()=>[N]),_:1})])])]),e("li",null,[n(s,{to:"#_5-\u89E3\u51B3\u4E0A\u7EBF-vuepress-\u7684\u951A\u70B9\u5B9A\u4F4D\u95EE\u9898"},{default:d(()=>[z]),_:1})]),e("li",null,[n(s,{to:"#_6-\u9ED8\u8BA4\u6837\u5F0F-vuepress-\u4FEE\u6539"},{default:d(()=>[T]),_:1})])])]),C,e("p",null,[e("a",L,[V,n(a)])]),B,e("p",null,[M,e("a",O,[R,n(a)]),S,U,Q,F,J]),K])}var $=u(m,[["render",W],["__file","001vuepress\u95EE\u9898\u6C47\u603B.html.vue"]]);export{$ as default};
