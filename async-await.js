// async function myName() {
//     console.log("1")
//     await console.log("2")
//     console.log("3")
// }
// console.log("4")
// console.log(myName())
// console.log("5")


// async function my(){
//     return "My name is Hassan Raza"
// }
// console.log("2222")
// my().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
// console.log("Hi iam not Waited.....!")


async function myName() {
    console.log("1")
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log("2")
    let a = await response.json()
    return a
}
console.log("3")
console.log(myName())
console.log("4")
