!function(){var t=CodeMirror.getMode({indentUnit:2},"xml");function a(a){test.mode(a,t,Array.prototype.slice.call(arguments,1),"xml")}a("matching","[tag&bracket <][tag top][tag&bracket >]","  text","  [tag&bracket <][tag inner][tag&bracket />]","[tag&bracket </][tag top][tag&bracket >]"),a("nonmatching","[tag&bracket <][tag top][tag&bracket >]","  [tag&bracket <][tag inner][tag&bracket />]","  [tag&bracket </][tag&error tip][tag&bracket&error >]"),a("doctype","[meta <!doctype foobar>]","[tag&bracket <][tag top][tag&bracket />]"),a("cdata","[tag&bracket <][tag top][tag&bracket >]","  [atom <![CDATA[foo]","[atom barbazguh]]]]>]","[tag&bracket </][tag top][tag&bracket >]"),t=CodeMirror.getMode({indentUnit:2},"text/html"),a("selfclose","[tag&bracket <][tag html][tag&bracket >]",'  [tag&bracket <][tag link] [attribute rel]=[string stylesheet] [attribute href]=[string "/foobar"][tag&bracket >]',"[tag&bracket </][tag html][tag&bracket >]"),a("list","[tag&bracket <][tag ol][tag&bracket >]","  [tag&bracket <][tag li][tag&bracket >]one","  [tag&bracket <][tag li][tag&bracket >]two","[tag&bracket </][tag ol][tag&bracket >]"),a("valueless","[tag&bracket <][tag input] [attribute type]=[string checkbox] [attribute checked][tag&bracket />]"),a("pThenArticle","[tag&bracket <][tag p][tag&bracket >]","  foo","[tag&bracket <][tag article][tag&bracket >]bar")}();