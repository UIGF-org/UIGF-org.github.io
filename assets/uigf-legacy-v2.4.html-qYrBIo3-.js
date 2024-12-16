import{_ as d,c as k,a as i,e as a,b as n,d as e,f as l,r as h,o as r}from"./app-qcCLSo7u.js";const o={},u={class:"hint-container warning"};function g(c,s){const p=h("Badge"),t=h("RouteLink");return r(),k("div",null,[s[23]||(s[23]=i("h1",{id:"uniformed-interchangeable-gachalog-format-standard-v2-4",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#uniformed-interchangeable-gachalog-format-standard-v2-4"},[i("span",null,"Uniformed Interchangeable GachaLog Format Standard v2.4")])],-1)),i("blockquote",null,[i("p",null,[s[0]||(s[0]=a("Uniformed Interchangeable GachaLog Format standard (UIGF) v2.4 ")),n(p,{text:"Archived",type:"message"})])]),s[24]||(s[24]=i("div",{class:"hint-container warning"},[i("p",{class:"hint-container-title"},"Usage of UIGF Statement Requirement"),i("p",null,[a("Application must declare support of UIGF data format only after supporting of both "),i("strong",null,"import"),a(" and "),i("strong",null,"export"),a(" features, and provide link to "),i("a",{href:"https://uigf.org",target:"_blank",rel:"noopener noreferrer"},"UIGF-Org"),a(" in the associated page.")]),i("p",null,"Including only importing feature reduces the interchangeability of user data, and puts the data in a risk that user can not control, which is not in line with intention of UIGF-Org.")],-1)),i("div",u,[s[9]||(s[9]=i("p",{class:"hint-container-title"},"Archived Version",-1)),i("p",null,[s[2]||(s[2]=a("This standard is deprecated and archived, please check our latest ")),n(t,{to:"/en/standards/uigf.html"},{default:e(()=>s[1]||(s[1]=[a("UIGF standard")])),_:1}),s[3]||(s[3]=a(" document."))]),i("p",null,[s[5]||(s[5]=a("The latest UIGF 4.0 ")),s[6]||(s[6]=i("strong",null,"is not backward compatible with previous UIGF versions",-1)),s[7]||(s[7]=a(". The last compatible version is ")),n(t,{to:"/en/standards/uigf-legacy-v3.0.html"},{default:e(()=>s[4]||(s[4]=[a("UIGF v3.0")])),_:1}),s[8]||(s[8]=a("."))])]),s[25]||(s[25]=i("h2",{id:"versions-features",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#versions-features"},[i("span",null,"Versions Features")])],-1)),i("table",null,[s[19]||(s[19]=i("thead",null,[i("tr",null,[i("th",null,"Version"),i("th",null,"Note"),i("th",null,"Compatibility")])],-1)),i("tbody",null,[s[16]||(s[16]=i("tr",null,[i("td",null,[i("code",null,"v2.0")]),i("td",null,"First public version"),i("td",null,"v2.0")],-1)),s[17]||(s[17]=i("tr",null,[i("td",null,[i("code",null,"v2.1")]),i("td",null,"Simplified in language expression, data format is completely consistent with v2.0"),i("td",null,"v2.1 and lower")],-1)),i("tr",null,[i("td",null,[n(t,{to:"/en/standards/uigf-legacy-v2.2.html"},{default:e(()=>s[10]||(s[10]=[i("code",null,"v2.2",-1)])),_:1})]),s[11]||(s[11]=i("td",null,[a("Add "),i("code",null,"info.export_timestamp"),a(" to fill UNIX timestamp")],-1)),s[12]||(s[12]=i("td",null,"v2.2 and lower",-1))]),i("tr",null,[i("td",null,[n(t,{to:"/en/standards/uigf-legacy-v2.3.html"},{default:e(()=>s[13]||(s[13]=[i("code",null,"v2.3",-1)])),_:1})]),s[14]||(s[14]=i("td",null,"Add support for non-Chinese environment, express in Json Schema",-1)),s[15]||(s[15]=i("td",null,"v2.3 and lower",-1))]),s[18]||(s[18]=i("tr",null,[i("td",null,[i("code",null,"v2.4")]),i("td",null,[a("Add "),i("code",null,"info.region_time_zone"),a(" to support time zone processing")]),i("td",null,"v2.4 and lower")],-1))])]),s[26]||(s[26]=l('<h3 id="what-s-changed-in-v2-4" tabindex="-1"><a class="header-anchor" href="#what-s-changed-in-v2-4"><span>What&#39;s Changed in v2.4</span></a></h3><ul><li>Localization compatibility enhancements <ul><li>Added <code>region_time_zone</code> field in the <code>info</code> object</li></ul></li></ul><h2 id="info-data-field-explanations" tabindex="-1"><a class="header-anchor" href="#info-data-field-explanations"><span><code>info</code> Data Field Explanations</span></a></h2><h3 id="region-time-zone" tabindex="-1"><a class="header-anchor" href="#region-time-zone"><span><code>region_time_zone</code></span></a></h3><p>Since <code>time</code> received from wish records are server local time, this field is introduced in order to accurately determine the time zone offset of the wish record time.</p><p>Unlike SRGF, since <code>region_time_zone</code> cannot be obtained directly from the game server, when this field is not provided by the exporter, it needs to be inferred based on the uid.</p><h4 id="mapping" tabindex="-1"><a class="header-anchor" href="#mapping"><span>Mapping</span></a></h4><table><thead><tr><th>First Character of <code>uid</code></th><th><code>region_time_zone</code></th><th>Game Server</th></tr></thead><tbody><tr><td><code>&#39;6&#39;</code></td><td><code>-5</code></td><td>os_usa</td></tr><tr><td><code>&#39;7&#39;</code></td><td><code>1</code></td><td>os_euro</td></tr><tr><td>Any other</td><td><code>8</code></td><td>os_cht, os_asia, cn_gf01, cn_qd01</td></tr></tbody></table><p>Application should not presume value in <code>region_time_zone</code> match the value in the form above, and should be able to handle non-standardized <code>region_time_zone</code> values. If <code>region_time_zone</code> value is different from value inferred based on <code>uid</code>, then value provided by <code>region_time_zone</code> should be preferred.</p><h2 id="list-data-field-explanations" tabindex="-1"><a class="header-anchor" href="#list-data-field-explanations"><span><code>list</code> Data Field Explanations</span></a></h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><p>There is a special field <code>id</code> in the item, which is included in Genshin Impact official API wish history API and represents unique ID of each wish record. When exporting data in UIGF format, app should:</p><ul><li>Make sure each item has a unique and valid <code>id</code></li><li>If there is not <code>id</code> included in the record, then the missing <code>id</code> field should be filled starting form the next item with a valid <code>id</code>. The assigned data should be sequentially decreased (time-ordered), with each decrease being a value of <code>1</code>.</li></ul><h3 id="gacha-type" tabindex="-1"><a class="header-anchor" href="#gacha-type"><span>gacha_type</span></a></h3><p>The probabilistic wish system has a shared pity rule, so we need extra field to identify the pool. In UIGF format, we added a uigf_gacha_type field addition to the original wish record data.</p><p>Please remember to add corresponding uigf_gacha_type field when applying UIGF format</p><h4 id="mapping-1" tabindex="-1"><a class="header-anchor" href="#mapping-1"><span>Mapping</span></a></h4><table><thead><tr><th><code>uigf_gacha_type</code></th><th><code>gacha_type</code></th></tr></thead><tbody><tr><td><code>100</code></td><td><code>100</code></td></tr><tr><td><code>200</code></td><td><code>200</code></td></tr><tr><td><code>301</code></td><td><code>301</code> or <code>400</code></td></tr><tr><td><code>302</code></td><td><code>302</code></td></tr></tbody></table><h3 id="item-id" tabindex="-1"><a class="header-anchor" href="#item-id"><span><code>item_id</code></span></a></h3>',19)),i("p",null,[s[21]||(s[21]=a("Item's in-game ID, refer to ")),n(t,{to:"/en/api.html"},{default:e(()=>s[20]||(s[20]=[a("UIGF API")])),_:1}),s[22]||(s[22]=a(" to get this data"))]),s[27]||(s[27]=l(`<h2 id="json-schema" tabindex="-1"><a class="header-anchor" href="#json-schema"><span>Json Schema</span></a></h2><blockquote><p>UIGF-Org provides <a href="/schema/uigf.json">Json Schema</a> for validation</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;object&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;properties&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;info&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;object&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;properties&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;uid&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;导出记录的 UID&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;lang&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;语言 languagecode2-country/regioncode2&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;export_timestamp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;number&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;导出 UNIX 时间戳（秒）&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;export_time&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;导出时间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;yyyy-MM-dd HH:mm:ss&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;export_app&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;导出 App 名称&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;export_app_version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;导出 App 版本&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;uigf_version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UIGF 版本号&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;pattern&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;v</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">d+</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">d+&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;region_time_zone&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;number&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;区域时区偏移&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;required&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;uid&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;uigf_version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UIGF 导出信息&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;list&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;array&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;items&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;object&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;properties&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;uigf_gacha_type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UIGF 卡池类型&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;description&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;用于区分卡池类型不同，但卡池保底计算相同的物品&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;gacha_type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;卡池类型&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;item_id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;物品的内部 ID&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;count&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;个数，一般为1&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;time&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;获取物品的时间&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;物品名称&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;item_type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;物品类型&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;rank_type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;物品等级&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          &quot;id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;记录内部 ID&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;required&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;uigf_gacha_type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;gacha_type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;item_id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;time&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UIGF 物品&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;物品列表&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;required&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;info&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;list&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UIGF 根对象&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const y=d(o,[["render",g],["__file","uigf-legacy-v2.4.html.vue"]]),m=JSON.parse(`{"path":"/en/standards/uigf-legacy-v2.4.html","title":"Uniformed Interchangeable GachaLog Format Standard v2.4","lang":"en-US","frontmatter":{"category":["Standardization Documents"],"order":6,"head":[["meta",{"name":"keywords","content":"Genshin, Genshin Impact, Gacha, Gacha log, UIGF"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://uigf.org/zh/standards/uigf-legacy-v2.4.html"}],["meta",{"property":"og:url","content":"https://uigf.org/en/standards/uigf-legacy-v2.4.html"}],["meta",{"property":"og:site_name","content":"UIGF-org"}],["meta",{"property":"og:title","content":"Uniformed Interchangeable GachaLog Format Standard v2.4"}],["meta",{"property":"og:description","content":"Uniformed Interchangeable GachaLog Format Standard v2.4 Uniformed Interchangeable GachaLog Format standard (UIGF) v2.4 Usage of UIGF Statement Requirement Application must decla..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-13T05:40:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-13T05:40:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Uniformed Interchangeable GachaLog Format Standard v2.4\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-13T05:40:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"UIGF-org\\",\\"url\\":\\"https://github.com/UIGF-org\\"}]}"]],"description":"Uniformed Interchangeable GachaLog Format Standard v2.4 Uniformed Interchangeable GachaLog Format standard (UIGF) v2.4 Usage of UIGF Statement Requirement Application must decla..."},"headers":[{"level":2,"title":"Versions Features","slug":"versions-features","link":"#versions-features","children":[{"level":3,"title":"What's Changed in v2.4","slug":"what-s-changed-in-v2-4","link":"#what-s-changed-in-v2-4","children":[]}]},{"level":2,"title":"info Data Field Explanations","slug":"info-data-field-explanations","link":"#info-data-field-explanations","children":[{"level":3,"title":"region_time_zone","slug":"region-time-zone","link":"#region-time-zone","children":[]}]},{"level":2,"title":"list Data Field Explanations","slug":"list-data-field-explanations","link":"#list-data-field-explanations","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"gacha_type","slug":"gacha-type","link":"#gacha-type","children":[]},{"level":3,"title":"item_id","slug":"item-id","link":"#item-id","children":[]}]},{"level":2,"title":"Json Schema","slug":"json-schema","link":"#json-schema","children":[]}],"git":{"createdTime":1664573507000,"updatedTime":1720849247000,"contributors":[{"name":"TremblingMoeNew","username":"TremblingMoeNew","email":"zyy_12358@126.com","commits":1,"url":"https://github.com/TremblingMoeNew"},{"name":"ShikiSuen","username":"ShikiSuen","email":"shikisuen@outlook.com","commits":1,"url":"https://github.com/ShikiSuen"},{"name":"Masterain","username":"Masterain","email":"i@irain.in","commits":18,"url":"https://github.com/Masterain"},{"name":"快乐的老鼠宝宝","username":"快乐的老鼠宝宝","email":"laoshubaby@protonmail.com","commits":1,"url":"https://github.com/快乐的老鼠宝宝"},{"name":"目棃","username":"目棃","email":"bt-muli@dgp-studio.cn","commits":2,"url":"https://github.com/目棃"},{"name":"Womsxd","username":"Womsxd","email":"45663319+Womsxd@users.noreply.github.com","commits":2,"url":"https://github.com/Womsxd"},{"name":"目棃","username":"目棃","email":"BT-Muli@outlook.com","commits":1,"url":"https://github.com/目棃"},{"name":"DismissedLight","username":"DismissedLight","email":"1686188646@qq.com","commits":1,"url":"https://github.com/DismissedLight"}]},"readingTime":{"minutes":2.56,"words":767},"filePathRelative":"en/standards/uigf-legacy-v2.4.md","localizedDate":"September 30, 2022","autoDesc":true}`);export{y as comp,m as data};