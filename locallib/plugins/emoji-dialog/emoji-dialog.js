/*! For license information please see emoji-dialog.js.LICENSE.txt */
!function(){var i=function(i){var e=jQuery,t="emoji-dialog",o=0,a=[],l=[],s="editormd-logo",n=[s,s+"-1x",s+"-2x",s+"-3x",s+"-4x",s+"-5x",s+"-6x",s+"-7x",s+"-8x"],r={"zh-cn":{toolbar:{emoji:"Emoji 表情"},dialog:{emoji:{title:"Emoji 表情"}}},"zh-tw":{toolbar:{emoji:"Emoji 表情"},dialog:{emoji:{title:"Emoji 表情"}}},en:{toolbar:{emoji:"Emoji"},dialog:{emoji:{title:"Emoji"}}}};i.fn.emojiDialog=function(){var d=this.cm,c=this.settings;if(c.emoji){var m=c.pluginPath+t+"/",h=this.editor,f=(d.getCursor(),d.getSelection(),this.classPrefix);e.extend(!0,this.lang,r[this.lang.name]),this.setToolbar();var g,u=this.lang,v=f+t,j=u.dialog.emoji,p=['<div class="'+f+'emoji-dialog-box" style="width: 760px;height: 334px;margin-bottom: 8px;overflow: hidden;">','<div class="'+f+'tab"></div>',"</div>"].join("\n");d.focus(),h.find("."+v).length>0?(g=h.find("."+v),l=[],g.find("a").removeClass("selected"),this.dialogShowMask(g),this.dialogLockScreen(),g.show()):g=this.createDialog({name:v,title:j.title,width:800,height:475,mask:c.dialogShowMask,drag:c.dialogDraggable,content:p,lockScreen:c.dialogLockScreen,maskStyle:{opacity:c.dialogMaskOpacity,backgroundColor:c.dialogMaskBgColor},buttons:{enter:[u.buttons.enter,function(){return d.replaceSelection(l.join(" ")),this.hide().lockScreen(!1).hideMask(),!1}],cancel:[u.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),!1}]}});var b=["Github emoji","Twemoji","Font awesome","Editor.md logo"],w=g.find("."+f+"tab");if(""===w.html()){for(var x='<ul class="'+f+'tab-head">',k=0;k<4;k++)x+="<li"+(0===k?' class="active"':"")+'><a href="javascript:;">'+b[k]+"</a></li>";x+="</ul>",w.append(x);for(var y='<div class="'+f+'tab-container">',S=0;S<4;S++)y+='<div class="'+f+'tab-box" style="height: 260px;overflow: hidden;overflow-y: auto;'+(0===S?"":"display:none;")+'"></div>';y+="</div>",w.append(y)}var C=w.find("."+f+"tab-box"),E=["github-emoji","twemoji","font-awesome",s],M=function(){var t=E[o],s=a[t],n=C.eq(o);if(""===n.html()){var r=function(t,o){for(var a="editormd-logo"===o?"5":20,l=Math.ceil(t.length/a),s='<div class="'+f+'grid-table">',n=0;n<l;n++){for(var r='<div class="'+f+'grid-table-row">',d=0;d<a;d++){var c=e.trim(t[n*a+d]);if(void 0!==c&&""!==c)if("github-emoji"===o){var m="+1"===c?"plus1":c;m="moon"===(m="black_large_square"===m?"black_square":m)?"waxing_gibbous_moon":m,m=i.emoji.path+m+i.emoji.ext,r+='<a href="javascript:;" value=":'+c+':" title=":'+c+':" class="'+f+'emoji-btn"><img src="'+m+'" width="24" class="emoji" title="&#58;'+c+'&#58;" alt="&#58;'+c+'&#58;" /></a>'}else if("twemoji"===o){var h=i.twemoji.path+c+i.twemoji.ext;r+='<a href="javascript:;" value=":tw-'+c+':" title=":tw-'+c+':" class="'+f+'emoji-btn"><img src="'+h+'" width="24" title="twemoji-'+c+'" alt="twemoji-'+c+'" class="emoji twemoji" /></a>'}else"font-awesome"===o?r+='<a href="javascript:;" value=":fa-'+c+':" title=":fa-'+c+':" class="'+f+'emoji-btn"><i class="fa fa-'+c+' fa-emoji" title="'+c+'"></i></a>':"editormd-logo"===o&&(r+='<a href="javascript:;" value=":'+c+':" title=":'+c+':" style="width:20%;" class="'+f+'emoji-btn"><i class="'+c+'" title="Editor.md logo ('+c+')"></i></a>');else r+='<a href="javascript:;" value=""></a>'}s+=r+="</div>"}return s+"</div>"};if(0===o)for(var d=0,c=s.length;d<c;d++){var m=0===d?' style="margin: 0 0 10px;"':' style="margin: 10px 0;"';n.append("<h4"+m+">"+s[d].category+"</h4>"),n.append(r(s[d].list,t))}else n.append(r(s,t));n.find("."+f+"emoji-btn").bind(i.mouseOrTouch("click","touchend"),(function(){e(this).toggleClass("selected"),e(this).hasClass("selected")&&l.push(e(this).attr("value"))}))}};a.length<1?("function"==typeof g.loading&&g.loading(!0),e.getJSON(m+"emoji.json?temp="+Math.random(),(function(i){"function"==typeof g.loading&&g.loading(!1),(a=i)[s]=n,M()}))):M(),w.find("li").bind(i.mouseOrTouch("click","touchend"),(function(){var i=e(this);o=i.index(),i.addClass("active").siblings().removeClass("active"),C.eq(o).show().siblings().hide(),M()}))}else alert("settings.emoji == false")}};"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=i:"function"==typeof define?define.amd?define(["editormd"],(function(e){i(e)})):define((function(e){var t=e("./../../editormd");i(t)})):i(window.editormd)}();