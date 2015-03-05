sessvars=function(){var x={};return x.$={prefs:{memLimit:2e3,autoFlush:!0,crossDomain:!1,includeProtos:!1,includeFunctions:!1},parent:x,clearMem:function(){for(var t in this.parent)"$"!=t&&(this.parent[t]=void 0);this.flush()},usedMem:function(){return x={},Math.round(this.flush(x)/1024)},usedMemPercent:function(){return Math.round(this.usedMem()/this.prefs.memLimit)},flush:function(t){var e,i={},n=this.$$;t=t||top;for(var r in this.parent)i[r]=this.parent[r];return i.$=this.prefs,n.includeProtos=this.prefs.includeProtos,n.includeFunctions=this.prefs.includeFunctions,e=this.$$.make(i),t!=top?e.length:e.length/1024>this.prefs.memLimit?!1:(t.name=e,!0)},getDomain:function(){var t=location.href;return t=t.split("///").join("//"),t=t.substring(t.indexOf("://")+3).split("/")[0],t=t.substring(t.indexOf(".")+1)},debug:function(t){var t=t||this,e=arguments.callee;if(!document.body)return void setTimeout(function(){e(t)},200);t.flush();var i=document.getElementById("sessvarsDebugDiv");i||(i=document.createElement("div"),document.body.insertBefore(i,document.body.firstChild)),i.id="sessvarsDebugDiv",i.innerHTML='<div style="line-height:20px;padding:5px;font-size:11px;font-family:Verdana,Arial,Helvetica;z-index:10000;background:#FFFFCC;border: 1px solid #333;margin-bottom:12px"><b style="font-family:Trebuchet MS;font-size:20px">sessvars.js - debug info:</b><br/><br/>Memory usage: '+t.usedMem()+" Kb ("+t.usedMemPercent()+'%)&nbsp;&nbsp;&nbsp;<span style="cursor:pointer"><b>[Clear memory]</b></span><br/>'+top.name.split("\n").join("<br/>")+"</div>",i.getElementsByTagName("span")[0].onclick=function(){t.clearMem(),location.reload()}},init:function(){var t={},e=this;try{t=this.$$.toObject(top.name)}catch(i){t={}}if(this.prefs=t.$||e.prefs,this.prefs.crossDomain||this.prefs.currentDomain==this.getDomain())for(var n in t)this.parent[n]=t[n];else this.prefs.currentDomain=this.getDomain();this.parent.$=e,e.flush();var r=function(){e.prefs.autoFlush&&e.flush()};window.addEventListener?addEventListener("unload",r,!1):window.attachEvent?window.attachEvent("onunload",r):this.prefs.autoFlush=!1}},x.$.$$={compactOutput:!1,includeProtos:!1,includeFunctions:!1,detectCirculars:!0,restoreCirculars:!0,make:function(t,e){return this.restore=e,this.mem=[],this.pathMem=[],this.toJsonStringArray(t).join("")},toObject:function(x){if(!this.cleaner)try{this.cleaner=new RegExp('^("(\\\\.|[^"\\\\\\n\\r])*?"|[,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t])+?$')}catch(a){this.cleaner=/^(true|false|null|\[.*\]|\{.*\}|".*"|\d+|\d+\.\d+)$/}if(!this.cleaner.test(x))return{};if(eval("this.myObj="+x),!this.restoreCirculars||!alert)return this.myObj;if(this.includeFunctions){var x=this.myObj;for(var i in x)"string"!=typeof x[i]||x[i].indexOf("JSONincludedFunc:")||(x[i]=x[i].substring(17),eval("x[i]="+x[i]))}this.restoreCode=[],this.make(this.myObj,!0);var r=this.restoreCode.join(";")+";";return eval('r=r.replace(/\\W([0-9]{1,})(\\W)/g,"[$1]$2").replace(/\\.\\;/g,";")'),eval(r),this.myObj},toJsonStringArray:function(t,e){e||(this.path=[]),e=e||[];var i;switch(typeof t){case"object":if(this.lastObj=t,this.detectCirculars){for(var n=this.mem,r=this.pathMem,s=0;s<n.length;s++)if(t===n[s])return e.push('"JSONcircRef:'+r[s]+'"'),e;n.push(t),r.push(this.path.join("."))}if(t){if(t.constructor==Array){e.push("[");for(var s=0;s<t.length;++s)this.path.push(s),s>0&&e.push(",\n"),this.toJsonStringArray(t[s],e),this.path.pop();return e.push("]"),e}if("undefined"!=typeof t.toString){e.push("{");var o=!0;for(var s in t)if(this.includeProtos||t[s]!==t.constructor.prototype[s]){this.path.push(s);var u=e.length;o||e.push(this.compactOutput?",":",\n"),this.toJsonStringArray(s,e),e.push(":"),this.toJsonStringArray(t[s],e),e[e.length-1]==i?e.splice(u,e.length-u):o=!1,this.path.pop()}return e.push("}"),e}return e}return e.push("null"),e;case"unknown":case"undefined":case"function":if(!this.includeFunctions)return e.push(i),e;t="JSONincludedFunc:"+t,e.push('"');var a=["\n","\\n","\r","\\r",'"','\\"'];t+="";for(var s=0;6>s;s+=2)t=t.split(a[s]).join(a[s+1]);return e.push(t),e.push('"'),e;case"string":this.restore&&0==t.indexOf("JSONcircRef:")&&this.restoreCode.push("this.myObj."+this.path.join(".")+"="+t.split("JSONcircRef:").join("this.myObj.")),e.push('"');var a=["\n","\\n","\r","\\r",'"','\\"'];t+="";for(var s=0;6>s;s+=2)t=t.split(a[s]).join(a[s+1]);return e.push(t),e.push('"'),e;default:return e.push(String(t)),e}}},x.$.init(),x}();