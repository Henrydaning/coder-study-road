import{_ as t,r as s,o as d,c as l,a as e,b as i,e as a,d as n}from"./app.e8f259a7.js";const o={},c=e("p",null,"[toc]",-1),b=e("h1",{id:"bebel\u8BED\u6CD5\u8F6C\u6362\u7F51\u7AD9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bebel\u8BED\u6CD5\u8F6C\u6362\u7F51\u7AD9","aria-hidden":"true"},"#"),a(" bebel\u8BED\u6CD5\u8F6C\u6362\u7F51\u7AD9")],-1),h={href:"https://link.juejin.cn/?target=https%3A%2F%2Fastexplorer.net%2F",target:"_blank",rel:"noopener noreferrer"},p=a("\u7F51\u7AD91"),u=n('<h2 id="_1-vscode\u7684debugger\u7684\u5B66\u4E60\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#_1-vscode\u7684debugger\u7684\u5B66\u4E60\u8BB0\u5F55" aria-hidden="true">#</a> 1.vscode\u7684debugger\u7684\u5B66\u4E60\u8BB0\u5F55</h2><p>\u76F4\u63A5\u70B9\u51FB\u4E0A\u9762\u7684\u8C03\u8BD5\u9762\u677F\uFF0C\u521B\u5EFA\u4E00\u4E2Alaunch</p><h2 id="_2-babel\u7684\u5B66\u4E60\u8BB0\u5F55\u8BFE\u7A0B\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_2-babel\u7684\u5B66\u4E60\u8BB0\u5F55\u8BFE\u7A0B\u51C6\u5907" aria-hidden="true">#</a> 2.babel\u7684\u5B66\u4E60\u8BB0\u5F55\u8BFE\u7A0B\u51C6\u5907</h2><h3 id="babel\u7684\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#babel\u7684\u7528\u9014" aria-hidden="true">#</a> babel\u7684\u7528\u9014</h3><h4 id="_1-\u8F6C\u8BD1-esnext\u3001typescript\u3001flow-\u7B49\u5230\u76EE\u6807\u73AF\u5883\u652F\u6301\u7684-js" tabindex="-1"><a class="header-anchor" href="#_1-\u8F6C\u8BD1-esnext\u3001typescript\u3001flow-\u7B49\u5230\u76EE\u6807\u73AF\u5883\u652F\u6301\u7684-js" aria-hidden="true">#</a> \uFF081\uFF09\u8F6C\u8BD1 esnext\u3001typescript\u3001flow \u7B49\u5230\u76EE\u6807\u73AF\u5883\u652F\u6301\u7684 js\uFF1B</h4><p>a.\u8FD9\u4E2A\u662F\u6700\u5E38\u7528\u7684\u529F\u80FD\uFF0C\u7528\u6765\u628A\u4EE3\u7801\u4E2D\u7684 esnext \u7684\u65B0\u7684\u8BED\u6CD5\u3001typescript\u548Cflow \u7684\u8BED\u6CD5\u8F6C\u6210\u57FA\u4E8E\u76EE\u6807\u73AF\u5883\u652F\u6301\u7684\u8BED\u6CD5\u7684\u5B9E\u73B0\u3002b.\u8FD8\u53EF\u4EE5\u628A\u76EE\u6807\u73AF\u5883\u4E0D\u652F\u6301\u7684 api \u8FDB\u884C polyfill\u3002</p><p>c.\u7ECF\u5178\u6848\u4F8B//TODO: // TODO: !!! \u5F85\u8865\u5145</p><h4 id="_2-\u4E00\u4E9B\u7279\u5B9A\u7528\u9014\u7684\u4EE3\u7801\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_2-\u4E00\u4E9B\u7279\u5B9A\u7528\u9014\u7684\u4EE3\u7801\u8F6C\u6362" aria-hidden="true">#</a> (2)\u4E00\u4E9B\u7279\u5B9A\u7528\u9014\u7684\u4EE3\u7801\u8F6C\u6362</h4><p>a.babel \u662F\u4E00\u4E2A\u8F6C\u8BD1\u5668\uFF0C\u66B4\u9732\u4E86\u5F88\u591A api\uFF0C\u7528\u8FD9\u4E9B api \u53EF\u4EE5\u5B8C\u6210\u4EE3\u7801\u5230 AST \u7684 parse b.AST \u7684\u8F6C\u6362 c.\u4EE5\u53CA\u76EE\u6807\u4EE3\u7801\u7684\u751F\u6210\u3002 d.\u7279\u5B9A\u7528\u9014\u7684\u8F6C\u6362 \u81EA\u52A8\u5728\u51FD\u6570\u4E2D\u63D2\u5165\u4EE3\u7801\uFF1B \u81EA\u52A8\u56FD\u9645\u5316\uFF1B \u81EA\u52A8\u5C06default import \u8F6C\u6362\u6210named import\uFF1B \u81EA\u52A8\u57CB\u70B9\u529F\u80FD e.taro\u6846\u67B6\u5C31\u662F\u4F7F\u7528babel\u7684api\u5B9E\u73B0\u7684</p><h4 id="_3-\u4EE3\u7801\u7684\u9759\u6001\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE3\u7801\u7684\u9759\u6001\u5206\u6790" aria-hidden="true">#</a> \uFF083\uFF09\u4EE3\u7801\u7684\u9759\u6001\u5206\u6790</h4><p>\u5BF9\u4E8E\u4EE3\u7801\u8FDB\u884Cparse\u540E\uFF0C\u53EF\u4EE5\u8FDB\u884C\u8F6C\u6362\u4E86\uFF0C\u56E0\u4E3A\u901A\u8FC7AST\u53EF\u4EE5\u7406\u89E3\u4EE3\u7801\u3002 a.linter\u5DE5\u5177\u5206\u6790\u4EE3\u7801\u7684AST\u7ED3\u6784\uFF1B b.api\u6587\u6863\u751F\u6210\u5DE5\u5177\uFF0C\u53EF\u4EE5\u63D0\u53D6\u6E90\u7801\u4E2D\u7684\u6CE8\u91CA\uFF0C\u7136\u540E\u751F\u6210\u6587\u6863\uFF1B c.type checker\u4F1A\u6839\u636EAST\u4E2D\u63D0\u53D6\u7684\u7C7B\u578B\uFF0C\u63A8\u5BFC\u7C7B\u578B\u4FE1\u606F d.\u538B\u7F29\u6DF7\u6DC6\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5206\u6790\u4EE3\u7801\u7684\u7ED3\u6784\uFF0C\u8FDB\u884C\u65E0\u7528\u4EE3\u7801\u7684\u5220\u9664\uFF0C\u53D8\u91CF\u540D\u7684\u6DF7\u6DC6\uFF0C</p><h3 id="\u4E0A\u9762\u7684\u76F8\u5173\u7AE0\u8282\u7684\u6C47\u603B\u4EE3\u7801\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u9762\u7684\u76F8\u5173\u7AE0\u8282\u7684\u6C47\u603B\u4EE3\u7801\u5730\u5740" aria-hidden="true">#</a> \u4E0A\u9762\u7684\u76F8\u5173\u7AE0\u8282\u7684\u6C47\u603B\u4EE3\u7801\u5730\u5740</h3>',12),m={href:"https://github.com/QuarkGluonPlasma/babel-plugin-exercize",target:"_blank",rel:"noopener noreferrer"},_=a("\u4EE3\u7801\u5730\u5740"),f=n('<h3 id="_3-babel\u7684\u7F16\u8BD1\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-babel\u7684\u7F16\u8BD1\u6D41\u7A0B" aria-hidden="true">#</a> 3.babel\u7684\u7F16\u8BD1\u6D41\u7A0B</h3><h4 id="_1-babel\u5B9E\u8D28\u662F\u4E00\u4E2A\u8F6C\u8BD1\u5668\u3002" tabindex="-1"><a class="header-anchor" href="#_1-babel\u5B9E\u8D28\u662F\u4E00\u4E2A\u8F6C\u8BD1\u5668\u3002" aria-hidden="true">#</a> \uFF081\uFF09babel\u5B9E\u8D28\u662F\u4E00\u4E2A\u8F6C\u8BD1\u5668\u3002</h4><p>\u4E00\u822C\u7F16\u8BD1\u5668\u662F\u9AD8\u7EA7\u8BED\u8A00\u5230\u5E95\u5C42\u8BED\u8A00\u7684\u8F6C\u6362\u5DE5\u5177\u3002\u5BF9\u4E8E\u9AD8\u5C42\u8BED\u8A00\u5230\u9AD8\u5C42\u8BED\u8A00\u7684\u8F6C\u6362\uFF0C\u53EB\u505A\u8F6C\u8BD1\u5668\u3002</p><h4 id="_2-bebel\u8F6C\u8BD1\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-bebel\u8F6C\u8BD1\u6D41\u7A0B" aria-hidden="true">#</a> \uFF082\uFF09bebel\u8F6C\u8BD1\u6D41\u7A0B</h4><p>a.parse\uFF1A\u901A\u8FC7parser\u628A\u6E90\u7801\u8F6C\u6362\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF1B\uFF08\u76EE\u7684\u5C06\u6E90\u7801\u5B57\u7B26\u4E32\u8F6C\u6210\u8BA1\u7B97\u673A\u53EF\u4EE5\u7406\u89E3\u7684AST\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5206\u4E3A\u8BCD\u6CD5\u5206\u6790\u548C\u8BED\u6CD5\u5206\u6790\uFF09 b.transform:\u904D\u5386AST,\u8C03\u7528\u5404\u79CDtransform\u63D2\u4EF6\u5BF9\u4E8EAST\u8FDB\u884C\u589E\u5220\u6539\uFF1B(AST\u662F\u8BA1\u7B97\u673A\u53EF\u4EE5\u7406\u89E3\u7684\u5B57\u7B26\u4E32\u610F\u601D) c.generate:\u628A\u8F6C\u6362\u540E\u7684AST\u6253\u5370\u6210\u76EE\u6807\u4EE3\u7801\uFF0C\u751F\u6210source-map</p>',5),v={href:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03bdbe8096944a0fa09c86ac2ff09e56~tplv-k3u1fbpfcp-watermark.image",target:"_blank",rel:"noopener noreferrer"},x=a("babel\u7684\u89E3\u6790\u8FC7\u7A0B\u8BF4\u660E"),g=e("p",null,"s\u8BF4\u660E\uFF1Asoursemap\u8BB0\u5F55\u6E90\u7801\u5230\u76EE\u6807\u4EE3\u7801\u7684\u8F6C\u6362\u5173\u7CFB\uFF0C\u901A\u8FC7\u8FD9\u4E2Asourcemap\u53EF\u4EE5\u627E\u5230\u76EE\u6807\u4EE3\u7801\u4E2D\u6BCF\u4E00\u4E2A\u8282\u70B9\u5BF9\u5E94\u7684\u6E90\u7801\u3002",-1),S=e("h3",{id:"_3-babel\u7684ast",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-babel\u7684ast","aria-hidden":"true"},"#"),a(" 3.babel\u7684AST")],-1),k=e("p",null,"AST\u662F\u5BF9\u4E8E\u6E90\u7801\u7684\u62BD\u8C61\uFF0C\u5B57\u9762\u91CF\uFF0C\u6807\u8BC6\u7B26\uFF0C\u8868\u8FBE\u5F0F\uFF0C\u8BED\u53E5\uFF0C\u6A21\u5757\u8BED\u6CD5\uFF0Cclass\u8BED\u6CD5\u90FD\u6709\u5404\u81EA\u7684AST\uFF0C\u6211\u4EEC\u5206\u522B\u6765\u4E86\u89E3\u4E00\u4E0B\u3002",-1),y=e("h4",{id:"literal-\u5B57\u9762\u91CF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#literal-\u5B57\u9762\u91CF","aria-hidden":"true"},"#"),a(" literal \u5B57\u9762\u91CF")],-1),A=e("p",null,"\u5B57\u7B26\u4E32\u7684\u5B57\u9762\u91CF\u6BD4\u5982\uFF1Alet name = 'str';//\u8FD9\u91CC'str'\u5C31\u662F\u5B57\u7B26\u4E32\u7684\u5B57\u9762\u91CF\uFF1B",-1),T={href:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29185815036a4ea1878484ba773a3b6e~tplv-k3u1fbpfcp-watermark.image",target:"_blank",rel:"noopener noreferrer"},j=a("js\u4E2D\u5404\u79CD\u5B57\u9762\u91CF"),q=n('<h4 id="identifier\u6807\u8BC6\u7B26-\u53D8\u91CF\u540D-\u5C5E\u6027\u540D-\u53C2\u6570\u540D" tabindex="-1"><a class="header-anchor" href="#identifier\u6807\u8BC6\u7B26-\u53D8\u91CF\u540D-\u5C5E\u6027\u540D-\u53C2\u6570\u540D" aria-hidden="true">#</a> identifier\u6807\u8BC6\u7B26\uFF1A\u53D8\u91CF\u540D\uFF0C\u5C5E\u6027\u540D\uFF0C\u53C2\u6570\u540D</h4><p>\u6807\u8BC6\u7B26\u5305\u542B\u7684\u5185\u5BB9\u6709\u5F88\u591A\uFF0C\u53D8\u91CF\u540D\uFF0C\u5C5E\u6027\u540D\uFF0C\u53C2\u6570\u540D\u7B49\u7B49\u5404\u79CD\u58F0\u660E\u548C\u5F15\u7528\u7684\u540D\u5B57\uFF0C\u90FD\u662Fidentifier\u3002\u6211\u4EEC\u77E5\u9053js\u4E2D\u6807\u8BC6\u7B26\u53EA\u80FD\u7528\u5B57\u6BCD\u6216\u662F\u6570\u5B57\u6216\u662F\u4E0B\u5212\u7EBF\u6216\u662F\u7F8E\u5143\u7B26\u53F7\uFF0C\u540C\u65F6\u4E0D\u80FD\u591F\u7528\u6570\u5B57\u5F00\u5934\u3002</p><h4 id="statement\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#statement\u8BED\u53E5" aria-hidden="true">#</a> statement\u8BED\u53E5</h4><p>\u6700\u5C0F\u7684\u72EC\u7ACB\u6267\u884C\u5355\u5143\u3002</p><h4 id="declaration\u58F0\u660E\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#declaration\u58F0\u660E\u8BED\u53E5" aria-hidden="true">#</a> declaration\u58F0\u660E\u8BED\u53E5</h4><p>\u4F5C\u7528\uFF1A\u7528\u4E8E\u5B9A\u4E49\u53D8\u91CF\u3002 \u58F0\u660E\u8BED\u53E5\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u8BED\u53E5\uFF0C\u5B83\u6267\u884C\u7684\u903B\u8F91\u662F\u5728\u4F5C\u7528\u57DF\u5185\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u3001\u51FD\u6570\u3002class,import,export</p><h4 id="expression\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#expression\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> Expression\u8868\u8FBE\u5F0F</h4><p>\u7279\u70B9\uFF1A\u6267\u884C\u5B8C\u6210\u540E\u6709\u8FD4\u56DE\u503C\u3002TODO:\u8FD9\u4E2A\u662F\u548C\u8BED\u53E5\u7684\u533A\u522B</p>',8),E={href:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/feabcb940982409b911dcbb6066e8aa7~tplv-k3u1fbpfcp-watermark.image",target:"_blank",rel:"noopener noreferrer"},w=a("\u5E38\u89C1\u8868\u8FBE\u5F0F\u8BF4\u660E"),B=e("p",null,"\u5176\u5B9E\u6709\u7684\u65E2\u53EF\u4EE5\u662F\u8BED\u53E5\uFF0C\u4E5F\u53EF\u4EE5\u662F\u8868\u8FBE\u5F0F\u3002\u8BED\u53E5\u7684\u7279\u70B9\u662F\u6700\u5C0F\u6267\u884C\u5355\u5143\uFF0C\u53EF\u4EE5\u72EC\u7ACB\u8FD0\u884C\uFF0C\u8868\u8FBE\u5F0F\u6709\u8FD4\u56DE\u503C\u3002\u6240\u4EE5\u5BF9\u4E8Eidentifier\u6765\u8BF4\uFF0C\u90FD\u662F\u7B26\u5408\u3002 \u5F53\u7136\uFF0C\u5176\u4ED6\u90FD\u662F\u7B26\u5408\u7684\uFF0C\u6BD4\u5982\u533F\u540D\u51FD\u6570\u76F4\u63A5\u6267\u884C\uFF0C\u4F1A\u62A5\u9519\u3002\u533F\u540D\u7C7B\u4E5F\u662F\u4E0D\u53EF\u4EE5\u76F4\u63A5\u7684\u58F0\u660E\u3002",-1),P=e("h4",{id:"class\u8BED\u6CD5\u7279\u6B8A\u6709\u4E13\u95E8\u7684ast\u6765\u4F5C\u4E3A\u4F7F\u7528\u3002",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class\u8BED\u6CD5\u7279\u6B8A\u6709\u4E13\u95E8\u7684ast\u6765\u4F5C\u4E3A\u4F7F\u7528\u3002","aria-hidden":"true"},"#"),a(" class\u8BED\u6CD5\u7279\u6B8A\u6709\u4E13\u95E8\u7684AST\u6765\u4F5C\u4E3A\u4F7F\u7528\u3002")],-1),D={href:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c62ec375157488780e2beae39e7620d~tplv-k3u1fbpfcp-watermark.image",target:"_blank",rel:"noopener noreferrer"},F=a("class\u62BD\u8C61\u8BED\u6CD5\u6811"),I=n(`<p>Modules\u4E5F\u6709\u4E13\u95E8\u7684AST\u8BED\u6CD5\u6811 import\u6709\u4E09\u79CD\u5BFC\u5165\u65B9\u6CD5 named import:\u547D\u540D\u51FD\u6570\u5BFC\u5165\uFF1Aimport { nameFn } from &quot;xxx&quot; default import:\u9ED8\u8BA4\u65B9\u6CD5\u5BFC\u5165\uFF1A import a from &#39;xxx&#39;// \u6CE8\u610F\u8FD9\u91CC\u662F\u56E0\u4E3Aexport default xxx namespaced import:\u547D\u540D\u7A7A\u95F4\u5BFC\u5165: import * as b from &#39;b&#39;;//\u5C31\u662F\u5C06\u6240\u6709\u7684\u6A21\u5757\u7684\u65B9\u6CD5\u5168\u90E8\u5BFC\u5165\uFF0C\u653E\u5230b\u8FD9\u4E2A\u4E0B\u9762\u8C03\u7528 \u7B2C\u4E09\u79CD\u65B9\u6CD5\u5BF9\u5E94\u7684\u662F\uFF1Aexport * from &#39;b&#39;;\u8FD9\u6837\u624D\u53EF\u4EE5\u89E3\u6790\u6B63\u786E\u3002</p><p>//</p><h4 id="program\u548Cdirective" tabindex="-1"><a class="header-anchor" href="#program\u548Cdirective" aria-hidden="true">#</a> program\u548Cdirective</h4><p>Program \u662F\u5305\u88F9\u5177\u4F53\u6267\u884C\u8BED\u53E5\u7684\u8282\u70B9\uFF0C\u800C Directive \u5219\u662F\u4EE3\u7801\u4E2D\u7684\u6307\u4EE4\u90E8\u5206\u3002 program\u662F\u8868\u793A\u6574\u4E2A\u7A0B\u5E8F\u7684\u8282\u70B9\uFF0C\u4ED6\u6709body\u4EE3\u8868\u6267\u884C\u7684\u7A0B\u5E8F\u4F53\uFF0C\u91CC\u9762\u653E\u7740\u5C06\u8981\u6267\u884C\u7684\u51FD\u6570\u7684\u96C6\u5408\u3002</p><p>directive\u6307\u4EE4\uFF0C\u8868\u793A\u8BB0\u5F55\u4E00\u4E9B\u6307\u4EE4\uFF0C\u6BD4\u5982use strict\u5C31\u662F\u5B58\u50A8\u5728\u8FD9\u91CC\u3002</p><p>AST\u4E2D\u7684tokens\u662F\u8BCD\u6CD5\u5206\u6790\u7ED3\u679C\u4E48.(\u5C31\u662F\u4E00\u4E2A\u4E2A\u5C0F\u5C0F\u7684\u5355\u8BCD)</p><h4 id="file-comment" tabindex="-1"><a class="header-anchor" href="#file-comment" aria-hidden="true">#</a> File &amp; Comment</h4><p>babel \u7684 AST \u6700\u5916\u5C42\u8282\u70B9\u662F File\uFF0C\u5B83\u6709 program\u3001comments\u3001tokens \u7B49\u5C5E\u6027\uFF0C\u5206\u522B\u5B58\u653E Program \u7A0B\u5E8F\u4F53\u3001\u6CE8\u91CA\u3001token \u7B49\uFF0C\u662F\u6700\u5916\u5C42\u8282\u70B9\u3002</p><h4 id="_6-\u79CD\u5C31\u662F\u5E38\u89C1\u7684\u4E00\u4E9B-ast-\u8282\u70B9\u7C7B\u578B-babel-\u5C31\u662F\u901A\u8FC7\u8FD9\u4E9B\u8282\u70B9\u6765\u62BD\u8C61\u6E90\u7801\u4E2D\u4E0D\u540C\u7684\u90E8\u5206\u3002" tabindex="-1"><a class="header-anchor" href="#_6-\u79CD\u5C31\u662F\u5E38\u89C1\u7684\u4E00\u4E9B-ast-\u8282\u70B9\u7C7B\u578B-babel-\u5C31\u662F\u901A\u8FC7\u8FD9\u4E9B\u8282\u70B9\u6765\u62BD\u8C61\u6E90\u7801\u4E2D\u4E0D\u540C\u7684\u90E8\u5206\u3002" aria-hidden="true">#</a> 6 \u79CD\u5C31\u662F\u5E38\u89C1\u7684\u4E00\u4E9B AST \u8282\u70B9\u7C7B\u578B\uFF0Cbabel \u5C31\u662F\u901A\u8FC7\u8FD9\u4E9B\u8282\u70B9\u6765\u62BD\u8C61\u6E90\u7801\u4E2D\u4E0D\u540C\u7684\u90E8\u5206\u3002</h4><h4 id="babel\u7684api\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#babel\u7684api\u5B66\u4E60" aria-hidden="true">#</a> babel\u7684api\u5B66\u4E60</h4><blockquote><p>\u6CE8\u610F\uFF0C\u6211\u4EEC\u5B66\u4E60\u7684 api \u662F babel 7.x \u7684\uFF0Cbabel 6 \u7684 api \u8FD8\u6CA1\u6709\u6309\u7167scope \u6765\u5212\u5206\uFF0C\u662F babel-parser \u8FD9\u79CD\uFF0C \u800C babel 7 \u53D8\u6210\u4E86@babel/parser \u8FD9\u79CD\u3002\u4F46\u5177\u4F53 api \u5DEE\u4E0D\u591A\uFF0C\u6211\u4EEC\u5B66\u7684\u662F\u4E00\u4E9B\u539F\u7406\u6027\u7684\u4E1C\u897F\uFF0C\u8FD9\u4E9B\u4E1C\u897F\u5728\u7248\u672C\u8FED\u4EE3\u4E2D\u662F\u4E0D\u4F1A\u53D8\u7684\u3002</p></blockquote><h2 id="_1-babel\u4E0D\u662F\u4E07\u80FD\u7684\u8F6C\u6362\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_1-babel\u4E0D\u662F\u4E07\u80FD\u7684\u8F6C\u6362\u5DE5\u5177" aria-hidden="true">#</a> 1.babel\u4E0D\u662F\u4E07\u80FD\u7684\u8F6C\u6362\u5DE5\u5177</h2><h3 id="\u4E00\u4E9B\u573A\u666F-\u65E0\u6CD5\u5BF9\u4E8Eproxy-next\u7684api\u8FDB\u884C\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u573A\u666F-\u65E0\u6CD5\u5BF9\u4E8Eproxy-next\u7684api\u8FDB\u884C\u8F6C\u6362" aria-hidden="true">#</a> \u4E00\u4E9B\u573A\u666F\uFF0C\u65E0\u6CD5\u5BF9\u4E8EProxy,next\u7684API\u8FDB\u884C\u8F6C\u6362</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u53EF\u4EE5\u770B\u5230\uFF0C\u53EA\u8981\u4E00\u4E2A\u6570\u636E\u7ED3\u6784\u5177\u6709\u7B26\u5408\u8981\u6C42\u7684 Symbol.iterator \u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7 for\u2026of \u904D\u5386\uFF08\u4E8B\u5B9E\u4E0A\uFF0C\u89E3\u6784\u8D4B\u503C\u3001\u6269\u5C55\u8FD0\u7B97\u7B26\u3001yield* \u7B49 ES6 \u7279\u6027\u4E5F\u662F\u8C03\u7528\u8BE5\u5C5E\u6027\u63A5\u53E3\uFF09\u3002
 
\u73B0\u5728\uFF0C\u6211\u4EEC\u56DE\u8FC7\u5934\u6765\u770B Babel \u8F6C\u6362 for\u2026of \u5FAA\u73AF\u7684\u4EE3\u7801\uFF0C\u5176\u672C\u8D28\u4E0A\u8FD8\u662F\u901A\u8FC7\u8C03\u7528 Iterator \u63A5\u53E3\uFF08\u6CE8\u610F\u7B2C 9 \u884C\uFF09\uFF0C\u5C06 for\u2026of \u8F6C\u6362\u4E3A\u4F20\u7EDF\u7684 for \u5FAA\u73AF\uFF0C\u5E76\u5728\u6BCF\u6B21\u5FAA\u73AF\u4E2D\u8C03\u7528\u904D\u5386\u5668\u7684 next \u65B9\u6CD5\u6765\u5410\u51FA\u6570\u7EC4\u4E2D\u7684\u503C\u3002\u5982\u679C\u5728\u5FAA\u73AF\u8C03\u7528\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u9519\u8BEF\uFF0C\u904D\u5386\u5668\u4E2D\u5982\u542B\u6709\u9884\u5B9A\u4E49\u7684 return \u51FD\u6570\uFF08\u53C2\u89C1 ES6 \u6587\u6863\u4E2D\u904D\u5386\u5668\u5BF9\u8C61\u7684\u89C4\u8303 \uFF09\uFF0C\u5219\u8C03\u7528\u4E4B\uFF0C\u5426\u5219\u76F4\u63A5\u629B\u51FA\u9519\u8BEF\u3002
 
\u5373\u4F7F\u8C03\u7528 Babel \u5BF9 for\u2026of \u5FAA\u73AF\u8FDB\u884C\u8F6C\u7801\uFF0C\u6211\u4EEC\u5B9E\u9645\u4E0A\u8FD8\u662F\u65E0\u6CD5\u5B8C\u5168\u6446\u8131 ES6 \u7684\u7279\u6027\u2014\u2014\u5728\u4E0D\u652F\u6301 Symbol \u7684\u73AF\u5883\u4E0B\uFF0C\u4EE3\u7801\u4ECD\u7136\u4F1A\u62A5\u9519\u3002\u56E0\u4E3A Babel \u9ED8\u8BA4\u53EA\u8F6C\u6362\u65B0\u7684 JavaScript \u53E5\u6CD5\uFF08syntax\uFF09,\u800C\u4E0D\u8F6C\u6362 Proxy\u3001Set\u3001Promise\u3001Symbol \u7B49\u65B0\u7684 API\u3002

\u5B9E\u9645\u4E0A\uFF0C\u8981\u60F3\u5B8C\u5168\u62B9\u5E73 ES6 \u7279\u6027\u5E26\u6765\u7684\u65B0 API \u4E5F\u662F\u53EF\u884C\u7684\uFF0C\u53EA\u8981\u5728\u9879\u76EE\u4E2D\u5F15\u5165 babel-polyfill \u5E76\u914D\u7F6E\u597D\u5373\u53EF\uFF0C\u4F46\u662F\u8FD9\u6837\u5E26\u6765\u7684\u53E6\u4E00\u4E2A\u95EE\u9898\u5C31\u662F\u56E0\u4E3A babel-polyfill \u672C\u8EAB\u7684\u4F53\u79EF\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u4E5F\u4F1A\u53D8\u5E9E\u5927\u4E0D\u5C11\u3002\u6240\u4EE5\u6B64\u4E3E\u6709\u5229\u6709\u5F0A\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u6743\u8861\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es\u5728\u7EBF\u8F6C\u6362\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#es\u5728\u7EBF\u8F6C\u6362\u7F51\u7AD9" aria-hidden="true">#</a> ES\u5728\u7EBF\u8F6C\u6362\u7F51\u7AD9</h4><p>https://es6console.com/</p>`,16),O={href:"https://gitee.com/nyhxiaoning/zkwqcompany-node-webpack-babel-cli",target:"_blank",rel:"noopener noreferrer"},N=a("\u4E2A\u4EBA\u5316\u9879\u76EE\u4EE3\u7801\u8F6C\u6362\u8BB0\u5F55git\u5206\u652F"),V=n(`<h4 id="\u5982\u4F55\u4F7F\u7528-babel" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528-babel" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528 Babel</h4><p>\u4E0B\u9762\u6211\u4EEC\u5199\u51FA\u5728\u547D\u4EE4\u884C\u4F7F\u7528 Babel \u7684\u8FC7\u7A0B\uFF0C\u8BA9\u4F60\u6E05\u695A\u8F6C\u8BD1\u8FC7\u7A0B\u7684\u5168\u90E8\u5185\u5BB9\u3002</p><h5 id="_1-\u5728\u9879\u76EE\u4E2D\u5B89\u88C5-babel-\u7684\u547D\u4EE4\u884C\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_1-\u5728\u9879\u76EE\u4E2D\u5B89\u88C5-babel-\u7684\u547D\u4EE4\u884C\u5DE5\u5177" aria-hidden="true">#</a> 1. \u5728\u9879\u76EE\u4E2D\u5B89\u88C5 Babel \u7684\u547D\u4EE4\u884C\u5DE5\u5177</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install -D babel-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-\u51C6\u5907-es6-\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_2-\u51C6\u5907-es6-\u4EE3\u7801" aria-hidden="true">#</a> 2. \u51C6\u5907 ES6 \u4EE3\u7801</h5><p>\u901A\u5E38\u6211\u4EEC\u628A\u6E90\u4EE3\u7801\u653E\u5728 src \u76EE\u5F55\u4E0B\uFF0C\u5982\u679C\u4F60\u6CA1\u6709\u73B0\u6210\u7684 ES6 \u4EE3\u7801\uFF0C\u90A3\u5C31\u5728 src \u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// src/example.js
class Hello {
  static world() {
    console.log(&#39;Hello, World!&#39;);
  }
}
Hello.world();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-\u914D\u7F6E-babel" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E-babel" aria-hidden="true">#</a> 3. \u914D\u7F6E Babel</h5><p>Babel \u662F\u901A\u8FC7\u63D2\u4EF6\u548C\u9884\u8BBE\u503C\uFF08preset\uFF09\u6765\u8F6C\u8BD1\u4EE3\u7801\uFF08\u56E0\u6B64\u5B83\u53EF\u4EE5\u8F6C\u8BD1\u7684\u4E0D\u53EA\u662F ES6\uFF09\u3002\u4E3A\u4E86\u8F6C\u8BD1 ES6 \u4E3A ES5\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u914D\u7F6E env \u9884\u8BBE\u503C\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5B89\u88C5\u8FD9\u4E2A\u63D2\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install -D babel-preset-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6\uFF1A.babelrc\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// .babelrc
{
  &quot;presets&quot;: [&quot;env&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-\u521B\u5EFA-npm-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA-npm-\u547D\u4EE4" aria-hidden="true">#</a> 4. \u521B\u5EFA npm \u547D\u4EE4</h5><p>\u8FD9\u4E00\u6B65\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u56E0\u4E3A\u524D\u9762\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>babel src -d build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u4F1A\u628A src \u76EE\u5F55\u4E0B\u7684 Javascript \u4EE3\u7801\u8F6C\u8BD1\u6210 ES5\uFF0C\u5E76\u5B58\u653E\u5728 build \u76EE\u5F55\u4E0B\u3002</p><p>\u4E60\u60EF\u4E0A\uFF0C\u6211\u4EEC\u5C06\u4E0A\u95E8\u7684\u547D\u4EE4\u653E\u5230 npm \u547D\u4EE4\u4E2D\u3002\u5728\u9879\u76EE\u7684 package.json \u4E2D\uFF0C\u8F93\u5165\u4E0B\u9762\u7684\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;scripts&quot;: {
  &quot;build&quot;: &quot;babel src -d build&quot;,
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function H(z,C){const r=s("ExternalLinkIcon");return d(),l("div",null,[c,b,e("p",null,[e("a",h,[p,i(r)])]),u,e("p",null,[e("a",m,[_,i(r)])]),f,e("p",null,[e("a",v,[x,i(r)])]),g,S,k,y,A,e("p",null,[e("a",T,[j,i(r)])]),q,e("p",null,[e("a",E,[w,i(r)])]),B,P,e("p",null,[e("a",D,[F,i(r)])]),I,e("p",null,[e("a",O,[N,i(r)])]),V])}var L=t(o,[["render",H],["__file","007babal\u5B66\u4E60\u8BB0\u5F55\u539F\u7406\u6398\u91D1.html.vue"]]);export{L as default};
