(function(a){if(!a.webshims)a.webshims={loader:{},ready:function(b,d){if(typeof b=="string")b=b.split(" ");a.inArray("DOM",b)!=-1?a(function(){d(a,a.webshims,window,document)}):d(a,a.webshims,window,document)},capturingEvents:function(b){if(document.addEventListener){if(typeof b=="string")b=[b];a.each(b,function(d,c){var f=function(e){e=a.event.fix(e);return a.event.handle.call(this,e)};a.event.special[c]=a.event.special[c]||{};a.extend(a.event.special[c],{setup:function(){this.addEventListener(c,
f,true)},teardown:function(){this.removeEventListener(c,f,true)}})})}},addMethodName:function(b){a.fn[b]&&a.fn[b].shim||(a.fn[b]=function(){var d=arguments,c;this.each(function(){if(this[b]){c=this[b].apply(this,d);if(c!==undefined)return false}});return c!==undefined?c:this})},polyfill:a.noop}})(jQuery);
