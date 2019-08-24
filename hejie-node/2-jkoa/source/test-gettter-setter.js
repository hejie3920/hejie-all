const hejieba = {
    info:{name : '和杰',desc:'和杰真不错'},
    get name(){
        return this.info.name
    },
    set name(val){
        console.log('new name is '+ val)
        this.info.name = val + 'ggg'
    }
}

console.log(hejieba.name)
hejieba.name = 'hejieba'
console.log(hejieba.name)