!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+"in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",n)}function a(e,a){(e.next||e.push)&&t(a,e.next||e.push),this.regex=n(e.regex),this.token=function(e){if(!e)return null;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}(e.token),this.data=e}function r(e,t){return function(n,a){if(a.pending){var r=a.pending.shift();return 0==a.pending.length&&(a.pending=null),n.pos+=r.text.length,r.token}if(a.local){if(a.local.end&&n.match(a.local.end)){var o=a.local.endToken||null;return a.local=a.localState=null,o}var l;return o=a.local.mode.token(n,a.localState),a.local.endScan&&(l=a.local.endScan.exec(n.current()))&&(n.pos=n.start+l.index),o}for(var s=e[a.state],d=0;d<s.length;d++){var c=s[d],u=(!c.data.sol||n.sol())&&n.match(c.regex);if(u){if(c.data.next?a.state=c.data.next:c.data.push?((a.stack||(a.stack=[])).push(a.state),a.state=c.data.push):c.data.pop&&a.stack&&a.stack.length&&(a.state=a.stack.pop()),c.data.mode&&i(t,a,c.data.mode,c.token),c.data.indent&&a.indent.push(n.indentation()+t.indentUnit),c.data.dedent&&a.indent.pop(),u.length>2){a.pending=[];for(var f=2;f<u.length;f++)u[f]&&a.pending.push({text:u[f],token:c.token[f-1]});return n.backUp(u[0].length-(u[1]?u[1].length:0)),c.token[0]}return c.token&&c.token.join?c.token[0]:c.token}}return n.next(),null}}function o(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var a in e)if(e.hasOwnProperty(a)){if(!t.hasOwnProperty(a)||!o(e[a],t[a]))return!1;n++}for(var a in t)t.hasOwnProperty(a)&&n--;return 0==n}function i(t,a,r,i){var l;if(r.persistent)for(var s=a.persistentStates;s&&!l;s=s.next)(r.spec?o(r.spec,s.spec):r.mode==s.mode)&&(l=s);var d=l?l.mode:r.mode||e.getMode(t,r.spec),c=l?l.state:e.startState(d);r.persistent&&!l&&(a.persistentStates={mode:d,spec:r.spec,state:c,next:a.persistentStates}),a.localState=c,a.local={mode:d,end:r.end&&n(r.end),endScan:r.end&&!1!==r.forceEnd&&n(r.end,!1),endToken:i&&i.join?i[i.length-1]:i}}function l(t,n){return function(a,r,o){if(a.local&&a.local.mode.indent)return a.local.mode.indent(a.localState,r,o);if(null==a.indent||a.local||n.dontIndentStates&&function(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}(a.state,n.dontIndentStates)>-1)return e.Pass;var i=a.indent.length-1,l=t[a.state];e:for(;;){for(var s=0;s<l.length;s++){var d=l[s];if(d.data.dedent&&!1!==d.data.dedentIfLineStart){var c=d.regex.exec(r);if(c&&c[0]){i--,(d.next||d.push)&&(l=t[d.next||d.push]),r=r.slice(c[0].length);continue e}}}break}return i<0?0:a.indent[i]}}e.defineSimpleMode=function(t,n){e.defineMode(t,(function(t){return e.simpleMode(t,n)}))},e.simpleMode=function(n,o){t(o,"start");var i={},s=o.meta||{},d=!1;for(var c in o)if(c!=s&&o.hasOwnProperty(c))for(var u=i[c]=[],f=o[c],p=0;p<f.length;p++){var h=f[p];u.push(new a(h,o)),(h.indent||h.dedent)&&(d=!0)}var g={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:d?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var a=t.persistentStates;a;a=a.next)n.persistentStates={mode:a.mode,spec:a.spec,state:a.state==t.localState?n.localState:e.copyState(a.mode,a.state),next:n.persistentStates};return n},token:r(i,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:l(i,s)};if(s)for(var S in s)s.hasOwnProperty(S)&&(g[S]=s[S]);return g}}));