!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed"],t):t(CodeMirror)}((function(t){"use strict";t.defineMode("htmlembedded",(function(e,n){var i,o,r=n.scriptStartRegex||/^<%/i,d=n.scriptEndRegex||/^%>/i;function a(t,e){return t.match(r,!1)?(e.token=c,i.token(t,e.scriptState)):o.token(t,e.htmlState)}function c(t,e){return t.match(d,!1)?(e.token=a,o.token(t,e.htmlState)):i.token(t,e.scriptState)}return{startState:function(){return i=i||t.getMode(e,n.scriptingModeSpec),o=o||t.getMode(e,"htmlmixed"),{token:n.startOpen?c:a,htmlState:t.startState(o),scriptState:t.startState(i)}},token:function(t,e){return e.token(t,e)},indent:function(t,e){return t.token==a?o.indent(t.htmlState,e):i.indent?i.indent(t.scriptState,e):void 0},copyState:function(e){return{token:e.token,htmlState:t.copyState(o,e.htmlState),scriptState:t.copyState(i,e.scriptState)}},innerMode:function(t){return t.token==c?{state:t.scriptState,mode:i}:{state:t.htmlState,mode:o}}}}),"htmlmixed"),t.defineMIME("application/x-ejs",{name:"htmlembedded",scriptingModeSpec:"javascript"}),t.defineMIME("application/x-aspx",{name:"htmlembedded",scriptingModeSpec:"text/x-csharp"}),t.defineMIME("application/x-jsp",{name:"htmlembedded",scriptingModeSpec:"text/x-java"}),t.defineMIME("application/x-erb",{name:"htmlembedded",scriptingModeSpec:"ruby"})}));