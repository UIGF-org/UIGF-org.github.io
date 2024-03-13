import{_ as i,r as e,o as r,c as u,a as n,b as s,d as a,w as o,e as p}from"./app-Tvkjh5q_.js";const d={},k=n("h1",{id:"统一可交换抽卡记录标准-v2-4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#统一可交换抽卡记录标准-v2-4"},[n("span",null,"统一可交换抽卡记录标准 v2.4")])],-1),q={class:"hint-container warning"},v=n("p",{class:"hint-container-title"},"UIGF 标准使用声明",-1),m=n("strong",null,"导入",-1),h=n("strong",null,"导出",-1),g={href:"https://uigf.org",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"仅包含导入或导出功能降低了用户数据可流通性，且将数据至于用户不可控的风险中，不符合 UIGF-Org 设计的初衷。",-1),b={class:"hint-container warning"},_=n("p",{class:"hint-container-title"},"警告",-1),f=n("h2",{id:"更新记录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#更新记录"},[n("span",null,"更新记录")])],-1),I=n("thead",null,[n("tr",null,[n("th",null,"版本"),n("th",null,"说明"),n("th",null,"兼容")])],-1),U=n("tr",null,[n("td",null,[n("code",null,"v2.0")]),n("td",null,"首个正式版本"),n("td",null,"v2.0")],-1),F=n("tr",null,[n("td",null,[n("code",null,"v2.1")]),n("td",null,"简化了部分语言表述，与 v2.0在数据格式上完全一致"),n("td",null,"v2.1 and lower")],-1),G=n("code",null,"v2.2",-1),x=n("td",null,[s("新增 "),n("code",null,"info.export_timestamp"),s(" 填充 UNIX 时间戳")],-1),z=n("td",null,"v2.2 and lower",-1),j=n("code",null,"v2.3",-1),w=n("td",null,"扩充至非中文语境，使用 Json Schema 表述。移除了 Excel 格式",-1),L=n("td",null,"v2.3 and lower",-1),N=n("tr",null,[n("td",null,[n("code",null,"v2.4")]),n("td",null,[s("新增 "),n("code",null,"info.region_time_zone"),s(" 支持时区处理")]),n("td",null,"v2.4 and lower")],-1),A=p('<h3 id="v2-4-更新内容" tabindex="-1"><a class="header-anchor" href="#v2-4-更新内容"><span>v2.4 更新内容</span></a></h3><ul><li>国际化兼容性增强 <ul><li>在 <code>info</code> 对象中新增了 <code>region_time_zone</code> 字段</li></ul></li></ul><h2 id="info-字段说明" tabindex="-1"><a class="header-anchor" href="#info-字段说明"><span><code>info</code> 字段说明</span></a></h2><h3 id="region-time-zone" tabindex="-1"><a class="header-anchor" href="#region-time-zone"><span><code>region_time_zone</code></span></a></h3><p>由于在获取祈愿记录时得到的<code>time</code>为服务器时间，为了准确判断时间的时区偏移，引入此字段。</p><p>与 SRGF 不同，由于无法直接从服务器获取<code>region_time_zone</code>，在导出方未提供此字段时，需要根据 <code>uid</code> 进行推断。</p><h4 id="映射关系" tabindex="-1"><a class="header-anchor" href="#映射关系"><span>映射关系</span></a></h4><table><thead><tr><th><code>uid</code>首个字符</th><th><code>region_time_zone</code></th><th>游戏服务器</th></tr></thead><tbody><tr><td><code>&#39;6&#39;</code></td><td><code>-5</code></td><td>os_usa</td></tr><tr><td><code>&#39;7&#39;</code></td><td><code>1</code></td><td>os_euro</td></tr><tr><td>剩余情况</td><td><code>8</code></td><td>os_cht, os_asia, cn_gf01, cn_qd01</td></tr></tbody></table><p>App 不应假定 <code>region_time_zone</code> 的值为上表中给出的值，应具有处理非标准 <code>region_time_zone</code> 值的能力。 若 <code>region_time_zone</code> 的值与 <code>uid</code> 推断结果不一致，则优先选择 <code>region_time_zone</code> 给出的值。</p><h2 id="list-字段说明" tabindex="-1"><a class="header-anchor" href="#list-字段说明"><span><code>list</code> 字段说明</span></a></h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span><code>id</code></span></a></h3><p>物品内包含了一项较为特殊的字段: <code>id</code>，为原神官方 API 中包含的，代表每条抽卡记录唯一性的 <code>id</code>。App 导出 UIGF 时</p><ul><li>需要确保每个物品都有一个有效的唯一 <code>id</code></li><li>若有记录中不包含<code>id</code>，则应从下一个自带有效 <code>id</code> 的物品开始，为每条缺失<code>id</code>字段的数据补全<code>id</code>。 赋值数据向前（时间排序）依次递减，每次递减的值应保持为 <code>1</code></li></ul><h3 id="gacha-type" tabindex="-1"><a class="header-anchor" href="#gacha-type"><span><code>gacha_type</code></span></a></h3><p>由于存在会共享保底与概率的卡池，所以需要一个额外的字段来界定<br> 我们在 <code>UIGF</code> 的所有格式中注入了 <code>uigf_gacha_type</code> 字段<br> 在导出到 <code>UIGF</code> 格式时需要注意添加对应的 <code>uigf_gacha_type</code> 字段</p><h4 id="映射关系-1" tabindex="-1"><a class="header-anchor" href="#映射关系-1"><span>映射关系</span></a></h4><table><thead><tr><th><code>uigf_gacha_type</code></th><th><code>gacha_type</code></th></tr></thead><tbody><tr><td><code>100</code></td><td><code>100</code></td></tr><tr><td><code>200</code></td><td><code>200</code></td></tr><tr><td><code>301</code></td><td><code>301</code> or <code>400</code></td></tr><tr><td><code>302</code></td><td><code>302</code></td></tr></tbody></table><h3 id="item-id" tabindex="-1"><a class="header-anchor" href="#item-id"><span><code>item_id</code></span></a></h3>',18),S=p(`<h2 id="json-schema" tabindex="-1"><a class="header-anchor" href="#json-schema"><span>Json Schema</span></a></h2><blockquote><p>UIGF-Org 提供<a href="/schema/uigf.json">Json Schema</a> 用于验证</p></blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function T(D,O){const c=e("Badge"),l=e("ExternalLinkIcon"),t=e("RouteLink");return r(),u("div",null,[k,n("blockquote",null,[n("p",null,[s("Uniformed Interchangeable GachaLog Format standard (UIGF) v2.4 "),a(c,{text:"Legacy",type:"message"})])]),n("div",q,[v,n("p",null,[s("应用必须在同时支持 UIGF 数据格式"),m,s("和"),h,s("功能并在相关功能区域或文档中提供跳转至 "),n("a",g,[s("UIGF-Org"),a(l)]),s(" 的超链接后声明支持 UIGF 格式")]),y]),n("div",b,[_,n("p",null,[s("该标准已过时，"),a(t,{to:"/zh/standards/UIGF.html"},{default:o(()=>[s("UIGF v3.0")]),_:1}),s(" 替代了该版本的标准。")])]),f,n("table",null,[I,n("tbody",null,[U,F,n("tr",null,[n("td",null,[a(t,{to:"/zh/standards/UIGF-legacy-v2.2.html"},{default:o(()=>[G]),_:1})]),x,z]),n("tr",null,[n("td",null,[a(t,{to:"/zh/standards/UIGF-legacy-v2.3.html"},{default:o(()=>[j]),_:1})]),w,L]),N])]),A,n("p",null,[s("物品游戏内ID，你可以通过 "),a(t,{to:"/zh/API.html"},{default:o(()=>[s("UIGF API")]),_:1}),s(" 获取这一数据")]),S])}const J=i(d,[["render",T],["__file","UIGF-legacy-v2.4.html.vue"]]),P=JSON.parse('{"path":"/zh/standards/UIGF-legacy-v2.4.html","title":"统一可交换抽卡记录标准 v2.4","lang":"zh-CN","frontmatter":{"redirectFrom":"/standards/UIGF.html","category":["标准化文档"],"order":1,"head":[["meta",{"name":"keywords","content":"原神, 抽卡, 抽卡记录, UIGF"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://uigf.org/en/standards/UIGF-legacy-v2.4.html"}],["meta",{"property":"og:url","content":"https://uigf.org/zh/standards/UIGF-legacy-v2.4.html"}],["meta",{"property":"og:site_name","content":"UIGF-org"}],["meta",{"property":"og:title","content":"统一可交换抽卡记录标准 v2.4"}],["meta",{"property":"og:description","content":"统一可交换抽卡记录标准 v2.4 Uniformed Interchangeable GachaLog Format standard (UIGF) v2.4 UIGF 标准使用声明 应用必须在同时支持 UIGF 数据格式导入和导出功能并在相关功能区域或文档中提供跳转至 UIGF-Org 的超链接后声明支持 UIGF 格式 仅包含导入或导出功能降低了用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-03T06:27:52.000Z"}],["meta",{"property":"article:author","content":"UIGF-org"}],["meta",{"property":"article:modified_time","content":"2024-03-03T06:27:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"统一可交换抽卡记录标准 v2.4\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-03T06:27:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UIGF-org\\",\\"url\\":\\"https://github.com/UIGF-org\\"}]}"]],"description":"统一可交换抽卡记录标准 v2.4 Uniformed Interchangeable GachaLog Format standard (UIGF) v2.4 UIGF 标准使用声明 应用必须在同时支持 UIGF 数据格式导入和导出功能并在相关功能区域或文档中提供跳转至 UIGF-Org 的超链接后声明支持 UIGF 格式 仅包含导入或导出功能降低了用..."},"headers":[{"level":2,"title":"更新记录","slug":"更新记录","link":"#更新记录","children":[{"level":3,"title":"v2.4 更新内容","slug":"v2-4-更新内容","link":"#v2-4-更新内容","children":[]}]},{"level":2,"title":"info 字段说明","slug":"info-字段说明","link":"#info-字段说明","children":[{"level":3,"title":"region_time_zone","slug":"region-time-zone","link":"#region-time-zone","children":[]}]},{"level":2,"title":"list 字段说明","slug":"list-字段说明","link":"#list-字段说明","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"gacha_type","slug":"gacha-type","link":"#gacha-type","children":[]},{"level":3,"title":"item_id","slug":"item-id","link":"#item-id","children":[]}]},{"level":2,"title":"Json Schema","slug":"json-schema","link":"#json-schema","children":[]}],"git":{"createdTime":1709447272000,"updatedTime":1709447272000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":1}]},"readingTime":{"minutes":3.16,"words":948},"filePathRelative":"zh/standards/UIGF-legacy-v2.4.md","localizedDate":"2024年3月3日","autoDesc":true}');export{J as comp,P as data};
