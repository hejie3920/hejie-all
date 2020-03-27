const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send(`
        <html>
            <div>
                <div id="app">
                    <h1>和杰</h1>
                    <p class="demo">和杰还不错</p>
                </div>
            </body>
        </html> 
    `)
})

app.listen(3000, ()=>{
    console.log('启动成功')
})