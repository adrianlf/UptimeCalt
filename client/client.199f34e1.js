function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,p=!1;function m(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const s=t[e].claim_order,i=(o>0&&t[n[o]].claim_order<=s?o+1:m(1,o,(e=>t[n[e]].claim_order),s))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,o=Math.max(a,o)}const s=[],i=[];let a=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(s.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);s.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<s.length&&i[t].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function $(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function S(){return E("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:N(e,r,t[r])}function R(e){return Array.from(e.childNodes)}function I(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,r,o=!1){I(e);const s=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const s=e[r];if(t(s)){const t=n(s);return void 0===t?e.splice(r,1):e[r]=t,o||(e.claim_info.last_index=r),s}}for(let r=e.claim_info.last_index-1;r>=0;r--){const s=e[r];if(t(s)){const t=n(s);return void 0===t?e.splice(r,1):e[r]=t,o?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,s}}return r()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function k(e,t,n,r){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const o=e.attributes[r];n[o.name]||t.push(o.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function C(e,t,n){return k(e,t,n,b)}function O(e,t,n){return k(e,t,n,w)}function H(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function U(e){return H(e," ")}function j(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function M(e,t){const n=j(e,"HTML_TAG_START",0),r=j(e,"HTML_TAG_END",n);if(n===r)return new W(void 0,t);I(e);const o=e.splice(n,r-n+1);y(o[0]),y(o[o.length-1]);const s=o.slice(1,o.length-1);for(const t of s)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new W(s,t)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function B(e,t){e.value=null==t?"":t}function q(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function G(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function z(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=b("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=G();let o;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{o=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||o&&n.contentWindow)&&o(),y(n)}}function K(e,t){const n=[];let r=0;for(const o of t.childNodes)if(8===o.nodeType){const t=o.textContent.trim();t===`HEAD_${e}_END`?(r-=1,n.push(o)):t===`HEAD_${e}_START`&&(r+=1,n.push(o))}else r>0&&n.push(o);return n}class J{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=w(t.nodeName):this.e=b(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)_(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}class W extends J{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)$(this.t,this.n[t],e)}}function V(e,t){return new e(t)}function F(e){h=e}function Y(){if(!h)throw new Error("Function called outside component initialization");return h}function X(e){Y().$$.on_mount.push(e)}function Q(e){Y().$$.after_update.push(e)}function Z(e){Y().$$.on_destroy.push(e)}const ee=[],te=[],ne=[],re=[],oe=Promise.resolve();let se=!1;function ie(e){ne.push(e)}const ae=new Set;let ce=0;function le(){if(0!==ce)return;const e=h;do{try{for(;ce<ee.length;){const e=ee[ce];ce++,F(e),ue(e.$$)}}catch(e){throw ee.length=0,ce=0,e}for(F(null),ee.length=0,ce=0;te.length;)te.pop()();for(let e=0;e<ne.length;e+=1){const t=ne[e];ae.has(t)||(ae.add(t),t())}ne.length=0}while(ee.length);for(;re.length;)re.pop()();se=!1,ae.clear(),F(e)}function ue(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ie)}}const de=new Set;let fe;function he(){fe={r:0,c:[],p:fe}}function pe(){fe.r||o(fe.c),fe=fe.p}function me(e,t){e&&e.i&&(de.delete(e),e.i(t))}function ge(e,t,n,r){if(e&&e.o){if(de.has(e))return;de.add(e),fe.c.push((()=>{de.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function _e(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],a=t[s];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[s]=a}else for(const e in i)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function $e(e){return"object"==typeof e&&null!==e?e:{}}function ye(e){e&&e.c()}function ve(e,t){e&&e.l(t)}function be(e,t,r,i){const{fragment:a,after_update:c}=e.$$;a&&a.m(t,r),i||ie((()=>{const t=e.$$.on_mount.map(n).filter(s);e.$$.on_destroy?e.$$.on_destroy.push(...t):o(t),e.$$.on_mount=[]})),c.forEach(ie)}function we(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(e,t){-1===e.$$.dirty[0]&&(ee.push(e),se||(se=!0,oe.then(le)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(t,n,s,i,a,c,l,u=[-1]){const d=h;F(t);const f=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),m&&Ee(t,e)),n})):[],f.update(),m=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const e=R(n.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&me(t.$$.fragment),be(t,n.target,n.anchor,n.customElement),p=!1,le()}F(d)}class Se{$destroy(){we(this,1),this.$destroy=e}$on(t,n){if(!s(n))return e;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const e=r.indexOf(n);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Te=[];function Ae(t,n=e){let r;const o=new Set;function s(e){if(i(t,e)&&(t=e,r)){const e=!Te.length;for(const e of o)e[1](),Te.push(e,t);if(e){for(let e=0;e<Te.length;e+=2)Te[e][0](Te[e+1]);Te.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,a=e){const c=[i,a];return o.add(c),1===o.size&&(r=n(s)||e),i(t),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}const Ne={};var Pe={owner:"upptime",repo:"upptime",sites:[{name:"Calt",url:"http://tag-gps.net/"},{name:"Wikipedia",url:"https://en.wikipedia.org"}],"status-website":null,path:"https://upptime.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Re(t){let n,r,o,s,i;return{c(){n=b("nav"),r=b("div"),o=x(),s=b("ul"),i=x(),this.h()},l(e){n=C(e,"NAV",{class:!0});var t=R(n);r=C(t,"DIV",{class:!0});var a=R(r);o=U(a),s=C(a,"UL",{class:!0});var c=R(s);i=U(c),c.forEach(y),a.forEach(y),t.forEach(y),this.h()},h(){N(s,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){$(e,n,t),g(n,r),g(r,o),g(r,s),g(s,i)},p(e,[t]){},i:e,o:e,d(e){e&&y(n)}}}function Ie(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Le extends Se{constructor(e){super(),xe(this,e,Ie,Re,i,{segment:0})}}var ke={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ce(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Oe(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function He(e,t){var n,r,o,s,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=ke[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");o=a.exec(e);)r=e.substring(d,o.index),d=a.lastIndex,n=o[0],r.match(/[^\\](\\\\)*\\$/)||((i=o[3]||o[4])?n='<pre class="code '+(o[4]?"poetry":o[2].toLowerCase())+'"><code'+(o[2]?' class="language-'+o[2].toLowerCase()+'"':"")+">"+Ce(Oe(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=o[6])?(i.match(/\./)&&(o[5]=o[5].replace(/^\d+/gm,"")),s=He(Ce(o[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+s+"</"+i+">"):o[8]?n='<img src="'+Oe(o[8])+'" alt="'+Oe(o[7])+'">':o[10]?(l=l.replace("<a>",'<a href="'+Oe(o[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):o[9]?n="<a>":o[12]||o[14]?n="<"+(i="h"+(o[14]?o[14].length:o[13]>"="?1:2))+">"+He(o[12]||o[15],u)+"</"+i+">":o[16]?n="<code>"+Oe(o[16])+"</code>":(o[17]||o[1])&&(n=f(o[17]||"--"))),l+=r,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ue(e,t,n){const r=e.slice();return r[3]=t[n],r}function je(e,t,n){const r=e.slice();return r[3]=t[n],r}function Me(e,t,n){const r=e.slice();return r[8]=t[n],r}function De(t){let n;return{c(){n=b("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Pe.path}/themes/${{}.theme||"light"}.css`)},m(e,t){$(e,n,t)},p:e,d(e){e&&y(n)}}}function Be(t){let n;return{c(){n=b("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",{}.themeUrl)},m(e,t){$(e,n,t)},p:e,d(e){e&&y(n)}}}function qe(t){let n,r;return{c(){n=b("script"),this.h()},l(e){n=C(e,"SCRIPT",{src:!0}),R(n).forEach(y),this.h()},h(){c(n.src,r=t[8].src)||N(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){$(e,n,t)},p:e,d(e){e&&y(n)}}}function Ge(t){let n;return{c(){n=b("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){$(e,n,t)},p:e,d(e){e&&y(n)}}}function ze(t){let n;return{c(){n=b("meta"),this.h()},l(e){n=C(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){$(e,n,t)},p:e,d(e){e&&y(n)}}}function Ke(t){let n,r,o,s,i,a,c,u,d,f,h,p,m,_,w,E,T,A,P=He(Pe.i18n.footer.replace(/\$REPO/,`https://github.com/${Pe.owner}/${Pe.repo}`))+"",I={}.customHeadHtml&&function(t){let n,r,o={}.customHeadHtml+"";return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}();let L=({}.themeUrl?Be:De)(t),k={}.scripts&&function(e){let t,n={}.scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(Me(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);$(e,t,n)},p(e,o){if(0&o){let s;for(n={}.scripts,s=0;s<n.length;s+=1){const i=Me(e,n,s);r[s]?r[s].p(i,o):(r[s]=qe(i),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){v(r,e),e&&y(t)}}}(t),O={}.links&&function(e){let t,n={}.links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ge(je(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);$(e,t,n)},p(e,o){if(0&o){let s;for(n={}.links,s=0;s<n.length;s+=1){const i=je(e,n,s);r[s]?r[s].p(i,o):(r[s]=Ge(i),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){v(r,e),e&&y(t)}}}(t),H={}.metaTags&&function(e){let t,n={}.metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=ze(Ue(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);$(e,t,n)},p(e,o){if(0&o){let s;for(n={}.metaTags,s=0;s<n.length;s+=1){const i=Ue(e,n,s);r[s]?r[s].p(i,o):(r[s]=ze(i),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){v(r,e),e&&y(t)}}}(t),j=Pe["status-website"].css&&function(t){let n,r,o=`<style>${Pe["status-website"].css}</style>`;return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}(),D=Pe["status-website"].js&&function(t){let n,r,o=`<script>${Pe["status-website"].js}<\/script>`;return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}(),B={}.customBodyHtml&&function(t){let n,r,o={}.customBodyHtml+"";return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}();p=new Le({props:{segment:t[0]}});const q=t[2].default,G=function(e,t,n,r){if(e){const o=l(e,t,n,r);return e[0](o)}}(q,t,t[1],null);return{c(){I&&I.c(),n=S(),L.c(),r=b("link"),o=b("link"),s=b("link"),k&&k.c(),i=S(),O&&O.c(),a=S(),H&&H.c(),c=S(),j&&j.c(),u=S(),D&&D.c(),d=S(),f=x(),B&&B.c(),h=x(),ye(p.$$.fragment),m=x(),_=b("main"),G&&G.c(),w=x(),E=b("footer"),T=b("p"),this.h()},l(e){const t=K("svelte-fmspuk",document.head);I&&I.l(t),n=S(),L.l(t),r=C(t,"LINK",{rel:!0,href:!0}),o=C(t,"LINK",{rel:!0,type:!0,href:!0}),s=C(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),i=S(),O&&O.l(t),a=S(),H&&H.l(t),c=S(),j&&j.l(t),u=S(),D&&D.l(t),d=S(),t.forEach(y),f=U(e),B&&B.l(e),h=U(e),ve(p.$$.fragment,e),m=U(e),_=C(e,"MAIN",{class:!0});var l=R(_);G&&G.l(l),l.forEach(y),w=U(e),E=C(e,"FOOTER",{class:!0});var g=R(E);T=C(g,"P",{}),R(T).forEach(y),g.forEach(y),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${Pe.path}/global.css`),N(o,"rel","icon"),N(o,"type","image/svg"),N(o,"href",{}.faviconSvg||{}.favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),N(s,"rel","icon"),N(s,"type","image/png"),N(s,"href",{}.favicon||"/logo-192.png"),N(_,"class","container"),N(E,"class","svelte-jbr799")},m(e,t){I&&I.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,r),g(document.head,o),g(document.head,s),k&&k.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,d),$(e,f,t),B&&B.m(e,t),$(e,h,t),be(p,e,t),$(e,m,t),$(e,_,t),G&&G.m(_,null),$(e,w,t),$(e,E,t),g(E,T),T.innerHTML=P,A=!0},p(e,[t]){({}).customHeadHtml&&I.p(e,t),L.p(e,t),{}.scripts&&k.p(e,t),{}.links&&O.p(e,t),{}.metaTags&&H.p(e,t),Pe["status-website"].css&&j.p(e,t),Pe["status-website"].js&&D.p(e,t),{}.customBodyHtml&&B.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),G&&G.p&&(!A||2&t)&&function(e,t,n,r,o,s){if(o){const i=l(t,n,r,s);e.p(i,o)}}(G,q,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(q,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(me(p.$$.fragment,e),me(G,e),A=!0)},o(e){ge(p.$$.fragment,e),ge(G,e),A=!1},d(e){I&&I.d(e),y(n),L.d(e),y(r),y(o),y(s),k&&k.d(e),y(i),O&&O.d(e),y(a),H&&H.d(e),y(c),j&&j.d(e),y(u),D&&D.d(e),y(d),e&&y(f),B&&B.d(e),e&&y(h),we(p,e),e&&y(m),e&&y(_),G&&G.d(e),e&&y(w),e&&y(E)}}}function Je(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class We extends Se{constructor(e){super(),xe(this,e,Je,Ke,i,{segment:0})}}function Ve(e){let t,n,r=e[1].stack+"";return{c(){t=b("pre"),n=E(r)},l(e){t=C(e,"PRE",{});var o=R(t);n=H(o,r),o.forEach(y)},m(e,r){$(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&D(n,r)},d(e){e&&y(t)}}}function Fe(t){let n,r,o,s,i,a,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Ve(t);return{c(){r=x(),o=b("h1"),s=E(t[0]),i=x(),a=b("p"),c=E(d),l=x(),f&&f.c(),u=S(),this.h()},l(e){K("svelte-1moakz",document.head).forEach(y),r=U(e),o=C(e,"H1",{class:!0});var n=R(o);s=H(n,t[0]),n.forEach(y),i=U(e),a=C(e,"P",{class:!0});var h=R(a);c=H(h,d),h.forEach(y),l=U(e),f&&f.l(e),u=S(),this.h()},h(){N(o,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(e,t){$(e,r,t),$(e,o,t),g(o,s),$(e,i,t),$(e,a,t),g(a,c),$(e,l,t),f&&f.m(e,t),$(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&D(s,e[0]),2&t&&d!==(d=e[1].message+"")&&D(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Ve(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&y(r),e&&y(o),e&&y(i),e&&y(a),e&&y(l),f&&f.d(e),e&&y(u)}}}function Ye(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class Xe extends Se{constructor(e){super(),xe(this,e,Ye,Fe,i,{status:0,error:1})}}function Qe(e){let n,r,o;const s=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return i&&(n=V(i,a())),{c(){n&&ye(n.$$.fragment),r=S()},l(e){n&&ve(n.$$.fragment,e),r=S()},m(e,t){n&&be(n,e,t),$(e,r,t),o=!0},p(e,t){const o=16&t?_e(s,[$e(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){he();const e=n;ge(e.$$.fragment,1,0,(()=>{we(e,1)})),pe()}i?(n=V(i,a()),ye(n.$$.fragment),me(n.$$.fragment,1),be(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(e){o||(n&&me(n.$$.fragment,e),o=!0)},o(e){n&&ge(n.$$.fragment,e),o=!1},d(e){e&&y(r),n&&we(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ye(t.$$.fragment)},l(e){ve(t.$$.fragment,e)},m(e,r){be(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(me(t.$$.fragment,e),n=!0)},o(e){ge(t.$$.fragment,e),n=!1},d(e){we(t,e)}}}function et(e){let t,n,r,o;const s=[Ze,Qe],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=s[t](e),{c(){n.c(),r=S()},l(e){n.l(e),r=S()},m(e,n){i[t].m(e,n),$(e,r,n),o=!0},p(e,o){let c=t;t=a(e),t===c?i[t].p(e,o):(he(),ge(i[c],1,1,(()=>{i[c]=null})),pe(),n=i[t],n?n.p(e,o):(n=i[t]=s[t](e),n.c()),me(n,1),n.m(r.parentNode,r))},i(e){o||(me(n),o=!0)},o(e){ge(n),o=!1},d(e){i[t].d(e),e&&y(r)}}}function tt(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new We({props:s}),{c(){ye(n.$$.fragment)},l(e){ve(n.$$.fragment,e)},m(e,t){be(n,e,t),r=!0},p(e,[t]){const r=12&t?_e(o,[4&t&&{segment:e[2][0]},8&t&&$e(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(me(n.$$.fragment,e),r=!0)},o(e){ge(n.$$.fragment,e),r=!1},d(e){we(n,e)}}}function nt(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return Q(l),u=Ne,d=r,Y().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,i,a,c,r,l]}class rt extends Se{constructor(e){super(),xe(this,e,nt,tt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ot=[],st=[{js:()=>Promise.all([import("./index.e2a96c75.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.c14b9c63.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.c168bad1.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.56919ca7.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.e4eb41ca.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],it=(at=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:at(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:at(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var at;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ct(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function lt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,dt=1;const ft="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ht={};let pt,mt;const gt=e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]}));function _t(e){const t=Object.create(null);return e.length?gt(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function $t(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pt))return null;let t=e.pathname.slice(pt.length);if(""===t&&(t="/"),!ot.some((e=>e.test(t))))for(let n=0;n<it.length;n+=1){const r=it[n],o=r.pattern.exec(t);if(o){const n=_t(e.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:o,page:a}}}}function yt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=lt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=$t(o);if(s){wt(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),ft.pushState({id:ut},"",o.href)}}function vt(){return{x:pageXOffset,y:pageYOffset}}function bt(e){if(ht[ut]=vt(),e.state){const t=$t(new URL(location.href));t?wt(t,e.state.id):location.href=location.href}else!function(e){dt=e}(dt+1),function(e){ut=e}(dt),ft.replaceState({id:ut},"",location.href)}function wt(e,t,n,r){return ct(this,void 0,void 0,(function*(){const o=!!t;if(o)ut=t;else{const e=vt();ht[ut]=e,ut=t=++dt,ht[ut]=n?e:{x:0,y:0}}if(yield mt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ht[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ht[ut]=n,n&&(o||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Et(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let xt,St=null;function Tt(e){const t=lt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=$t(new URL(e,Et(document)));if(t)St&&e===St.href||(St={href:e,promise:Gt(t)}),St.promise}(t.href)}function At(e){clearTimeout(xt),xt=setTimeout((()=>{Tt(e)}),20)}function Nt(e,t={noscroll:!1,replaceState:!1}){const n=$t(new URL(e,Et(document)));if(n){const r=wt(n,null,t.noscroll);return ft[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),r}return location.href=e,new Promise((()=>{}))}const Pt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,It,Lt,kt=!1,Ct=[],Ot="{}";const Ht={page:function(e){const t=Ae(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Ae(null),session:Ae(Pt&&Pt.session)};let Ut,jt,Mt;function Dt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Bt(e){return ct(this,void 0,void 0,(function*(){Rt&&Ht.preloading.set(!0);const t=function(e){return St&&St.href===e.href?St.promise:Gt(e)}(e),n=It={},r=yield t,{redirect:o}=r;if(n===It)if(o)yield Nt(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield qt(n,t,Dt(t,e.page))}}))}function qt(e,t,n){return ct(this,void 0,void 0,(function*(){Ht.page.set(n),Ht.preloading.set(!1),Rt?Rt.$set(t):(t.stores={page:{subscribe:Ht.page.subscribe},preloading:{subscribe:Ht.preloading.subscribe},session:Ht.session},t.level0={props:yield Lt},t.notify=Ht.page.notify,Rt=new rt({target:Mt,props:t,hydrate:!0})),Ct=e,Ot=JSON.stringify(n.query),kt=!0,jt=!1}))}function Gt(e){return ct(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!Lt){const e=()=>({});Lt=Pt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ut)}let a,c=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>ct(this,void 0,void 0,(function*(){const d=r[a];if(function(e,t,n,r){if(r!==Ot)return!0;const o=Ct[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,l,o)&&(u=!0),s.segments[c]=r[a+1],!t)return{segment:d};const f=c++;let h;if(jt||u||!Ct[a]||Ct[a].part!==t.i){u=!1;const{default:r,preload:o}=yield st[t.i].js();let s;s=kt||!Pt.preloaded[a+1]?o?yield o.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ut):{}:Pt.preloaded[a+1],h={component:r,props:s,segment:d,match:l,part:t.i}}else h=Ct[a];return s[`level${f}`]=h})))))}catch(e){s.error=e,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var zt,Kt,Jt;Ht.session.subscribe((e=>ct(void 0,void 0,void 0,(function*(){if(Ut=e,!kt)return;jt=!0;const t=$t(new URL(location.href)),n=It={},{redirect:r,props:o,branch:s}=yield Gt(t);n===It&&(r?yield Nt(r.location,{replaceState:!0}):yield qt(s,o,Dt(o,t.page)))})))),zt={target:document.querySelector("#sapper")},Kt=zt.target,Mt=Kt,Jt=Pt.baseUrl,pt=Jt,mt=Bt,"scrollRestoration"in ft&&(ft.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ft.scrollRestoration="auto"})),addEventListener("load",(()=>{ft.scrollRestoration="manual"})),addEventListener("click",yt),addEventListener("popstate",bt),addEventListener("touchstart",Tt),addEventListener("mousemove",At),Pt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:i}=Pt;Lt||(Lt=o&&o[0]);const a={error:i,status:s,session:r,level0:{props:Lt},level1:{props:{status:s,error:i},component:Xe},segments:o},c=_t(n);qt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ft.replaceState({id:dt},"",t);const n=$t(new URL(location.href));if(n)return wt(n,dt,!0,e)}));export{D as A,T as B,o as C,te as D,M as E,c as F,d as G,W as H,q as I,K as J,w as K,O as L,Nt as M,B as N,A as O,He as P,t as Q,P as R,Se as S,_e as T,Q as U,Z as V,u as W,$e as X,ie as Y,z as Z,x as a,C as b,U as c,R as d,b as e,y as f,N as g,$ as h,xe as i,he as j,pe as k,me as l,E as m,H as n,X as o,g as p,e as q,Pe as r,i as s,ge as t,S as u,v,ye as w,ve as x,be as y,we as z};

import __inject_styles from './inject_styles.803b7e80.js';