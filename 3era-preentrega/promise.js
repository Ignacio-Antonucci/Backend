const fs = require('fs')

/*fs.promises.readFile('./test.json', 'utf-8')
.then(res => {
    console.log('Promise', res)
}) 
.catch(err => {
    console.log('Error: ', err)
})*/


fs.promises.writeFile('./test3.json','New PROMISE', 'utf-8')
.then(res => {
    console.log('Promise creada')
}) 
.catch(err => {
    console.log('Error: ', err)
})


const read = async () => {
     try{
        let res = await fs.promises.readFile('./test.json', 'utf-8')
        console.log (res)
    }catch(err){
        console.log('ERROR: ',err)
    }
} 

read()