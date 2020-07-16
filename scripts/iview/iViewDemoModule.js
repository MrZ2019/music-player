
// alert(Vue.options.TabPane)
var IViewDemoModule = Vue.extend({
	components: {
		TabPane2: Vue.options.components.TabPane,
		Tabs2: Vue.options.components.Tabs,
	},
	mounted: function() {
		// alert(TabPane)
	},
    data: function() {
        return {
            msg: 'demo',
            split1: '.5',

            tab0: true,
            tab1: true,
            tab2: true,
            tab3: true,
            tab4: true,

            value15: '123',

            modal2: false,
            value2: false,

            value3: 0,

            time1: new Date(),
                            setting: {
                                autoplay: false,
                                autoplaySpeed: 2000,
                                dots: 'inside',
                                radiusDot: false,
                                trigger: 'click',
                                arrow: 'hover'
                            },
            data11: [
                                {
                                    title: 'parent 1',
                                    expand: true,
                                    children: [
                                        {
                                            title: 'parent 1-1',
                                            expand: true,
                                            disabled: true,
                                            children: [
                                                {
                                                    title: 'leaf 1-1-1'
                                                },
                                                {
                                                    title: 'leaf 1-1-2'
                                                }
                                            ]
                                        },
                                        {
                                            title: 'parent 1-2',
                                            expand: true,
                                            selected: true,
                                            children: [
                                                {
                                                    title: 'leaf 1-2-1'
                                                },
                                                {
                                                    title: 'leaf 1-2-1'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
            columns6: [{
                    title: 'Date',
                    key: 'date'
                },
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age',
                    filters: [{
                            label: 'Greater than 25',
                            value: 1
                        },
                        {
                            label: 'Less than 25',
                            value: 2
                        }
                    ],
                    filterMultiple: false,
                    filterMethod(value, row) {
                        if (value === 1) {
                            return row.age > 25;
                        } else if (value === 2) {
                            return row.age < 25;
                        }
                    }
                },
                {
                    title: 'Address',
                    key: 'address',
                    filters: [{
                            label: 'New York',
                            value: 'New York'
                        },
                        {
                            label: 'London',
                            value: 'London'
                        },
                        {
                            label: 'Sydney',
                            value: 'Sydney'
                        }
                    ],
                    filterMethod(value, row) {
                        return row.address.indexOf(value) > -1;
                    }
                }
            ],
            data5: [{
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ],value9: 20,
                data2: [],

                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],

                value4: 3,
                color3: ''


        }
    },

    methods: {

    	closable () {
    	                this.$Message.info({
    	                    content: 'Tips for manual closing',
    	                    duration: 10,
    	                    closable: true
    	                });
    	            },

    	            renderFunc () {
    	                           this.$Notice.success({
    	                               title: 'Notification title',
    	                               desc: 'The desc will hide when you set render.',
    	                               render: h => {
    	                                   return h('span', [
    	                                       'This is created by ',
    	                                       h('a', 'render'),
    	                                       ' function'
    	                                   ])
    	                               }
    	                           });
    	                       },
    	format (val) {
    	               return 'Progress: ' + val + '%';
    	           },
        handleTabRemove: function(name) {

            this['tab' + name] = false;
        },

        handleSearch2 (value) {
                      this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                          value + '@qq.com',
                          value + '@sina.com',
                          value + '@163.com'
                      ];
                  }
    },

    computed: {

        formatNumber: function() {

            return this.value15 + ':success'
        }
    },
    template: 'views/iview/demo.html'
})