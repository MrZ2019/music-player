'use strict';

var antd = window['antd-mobile'];
var MessageBox = React.createClass({
    displayName: 'MessageBox',

    alertMe: function alertMe() {
        alert('你刚才点了我一下。。。。');
    },
    render: function render() {
        return React.createElement(
            antd.Button,
            { type: 'primary', onClick: this.alertMe },
            '\u4F60\u597D\uFF01\uFF01\uFF01123'
        );
    }
});

React.render(React.createElement(MessageBox, null), document.getElementById('app'), function () {
    console.log('渲染完成啦！！');
});
