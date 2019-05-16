module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  configureWebpack:{
    devServer:{
      //反向代理
      // proxy:{
      //   '/api':{
      //     target:'http://127.0.0.1:3000/',
      //     changeOrigin:true
      //   }
      // },
      before(app){
        //中间件
        // app.use(function (req,res,next){
        //   //校验以/api开头的请求
        //   if(/^\/api/.test(req.path)) {
        //     if(req.path=='/api/login' || req.headers.token) {
        //       next();
        //     }else {
        //       res.sendStatus(401)//res.status(404).send('Unauthorized')
        //     }
        //   }else {
        //     next();
        //   }
        // });
        //中间件-另一种方式
        function auth(req,res,next){
          if(req.headers.token) {//token是拦截器里面配置的
            next()
          }else {
            res.sendStatus(401)//res.status(404).send('Unauthorized')
          }
        }
        app.get('/api/login',(req,res)=>{
          const {username,password}=req.query;
          if(username=='sofiya'&&password=='123456') {
            res.json({code:1,token:'wooden token of authority'})
          }else {
            res.status(401).json({code:0,message:'用户名或者密码错误'})
          }
        });

        app.get('/api/userInfo',auth,(req,res)=>{
          res.json({code:1,data:{name:'sofiya'}})
        })
      }
    }
  }
}
