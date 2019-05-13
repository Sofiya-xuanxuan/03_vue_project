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
      proxy:{
        '/api':{
          target:'http://127.0.0.1:3000/',
          changeOrigin:true
        }
      }
      // before(app){
      //   app.get('/api/login',(req,res)=>{
      //     const {username,password}=req.query;
      //     if(username=='sofiya'&&password=='123456') {
      //       res.json({code:1,token:'wooden token of authority'})
      //     }else {
      //       res.status(401).json({code:0,message:'用户名或者密码错误'})
      //     }
      //   });
      //   function auth(req,res,next){
      //     console.log(req, res);
      //     if(req.headers.token) {
      //       next();
      //     }else {
      //       res.status(401)
      //     }
      //   }
      //   app.get('/api/userInfo',auth,(req,res)=>{
      //     res.json({code:1,data:{name:'sofiya'}})
      //   })
      // }
    }
  }
}
