import React, { Profiler, useState } from 'react'
const Child=()=>{
    console.log("Child is rendering")
    let name = "Hrithik";
    let age =22;
    const[count,setCount] = useState(0)
    const buttonClick = ()=>{
        setCount(count+1)
    }
    const Check = (id, phase, actualDuration, baseDuration, startTime, commitTime)=>{
        console.table({id, phase, actualDuration, baseDuration, startTime, commitTime})
    }
    return <div>
        <Profiler id= "child" onRender={Check}>

        </Profiler>
        <h2>Hi, I am a Car! my count is {count}</h2>
        <button onClick={buttonClick}>Click me to increment</button>
        <Child1 name={name} age={age}/>
        </div>
}

const Child1=
React.memo(
    (props)=>{
    console.log("Child 1 is rendering")
    return <div>
        <h2>Hi, I am a {props.name} and my age is {props.age} !</h2>
        </div>
}
)

export default Child;