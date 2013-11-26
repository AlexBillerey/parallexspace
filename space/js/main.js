function addDiv() {
    var cp = document.createElement('div');
    cp.id = 'controlPanel';
    cp.title = "Control Panel";
    cp.className = 'boo';
    $('body').prepend(cp);
    var cpheader = document.createElement('p');
    var cp_txt = document.createTextNode("Control Panel");
    $(cp).prepend(cpheader);
    $(cpheader).prepend(cp_txt);

}
$(addDiv);
