module.exports = {
    //关闭eslint校验工具
    lintOnSave:false,
    //代理跨域【代理服务器】,解决跨域问题
    devServer:{
        proxy:{
            //出现/api开启代理服务器
            '/api':{
                //http://39.98.123.211为尚硅谷的后台服务器
                //target:'http://39.98.123.211',
                target:'http://gmall-h5-api.atguigu.cn'
                // pathRewrite:{'^/api':''},
            },
        },
    },
}