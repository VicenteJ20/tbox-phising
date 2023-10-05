$(document).ready(function () {
    if (!$.browser.mobile) {
        $("*").addClass("normal");
    }

    $("input:text").focus(function () {
        this.defaultValue = $(this).val();
        $(this).select();
    });

    $.notify.addStyle('tbx', {
        html:
          "<div>" +
            "<div class='clearfix'>" +
              "<div class='title' data-notify-html='title'/>" +
              "<div class='buttons'>" +
                "<button class='yes'>Ver Ahora</button>" + 
                "<button class='no'>Ocultar</button>" + 
              "</div>" +
            "</div>" +
          "</div>"
    });

    $(document).on('click', '.notifyjs-tbx-base .no', function () {
        $(this).trigger('notify-hide');
    });

    $(document).on('click', '.notifyjs-tbx-base .yes', function () {
        location = "/OrdenServicios/PendientesMes";
    });
});