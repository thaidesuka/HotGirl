// const promiseExp = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve("tra tien");
//         console.log(data);

//     }, 5000);
//     setTimeout(function () {
//         reject("ko tra")
//     }, 3000)
// });
// const promiseExp = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve("tra tien");
//             console.log(data);

//         }, 5000);
//         setTimeout(function () {
//             reject("ko tra")
//         }, 3000)
//     });
// }
// promiseExp()
//     .then(data)=> {
//     console.log(data);
// })
const muaRau = (money) => new Promise((resolve, reject) => {
    if (money > 1000){
        resolve("mua rau")
    } else reject("ko ban")
})
const anRau = () => new Promise((resolve , reject) =>{
    setTimeout(function () {
        resolve("an xong r")
    })
})