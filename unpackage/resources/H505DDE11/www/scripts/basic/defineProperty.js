var DefinePropertyComponent = Vue.extend({
    data: function() {
        return {
            msg: 'DefinePropertyComponent',
            num: 0
        }
    },
    created: function() {
        var _this = this;
        // setTimeout(function() {
        //     _this.num = 100
        // }, 5000)


        var obj = {};
        var b = 10;
        Object.defineProperty(obj, 'a', {
        	set: function(val) {
        		b = val * val;
        	},

        	get: function() {
        		return b
        	},

        	enumerable: true,
        	configurable: true
        	// value: b,
        	// writable: true
        })

        Object.defineProperty(obj, 'a', {
        	enumerable: false
        })
        // obj.a = 5;

        delete obj.a
        
        this.num = Object.keys(obj)

    },

    activated: function() {
    	// alert(123)
    },
    template: './views/basic/defineProperty.html'
})