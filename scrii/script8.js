const lines = [
    "Hii",
    "I am IIII",
    "I am in class"
]

const result = lines.reduce((acc, curr)=>{
    const nextAcc = acc + curr + ". "
    return nextAcc
}, "")

console.log(result)