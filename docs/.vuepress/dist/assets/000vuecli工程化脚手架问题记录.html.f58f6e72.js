import{_ as n,r as t,o as r,c,b as i,d as e}from"./app.5805b0e6.js";const d={},s=e(`<h2 id="node-env-\u6A21\u5F0F\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#node-env-\u6A21\u5F0F\u8BF4\u660E" aria-hidden="true">#</a> NODE_ENV \u6A21\u5F0F\u8BF4\u660E</h2><p>NODE_ENV \u5C06\u51B3\u5B9A\u60A8\u7684\u5E94\u7528\u8FD0\u884C\u7684\u6A21\u5F0F\uFF0C\u662F\u5F00\u53D1\uFF0C\u751F\u4EA7\u8FD8\u662F\u6D4B\u8BD5\uFF0C\u56E0\u6B64\u4E5F\u51B3\u5B9A\u4E86\u521B\u5EFA\u54EA\u79CD webpack \u914D\u7F6E\u3002</p><p>\u4F8B\u5982\u901A\u8FC7\u5C06 NODE_ENV \u8BBE\u7F6E\u4E3A &quot;test&quot;\uFF0CVue CLI \u4F1A\u521B\u5EFA\u4E00\u4E2A\u4F18\u5316\u8FC7\u540E\u7684\uFF0C\u5E76\u4E14\u65E8\u5728\u7528\u4E8E\u5355\u5143\u6D4B\u8BD5\u7684 webpack \u914D\u7F6E\uFF0C\u5B83\u5E76\u4E0D\u4F1A\u5904\u7406\u56FE\u7247\u4EE5\u53CA\u4E00\u4E9B\u5BF9\u5355\u5143\u6D4B\u8BD5\u975E\u5FC5\u9700\u7684\u5176\u4ED6\u8D44\u6E90\u3002</p><p>\u540C\u7406\uFF0CNODE_ENV=development \u521B\u5EFA\u4E00\u4E2A webpack \u914D\u7F6E\uFF0C\u8BE5\u914D\u7F6E\u542F\u7528\u70ED\u66F4\u65B0\uFF0C\u4E0D\u4F1A\u5BF9\u8D44\u6E90\u8FDB\u884C hash \u4E5F\u4E0D\u4F1A\u6253\u51FA vendor bundles\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u5728\u5F00\u53D1\u7684\u65F6\u5019\u80FD\u591F\u5FEB\u901F\u91CD\u65B0\u6784\u5EFA\u3002</p><p>\u5F53\u4F60\u8FD0\u884C vue-cli-service build \u547D\u4EE4\u65F6\uFF0C\u65E0\u8BBA\u4F60\u8981\u90E8\u7F72\u5230\u54EA\u4E2A\u73AF\u5883\uFF0C\u5E94\u8BE5\u59CB\u7EC8\u628A NODE_ENV \u8BBE\u7F6E\u4E3A &quot;production&quot; \u6765\u83B7\u53D6\u53EF\u7528\u4E8E\u90E8\u7F72\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</p><p>NODE_ENV</p><h2 id="vuecli-\u6784\u5EFA\u6253\u5305\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#vuecli-\u6784\u5EFA\u6253\u5305\u6A21\u5F0F" aria-hidden="true">#</a> vuecli \u6784\u5EFA\u6253\u5305\u6A21\u5F0F</h2><h3 id="web-components-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#web-components-\u7EC4\u4EF6" aria-hidden="true">#</a> Web Components \u7EC4\u4EF6</h3><p>vue-cli-service build --target wc --name my-element [entry] \u4F7F\u7528\u65B9\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script src=&quot;path/to/my-element.js&quot;&gt;&lt;/script&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=e('<h3 id="\u6253\u5305\u5F02\u6B65-web-components-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u5F02\u6B65-web-components-\u7EC4\u4EF6" aria-hidden="true">#</a> \u6253\u5305\u5F02\u6B65 Web Components \u7EC4\u4EF6</h3><p>vue-cli-service build --target wc-async --name foo &#39;src/components/*.vue&#39;</p><h3 id="\u5E94\u7528\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u6253\u5305" aria-hidden="true">#</a> \u5E94\u7528\u6253\u5305</h3><h3 id="\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5E93" aria-hidden="true">#</a> \u5E93</h3>',4);function l(h,u){const a=t("my-element");return r(),c("div",null,[s,i(a),o])}var _=n(d,[["render",l],["__file","000vuecli\u5DE5\u7A0B\u5316\u811A\u624B\u67B6\u95EE\u9898\u8BB0\u5F55.html.vue"]]);export{_ as default};
