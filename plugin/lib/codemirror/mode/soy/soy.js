!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed"],t):t(CodeMirror)}((function(t){"use strict";var e=["template","literal","msg","fallbackmsg","let","if","elseif","else","switch","case","default","foreach","ifempty","for","call","param","deltemplate","delcall","log"];t.defineMode("soy",(function(n){var a=t.getMode(n,"text/plain"),i={html:t.getMode(n,{name:"text/html",multilineTagIndentFactor:2,multilineTagIndentPastTag:!1}),attributes:a,text:a,uri:a,css:t.getMode(n,"text/css"),js:t.getMode(n,{name:"text/javascript",statementIndent:2*n.indentUnit})};function l(t){return t[t.length-1]}function o(t,e,n){var a=t.string,i=n.exec(a.substr(t.pos));i&&(t.string=a.substr(0,t.pos+i.index));var l=t.hideFirstChars(e.indent,(function(){return e.localMode.token(t,e.localState)}));return t.string=a,l}return{startState:function(){return{kind:[],kindTag:[],soyState:[],indent:0,localMode:i.html,localState:t.startState(i.html)}},copyState:function(e){return{tag:e.tag,kind:e.kind.concat([]),kindTag:e.kindTag.concat([]),soyState:e.soyState.concat([]),indent:e.indent,localMode:e.localMode,localState:t.copyState(e.localMode,e.localState)}},token:function(a,s){var r;switch(l(s.soyState)){case"comment":return a.match(/^.*?\*\//)?s.soyState.pop():a.skipToEnd(),"comment";case"variable":return a.match(/^}/)?(s.indent-=2*n.indentUnit,s.soyState.pop(),"variable-2"):(a.next(),null);case"tag":if(a.match(/^\/?}/))return"/template"==s.tag||"/deltemplate"==s.tag?s.indent=0:s.indent-=("/}"==a.current()||-1==e.indexOf(s.tag)?2:1)*n.indentUnit,s.soyState.pop(),"keyword";if(a.match(/^(\w+)(?==)/)){if("kind"==a.current()&&(r=a.match(/^="([^"]+)/,!1))){var c=r[1];s.kind.push(c),s.kindTag.push(s.tag),s.localMode=i[c]||i.html,s.localState=t.startState(s.localMode)}return"attribute"}return a.match(/^"/)?(s.soyState.push("string"),"string"):(a.next(),null);case"literal":return a.match(/^(?=\{\/literal})/)?(s.indent-=n.indentUnit,s.soyState.pop(),this.token(a,s)):o(a,s,/\{\/literal}/);case"string":return a.match(/^.*?"/)?s.soyState.pop():a.skipToEnd(),"string"}return a.match(/^\/\*/)?(s.soyState.push("comment"),"comment"):a.match(a.sol()?/^\s*\/\/.*/:/^\s+\/\/.*/)?"comment":a.match(/^\{\$\w*/)?(s.indent+=2*n.indentUnit,s.soyState.push("variable"),"variable-2"):a.match(/^\{literal}/)?(s.indent+=n.indentUnit,s.soyState.push("literal"),"keyword"):(r=a.match(/^\{([\/@\\]?\w*)/))?("/switch"!=r[1]&&(s.indent+=(/^(\/|(else|elseif|case|default)$)/.test(r[1])&&"switch"!=s.tag?1:2)*n.indentUnit),s.tag=r[1],s.tag=="/"+l(s.kindTag)&&(s.kind.pop(),s.kindTag.pop(),s.localMode=i[l(s.kind)]||i.html,s.localState=t.startState(s.localMode)),s.soyState.push("tag"),"keyword"):o(a,s,/\{|\s+\/\/|\/\*/)},indent:function(e,a){var i=e.indent,o=l(e.soyState);if("comment"==o)return t.Pass;if("literal"==o)/^\{\/literal}/.test(a)&&(i-=n.indentUnit);else{if(/^\s*\{\/(template|deltemplate)\b/.test(a))return 0;/^\{(\/|(fallbackmsg|elseif|else|ifempty)\b)/.test(a)&&(i-=n.indentUnit),"switch"!=e.tag&&/^\{(case|default)\b/.test(a)&&(i-=n.indentUnit),/^\{\/switch\b/.test(a)&&(i-=n.indentUnit)}return i&&e.localMode.indent&&(i+=e.localMode.indent(e.localState,a)),i},innerMode:function(t){return t.soyState.length&&"literal"!=l(t.soyState)?null:{state:t.localState,mode:t.localMode}},electricInput:/^\s*\{(\/|\/template|\/deltemplate|\/switch|fallbackmsg|elseif|else|case|default|ifempty|\/literal\})$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",fold:"indent"}}),"htmlmixed"),t.registerHelper("hintWords","soy",e.concat(["delpackage","namespace","alias","print","css","debugger"])),t.defineMIME("text/x-soy","soy")}));