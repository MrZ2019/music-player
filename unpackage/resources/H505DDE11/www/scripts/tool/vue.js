Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value', 'src'],
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  template: `<label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
})


var mixin1 = Vue.extend({
	created: function() {
		// alert('mixin1')
	}
})
var VueModule = Vue.extend({
	mixins: [mixin1],
	data: function() {
		return {
			msg: 'Vue',

			firstName: 'Zhong',
			lastName: 'Jun',

			showTest1: true,
			currentRoute: window.location.pathname
		}
	},
	components: {
		'test1': {
			template: 'views/tool/vue/test1.html',
			data: function() {
				return {
					text: 'Love',
					word: 'bird',
					person: {
						name: 'jim',
						age: 30
					},
					list: [{
						name: 'a'
					}]
				}
			},
			props: ['field'],
			events: {
				changeText: function() {
					this.text = 'I Love You'
				}
			},

			watch: {
				word: function(val) {
					this.$emit('update:field', val);
				}
			},
			created: function() {

				this.$on('hook:beforeDestroy', function() {
					alert('destroy')
				})
			},
			beforeDestroy: function() {
				
			}
		}
	},
	methods: {
		emitChange: function() {
			//this.$broadcast('changeText')

			this.showTest1 = false
		}
	},
	computed: {
		name: function() {
			return this.firstName + this.lastName
		},
		age: function() {
			var _this = this;
			
			return _this.lastName
		}
	},
	template: 'views/tool/vue.html'
})