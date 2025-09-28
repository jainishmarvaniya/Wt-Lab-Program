const path=require('path')

// documentation mate ===>node js documentation

// console.log(path.dirname('/users/home/college/sem3/abc.js'))

// console.log(path.basename('/users/home/college/sem3/abc.js'))

console.log(path.join('/users','home','college'))

// console.log(path.extname('/users/home/college/sem3/abc.js'))

// console.log(path.resolve('/users/home/college/sem3/abc.js'))

 //console.log(path.relative('/users/home/college/sem3/abc.js','/users/home/sem3/abc.js'))

console.log(path.normalize('/users/home/////college/sem3/../com/abc.js/../com'))
