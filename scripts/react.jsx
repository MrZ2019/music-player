

 var antd = window['antd-mobile']
    var MessageBox = React.createClass({  
        alertMe: function(){  
            alert('你刚才点了我一下。。。。');  
        },  
        render:function(){  
            return ( <antd.Button type='primary' onClick={this.alertMe}>你好！！！123</antd.Button> )  
        }  
    });  
  
    React.render( <MessageBox/>,  
        document.getElementById('app'),  
        function(){  
            console.log('渲染完成啦！！');  
        }        
    )       