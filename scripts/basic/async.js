
async function testAsync() {

	var a = await $.get('/views/basic.html');
	var b = await $.get('/views/home.html');

	alert(a);

	alert(b);


}

var AsyncComponent = Vue.extend({
    data: function() {
        return {
            msg: 'AsyncComponent',
            num: 0
        }
    },
    mounted: function() {
    },
    methods: {
    	test: function() {

    		testAsync();
    	}
    },
    template: './views/basic/async.html'
})