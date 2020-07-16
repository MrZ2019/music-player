

new Vue({
	el: '#app',
	data: {
		cur: 'ready',
		dialog: {
			title: '竞猜规则',
			html: '每场比赛只能提交一次竞猜结果，点击确定后不能修改！',
			btns: [],
			show: false
		}
	},
	mounted: function() {
		// this.share()
	},
	methods: {
		tab: function(name) {
			this.cur = name;

			
		},
		showRule:function() {
			this.dialog.show = true;
			this.dialog.btns = [{text: '我知道了', callback: function() {
				this.dialog.show = false;
				}.bind(this)}, 
				{text: '我知道了', callback: function() {
				this.dialog.show = false;
				}.bind(this)}]			
		},
		share: function() {
			this.dialog.show = true;
			var html = document.querySelector('#share').innerHTML;
			this.dialog.html = html;
			this.dialog.title = '分享'
			this.dialog.class = 'share'
			this.dialog.btns = [{text: '我知道了', callback: function() {
				this.dialog.show = false;
				this.dialog.class = ''
				}.bind(this)}];
		}
	}
})