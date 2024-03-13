import{_ as r,r as o,o as c,c as u,a as n,b as s,d as a,w as e,e as p}from"./app-Tvkjh5q_.js";const d={},k=n("h1",{id:"uniformed-interchangeable-gachalog-format-standard-v2-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uniformed-interchangeable-gachalog-format-standard-v2-4"},[n("span",null,"Uniformed Interchangeable GachaLog Format Standard v2.4")])],-1),v={class:"hint-container warning"},h=n("p",{class:"hint-container-title"},"Usage of UIGF Statement Requirement",-1),m=n("strong",null,"import",-1),q=n("strong",null,"export",-1),g={href:"https://uigf.org",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"Including only importing feature reduces the interchangeability of user data, and puts the data in a risk that user can not control, which is not in line with intention of UIGF-Org.",-1),y={class:"hint-container warning"},f=n("p",{class:"hint-container-title"},"Warning",-1),_=n("h2",{id:"versions-features",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#versions-features"},[n("span",null,"Versions Features")])],-1),I=n("thead",null,[n("tr",null,[n("th",null,"Version"),n("th",null,"Note"),n("th",null,"Compatibility")])],-1),F=n("tr",null,[n("td",null,[n("code",null,"v2.0")]),n("td",null,"First public version"),n("td",null,"v2.0")],-1),U=n("tr",null,[n("td",null,[n("code",null,"v2.1")]),n("td",null,"Simplified in language expression, data format is completely consistent with v2.0"),n("td",null,"v2.1 and lower")],-1),G=n("code",null,"v2.2",-1),x=n("td",null,[s("Add "),n("code",null,"info.export_timestamp"),s(" to fill UNIX timestamp")],-1),w=n("td",null,"v2.2 and lower",-1),z=n("code",null,"v2.3",-1),S=n("td",null,"Add support for non-Chinese environment, express in Json Schema",-1),A=n("td",null,"v2.3 and lower",-1),L=n("tr",null,[n("td",null,[n("code",null,"v2.4")]),n("td",null,[s("Add "),n("code",null,"info.region_time_zone"),s(" to support time zone processing")]),n("td",null,"v2.4 and lower")],-1),j=p('<h3 id="what-s-changed-in-v2-4" tabindex="-1"><a class="header-anchor" href="#what-s-changed-in-v2-4"><span>What&#39;s Changed in v2.4</span></a></h3><ul><li>Localization compatibility enhancements <ul><li>Added <code>region_time_zone</code> field in the <code>info</code> object</li></ul></li></ul><h2 id="info-data-field-explanations" tabindex="-1"><a class="header-anchor" href="#info-data-field-explanations"><span><code>info</code> Data Field Explanations</span></a></h2><h3 id="region-time-zone" tabindex="-1"><a class="header-anchor" href="#region-time-zone"><span><code>region_time_zone</code></span></a></h3><p>Since <code>time</code> received from wish records are server local time, this field is introduced in order to accurately determine the time zone offset of the wish record time.</p><p>Unlike SRGF, since <code>region_time_zone</code> cannot be obtained directly from the game server, when this field is not provided by the exporter, it needs to be inferred based on the uid.</p><h4 id="mapping" tabindex="-1"><a class="header-anchor" href="#mapping"><span>Mapping</span></a></h4><table><thead><tr><th>First Character of <code>uid</code></th><th><code>region_time_zone</code></th><th>Game Server</th></tr></thead><tbody><tr><td><code>&#39;6&#39;</code></td><td><code>-5</code></td><td>os_usa</td></tr><tr><td><code>&#39;7&#39;</code></td><td><code>1</code></td><td>os_euro</td></tr><tr><td>Any other</td><td><code>8</code></td><td>os_cht, os_asia, cn_gf01, cn_qd01</td></tr></tbody></table><p>Application should not presume value in <code>region_time_zone</code> match the value in the form above, and should be able to handle non-standardized <code>region_time_zone</code> values. If <code>region_time_zone</code> value is different from value inferred based on <code>uid</code>, then value provided by <code>region_time_zone</code> should be preferred.</p><h2 id="list-data-field-explanations" tabindex="-1"><a class="header-anchor" href="#list-data-field-explanations"><span><code>list</code> Data Field Explanations</span></a></h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><p>There is a special field <code>id</code> in the item, which is included in Genshin Impact official API wish history API and represents unique ID of each wish record. When exporting data in UIGF format, app should:</p><ul><li>Make sure each item has a unique and valid <code>id</code></li><li>If there is not <code>id</code> included in the record, then the missing <code>id</code> field should be filled starting form the next item with a valid <code>id</code>. The assigned data should be sequentially decreased (time-ordered), with each decrease being a value of <code>1</code>.</li></ul><h3 id="gacha-type" tabindex="-1"><a class="header-anchor" href="#gacha-type"><span>gacha_type</span></a></h3><p>The probabilistic wish system has a shared pity rule, so we need extra field to identify the pool. In UIGF format, we added a uigf_gacha_type field addition to the original wish record data.</p><p>Please remember to add corresponding uigf_gacha_type field when applying UIGF format</p><h4 id="mapping-1" tabindex="-1"><a class="header-anchor" href="#mapping-1"><span>Mapping</span></a></h4><table><thead><tr><th><code>uigf_gacha_type</code></th><th><code>gacha_type</code></th></tr></thead><tbody><tr><td><code>100</code></td><td><code>100</code></td></tr><tr><td><code>200</code></td><td><code>200</code></td></tr><tr><td><code>301</code></td><td><code>301</code> or <code>400</code></td></tr><tr><td><code>302</code></td><td><code>302</code></td></tr></tbody></table><h3 id="item-id" tabindex="-1"><a class="header-anchor" href="#item-id"><span><code>item_id</code></span></a></h3>',19),D=p(`<h2 id="json-schema" tabindex="-1"><a class="header-anchor" href="#json-schema"><span>Json Schema</span></a></h2><blockquote><p>UIGF-Org provides <a href="/schema/uigf.json">Json Schema</a> for validation</p></blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出记录的 UID&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;语言 languagecode2-country/regioncode2&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_timestamp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出 UNIX 时间戳（秒）&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_time&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出时间&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_app&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出 App 名称&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_app_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出 App 版本&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uigf_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UIGF 版本号&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v\\\\d+\\\\.\\\\d+&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;region_time_zone&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;区域时区偏移&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;uid&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;uigf_version&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UIGF 导出信息&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;array&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;uigf_gacha_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UIGF 卡池类型&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用于区分卡池类型不同，但卡池保底计算相同的物品&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;gacha_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;卡池类型&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;item_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;物品的内部 ID&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;个数，一般为1&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;获取物品的时间&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;物品名称&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;item_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;物品类型&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;rank_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;物品等级&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;记录内部 ID&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;uigf_gacha_type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gacha_type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;item_id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;time&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UIGF 物品&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;物品列表&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UIGF 根对象&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function T(N,C){const i=o("Badge"),l=o("ExternalLinkIcon"),t=o("RouteLink");return c(),u("div",null,[k,n("blockquote",null,[n("p",null,[s("Uniformed Interchangeable GachaLog Format standard (UIGF) v2.4 "),a(i,{text:"Legacy",type:"message"})])]),n("div",v,[h,n("p",null,[s("Application must declare support of UIGF data format only after supporting of both "),m,s(" and "),q,s(" features, and provide link to "),n("a",g,[s("UIGF-Org"),a(l)]),s(" in the associated page.")]),b]),n("div",y,[f,n("p",null,[s("This standard is outdated, "),a(t,{to:"/en/standards/UIGF.html"},{default:e(()=>[s("UIGF v3.0")]),_:1}),s(" is the successor.")])]),_,n("table",null,[I,n("tbody",null,[F,U,n("tr",null,[n("td",null,[a(t,{to:"/en/standards/UIGF-legacy-v2.2.html"},{default:e(()=>[G]),_:1})]),x,w]),n("tr",null,[n("td",null,[a(t,{to:"/en/standards/UIGF-legacy-v2.3.html"},{default:e(()=>[z]),_:1})]),S,A]),L])]),j,n("p",null,[s("Item's in-game ID, refer to "),a(t,{to:"/en/API.html"},{default:e(()=>[s("UIGF API")]),_:1}),s(" to get this data")]),D])}const V=r(d,[["render",T],["__file","UIGF-legacy-v2.4.html.vue"]]),E=JSON.parse(`{"path":"/en/standards/UIGF-legacy-v2.4.html","title":"Uniformed Interchangeable GachaLog Format Standard v2.4","lang":"en-US","frontmatter":{"category":["Standard Document"],"order":1,"head":[["meta",{"name":"keywords","content":"Genshin, Genshin Impact, Gacha, Gacha log, UIGF"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://uigf.org/zh/standards/UIGF-legacy-v2.4.html"}],["meta",{"property":"og:url","content":"https://uigf.org/en/standards/UIGF-legacy-v2.4.html"}],["meta",{"property":"og:site_name","content":"UIGF-org"}],["meta",{"property":"og:title","content":"Uniformed Interchangeable GachaLog Format Standard v2.4"}],["meta",{"property":"og:description","content":"Uniformed Interchangeable GachaLog Format Standard v2.4 Uniformed Interchangeable GachaLog Format standard (UIGF) v2.4 Usage of UIGF Statement Requirement Application must decla..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-03T06:28:29.000Z"}],["meta",{"property":"article:author","content":"UIGF-org"}],["meta",{"property":"article:modified_time","content":"2024-03-03T06:28:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Uniformed Interchangeable GachaLog Format Standard v2.4\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T06:28:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UIGF-org\\",\\"url\\":\\"https://github.com/UIGF-org\\"}]}"]],"description":"Uniformed Interchangeable GachaLog Format Standard v2.4 Uniformed Interchangeable GachaLog Format standard (UIGF) v2.4 Usage of UIGF Statement Requirement Application must decla..."},"headers":[{"level":2,"title":"Versions Features","slug":"versions-features","link":"#versions-features","children":[{"level":3,"title":"What's Changed in v2.4","slug":"what-s-changed-in-v2-4","link":"#what-s-changed-in-v2-4","children":[]}]},{"level":2,"title":"info Data Field Explanations","slug":"info-data-field-explanations","link":"#info-data-field-explanations","children":[{"level":3,"title":"region_time_zone","slug":"region-time-zone","link":"#region-time-zone","children":[]}]},{"level":2,"title":"list Data Field Explanations","slug":"list-data-field-explanations","link":"#list-data-field-explanations","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"gacha_type","slug":"gacha-type","link":"#gacha-type","children":[]},{"level":3,"title":"item_id","slug":"item-id","link":"#item-id","children":[]}]},{"level":2,"title":"Json Schema","slug":"json-schema","link":"#json-schema","children":[]}],"git":{"createdTime":1709447309000,"updatedTime":1709447309000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":1}]},"readingTime":{"minutes":2.46,"words":738},"filePathRelative":"en/standards/UIGF-legacy-v2.4.md","localizedDate":"March 3, 2024","autoDesc":true}`);export{V as comp,E as data};
