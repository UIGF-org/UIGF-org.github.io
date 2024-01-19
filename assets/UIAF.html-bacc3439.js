import{_ as i,r as e,o as r,c,a as n,b as s,d as a,e as o}from"./app-ce5542a2.js";const u={},l=n("h1",{id:"统一可交换成就标准-v1-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#统一可交换成就标准-v1-1","aria-hidden":"true"},"#"),s(" 统一可交换成就标准 v1.1")],-1),d={class:"hint-container warning"},k=n("p",{class:"hint-container-title"},"UIAF 标准使用声明",-1),v=n("strong",null,"导入",-1),q=n("strong",null,"导出",-1),h={href:"https://uigf.org",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"仅包含导入或导出功能降低了用户数据可流通性，且将数据至于用户不可控的风险中，不符合 UIGF-Org 设计的初衷。",-1),b=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),_=n("p",null,"由于原神的第三方成就识别、导出、记录软件越来越多，在有了 UIGF 的经验后， 我们",-1),g={href:"https://github.com/babalae/genshin-achievement-toy",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/DGP-Studio/Snap.Genshin",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/HolographicHat/genshin-achievement-export",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/YuehaiTeam/cocogoat",target:"_blank",rel:"noopener noreferrer"},x=o(`<p>（上述名称以字典顺序排序，不代表其他任何意义）<br> 在此一起，制定了此项标准，旨在加强各个原神相关的App间的成就数据可交换性。</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><h3 id="时间" tabindex="-1"><a class="header-anchor" href="#时间" aria-hidden="true">#</a> 时间</h3><p>本标准的所有时间格式均以 <code>UTC+8</code> 时区为基准</p><h2 id="json-schema" tabindex="-1"><a class="header-anchor" href="#json-schema" aria-hidden="true">#</a> Json Schema</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://json-schema.org/draft-04/schema#&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;export_app&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出的app名称&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_app_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出此份记录的App版本号&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uiaf_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;所应用的 UIAF 的版本,包含此字段以防 UIAF 出现中断性变更时，App无法处理&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v\\\\d+.\\\\d+&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;export_timestamp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;导出UNIX时间戳&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;export_app&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;uiaf_version&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;包含导出方定义的基本信息&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;array&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;对应的成就id&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;进度&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;完成状态&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token number">2</span><span class="token punctuation">,</span>
              <span class="token number">3</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;enumDesc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ACHIEVEMENT_INVALID = 0; ACHIEVEMENT_UNFINISHED = 1; ACHIEVEMENT_FINISHED = 2;ACHIEVEMENT_POINT_TAKEN = 3;&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;完成的时间&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;current&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;timestamp&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;表示一个成就&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;包含完成或未完成的成就&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;list&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> <code>info</code></h3><p>可以包含我们认可的以下字段</p><table><thead><tr><th>字段名</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td><code>export_timestamp</code></td><td>导出UNIX时间戳</td><td></td></tr><tr><td><code>export_app_version</code></td><td>导出此份记录的App版本号</td><td></td></tr><tr><td><code>uiaf_version</code></td><td>所应用的 <code>UIAF</code> 的版本,包含此字段以防 <code>UIAF</code> 出现中断性变更时，App无法处理</td><td></td></tr></tbody></table><h4 id="uiaf-version" tabindex="-1"><a class="header-anchor" href="#uiaf-version" aria-hidden="true">#</a> <code>uiaf_version</code></h4><p>合法值</p><table><thead><tr><th>值</th><th>说明</th><th>向下兼容的最低版本</th></tr></thead><tbody><tr><td><code>v1.0</code></td><td>首个正式版本</td><td>v1.0</td></tr><tr><td><code>v1.1</code></td><td>在 <code>achievement</code> 中引入了 <code>status</code> 字段，指示成就的完成情况</td><td>v1.1</td></tr></tbody></table><h4 id="export-app" tabindex="-1"><a class="header-anchor" href="#export-app" aria-hidden="true">#</a> <code>export_app</code></h4><p>未实现导出支持的以 <code>-</code> 代替</p><table><thead><tr><th>导出 App</th><th><code>export_app</code> 的值</th></tr></thead><tbody><tr><td>Empty</td><td>Empty</td></tr></tbody></table><h3 id="achievement" tabindex="-1"><a class="header-anchor" href="#achievement" aria-hidden="true">#</a> <code>achievement</code></h3><h4 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> <code>id</code></h4><p>原神的成就在游戏内部带有Id，对于扫描类导出软件，在取得成就的外在表现形式（如：呈现文本）后，便可对应到内部的Id</p>`,18),A=n("br",null,null,-1),E={href:"https://gitlab.com/Dimbreath/AnimeGameData",target:"_blank",rel:"noopener noreferrer"},U=o('<h4 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp" aria-hidden="true">#</a> <code>timestamp</code></h4><ul><li><p>对于识别成功的值，直接将时间转换为对应的UNIX 时间戳（秒）</p></li><li><p>对于识别失败的值，直接将时间设置为 <code>9999-12-31 23:59:59</code>（253402271999（秒））</p></li></ul><h4 id="current" tabindex="-1"><a class="header-anchor" href="#current" aria-hidden="true">#</a> <code>current</code></h4><ul><li><p>对于识别成功的值，如 30/40 <code>current</code> 的值应设置为30</p><blockquote><p>因为始终可以从原神的数据中找到目标达成值</p></blockquote></li><li><p>对于识别失败的值，请将该字段的值设为 <code>0</code></p></li></ul>',4);function N(F,D){const p=e("Badge"),t=e("ExternalLinkIcon");return r(),c("div",null,[l,n("blockquote",null,[n("p",null,[s("Uniformed Interchangeable Achievement Format standard (UIAF) v1.1 "),a(p,{text:"Current",type:"message"})])]),n("div",d,[k,n("p",null,[s("应用必须在同时支持 UIAF 数据格式"),v,s("和"),q,s("功能并在相关功能区域或文档中提供跳转至 "),n("a",h,[s("UIGF-Org"),a(t)]),s(" 的超链接后声明支持 UIAF 格式")]),m]),b,_,n("ul",null,[n("li",null,[n("a",g,[s("babalae/genshin achievement toy"),a(t)])]),n("li",null,[n("a",y,[s("DGP Studio/Snap.Genshin"),a(t)])]),n("li",null,[n("a",f,[s("HolographicHat/genshin achievement export"),a(t)])]),n("li",null,[n("a",I,[s("YuehaiTeam/cocogoat"),a(t)])])]),x,n("blockquote",null,[n("p",null,[s("导入/导出软件应自行负责Id与呈现文本间的转换"),A,s(" 成就的信息可以从 "),n("a",E,[s("gitlab:Dimbreath/AnimeGameData"),a(t)]),s(" 库中获取")])]),U])}const T=i(u,[["render",N],["__file","UIAF.html.vue"]]);export{T as default};
