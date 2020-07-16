
var DragModule = Vue.extend({
	data: function() {
		return {
			msg: 'drag'
		}
	},
	mounted: function() {
		var status = false;
		var startX, startY;

		var exchange = function(a, b) {
			var x,y;
			var parent = $(a).parent();


			if($(a).index() > $(b).index()) {
				x = b;
				y = a;
			} else {
				x = a;
				y = b;
			}

			var n = y.next();

			var n2 = x.next();

			if (n.length) {
				x.insertBefore(n);
			} else {
				parent.append(x);
			}
	

			if (n2[0] != y[0]) {
				y.insertBefore(n2);
			}
		}

		var getCurItem = function(x, y) {

			var items = $('.box .item');

			var ret;

			items.each(function(i, dom) {

				dom = $(dom);

				var offset = dom.offset();

				if ((x >= offset.left) && (x <= offset.left + dom.width()) &&
					(y >= offset.top) && (y <= offset.top + dom.height())) {

					ret = dom;
				}

				console.log(`y:${y} top:${offset.top}`)
				console.log(`x:${x} left:${offset.left}`)

			})

			return ret;
		}

		$('.box .item .content').on('touchstart', function(e) {

			if (status) {
				return;
			}
			status = true;

			var obj = e.originalEvent.touches[0];

			startX = obj.pageX;
			startY = obj.pageY;

			console.log(`x:${startX} y:${startY}`)

			curDrag = $(this).parent();
			curDragContent = $(this);

			
		})

		var cur;
		var curDrag;
		var curDragContent;
		$('.box .item .content').on('touchmove', function(e) {
			var _this = $(this);
			var item = $(this).parent();

			if (status) {
				var obj = e.originalEvent.touches[0];

				var cx = obj.pageX - startX;
				var cy = obj.pageY - startY;	

				_this.css('left', cx).css('top', cy)
				_this.parent().addClass('moving');	

				var obj = curDragContent.offset()
				cur = getCurItem(obj.left, obj.top);



			}
		})
		$('.box .item .content').on('touchend', function(e) {
			var _this = $(this);
			status = false;

			_this.css('left', 0).css('top', 0)	
			_this.parent().removeClass('moving');

			if (cur && curDrag[0] != cur[0])
			exchange(curDrag, cur);

		})
	},
	template: 'views/basic/drag.html'
})