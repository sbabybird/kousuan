var tpl = '<div class="row ti-row"><div class="col-2"></div><div class="col-4">$1×$2=</div><span style="width:50px;"></span><div class="col-4">$3÷$4=</div><div class="col-2"></div></div>';

function getNum(min, max) {
    return Math.floor(Math.random()*(max-min))+min;
}

$(document).ready(function() {
    for (var i = 0; i<20; i++) {
        var n1 = getNum(1, 9);
        var s1 = n1.toString();
        if (n1 >= 5) {
            s1 += '0';
        } else {
            s1 += getNum(1, 5);
        }
        var n2 = getNum(1, 9);
        var s2 = n2.toString();
        if (n1 >= 5) {
            s2 += '0';
        } else {
            s2 += ' ';
        }
        var n3 = getNum(1, 15);
        var m3 = getNum(1, 8);
        var s3 = Math.floor(n3*m3).toString();
        var s4 = m3.toString();
        $('#ti').append(tpl.replace("$1", s1).replace("$2", s2).replace("$3", s3).replace("$4", s4));
    }
});
