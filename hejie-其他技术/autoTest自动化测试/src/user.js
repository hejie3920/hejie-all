module.exports = async function(ctx, next) {

    const {response, request} = ctx
    console.log(request.url,123)

    if(ctx.url.indexOf('/userinfo')===0){
        ctx.body = 'not allowed'
    }else{
        await next();

    }
  };
  

  
  