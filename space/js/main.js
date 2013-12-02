function init() {
    var cp = document.createElement('div');
    var cpheader = document.createElement('p');
    var visor_status = document.createElement('span');
    var cp_visor = document.createTextNode("Visor:");
    var visor_status_off = document.createTextNode('Off')
    $('body').prepend(cp);
    cp.id = 'controlPanel';
    $(cp).prepend(cpheader);
    $(cpheader).prepend(cp_visor);
    $(cpheader).append(visor_status);
    $(visor_status).prepend(visor_status_off);

}
$(init);
$(document).ready(function () {
    function showVisor() {
        var visor = document.createElement('div');
        visor.id = 'visor';
        $('body').prepend(visor);
        $(visor).animate({
            height: "100vh"
        }, 500);
    }

    function remove_visor() {
        $('#visor').animate({
            height: 0
        }, 500, function () {
            $('#visor').remove();
        });
    }

    $('#controlPanel').on('click',function () {
        var txtSpan = $('#controlPanel span');
        $(txtSpan).toggleClass('on');
        if ($(txtSpan).attr('class') == 'on') {
            $(txtSpan).text('On');
            showVisor();
        }
        else {
            $(txtSpan).text('Off');
            remove_visor();
        }

    });
});
