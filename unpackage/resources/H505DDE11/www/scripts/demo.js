 $('#datetimepicker1').datetimepicker({
 	inline: true,
 	locale: 'zh-cn'
 }).on("dp.update", function (e) {
             $('.day').wrapInner('<span>')
        });

 $('.day').wrapInner('<span>')