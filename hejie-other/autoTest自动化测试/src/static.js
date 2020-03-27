const fs = require('fs')
const path = require('path')

module.exports = (dirPath='./public')=>{
    return async (ctx, next)=>{


        if(ctx.url.indexOf('/public')===0){
            // public开头 读取文件
            const url = path.resolve(__dirname, dirPath)
            const fileBaseName = path.basename(url)
            const filepath = url+ctx.url.replace('/public','')
            console.log(filepath)
            // console.log(ctx.url,url, filepath, fileBaseName)
            try{
                stats = fs.statSync(filepath)
                if(stats.isDirectory()){
                    const dir = fs.readdirSync(filepath)
                    // const 
                    const ret = ['<div style="padding-left:20px">']
                    dir.forEach(filename=>{
                        console.log(filename)
                        // 这里简单粗暴，认为不是xx.js带小数点的格式，就是文件夹，实际应该用statSync更靠谱

                        if(filename.indexOf('.')>-1){
                            ret.push(`<p><a style="color:black" href="${ctx.url}/${filename}">${filename}</a></p>`)
                            
                            // 文件 
                        }else{
                            ret.push(`<p><a  href="${ctx.url}/${filename}">${filename}</a></p>`)

                            // 目录
                        }
                    })
                    ret.push('</div>')
                    ctx.body = ret.join('')

                }else{
                    console.log('文件')

                    const content = fs.readFileSync(filepath)
                    ctx.body = content
                }
            }catch(e){
                // 报错了 文件不存在
                ctx.body = '404, money not found'
            }

        }else{
            // 否则不是静态资源，直接去下一个中间件
            next()
        }

    }
}

