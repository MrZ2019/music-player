// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要在 cordova-simulate 或 Android 设备/仿真器上在页面加载时调试代码: 启动应用，设置断点，
// 然后在 JavaScript 控制台中运行 "window.location.reload()"。

// Vue.use(vant)
// Vue.use(vant.Button)




var routes = [{
        path: '/home',
        component: Home
    },
    {
        path: '/basic',
        component: Basic,

        children: [
            {
                path: 'defineProperty',
                component: DefinePropertyComponent
            },
            {
                path: 'async',
                component: AsyncComponent
            },
            {
                path: 'canvas',
                component: canvas
            },
            {
                path: 'drag',
                component: DragModule
            },
        ]
    },
    {
        path: '/tool',
        component: Tool,

        children: [
        {
            path: 'jquery',
            component: JQuery
        },
        {
            path: 'vue',
            component: VueModule
        }
        ]
    },
    {
        path: '/iview',
        component: Tool,

        children: [
        {
            path: 'demo',
            component: IViewDemoModule
        }
        ]
    },
    {
        path: '*',
        redirect: '/home'
    }
]
var router = new VueRouter({
    routes: routes
});


new Vue({
    router: router,
    el: '#app',
    data: function() {

        return {
            msg: 51,
            value: 2.5,
            bottomNav: 'one',
            open: false,

            time: '',
            totalTime: 60 * 10,

            

                        cityList: [
                                           {
                                               value: 'New York',
                                               label: 'New York'
                                           },
                                           {
                                               value: 'London',
                                               label: 'London'
                                           },
                                           {
                                               value: 'Sydney',
                                               label: 'Sydney'
                                           },
                                           {
                                               value: 'Ottawa',
                                               label: 'Ottawa'
                                           },
                                           {
                                               value: 'Paris',
                                               label: 'Paris'
                                           },
                                           {
                                               value: 'Canberra',
                                               label: 'Canberra'
                                           }
                                       ],
                                       model1: ''
        }
    },
    created: function() {
        window.addEventListener('message', function(e) {
            try {
                var data = e.data;
				// alert(data)
                if (!data) {
                    return;
                }
                // if (data.type == 'self') {

                // }
				// alert(data.type)
                if (data.type == 'camera') {
                    $('#myImage').attr('src', data.data)
                } else if (data.type == 'file') {
                    $('#filelist').append('<p>' + data.data + '</p>')
                } else if (data.type == 'photo') {
					
                    $('#picture').attr('src', data.data)
                } else
                    eval(e.data)
            } catch (e) {
                alert(e)
            }
        })
    },
    mounted: function() {
        var _this = this;

        var handle = setInterval(function() {
            _this.totalTime -= 1;

            if (_this.totalTime < 0) {
                clearInterval(handle)
                // alert('时间到了!!!')
                return;
            }

            _this.time = toTime(_this.totalTime);
        }, 1000)
    },
    methods: {


        handleChange: function(value) {
            this.bottomNav = value
        },

        closeDrawer: function() {
            this.open = false;
        },
        openDrawer: function(v) {
            this.open = true;
        }
    }
})
// })