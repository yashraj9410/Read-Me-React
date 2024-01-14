import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log(data)
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl flex flex-row gap-5'>Github followers: {data.followers}
    <img className='w-20' src={data.avatar_url} alt="Git picture" width={300} />
    <h5>Company: {data.company}</h5>
    <h5>Tech: {data.bio}</h5>
    </div>
  )
}

export default Github

// it works as a promise
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/yashraj9410')
    return response.json()
}