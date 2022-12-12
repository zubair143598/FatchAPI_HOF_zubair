import React from 'react'
// import { useState } from 'react'

const Hero = () => {
  // const [data,setData]=useState("")
  fetch("https://jsonplaceholder.typicode.com/users")
  .then
  (
    res=>res.json()
  )
  .then(
    da=>console.log(da)
  )
  // .then(
  //   da=>setData(da)
  // )

  // fetch("https://jsonplaceholder.typicode.com/todos")
  // .then(
  //   res=>res.json()
  // ).then(data=>console.log(data))
  return (
   <>
   {/* {fetch.data.map((value)=>
   {
    return
    (
      <>
      </>
    )
   })} */}
   </>
  )
}

export default Hero