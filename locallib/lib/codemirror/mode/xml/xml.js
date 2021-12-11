!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}((function(t){"use strict";t.defineMode("xml",(function(e,n){var r=e.indentUnit,o=n.multilineTagIndentFactor||1,a=n.multilineTagIndentPastTag;null==a&&(a=!0);var i,l,u=n.htmlMode?{autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0}:{autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,caseFold:!1},d=n.alignCDATA;function c(t,e){function n(n){return e.tokenize=n,n(t,e)}var r=t.next();return"<"==r?t.eat("!")?t.eat("[")?t.match("CDATA[")?n(s("atom","]]>")):null:t.match("--")?n(s("comment","--\x3e")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),n(m(1))):null:t.eat("?")?(t.eatWhile(/[\w\._\-]/),e.tokenize=s("meta","?>"),"meta"):(i=t.eat("/")?"closeTag":"openTag",e.tokenize=f,"tag bracket"):"&"==r?(t.eat("#")?t.eat("x")?t.eatWhile(/[a-fA-F\d]/)&&t.eat(";"):t.eatWhile(/[\d]/)&&t.eat(";"):t.eatWhile(/[\w\.\-:]/)&&t.eat(";"))?"atom":"error":(t.eatWhile(/[^&<]/),null)}function f(t,e){var n,r,o=t.next();if(">"==o||"/"==o&&t.eat(">"))return e.tokenize=c,i=">"==o?"endTag":"selfcloseTag","tag bracket";if("="==o)return i="equals",null;if("<"==o){e.tokenize=c,e.state=x,e.tagName=e.tagStart=null;var a=e.tokenize(t,e);return a?a+" tag error":"tag error"}return/[\'\"]/.test(o)?(e.tokenize=(n=o,r=function(t,e){for(;!t.eol();)if(t.next()==n){e.tokenize=f;break}return"string"},r.isInAttribute=!0,r),e.stringStartCol=t.column(),e.tokenize(t,e)):(t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function s(t,e){return function(n,r){for(;!n.eol();){if(n.match(e)){r.tokenize=c;break}n.next()}return t}}function m(t){return function(e,n){for(var r;null!=(r=e.next());){if("<"==r)return n.tokenize=m(t+1),n.tokenize(e,n);if(">"==r){if(1==t){n.tokenize=c;break}return n.tokenize=m(t-1),n.tokenize(e,n)}}return"meta"}}function g(t,e,n){this.prev=t.context,this.tagName=e,this.indent=t.indented,this.startOfLine=n,(u.doNotIndent.hasOwnProperty(e)||t.context&&t.context.noIndent)&&(this.noIndent=!0)}function p(t){t.context&&(t.context=t.context.prev)}function h(t,e){for(var n;;){if(!t.context)return;if(n=t.context.tagName,!u.contextGrabbers.hasOwnProperty(n)||!u.contextGrabbers[n].hasOwnProperty(e))return;p(t)}}function x(t,e,n){return"openTag"==t?(n.tagStart=e.column(),b):"closeTag"==t?k:x}function b(t,e,n){return"word"==t?(n.tagName=e.current(),l="tag",v):(l="error",b)}function k(t,e,n){if("word"==t){var r=e.current();return n.context&&n.context.tagName!=r&&u.implicitlyClosed.hasOwnProperty(n.context.tagName)&&p(n),n.context&&n.context.tagName==r?(l="tag",w):(l="tag error",y)}return l="error",y}function w(t,e,n){return"endTag"!=t?(l="error",w):(p(n),x)}function y(t,e,n){return l="error",w(t,0,n)}function v(t,e,n){if("word"==t)return l="attribute",z;if("endTag"==t||"selfcloseTag"==t){var r=n.tagName,o=n.tagStart;return n.tagName=n.tagStart=null,"selfcloseTag"==t||u.autoSelfClosers.hasOwnProperty(r)?h(n,r):(h(n,r),n.context=new g(n,r,o==n.indented)),x}return l="error",v}function z(t,e,n){return"equals"==t?N:(u.allowMissing||(l="error"),v(t,0,n))}function N(t,e,n){return"string"==t?T:"word"==t&&u.allowUnquoted?(l="string",v):(l="error",v(t,0,n))}function T(t,e,n){return"string"==t?T:v(t,0,n)}return{startState:function(){return{tokenize:c,state:x,indented:0,tagName:null,tagStart:null,context:null}},token:function(t,e){if(!e.tagName&&t.sol()&&(e.indented=t.indentation()),t.eatSpace())return null;i=null;var n=e.tokenize(t,e);return(n||i)&&"comment"!=n&&(l=null,e.state=e.state(i||n,t,e),l&&(n="error"==l?n+" error":l)),n},indent:function(e,n,i){var l=e.context;if(e.tokenize.isInAttribute)return e.tagStart==e.indented?e.stringStartCol+1:e.indented+r;if(l&&l.noIndent)return t.Pass;if(e.tokenize!=f&&e.tokenize!=c)return i?i.match(/^(\s*)/)[0].length:0;if(e.tagName)return a?e.tagStart+e.tagName.length+2:e.tagStart+r*o;if(d&&/<!\[CDATA\[/.test(n))return 0;var s=n&&/^<(\/)?([\w_:\.-]*)/.exec(n);if(s&&s[1])for(;l;){if(l.tagName==s[2]){l=l.prev;break}if(!u.implicitlyClosed.hasOwnProperty(l.tagName))break;l=l.prev}else if(s)for(;l;){var m=u.contextGrabbers[l.tagName];if(!m||!m.hasOwnProperty(s[2]))break;l=l.prev}for(;l&&!l.startOfLine;)l=l.prev;return l?l.indent+r:0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:n.htmlMode?"html":"xml",helperType:n.htmlMode?"html":"xml"}})),t.defineMIME("text/xml","xml"),t.defineMIME("application/xml","xml"),t.mimeModes.hasOwnProperty("text/html")||t.defineMIME("text/html",{name:"xml",htmlMode:!0})}));