var tpl = '<div class="row ti-row"><div class="col-2"></div><div class="col-4">$1×$2=</div><div class="col-4">$3÷$4=</div><div class="col-2"></div></div>';

function getShiwei() {
    var n = parseInt(Math.random()*10);
    while(n<1) {
        n = parseInt(Math.random()*10);
    }
    return n;
}

function getGewei(shiwei) {
    var n = parseInt(Math.random()*10);

    if (shiwei > 5) {
        n = 0;
    } else {
        while(n<1) {
            n = parseInt(Math.random()*10);
        }
    }
    return n;
}

$(document).ready(function() {
    for (var i = 0; i<20; i++) {
        var n1 = getShiwei();
        var m1 = getGewei(n1);
        var s1 = n1.toString() + m1.toString();
        var n2 = getShiwei();
        var m2 = getGewei(n2);
        var s2 = n2.toString() + m2.toString();
        var n3 = getShiwei();
        var m3 = getGewei(n3);
        var n4 = getShiwei();
        var s3 = n3.toString() + m3.toString();
        var s4 = n4.toString();
        $('#ti').append(tpl.replace("$1", s1).replace("$2", s2).replace("$3", s3).replace("$4", s4));
    }
});
