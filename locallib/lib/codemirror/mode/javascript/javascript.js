!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){"use strict";e.defineMode("javascript",(function(t,r){var n,a,i=t.indentUnit,o=r.statementIndent,c=r.jsonld,l=r.json||c,u=r.typescript,f=r.wordCharacters||/[\w$\xa1-\uffff]/,s=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"},o={if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:n,break:n,continue:n,new:n,delete:n,throw:n,debugger:n,var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:a,typeof:a,instanceof:a,true:i,false:i,null:i,undefined:i,NaN:i,Infinity:i,this:e("this"),module:e("module"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n};if(u){var c={type:"variable",style:"variable-3"},l={interface:e("interface"),extends:e("extends"),constructor:e("constructor"),public:e("public"),private:e("private"),protected:e("protected"),static:e("static"),string:c,number:c,bool:c,any:c};for(var f in l)o[f]=l[f]}return o}(),d=/[+\-*&%=<>!?|~^]/,p=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function v(e,t,r){return n=e,a=r,t}function m(e,t){var r,n=e.next();if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,a=!1;if(c&&"@"==e.peek()&&e.match(p))return t.tokenize=m,v("jsonld-keyword","meta");for(;null!=(n=e.next())&&(n!=r||a);)a=!a&&"\\"==n;return a||(t.tokenize=m),v("string","string")}),t.tokenize(e,t);if("."==n&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return v("number","number");if("."==n&&e.match(".."))return v("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return v(n);if("="==n&&e.eat(">"))return v("=>","operator");if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),v("number","number");if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),v("number","number");if("/"==n)return e.eat("*")?(t.tokenize=y,y(e,t)):e.eat("/")?(e.skipToEnd(),v("comment","comment")):"operator"==t.lastType||"keyword c"==t.lastType||"sof"==t.lastType||/^[\[{}\(,;:]$/.test(t.lastType)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),v("regexp","string-2")):(e.eatWhile(d),v("operator","operator",e.current()));if("`"==n)return t.tokenize=b,b(e,t);if("#"==n)return e.skipToEnd(),v("error","error");if(d.test(n))return e.eatWhile(d),v("operator","operator",e.current());if(f.test(n)){e.eatWhile(f);var a=e.current(),i=s.propertyIsEnumerable(a)&&s[a];return i&&"."!=t.lastType?v(i.type,i.style,a):v("variable","variable",a)}}function y(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=m;break}n="*"==r}return v("comment","comment")}function b(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=m;break}n=!n&&"\\"==r}return v("quasi","string-2",e.current())}function k(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){for(var n=0,a=!1,i=r-1;i>=0;--i){var o=e.string.charAt(i),c="([{}])".indexOf(o);if(c>=0&&c<3){if(!n){++i;break}if(0==--n)break}else if(c>=3&&c<6)++n;else if(f.test(o))a=!0;else{if(/["'\/]/.test(o))return;if(a&&!n){++i;break}}}a&&!n&&(t.fatArrowAt=i)}}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function h(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function g(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}var w={state:null,column:null,marked:null,cc:null};function j(){for(var e=arguments.length-1;e>=0;e--)w.cc.push(arguments[e])}function M(){return j.apply(null,arguments),!0}function V(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}var n=w.state;if(n.context){if(w.marked="def",t(n.localVars))return;n.localVars={name:e,next:n.localVars}}else{if(t(n.globalVars))return;r.globalVars&&(n.globalVars={name:e,next:n.globalVars})}}var E={name:"this",next:{name:"arguments"}};function I(){w.state.context={prev:w.state.context,vars:w.state.localVars},w.state.localVars=E}function z(){w.state.localVars=w.state.context.vars,w.state.context=w.state.context.prev}function T(e,t){var r=function(){var r=w.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new h(n,w.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function A(){var e=w.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function C(e){return function t(r){return r==e?M():";"==e?j():M(t)}}function $(e,t){return"var"==e?M(T("vardef",t.length),ee,C(";"),A):"keyword a"==e?M(T("form"),q,$,A):"keyword b"==e?M(T("form"),$,A):"{"==e?M(T("}"),Y,A):";"==e?M():"if"==e?("else"==w.state.lexical.info&&w.state.cc[w.state.cc.length-1]==A&&w.state.cc.pop()(),M(T("form"),q,$,A,ie)):"function"==e?M(se):"for"==e?M(T("form"),oe,$,A):"variable"==e?M(T("stat"),G):"switch"==e?M(T("form"),q,T("}","switch"),C("{"),Y,A,A):"case"==e?M(q,C(":")):"default"==e?M(C(":")):"catch"==e?M(T("form"),I,C("("),de,C(")"),$,A,z):"module"==e?M(T("form"),I,be,z,A):"class"==e?M(T("form"),pe,A):"export"==e?M(T("form"),ke,A):"import"==e?M(T("form"),xe,A):j(T("stat"),q,C(";"),A)}function q(e){return P(e,!1)}function O(e){return P(e,!0)}function P(e,t){if(w.state.fatArrowAt==w.stream.start){var r=t?F:D;if("("==e)return M(I,T(")"),R(te,")"),A,C("=>"),r,z);if("variable"==e)return j(I,te,C("=>"),r,z)}var n=t?H:N;return x.hasOwnProperty(e)?M(n):"function"==e?M(se,n):"keyword c"==e?M(t?W:S):"("==e?M(T(")"),S,Me,C(")"),A,n):"operator"==e||"spread"==e?M(t?O:q):"["==e?M(T("]"),we,A,n):"{"==e?X(K,"}",null,n):"quasi"==e?j(U,n):M()}function S(e){return e.match(/[;\}\)\],]/)?j():j(q)}function W(e){return e.match(/[;\}\)\],]/)?j():j(O)}function N(e,t){return","==e?M(q):H(e,t,!1)}function H(e,t,r){var n=0==r?N:H,a=0==r?q:O;return"=>"==e?M(I,r?F:D,z):"operator"==e?/\+\+|--/.test(t)?M(n):"?"==t?M(q,C(":"),a):M(a):"quasi"==e?j(U,n):";"!=e?"("==e?X(O,")","call",n):"."==e?M(J,n):"["==e?M(T("]"),S,C("]"),A,n):void 0:void 0}function U(e,t){return"quasi"!=e?j():"${"!=t.slice(t.length-2)?M(U):M(q,B)}function B(e){if("}"==e)return w.marked="string-2",w.state.tokenize=b,M(U)}function D(e){return k(w.stream,w.state),j("{"==e?$:q)}function F(e){return k(w.stream,w.state),j("{"==e?$:O)}function G(e){return":"==e?M(A,$):j(N,C(";"),A)}function J(e){if("variable"==e)return w.marked="property",M()}function K(e,t){return"variable"==e||"keyword"==w.style?(w.marked="property",M("get"==t||"set"==t?L:Q)):"number"==e||"string"==e?(w.marked=c?"property":w.style+" property",M(Q)):"jsonld-keyword"==e?M(Q):"["==e?M(q,C("]"),Q):void 0}function L(e){return"variable"!=e?j(Q):(w.marked="property",M(se))}function Q(e){return":"==e?M(O):"("==e?j(se):void 0}function R(e,t){function r(n){if(","==n){var a=w.state.lexical;return"call"==a.info&&(a.pos=(a.pos||0)+1),M(e,r)}return n==t?M():M(C(t))}return function(n){return n==t?M():j(e,r)}}function X(e,t,r){for(var n=3;n<arguments.length;n++)w.cc.push(arguments[n]);return M(T(t,r),R(e,t),A)}function Y(e){return"}"==e?M():j($,Y)}function Z(e){if(u&&":"==e)return M(_)}function _(e){if("variable"==e)return w.marked="variable-3",M()}function ee(){return j(te,Z,ne,ae)}function te(e,t){return"variable"==e?(V(t),M()):"["==e?X(te,"]"):"{"==e?X(re,"}"):void 0}function re(e,t){return"variable"!=e||w.stream.match(/^\s*:/,!1)?("variable"==e&&(w.marked="property"),M(C(":"),te,ne)):(V(t),M(ne))}function ne(e,t){if("="==t)return M(O)}function ae(e){if(","==e)return M(ee)}function ie(e,t){if("keyword b"==e&&"else"==t)return M(T("form","else"),$,A)}function oe(e){if("("==e)return M(T(")"),ce,C(")"),A)}function ce(e){return"var"==e?M(ee,C(";"),ue):";"==e?M(ue):"variable"==e?M(le):j(q,C(";"),ue)}function le(e,t){return"in"==t||"of"==t?(w.marked="keyword",M(q)):M(N,ue)}function ue(e,t){return";"==e?M(fe):"in"==t||"of"==t?(w.marked="keyword",M(q)):j(q,C(";"),fe)}function fe(e){")"!=e&&M(q)}function se(e,t){return"*"==t?(w.marked="keyword",M(se)):"variable"==e?(V(t),M(se)):"("==e?M(I,T(")"),R(de,")"),A,$,z):void 0}function de(e){return"spread"==e?M(de):j(te,Z)}function pe(e,t){if("variable"==e)return V(t),M(ve)}function ve(e,t){return"extends"==t?M(q,ve):"{"==e?M(T("}"),me,A):void 0}function me(e,t){return"variable"==e||"keyword"==w.style?(w.marked="property","get"==t||"set"==t?M(ye,se,me):M(se,me)):"*"==t?(w.marked="keyword",M(me)):";"==e?M(me):"}"==e?M():void 0}function ye(e){return"variable"!=e?j():(w.marked="property",M())}function be(e,t){return"string"==e?M($):"variable"==e?(V(t),M(ge)):void 0}function ke(e,t){return"*"==t?(w.marked="keyword",M(ge,C(";"))):"default"==t?(w.marked="keyword",M(q,C(";"))):j($)}function xe(e){return"string"==e?M():j(he,ge)}function he(e,t){return"{"==e?X(he,"}"):("variable"==e&&V(t),M())}function ge(e,t){if("from"==t)return w.marked="keyword",M(q)}function we(e){return"]"==e?M():j(O,je)}function je(e){return"for"==e?j(Me,C("]")):","==e?M(R(W,"]")):j(R(O,"]"))}function Me(e){return"for"==e?M(oe,Me):"if"==e?M(q,Me):void 0}return A.lex=!0,{startState:function(e){var t={tokenize:m,lastType:"sof",cc:[],lexical:new h((e||0)-i,0,"block",!1),localVars:r.localVars,context:r.localVars&&{vars:r.localVars},indented:0};return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),k(e,t)),t.tokenize!=y&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==n?r:(t.lastType="operator"!=n||"++"!=a&&"--"!=a?n:"incdec",function(e,t,r,n,a){var i=e.cc;for(w.state=e,w.stream=a,w.marked=null,w.cc=i,w.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():l?q:$)(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return w.marked?w.marked:"variable"==r&&g(e,n)?"variable-2":t}}(t,r,n,a,e))},indent:function(t,n){if(t.tokenize==y)return e.Pass;if(t.tokenize!=m)return 0;var a=n&&n.charAt(0),c=t.lexical;if(!/^\s*else\b/.test(n))for(var l=t.cc.length-1;l>=0;--l){var u=t.cc[l];if(u==A)c=c.prev;else if(u!=ie)break}"stat"==c.type&&"}"==a&&(c=c.prev),o&&")"==c.type&&"stat"==c.prev.type&&(c=c.prev);var f=c.type,s=a==f;return"vardef"==f?c.indented+("operator"==t.lastType||","==t.lastType?c.info+1:0):"form"==f&&"{"==a?c.indented:"form"==f?c.indented+i:"stat"==f?c.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||d.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,n)?o||i:0):"switch"!=c.info||s||0==r.doubleIndentSwitch?c.align?c.column+(s?0:1):c.indented+(s?0:i):c.indented+(/^(?:case|default)\b/.test(n)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:l?null:"/*",blockCommentEnd:l?null:"*/",lineComment:l?null:"//",fold:"brace",helperType:l?"json":"javascript",jsonldMode:c,jsonMode:l}})),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}));