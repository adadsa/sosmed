(function(d,c,a,e){function b(){var f="O Ms Webkit Moz".split(" "),j=f.length,k=true,h=a.createElement("div").style;while(j--){for(var g=0,k=true;g<arguments.length;g++){k=(f[j]+arguments[g] in h)}if(k){return true}}return false}d(a).ready(function(h){if(d.fn.freetile){var g=d(".gallery > ul").freetile({selector:"li",animate:b("Transition")}).on("resize",function(){g.freetile("layout")})}})})(jQuery,window,document);