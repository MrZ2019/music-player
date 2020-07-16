
var canvas = Vue.extend({
	data: function() {
		return {
			msg: 'canvas',

			c: null
		}
	},
	mounted: function() {
		var n = window.innerWidth / 750;

		this.c = new MyCanvas(this.$refs.canvas, {
			width: parseInt(window.innerWidth * .425),
			height: parseInt(window.innerWidth * .425),
			lineWidth: parseInt(40 * n)
		})
		this.c = new MyCanvas(this.$refs.canvas2, {
			width: parseInt(window.innerWidth * .425),
			height: parseInt(window.innerWidth * .425),
			lineWidth: parseInt(40 * n)
		})
	},
	template: 'views/basic/canvas.html'
})

function MyCanvas(elm, opts) {
	elm.width = opts.width
	elm.height = opts.height
	// alert(elm.width)
	var c = elm.getContext('2d');
	c.lineWidth = opts.lineWidth

	var x = opts.width / 2;
	var y = opts.height / 2;

	c.arc(x,y,x * .8,0, 4 * Math.PI)
	c.stroke()

	var gradient = c.createLinearGradient(0,0, 40, 40);

	gradient.addColorStop('0', '#ff412e')
	gradient.addColorStop('1', '#efb603')

	c.strokeStyle = gradient
	c.arc(x,y,x * .8,0, 1 * Math.PI)
	c.stroke()
}