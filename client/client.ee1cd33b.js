function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,p=!1;function m(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const s=t[e].claim_order,i=(o>0&&t[n[o]].claim_order<=s?o+1:m(1,o,(e=>t[n[e]].claim_order),s))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,o=Math.max(a,o)}const s=[],i=[];let a=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(s.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);s.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<s.length&&i[t].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function $(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function S(){return E("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function P(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:P(e,r,t[r])}function I(e){return Array.from(e.childNodes)}function L(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function R(e,t,n,r,o=!1){L(e);const s=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const s=e[r];if(t(s)){const t=n(s);return void 0===t?e.splice(r,1):e[r]=t,o||(e.claim_info.last_index=r),s}}for(let r=e.claim_info.last_index-1;r>=0;r--){const s=e[r];if(t(s)){const t=n(s);return void 0===t?e.splice(r,1):e[r]=t,o?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,s}}return r()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function k(e,t,n,r){return R(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const o=e.attributes[r];n[o.name]||t.push(o.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function C(e,t,n){return k(e,t,n,b)}function O(e,t,n){return k(e,t,n,w)}function H(e,t){return R(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function U(e){return H(e," ")}function j(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function M(e,t){const n=j(e,"HTML_TAG_START",0),r=j(e,"HTML_TAG_END",n);if(n===r)return new W(void 0,t);L(e);const o=e.splice(n,r-n+1);y(o[0]),y(o[o.length-1]);const s=o.slice(1,o.length-1);for(const t of s)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new W(s,t)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function q(e,t){e.value=null==t?"":t}function B(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function G(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function z(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=b("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=G();let o;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{o=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||o&&n.contentWindow)&&o(),y(n)}}function K(e,t=document.body){return Array.from(t.querySelectorAll(e))}class J{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=w(t.nodeName):this.e=b(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)_(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}class W extends J{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)$(this.t,this.n[t],e)}}function V(e){h=e}function F(){if(!h)throw new Error("Function called outside component initialization");return h}function Y(e){F().$$.on_mount.push(e)}function X(e){F().$$.after_update.push(e)}function Q(e){F().$$.on_destroy.push(e)}const Z=[],ee=[],te=[],ne=[],re=Promise.resolve();let oe=!1;function se(e){te.push(e)}const ie=new Set;let ae=0;function ce(){const e=h;do{for(;ae<Z.length;){const e=Z[ae];ae++,V(e),le(e.$$)}for(V(null),Z.length=0,ae=0;ee.length;)ee.pop()();for(let e=0;e<te.length;e+=1){const t=te[e];ie.has(t)||(ie.add(t),t())}te.length=0}while(Z.length);for(;ne.length;)ne.pop()();oe=!1,ie.clear(),V(e)}function le(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}const ue=new Set;let de;function fe(){de={r:0,c:[],p:de}}function he(){de.r||o(de.c),de=de.p}function pe(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function me(e,t,n,r){if(e&&e.o){if(ue.has(e))return;ue.add(e),de.c.push((()=>{ue.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function ge(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],a=t[s];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[s]=a}else for(const e in i)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function _e(e){return"object"==typeof e&&null!==e?e:{}}function $e(e){e&&e.c()}function ye(e,t){e&&e.l(t)}function ve(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||se((()=>{const t=c.map(n).filter(s);l?l.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(se)}function be(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(e,t){-1===e.$$.dirty[0]&&(Z.push(e),oe||(oe=!0,re.then(ce)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(t,n,s,i,a,c,l,u=[-1]){const d=h;V(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),m&&we(t,e)),n})):[],f.update(),m=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const e=I(n.target);f.fragment&&f.fragment.l(e),e.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&pe(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),p=!1,ce()}V(d)}class xe{$destroy(){be(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Se=[];function Te(t,n=e){let r;const o=new Set;function s(e){if(i(t,e)&&(t=e,r)){const e=!Se.length;for(const e of o)e[1](),Se.push(e,t);if(e){for(let e=0;e<Se.length;e+=2)Se[e][0](Se[e+1]);Se.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,a=e){const c=[i,a];return o.add(c),1===o.size&&(r=n(s)||e),i(t),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}const Ae={};var Pe={owner:"upptime",repo:"upptime",sites:[{name:"Calt",url:"http://tag-gps.net/"},{name:"Wikipedia",url:"https://en.wikipedia.org"}],"status-website":null,path:"https://upptime.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ne(t){let n,r,o,s,i;return{c(){n=b("nav"),r=b("div"),o=x(),s=b("ul"),i=x(),this.h()},l(e){n=C(e,"NAV",{class:!0});var t=I(n);r=C(t,"DIV",{class:!0});var a=I(r);o=U(a),s=C(a,"UL",{class:!0});var c=I(s);i=U(c),c.forEach(y),a.forEach(y),t.forEach(y),this.h()},h(){P(s,"class","svelte-a08hsz"),P(r,"class","container svelte-a08hsz"),P(n,"class","svelte-a08hsz")},m(e,t){$(e,n,t),g(n,r),g(r,o),g(r,s),g(s,i)},p(e,[t]){},i:e,o:e,d(e){e&&y(n)}}}function Ie(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Le extends xe{constructor(e){super(),Ee(this,e,Ie,Ne,i,{segment:0})}}var Re={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function ke(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ce(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oe(e,t){var n,r,o,s,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=Re[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");o=a.exec(e);)r=e.substring(d,o.index),d=a.lastIndex,n=o[0],r.match(/[^\\](\\\\)*\\$/)||((i=o[3]||o[4])?n='<pre class="code '+(o[4]?"poetry":o[2].toLowerCase())+'"><code'+(o[2]?' class="language-'+o[2].toLowerCase()+'"':"")+">"+ke(Ce(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=o[6])?(i.match(/\./)&&(o[5]=o[5].replace(/^\d+/gm,"")),s=Oe(ke(o[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+s+"</"+i+">"):o[8]?n='<img src="'+Ce(o[8])+'" alt="'+Ce(o[7])+'">':o[10]?(l=l.replace("<a>",'<a href="'+Ce(o[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):o[9]?n="<a>":o[12]||o[14]?n="<"+(i="h"+(o[14]?o[14].length:o[13]>"="?1:2))+">"+Oe(o[12]||o[15],u)+"</"+i+">":o[16]?n="<code>"+Ce(o[16])+"</code>":(o[17]||o[1])&&(n=f(o[17]||"--"))),l+=r,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function He(e,t,n){const r=e.slice();return r[3]=t[n],r}function Ue(e,t,n){const r=e.slice();return r[3]=t[n],r}function je(e,t,n){const r=e.slice();return r[8]=t[n],r}function Me(t){let n;return{c(){n=b("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",`${Pe.path}/themes/${{}.theme||"light"}.css`)},m(e,t){$(e,n,t)},p:e,d(e){e&&y(n)}}}function De(t){let n;return{c(){n=b("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",{}.themeUrl)},m(e,t){$(e,n,t)},p:e,d(e){e&&y(n)}}}function qe(t){let n,r;return{c(){n=b("script"),this.h()},l(e){n=C(e,"SCRIPT",{src:!0}),I(n).forEach(y),this.h()},h(){c(n.src,r=t[8].src)||P(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){$(e,n,t)},p:e,d(e){e&&y(n)}}}function Be(t){let n;return{c(){n=b("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){P(n,"rel",t[3].rel),P(n,"href",t[3].href),P(n,"media",t[3].media)},m(e,t){$(e,n,t)},p:e,d(e){e&&y(n)}}}function Ge(t){let n;return{c(){n=b("meta"),this.h()},l(e){n=C(e,"META",{name:!0,content:!0}),this.h()},h(){P(n,"name",t[3].name),P(n,"content",t[3].content)},m(e,t){$(e,n,t)},p:e,d(e){e&&y(n)}}}function ze(t){let n,r,o,s,i,a,c,u,d,f,h,p,m,_,w,E,T,A,N=Oe(Pe.i18n.footer.replace(/\$REPO/,`https://github.com/${Pe.owner}/${Pe.repo}`))+"",L={}.customHeadHtml&&function(t){let n,r,o={}.customHeadHtml+"";return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}();let R=({}.themeUrl?De:Me)(t),k={}.scripts&&function(e){let t,n={}.scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(je(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);$(e,t,n)},p(e,o){if(0&o){let s;for(n={}.scripts,s=0;s<n.length;s+=1){const i=je(e,n,s);r[s]?r[s].p(i,o):(r[s]=qe(i),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){v(r,e),e&&y(t)}}}(t),O={}.links&&function(e){let t,n={}.links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Be(Ue(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);$(e,t,n)},p(e,o){if(0&o){let s;for(n={}.links,s=0;s<n.length;s+=1){const i=Ue(e,n,s);r[s]?r[s].p(i,o):(r[s]=Be(i),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){v(r,e),e&&y(t)}}}(t),H={}.metaTags&&function(e){let t,n={}.metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ge(He(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);$(e,t,n)},p(e,o){if(0&o){let s;for(n={}.metaTags,s=0;s<n.length;s+=1){const i=He(e,n,s);r[s]?r[s].p(i,o):(r[s]=Ge(i),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){v(r,e),e&&y(t)}}}(t),j=Pe["status-website"].css&&function(t){let n,r,o=`<style>${Pe["status-website"].css}</style>`;return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}(),D=Pe["status-website"].js&&function(t){let n,r,o=`<script>${Pe["status-website"].js}<\/script>`;return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}(),q={}.customBodyHtml&&function(t){let n,r,o={}.customBodyHtml+"";return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&y(r),e&&n.d()}}}();p=new Le({props:{segment:t[0]}});const B=t[2].default,G=function(e,t,n,r){if(e){const o=l(e,t,n,r);return e[0](o)}}(B,t,t[1],null);return{c(){L&&L.c(),n=S(),R.c(),r=b("link"),o=b("link"),s=b("link"),k&&k.c(),i=S(),O&&O.c(),a=S(),H&&H.c(),c=S(),j&&j.c(),u=S(),D&&D.c(),d=S(),f=x(),q&&q.c(),h=x(),$e(p.$$.fragment),m=x(),_=b("main"),G&&G.c(),w=x(),E=b("footer"),T=b("p"),this.h()},l(e){const t=K('[data-svelte="svelte-fmspuk"]',document.head);L&&L.l(t),n=S(),R.l(t),r=C(t,"LINK",{rel:!0,href:!0}),o=C(t,"LINK",{rel:!0,type:!0,href:!0}),s=C(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),i=S(),O&&O.l(t),a=S(),H&&H.l(t),c=S(),j&&j.l(t),u=S(),D&&D.l(t),d=S(),t.forEach(y),f=U(e),q&&q.l(e),h=U(e),ye(p.$$.fragment,e),m=U(e),_=C(e,"MAIN",{class:!0});var l=I(_);G&&G.l(l),l.forEach(y),w=U(e),E=C(e,"FOOTER",{class:!0});var g=I(E);T=C(g,"P",{}),I(T).forEach(y),g.forEach(y),this.h()},h(){P(r,"rel","stylesheet"),P(r,"href",`${Pe.path}/global.css`),P(o,"rel","icon"),P(o,"type","image/svg"),P(o,"href",{}.faviconSvg||{}.favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),P(s,"rel","icon"),P(s,"type","image/png"),P(s,"href",{}.favicon||"/logo-192.png"),P(_,"class","container"),P(E,"class","svelte-jbr799")},m(e,t){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,r),g(document.head,o),g(document.head,s),k&&k.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,d),$(e,f,t),q&&q.m(e,t),$(e,h,t),ve(p,e,t),$(e,m,t),$(e,_,t),G&&G.m(_,null),$(e,w,t),$(e,E,t),g(E,T),T.innerHTML=N,A=!0},p(e,[t]){({}).customHeadHtml&&L.p(e,t),R.p(e,t),{}.scripts&&k.p(e,t),{}.links&&O.p(e,t),{}.metaTags&&H.p(e,t),Pe["status-website"].css&&j.p(e,t),Pe["status-website"].js&&D.p(e,t),{}.customBodyHtml&&q.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),G&&G.p&&(!A||2&t)&&function(e,t,n,r,o,s){if(o){const i=l(t,n,r,s);e.p(i,o)}}(G,B,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(B,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(pe(p.$$.fragment,e),pe(G,e),A=!0)},o(e){me(p.$$.fragment,e),me(G,e),A=!1},d(e){L&&L.d(e),y(n),R.d(e),y(r),y(o),y(s),k&&k.d(e),y(i),O&&O.d(e),y(a),H&&H.d(e),y(c),j&&j.d(e),y(u),D&&D.d(e),y(d),e&&y(f),q&&q.d(e),e&&y(h),be(p,e),e&&y(m),e&&y(_),G&&G.d(e),e&&y(w),e&&y(E)}}}function Ke(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class Je extends xe{constructor(e){super(),Ee(this,e,Ke,ze,i,{segment:0})}}function We(e){let t,n,r=e[1].stack+"";return{c(){t=b("pre"),n=E(r)},l(e){t=C(e,"PRE",{});var o=I(t);n=H(o,r),o.forEach(y)},m(e,r){$(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&D(n,r)},d(e){e&&y(t)}}}function Ve(t){let n,r,o,s,i,a,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&We(t);return{c(){r=x(),o=b("h1"),s=E(t[0]),i=x(),a=b("p"),c=E(d),l=x(),f&&f.c(),u=S(),this.h()},l(e){K('[data-svelte="svelte-1moakz"]',document.head).forEach(y),r=U(e),o=C(e,"H1",{class:!0});var n=I(o);s=H(n,t[0]),n.forEach(y),i=U(e),a=C(e,"P",{class:!0});var h=I(a);c=H(h,d),h.forEach(y),l=U(e),f&&f.l(e),u=S(),this.h()},h(){P(o,"class","svelte-17w3omn"),P(a,"class","svelte-17w3omn")},m(e,t){$(e,r,t),$(e,o,t),g(o,s),$(e,i,t),$(e,a,t),g(a,c),$(e,l,t),f&&f.m(e,t),$(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&D(s,e[0]),2&t&&d!==(d=e[1].message+"")&&D(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=We(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&y(r),e&&y(o),e&&y(i),e&&y(a),e&&y(l),f&&f.d(e),e&&y(u)}}}function Fe(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class Ye extends xe{constructor(e){super(),Ee(this,e,Fe,Ve,i,{status:0,error:1})}}function Xe(e){let n,r,o;const s=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&$e(n.$$.fragment),r=S()},l(e){n&&ye(n.$$.fragment,e),r=S()},m(e,t){n&&ve(n,e,t),$(e,r,t),o=!0},p(e,t){const o=16&t?ge(s,[_e(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){fe();const e=n;me(e.$$.fragment,1,0,(()=>{be(e,1)})),he()}i?(n=new i(a()),$e(n.$$.fragment),pe(n.$$.fragment,1),ve(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(e){o||(n&&pe(n.$$.fragment,e),o=!0)},o(e){n&&me(n.$$.fragment,e),o=!1},d(e){e&&y(r),n&&be(n,e)}}}function Qe(e){let t,n;return t=new Ye({props:{error:e[0],status:e[1]}}),{c(){$e(t.$$.fragment)},l(e){ye(t.$$.fragment,e)},m(e,r){ve(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(pe(t.$$.fragment,e),n=!0)},o(e){me(t.$$.fragment,e),n=!1},d(e){be(t,e)}}}function Ze(e){let t,n,r,o;const s=[Qe,Xe],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=s[t](e),{c(){n.c(),r=S()},l(e){n.l(e),r=S()},m(e,n){i[t].m(e,n),$(e,r,n),o=!0},p(e,o){let c=t;t=a(e),t===c?i[t].p(e,o):(fe(),me(i[c],1,1,(()=>{i[c]=null})),he(),n=i[t],n?n.p(e,o):(n=i[t]=s[t](e),n.c()),pe(n,1),n.m(r.parentNode,r))},i(e){o||(pe(n),o=!0)},o(e){me(n),o=!1},d(e){i[t].d(e),e&&y(r)}}}function et(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[Ze]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new Je({props:s}),{c(){$e(n.$$.fragment)},l(e){ye(n.$$.fragment,e)},m(e,t){ve(n,e,t),r=!0},p(e,[t]){const r=12&t?ge(o,[4&t&&{segment:e[2][0]},8&t&&_e(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(pe(n.$$.fragment,e),r=!0)},o(e){me(n.$$.fragment,e),r=!1},d(e){be(n,e)}}}function tt(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return X(l),u=Ae,d=r,F().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,i,a,c,r,l]}class nt extends xe{constructor(e){super(),Ee(this,e,tt,et,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const rt=[],ot=[{js:()=>Promise.all([import("./index.59ad2875.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.89b20dff.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.0518d98c.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.d7ca1ed0.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.d6b87a9d.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],st=(it=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:it(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:it(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var it;
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
function at(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function ct(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let lt,ut=1;const dt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ft={};let ht,pt;function mt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function gt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ht))return null;let t=e.pathname.slice(ht.length);if(""===t&&(t="/"),!rt.some((e=>e.test(t))))for(let n=0;n<st.length;n+=1){const r=st[n],o=r.pattern.exec(t);if(o){const n=mt(e.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:o,page:a}}}}function _t(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ct(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=gt(o);if(s){vt(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),dt.pushState({id:lt},"",o.href)}}function $t(){return{x:pageXOffset,y:pageYOffset}}function yt(e){if(ft[lt]=$t(),e.state){const t=gt(new URL(location.href));t?vt(t,e.state.id):location.href=location.href}else!function(e){ut=e}(ut+1),function(e){lt=e}(ut),dt.replaceState({id:lt},"",location.href)}function vt(e,t,n,r){return at(this,void 0,void 0,(function*(){const o=!!t;if(o)lt=t;else{const e=$t();ft[lt]=e,lt=t=++ut,ft[lt]=n?e:{x:0,y:0}}if(yield pt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ft[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ft[lt]=n,n&&(o||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function bt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let wt,Et=null;function xt(e){const t=ct(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=gt(new URL(e,bt(document)));if(t)Et&&e===Et.href||(Et={href:e,promise:qt(t)}),Et.promise}(t.href)}function St(e){clearTimeout(wt),wt=setTimeout((()=>{xt(e)}),20)}function Tt(e,t={noscroll:!1,replaceState:!1}){const n=gt(new URL(e,bt(document)));if(n){const r=vt(n,null,t.noscroll);return dt[t.replaceState?"replaceState":"pushState"]({id:lt},"",e),r}return location.href=e,new Promise((()=>{}))}const At="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pt,Nt,It,Lt=!1,Rt=[],kt="{}";const Ct={page:function(e){const t=Te(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Te(null),session:Te(At&&At.session)};let Ot,Ht,Ut;function jt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Mt(e){return at(this,void 0,void 0,(function*(){Pt&&Ct.preloading.set(!0);const t=function(e){return Et&&Et.href===e.href?Et.promise:qt(e)}(e),n=Nt={},r=yield t,{redirect:o}=r;if(n===Nt)if(o)yield Tt(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Dt(n,t,jt(t,e.page))}}))}function Dt(e,t,n){return at(this,void 0,void 0,(function*(){Ct.page.set(n),Ct.preloading.set(!1),Pt?Pt.$set(t):(t.stores={page:{subscribe:Ct.page.subscribe},preloading:{subscribe:Ct.preloading.subscribe},session:Ct.session},t.level0={props:yield It},t.notify=Ct.page.notify,Pt=new nt({target:Ut,props:t,hydrate:!0})),Rt=e,kt=JSON.stringify(n.query),Lt=!0,Ht=!1}))}function qt(e){return at(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!It){const e=()=>({});It=At.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ot)}let a,c=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>at(this,void 0,void 0,(function*(){const d=r[a];if(function(e,t,n,r){if(r!==kt)return!0;const o=Rt[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,l,o)&&(u=!0),s.segments[c]=r[a+1],!t)return{segment:d};const f=c++;let h;if(Ht||u||!Rt[a]||Rt[a].part!==t.i){u=!1;const{default:r,preload:o}=yield ot[t.i].js();let s;s=Lt||!At.preloaded[a+1]?o?yield o.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ot):{}:At.preloaded[a+1],h={component:r,props:s,segment:d,match:l,part:t.i}}else h=Rt[a];return s[`level${f}`]=h})))))}catch(e){s.error=e,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var Bt,Gt,zt;Ct.session.subscribe((e=>at(void 0,void 0,void 0,(function*(){if(Ot=e,!Lt)return;Ht=!0;const t=gt(new URL(location.href)),n=Nt={},{redirect:r,props:o,branch:s}=yield qt(t);n===Nt&&(r?yield Tt(r.location,{replaceState:!0}):yield Dt(s,o,jt(o,t.page)))})))),Bt={target:document.querySelector("#sapper")},Gt=Bt.target,Ut=Gt,zt=At.baseUrl,ht=zt,pt=Mt,"scrollRestoration"in dt&&(dt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{dt.scrollRestoration="auto"})),addEventListener("load",(()=>{dt.scrollRestoration="manual"})),addEventListener("click",_t),addEventListener("popstate",yt),addEventListener("touchstart",xt),addEventListener("mousemove",St),At.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:i}=At;It||(It=o&&o[0]);const a={error:i,status:s,session:r,level0:{props:It},level1:{props:{status:s,error:i},component:Ye},segments:o},c=mt(n);Dt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;dt.replaceState({id:ut},"",t);const n=gt(new URL(location.href));if(n)return vt(n,ut,!0,e)}));export{D as A,T as B,o as C,ee as D,M as E,c as F,d as G,W as H,B as I,K as J,w as K,O as L,Tt as M,q as N,A as O,Oe as P,t as Q,N as R,xe as S,ge as T,X as U,Q as V,u as W,_e as X,se as Y,z as Z,x as a,C as b,U as c,I as d,b as e,y as f,P as g,$ as h,Ee as i,fe as j,he as k,pe as l,E as m,H as n,Y as o,g as p,e as q,Pe as r,i as s,me as t,S as u,v,$e as w,ye as x,ve as y,be as z};

import __inject_styles from './inject_styles.803b7e80.js';