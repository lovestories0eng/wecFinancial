!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){"use strict";e.defineMode("shell",(function(){var e={};function t(t,n){for(var r=n.split(" "),i=0;i<r.length;i++)e[r[i]]=t}function n(t,n){if(t.eatSpace())return null;var s=t.sol(),u=t.next();if("\\"===u)return t.next(),null;if("'"===u||'"'===u||"`"===u)return n.tokens.unshift(r(u)),o(t,n);if("#"===u)return s&&t.eat("!")?(t.skipToEnd(),"meta"):(t.skipToEnd(),"comment");if("$"===u)return n.tokens.unshift(i),o(t,n);if("+"===u||"="===u)return"operator";if("-"===u)return t.eat("-"),t.eatWhile(/\w/),"attribute";if(/\d/.test(u)&&(t.eatWhile(/\d/),t.eol()||!/\w/.test(t.peek())))return"number";t.eatWhile(/[\w-]/);var f=t.current();return"="===t.peek()&&/\w+/.test(f)?"def":e.hasOwnProperty(f)?e[f]:null}function r(e){return function(t,n){for(var r,o=!1,s=!1;null!=(r=t.next());){if(r===e&&!s){o=!0;break}if("$"===r&&!s&&"'"!==e){s=!0,t.backUp(1),n.tokens.unshift(i);break}s=!s&&"\\"===r}return!o&&s||n.tokens.shift(),"`"===e||")"===e?"quote":"string"}}t("atom","true false"),t("keyword","if then do else elif while until for in esac fi fin fil done exit set unset export function"),t("builtin","ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo tee telnet top touch vi vim wall wc wget who write yes zsh");var i=function(e,t){t.tokens.length>1&&e.eat("$");var n=e.next(),i=/\w/;return"{"===n&&(i=/[^}]/),"("===n?(t.tokens[0]=r(")"),o(e,t)):(/\d/.test(n)||(e.eatWhile(i),e.eat("}")),t.tokens.shift(),"def")};function o(e,t){return(t.tokens[0]||n)(e,t)}return{startState:function(){return{tokens:[]}},token:function(e,t){return o(e,t)},lineComment:"#",fold:"brace"}})),e.defineMIME("text/x-sh","shell")}));