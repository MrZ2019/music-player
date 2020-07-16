var isConnected = false;


function toTime(number) {
    var min = Math.floor(number / 60);

    var second = number % 60;

    return min + ':' + second;
}


setTimeout(function() {

    $.ajax({
        url: 'http://192.168.3.13:3003',

        success: function(res) {
            if (self == top && !location.host) {
                location = './iframe.html'
            } else {
                isConnected = true;  
            }
        }
    })
}, 500)


Vue._extend = Vue.extend;
Vue.extend = function(opts) {

    if (opts.template && opts.template[0]!= '<' && opts.template[0] != '#') {
        $.ajaxSettings.async = false;  
        var xhr = $.get(opts.template);
        $.ajaxSettings.async = true;
        opts.template = xhr.responseText;
    }
    return Vue._extend.apply(Vue, arguments);
}