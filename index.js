var TIME_UPDATE =  41 * 1000;
var result = "";
function createArr(from, end){
    arr = [];
    for(var i=0; i< end - from +1; i++){
        arr[i] = from+i;
    }
    return arr;
}
function slot(arr) {
    var s = "";
    for (i = 0; i < arr.length; i++) {
        s += "<li class='number'>" + arr[i] + "</li>";
    }
    return "<ul class='slot'>" + s + "</ul>";
}

function run() {   
    result = ""; 
    prefix_first = shuffle([0]);
    first_arr = prefix_first.concat(shuffle(createArr(1,9)));
    result += first_arr[0];
    first_html = slot(first_arr);

    if(first_arr[0] == 0) {
        second_arr = shuffle(createArr(0,9));
        result += second_arr[0];
        second_html = slot(second_arr);             
    } else {
        prefix_second = shuffle([0,1]);
        second_arr = prefix_second.concat(shuffle(createArr(2,9)));
        result += second_arr[0];
        second_html = slot(second_arr);    
    }

    third_arr = shuffle(createArr(0,9));
    result += third_arr[0];
    third_html = slot(third_arr);

    fourth_arr = shuffle(createArr(0,9))
    result += fourth_arr[0];
    fourth_html = slot(fourth_arr);
    
    var html = first_html + second_html + third_html + fourth_html;


    jQuery("#slots").html(html);
}   

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

function updateResult(){
    jQuery("#level").prepend("<div class='two'>"
        + "<div class='ot'>"
        + " <img src='medal.png'>"
        + "</div>"
        + "<div class='tt'>"
        + "  <h2>" + result + "</h2>"
        + "</div>"
        + "</div>");
}

function disableF5(e) { if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82) e.preventDefault(); };