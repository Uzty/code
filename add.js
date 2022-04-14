const add1 = async (a, b) => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {   
      resolve(a + b)
    }, 1000);
  });
}

const add = async (...inputs) => {
  
  if (inputs.length > 2) {
    const arr= await Promise.all(inputs.map((v, i) => {
      if (i % 2 === 0) { // 偶数
        return add1(v, inputs[i+1] || 0)
      } 
      return null
    }).filter(v => v)
    )
    
    return await add(...arr)
  } else {
    return await add1(...inputs)
  }
}

add(1,2).then(res => {
  console.log('结果=', res)  // 3
})

add(1,2,3).then(res => {
  console.log('结果=', res)  // 6
})
