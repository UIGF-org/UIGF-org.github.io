import{_ as n,c as t,a as i,e,b as l,f as h,o as p,r}from"./app-qcCLSo7u.js";const d={};function k(o,s){const a=r("Badge");return p(),t("div",null,[s[1]||(s[1]=i("h1",{id:"统一可交换成就标准-v1-1",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#统一可交换成就标准-v1-1"},[i("span",null,"统一可交换成就标准 v1.1")])],-1)),i("blockquote",null,[i("p",null,[s[0]||(s[0]=e("Uniformed Interchangeable Achievement Format standard (UIAF) v1.1 ")),l(a,{text:"Current",type:"message"})])]),s[2]||(s[2]=h(`<div class="hint-container info"><p class="hint-container-title">UIAF 标准使用声明</p><p>应用必须在同时支持 UIAF 数据格式<strong>导入</strong>和<strong>导出</strong>功能并在相关功能区域或文档中提供跳转至 <a href="https://uigf.org" target="_blank" rel="noopener noreferrer">UIGF-Org</a> 的超链接后声明支持 UIAF 格式</p><p>仅包含导入或导出功能降低了用户数据可流通性，且将数据置于用户不可控的风险中，不符合 UIGF-Org 设计的初衷。</p></div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>由于原神的第三方成就识别、导出、记录软件越来越多，在有了 UIGF 的经验后， 我们</p><ul><li><a href="https://github.com/babalae/genshin-achievement-toy" target="_blank" rel="noopener noreferrer">babalae/genshin achievement toy</a></li><li><a href="https://github.com/DGP-Studio/Snap.Genshin" target="_blank" rel="noopener noreferrer">DGP Studio/Snap.Genshin</a></li><li><a href="https://github.com/HolographicHat/genshin-achievement-export" target="_blank" rel="noopener noreferrer">HolographicHat/genshin achievement export</a></li><li><a href="https://github.com/YuehaiTeam/cocogoat" target="_blank" rel="noopener noreferrer">YuehaiTeam/cocogoat</a></li></ul><p>（上述名称以字典顺序排序，不代表其他任何意义）<br> 在此一起，制定了此项标准，旨在加强各个原神相关的App间的成就数据可交换性。</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><h3 id="时间" tabindex="-1"><a class="header-anchor" href="#时间"><span>时间</span></a></h3><p>本标准的所有时间格式均以 <code>UTC+8</code> 时区为基准</p><h2 id="json-schema" tabindex="-1"><a class="header-anchor" href="#json-schema"><span>Json Schema</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意字段类型</p><p>请各位开发者务必尊重 Schema 内定义的字段类型。使用错误的类型可能会导致其它由强类型编程语言制成的工具在解析 Json 文件时产生错误，进而导致数据转移失败。</p><p>为了避免这类问题，我们建议您针对 UIAF 格式设计专用的 struct，或善用 <code>JsonNumberHandling.WriteAsString</code> 等方法。同时，设计相关的单元测试以确保导入导出的一致性。</p><p>我们也提供 <a href="https://schema.uigf.org/?schema=uiaf" target="_blank" rel="noopener noreferrer">UIAF 格式校验工具</a>来帮助你校验 Json 文件。</p></div><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;$schema&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://json-schema.org/draft-04/schema#&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;object&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;properties&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;info&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;object&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;properties&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;export_app&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;导出的app名称&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;export_app_version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;导出此份记录的App版本号&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;uiaf_version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;所应用的 UIAF 的版本,包含此字段以防 UIAF 出现中断性变更时，App无法处理&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;pattern&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">d+.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">d+&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;export_timestamp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;number&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;导出UNIX时间戳&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;required&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;export_app&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;uiaf_version&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;包含导出方定义的基本信息&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;list&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;array&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;items&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;object&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;properties&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;number&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;对应的成就id&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;current&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;number&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;进度&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;status&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;number&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;完成状态:ACHIEVEMENT_INVALID = 0; ACHIEVEMENT_UNFINISHED = 1; ACHIEVEMENT_FINISHED = 2;ACHIEVEMENT_POINT_TAKEN = 3;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;enum&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">              0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">              1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">              2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">              3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;timestamp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;number&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;完成的时间&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;required&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;current&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;status&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;timestamp&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;表示一个成就&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;包含完成或未完成的成就&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;required&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;info&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;list&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span><code>info</code></span></a></h3><p>可以包含我们认可的以下字段</p><table><thead><tr><th>字段名</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td><code>export_timestamp</code></td><td>导出UNIX时间戳</td><td></td></tr><tr><td><code>export_app_version</code></td><td>导出此份记录的App版本号</td><td></td></tr><tr><td><code>uiaf_version</code></td><td>所应用的 <code>UIAF</code> 的版本,包含此字段以防 <code>UIAF</code> 出现中断性变更时，App无法处理</td><td></td></tr></tbody></table><h4 id="uiaf-version" tabindex="-1"><a class="header-anchor" href="#uiaf-version"><span><code>uiaf_version</code></span></a></h4><p>合法值</p><table><thead><tr><th>值</th><th>说明</th><th>向下兼容的最低版本</th></tr></thead><tbody><tr><td><code>v1.0</code></td><td>首个正式版本</td><td>v1.0</td></tr><tr><td><code>v1.1</code></td><td>在 <code>achievement</code> 中引入了 <code>status</code> 字段，指示成就的完成情况</td><td>v1.1</td></tr></tbody></table><h4 id="export-app" tabindex="-1"><a class="header-anchor" href="#export-app"><span><code>export_app</code></span></a></h4><p>未实现导出支持的以 <code>-</code> 代替</p><table><thead><tr><th>导出 App</th><th><code>export_app</code> 的值</th></tr></thead><tbody><tr><td>Empty</td><td>Empty</td></tr></tbody></table><h3 id="achievement" tabindex="-1"><a class="header-anchor" href="#achievement"><span><code>achievement</code></span></a></h3><h4 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span><code>id</code></span></a></h4><p>原神的成就在游戏内部带有Id，对于扫描类导出软件，在取得成就的外在表现形式（如：呈现文本）后，便可对应到内部的Id</p><blockquote><p>导入/导出软件应自行负责Id与呈现文本间的转换<br> 成就的信息可以从 <a href="https://gitlab.com/Dimbreath/AnimeGameData" target="_blank" rel="noopener noreferrer">gitlab:Dimbreath/AnimeGameData</a> 库中获取</p></blockquote><h4 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp"><span><code>timestamp</code></span></a></h4><ul><li><p>对于识别成功的值，直接将时间转换为对应的UNIX 时间戳（秒）</p></li><li><p>对于识别失败的值，直接将时间设置为 <code>9999-12-31 23:59:59</code>（253402271999（秒））</p></li></ul><h4 id="current" tabindex="-1"><a class="header-anchor" href="#current"><span><code>current</code></span></a></h4><ul><li><p>对于识别成功的值，如 30/40 <code>current</code> 的值应设置为30</p><blockquote><p>因为始终可以从原神的数据中找到目标达成值</p></blockquote></li><li><p>对于识别失败的值，请将该字段的值设为 <code>0</code></p></li></ul>`,28))])}const u=n(d,[["render",k],["__file","uiaf.html.vue"]]),m=JSON.parse('{"path":"/zh/standards/uiaf.html","title":"统一可交换成就标准 v1.1","lang":"zh-CN","frontmatter":{"category":["标准化文档"],"order":2,"head":[["meta",{"name":"keywords","content":"原神, 成就, 成就记录, UIAF"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://uigf.org/en/standards/uiaf.html"}],["meta",{"property":"og:url","content":"https://uigf.org/zh/standards/uiaf.html"}],["meta",{"property":"og:site_name","content":"UIGF-org"}],["meta",{"property":"og:title","content":"统一可交换成就标准 v1.1"}],["meta",{"property":"og:description","content":"统一可交换成就标准 v1.1 Uniformed Interchangeable Achievement Format standard (UIAF) v1.1 UIAF 标准使用声明 应用必须在同时支持 UIAF 数据格式导入和导出功能并在相关功能区域或文档中提供跳转至 UIGF-Org 的超链接后声明支持 UIAF 格式 仅包含导入或导出功能降低了..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-12T02:35:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-12T02:35:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"统一可交换成就标准 v1.1\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-12T02:35:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UIGF-org\\",\\"url\\":\\"https://github.com/UIGF-org\\"}]}"]],"description":"统一可交换成就标准 v1.1 Uniformed Interchangeable Achievement Format standard (UIAF) v1.1 UIAF 标准使用声明 应用必须在同时支持 UIAF 数据格式导入和导出功能并在相关功能区域或文档中提供跳转至 UIGF-Org 的超链接后声明支持 UIAF 格式 仅包含导入或导出功能降低了..."},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[{"level":3,"title":"时间","slug":"时间","link":"#时间","children":[]}]},{"level":2,"title":"Json Schema","slug":"json-schema","link":"#json-schema","children":[{"level":3,"title":"info","slug":"info","link":"#info","children":[]},{"level":3,"title":"achievement","slug":"achievement","link":"#achievement","children":[]}]}],"git":{"createdTime":1664573507000,"updatedTime":1720751742000,"contributors":[{"name":"Masterain","username":"Masterain","email":"i@irain.in","commits":11,"url":"https://github.com/Masterain"},{"name":"目棃","username":"目棃","email":"BT-Muli@outlook.com","commits":2,"url":"https://github.com/目棃"},{"name":"ShikiSuen","username":"ShikiSuen","email":"shikisuen@outlook.com","commits":2,"url":"https://github.com/ShikiSuen"},{"name":"qhy040404","username":"qhy040404","email":"qhy040404@163.com","commits":1,"url":"https://github.com/qhy040404"},{"name":"快乐的老鼠宝宝","username":"快乐的老鼠宝宝","email":"laoshubaby@protonmail.com","commits":1,"url":"https://github.com/快乐的老鼠宝宝"},{"name":"目棃","username":"目棃","email":"bt-muli@dgp-studio.cn","commits":2,"url":"https://github.com/目棃"},{"name":"Womsxd","username":"Womsxd","email":"45663319+Womsxd@users.noreply.github.com","commits":2,"url":"https://github.com/Womsxd"},{"name":"快乐的老鼠宝宝","username":"快乐的老鼠宝宝","email":"keaitianxinmail@qq.com","commits":1,"url":"https://github.com/快乐的老鼠宝宝"},{"name":"moyan","username":"moyan","email":"88998238+moyanj@users.noreply.github.com","commits":1,"url":"https://github.com/moyan"},{"name":"moyan","username":"moyan","email":"1561515308@qq.com","commits":2,"url":"https://github.com/moyan"},{"name":"DGCK81LNN","username":"DGCK81LNN","email":"triluolnn@163.com","commits":1,"url":"https://github.com/DGCK81LNN"}]},"readingTime":{"minutes":3.17,"words":951},"filePathRelative":"zh/standards/uiaf.md","localizedDate":"2022年9月30日","autoDesc":true}');export{u as comp,m as data};
