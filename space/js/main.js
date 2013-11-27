function init() {
    var cp = document.createElement('div');
    $('body').prepend(cp);
    var cpheader = document.createElement('p');
    cpheader.id = 'controlPanel';
    var cp_txt = document.createTextNode("Control Panel");
    $(cp).prepend(cpheader);
    $(cpheader).prepend(cp_txt);

}
$(init);
$(document).ready(function(){
    $('#controlPanel').click(function(){
        //alert('boo');
        var pfx = ["webkit", "moz", "ms", "o", ""];
        function RunPrefixMethod(obj, method) {

            var p = 0, m, t;
            while (p < pfx.length && !obj[m]) {
                m = method;
                if (pfx[p] == "") {
                    m = m.substr(0,1).toLowerCase() + m.substr(1);
                }
                m = pfx[p] + m;
                t = typeof obj[m];
                if (t != "undefined") {
                    pfx = [pfx[p]];
                    return (t == "function" ? obj[m]() : obj[m]);
                }
                p++;
            }

        }
        var e = document.getElementById("controlPanel");

        e.onclick = function() {

            if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
                RunPrefixMethod(document, "CancelFullScreen");
            }
            else {
                RunPrefixMethod(e, "RequestFullScreen");
            }

        }
    });
})
