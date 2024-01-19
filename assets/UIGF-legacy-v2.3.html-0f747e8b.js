import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as p,e}from"./app-ce5542a2.js";const d={},k=n("h1",{id:"统一可交换抽卡记录标准-v2-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#统一可交换抽卡记录标准-v2-3","aria-hidden":"true"},"#"),s(" 统一可交换抽卡记录标准 v2.3")],-1),q={class:"hint-container warning"},v=n("p",{class:"hint-container-title"},"UIGF 标准使用声明",-1),m=n("strong",null,"导入",-1),b=n("strong",null,"导出",-1),h={href:"https://uigf.org",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"仅包含导入或导出功能降低了用户数据可流通性，且将数据至于用户不可控的风险中，不符合 UIGF-Org 设计的初衷。",-1),g={class:"hint-container warning"},_=n("p",{class:"hint-container-title"},"警告",-1),f=n("h2",{id:"更新记录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#更新记录","aria-hidden":"true"},"#"),s(" 更新记录")],-1),I=n("thead",null,[n("tr",null,[n("th",null,"版本"),n("th",null,"说明"),n("th",null,"兼容")])],-1),U=n("tr",null,[n("td",null,[n("code",null,"v2.0")]),n("td",null,"首个正式版本"),n("td",null,"v2.0")],-1),x=n("tr",null,[n("td",null,[n("code",null,"v2.1")]),n("td",null,"简化了部分语言表述，与 v2.0在数据格式上完全一致"),n("td",null,"v2.1 and lower")],-1),F=n("code",null,"v2.2",-1),G=n("td",null,[s("新增 "),n("code",null,"info.export_timestamp"),s(" 填充 UNIX 时间戳")],-1),j=n("td",null,"v2.2 and lower",-1),w=n("tr",null,[n("td",null,[n("code",null,"v2.3")]),n("td",null,"扩充至非中文语境，使用 Json Schema 表述。移除了 Excel 格式"),n("td",null,"v2.3 and lower")],-1),L=e('<h3 id="v2-3-更新内容" tabindex="-1"><a class="header-anchor" href="#v2-3-更新内容" aria-hidden="true">#</a> v2.3 更新内容</h3><ul><li>移除了 UIGF.W 标准</li><li>国际化兼容性增强 <ul><li><code>name</code> 不再是必要字段</li><li><code>item_type</code> 不再是必要字段</li><li><strong><code>item_id</code> 变更为必要字段</strong></li></ul></li></ul><h2 id="字段说明" tabindex="-1"><a class="header-anchor" href="#字段说明" aria-hidden="true">#</a> 字段说明</h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><p>物品内包含了一项较为特殊的字段: <code>id</code>，为原神官方 API 中包含的，代表每条抽卡记录唯一性的 <code>id</code>。App 导出 UIGF 时</p><ul><li>需要确保每个物品都有一个有效的唯一 <code>id</code></li><li>若有记录中不包含<code>id</code>，则应从下一个自带有效 <code>id</code> 的物品开始，为每条缺失<code>id</code>字段的数据补全<code>id</code>。 赋值数据向前（时间排序）依次递减，每次递减的值应保持为 <code>1</code></li></ul><h3 id="gacha-type" tabindex="-1"><a class="header-anchor" href="#gacha-type" aria-hidden="true">#</a> gacha_type</h3><p>由于存在会共享保底与概率的卡池，所以需要一个额外的字段来界定<br> 我们在 <code>UIGF</code> 的所有格式中注入了 <code>uigf_gacha_type</code> 字段<br> 在导出到 <code>UIGF</code> 格式时需要注意添加对应的 <code>uigf_gacha_type</code> 字段</p><h4 id="映射关系" tabindex="-1"><a class="header-anchor" href="#映射关系" aria-hidden="true">#</a> 映射关系</h4><table><thead><tr><th><code>uigf_gacha_type</code></th><th><code>gacha_type</code></th></tr></thead><tbody><tr><td><code>100</code></td><td><code>100</code></td></tr><tr><td><code>200</code></td><td><code>200</code></td></tr><tr><td><code>301</code></td><td><code>301</code> or <code>400</code></td></tr><tr><td><code>302</code></td><td><code>302</code></td></tr></tbody></table><h3 id="item-id" tabindex="-1"><a class="header-anchor" href="#item-id" aria-hidden="true">#</a> item_id</h3>',11),A=e(`<h2 id="json-schema" tabindex="-1"><a class="header-anchor" href="#json-schema" aria-hidden="true">#</a> Json Schema</h2><blockquote><p>UIGF-Org 提供<a href="/schema/uigf.json">Json Schema</a> 用于验证</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;uid&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;uigf_version&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
              <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;个数&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一般为1&quot;</span>
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
          <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;uigf_gacha_type&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;gacha_type&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;item_id&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;time&quot;</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UIGF 物品&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;物品列表&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;list&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UIGF 根对象&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function N(B,V){const l=o("Badge"),c=o("ExternalLinkIcon"),t=o("RouterLink");return u(),r("div",null,[k,n("blockquote",null,[n("p",null,[s("Uniformed Interchangeable GachaLog Format standard (UIGF) v2.3 "),a(l,{text:"Legacy",type:"message"})])]),n("div",q,[v,n("p",null,[s("应用必须在同时支持 UIGF 数据格式"),m,s("和"),b,s("功能并在相关功能区域或文档中提供跳转至 "),n("a",h,[s("UIGF-Org"),a(c)]),s(" 的超链接后声明支持 UIGF 格式")]),y]),n("div",g,[_,n("p",null,[s("该标准已过时，"),a(t,{to:"/zh/standards/UIGF.html"},{default:p(()=>[s("UIGF v2.4")]),_:1}),s(" 替代了本标准。")])]),f,n("table",null,[I,n("tbody",null,[U,x,n("tr",null,[n("td",null,[a(t,{to:"/zh/standards/UIGF-legacy-v2.2.html"},{default:p(()=>[F]),_:1})]),G,j]),w])]),L,n("p",null,[s("物品游戏内ID，你可以通过 "),a(t,{to:"/zh/API.html"},{default:p(()=>[s("UIGF API")]),_:1}),s(" 获取这一数据")]),A])}const E=i(d,[["render",N],["__file","UIGF-legacy-v2.3.html.vue"]]);export{E as default};
