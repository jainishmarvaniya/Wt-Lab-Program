const fs=require('fs')

// fs.writeFile('first.txt','hello world',(err)=>{
//     if(err){ 
//         throw err
//     }
//     else{
//         console.log('file succesfully complete')
//     }
// })

fs.readFile('first.txt',(err,data)=>{
    if(err){
        throw err
    }
    else{
        console.log(data.toString())
    }
})

// fs.appendFile('first.txt','appended text',(err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log('appended succesfully')
//     }
// })

// fs.unlink('first.txt',(err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log('delete succesfully')
//     }
// })

// fs.exists('first1.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('exist succesfully')
//     }
// })

// fs.stat('first.txt',(err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log('stat succesfully')
//     }
// })

// fs.open('first.txt',(err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log('successfully')
//     }
// })



