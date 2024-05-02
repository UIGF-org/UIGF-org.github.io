import{_ as i,r as o,o as c,c as r,d as n,b as s,a,e as p}from"./app-D4qQ8AXJ.js";const u={},l=n("h1",{id:"星穹铁道抽卡记录标准-v1-0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#星穹铁道抽卡记录标准-v1-0"},[n("span",null,"星穹铁道抽卡记录标准 v1.0")])],-1),d={class:"hint-container warning"},k=n("p",{class:"hint-container-title"},"SRGF 标准使用声明",-1),q=n("strong",null,"导入",-1),v=n("strong",null,"导出",-1),m={href:"https://uigf.org",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"仅包含导入或导出功能降低了用户数据可流通性，且将数据置于用户不可控的风险中，不符合 UIGF-Org 设计的初衷。",-1),b=p(`<h2 id="json-示例" tabindex="-1"><a class="header-anchor" href="#json-示例"><span>Json 示例</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxxxxxx&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-cn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;region_time_zone&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
    <span class="token property">&quot;export_timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1684124992</span><span class="token punctuation">,</span>
    <span class="token property">&quot;export_app&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;export_app_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;srgf_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v1.0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;gacha_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2003&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;gacha_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;item_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10000065&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-05-07 10:47:00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;item_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rank_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1683425160001357994&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json-schema" tabindex="-1"><a class="header-anchor" href="#json-schema"><span>Json Schema</span></a></h2>`,3),y={class:"hint-container warning"},h=n("p",{class:"hint-container-title"},"注意字段类型",-1),_=n("p",null,"请各位开发者务必尊重 Schema 内定义的字段类型。使用错误的类型可能会导致其它由强类型编程语言制成的工具在解析 Json 文件时产生错误，进而导致数据转移失败。",-1),x=n("p",null,[s("为了避免这类问题，我们建议您针对 SRGF 格式设计专用的 struct，或善用 "),n("code",null,"JsonNumberHandling.WriteAsString"),s(" 等方法。同时，设计相关的单元测试以确保导入导出的一致性。")],-1),f={href:"https://schema.uigf.org/?schema=srgf",target:"_blank",rel:"noopener noreferrer"},S=p(`<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://json-schema.org/draft-04/schema#&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;语言 languagecode2-country/regioncode2&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;region_time_zone&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;时区&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_timestamp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出 UNIX 时间戳&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_app&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出的 App 名称&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_app_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出此份记录的 App 版本号&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;srgf_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;所应用的 SRGF 的版本,包含此字段以防 SRGF 出现中断性变更时，App 无法处理&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;包含导出方定义的基本信息&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;srgf_version&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;uid&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;lang&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;region_time_zone&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;array&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;gacha_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;卡池 Id&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;gacha_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;卡池类型&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;12&quot;</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;item_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;物品 Id&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;数量，通常为1&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;获取物品的时间，应为「抽卡记录网页上显示的原始时间字符串」而非任何转换过的值。如果设备时区与服务器时区不一致，任意类型转换将会导致时区转换出现误差（除非应用进行了特殊处理）。&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;物品名称&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;item_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;物品类型&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;rank_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;物品星级&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;内部 Id&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;gacha_id&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;gacha_type&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;item_id&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;time&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;id&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;包含卡池记录&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;list&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function F(G,j){const e=o("Badge"),t=o("ExternalLinkIcon");return c(),r("div",null,[l,n("blockquote",null,[n("p",null,[s("Star Rail GachaLog Format standard (SRGF) v1.0 "),a(e,{text:"Current",type:"message"})])]),n("div",d,[k,n("p",null,[s("应用必须在同时支持 SRGF 数据格式"),q,s("和"),v,s("功能并在相关功能区域或文档中提供跳转至 "),n("a",m,[s("UIGF-Org"),a(t)]),s(" 的超链接后声明支持 SRGF 格式")]),g]),b,n("div",y,[h,_,x,n("p",null,[s("我们也提供 "),n("a",f,[s("SRGF 格式校验工具"),a(t)]),s("来帮助你校验 Json 文件。")])]),S])}const I=i(u,[["render",F],["__file","srgf.html.vue"]]),z=JSON.parse('{"path":"/zh/standards/srgf.html","title":"星穹铁道抽卡记录标准 v1.0","lang":"zh-CN","frontmatter":{"category":["标准化文档"],"order":2,"head":[["meta",{"name":"keywords","content":"崩坏, 星穹铁道, 抽卡, 抽卡记录, SRGF"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://uigf.org/en/standards/srgf.html"}],["meta",{"property":"og:url","content":"https://uigf.org/zh/standards/srgf.html"}],["meta",{"property":"og:site_name","content":"UIGF-org"}],["meta",{"property":"og:title","content":"星穹铁道抽卡记录标准 v1.0"}],["meta",{"property":"og:description","content":"星穹铁道抽卡记录标准 v1.0 Star Rail GachaLog Format standard (SRGF) v1.0 SRGF 标准使用声明 应用必须在同时支持 SRGF 数据格式导入和导出功能并在相关功能区域或文档中提供跳转至 UIGF-Org 的超链接后声明支持 SRGF 格式 仅包含导入或导出功能降低了用户数据可流通性，且将数据置于用户不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-02T07:17:28.000Z"}],["meta",{"property":"article:author","content":"UIGF-org"}],["meta",{"property":"article:modified_time","content":"2024-05-02T07:17:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"星穹铁道抽卡记录标准 v1.0\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-02T07:17:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UIGF-org\\",\\"url\\":\\"https://github.com/UIGF-org\\"}]}"]],"description":"星穹铁道抽卡记录标准 v1.0 Star Rail GachaLog Format standard (SRGF) v1.0 SRGF 标准使用声明 应用必须在同时支持 SRGF 数据格式导入和导出功能并在相关功能区域或文档中提供跳转至 UIGF-Org 的超链接后声明支持 SRGF 格式 仅包含导入或导出功能降低了用户数据可流通性，且将数据置于用户不..."},"headers":[{"level":2,"title":"Json 示例","slug":"json-示例","link":"#json-示例","children":[]},{"level":2,"title":"Json Schema","slug":"json-schema","link":"#json-schema","children":[]}],"git":{"createdTime":1712260348000,"updatedTime":1714634248000,"contributors":[{"name":"ShikiSuen","email":"shikisuen@outlook.com","commits":2},{"name":"Masterain","email":"i@irain.in","commits":1},{"name":"快乐的老鼠宝宝","email":"laoshubaby@protonmail.com","commits":1}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"zh/standards/srgf.md","localizedDate":"2024年4月4日","autoDesc":true}');export{I as comp,z as data};
