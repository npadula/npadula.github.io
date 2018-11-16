function blurTilesExcept(targetIdx) {
    var toBlur = $(".img-tile").get().filter(function (x) {
        var idx = $(x).data("idx");
        return idx != targetIdx;
    });


    $.each(toBlur, function (i, e) {
        $(e).toggleClass("blurred not-blurred");
    });
}


function getIdx(element) {
    var $element = $(element);

    if ($element.hasClass("overlay-content")) {
        var idx = $element.parents(".tile-container").find(".img-tile").data("idx");
        return idx;
    }



    if ($element.hasClass("tile-overlay-op0") || $element.hasClass("tile-overlay-op1")) {
        var idx = $element.siblings(".img-tile").data("idx");
        return idx;
    }


    if ($element.hasClass("tile-container")) {
        var idx = $element.find(".img-tile").data("idx");
        return idx;
    }
}


function getOverlay(idx) {
    return $(".img-tile").get().filter(function (x) {
        return $(x).data("idx") == idx;
    })
        .map(function (x) {
            return $(x);
        })
    [0]
        .siblings(".tile-overlay-op0, .tile-overlay-op1");
}

function onTileEnter(event) {
    var idx = getIdx(event.currentTarget);

    if (!idx) {
        debugger
    }

    blurTilesExcept(idx);

    var overlayToShow = getOverlay(idx);

    overlayToShow.toggleClass("tile-overlay-op0 tile-overlay-op1");

}

function showVideo(id){
    var html = '<iframe width="630" height="473" src="https://www.youtube.com/embed/'+ id +'"></iframe>'
    document.getElementById('modal-body').innerHTML=html;
    $('#viewModal').modal('show');
}

function showModalImage(name){
    document.getElementById('modal-body').innerHTML='<img class="img-responsive" src="' + name + '">';
    $('#viewModal').modal('show');
}

function onImgTileExit(event) {
    $(".blurred").toggleClass("blurred not-blurred");
    var targetIdx = getIdx(event.currentTarget);

    if (!targetIdx) {
        debugger
    }

    var overlayToHide = getOverlay(targetIdx);

    overlayToHide.toggleClass("tile-overlay-op0 tile-overlay-op1");
}

function switchSection(element) {
    var section = $(element).find("span").text();

    if (section == "PROYECTOS") {
        // $("#sectionObras").css("display", "none");
        // $("#sectionProyectos").css("display", "block");
        $("#sectionObras").hide();
        $("#sectionProyectos").show();
    }
    else {
        $("#sectionProyectos").css("display", "none");
        $("#sectionObras").css("display", "block");

    }
}

function showMenu() {
    $('#sectionObras').addClass('hidden');
    $('#sectionProyectos').addClass('hidden');
    $('.effect-airbnb').addClass('animate');
    $('.footer').addClass('hidden');
    $('.picture').addClass('hidden');
}

function hideMenu() {
    $('#sectionObras').removeClass('hidden');
    $('#sectionProyectos').removeClass('hidden');
    $('.effect-airbnb').removeClass('animate');
    $('.footer').removeClass('hidden');
    $('.picture').removeClass('hidden');
}

function onLateralClick(e){
    // console.log(e);
    // e.preventDefault();
    isShowingMenu = ($('.animate').length > 0)

    if (isShowingMenu)
        hideMenu();
}

$('#lateral').on("click",onLateralClick);

$(document).ready(function () {
    $(".tile-container").hover(
        onTileEnter,
        onImgTileExit
    );

    $(".tile-container:not(.nomodal)").click(
        function(e){
            $element = $(e.currentTarget);
            if ($element.hasClass('ytvideo')) {
                var id = $element.find(".img-tile").data("ytid");
                showVideo(id);
            }
            else{
                var name = $(this).find('img').attr('src');
                showModalImage(name);
            }
        }
    );

    $('#menu-link').click(function (e) {
        showMenu();
        return false;
    });

    $('.outer-nav a').click(function (e) {
        hideMenu();
        return false;
    });


    $("#scrollDown").click(function (e){
        e.preventDefault();
        var obrasHash = "#sectionObras";

        var url = window.location.protocol + "//" + window.location.host + window.location.pathname + obrasHash;
        window.location.href = url;
    });
});