const child_process=require('child_process')

// child_process.exec('first.txt',(err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log('child process success')
//     }
// })

child_process.exec('first.txt',(err,stdout)=>{
    if(err){
        throw err
    }
    else{
        console.log('child process success')
    }
})