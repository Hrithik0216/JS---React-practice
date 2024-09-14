import React from 'react'

const Home = ()=>{

    const InternalHome = () => {
        return (
            <h1>InternalHome</h1>
        );
    };


    return (
        <>
            <InternalHome/>
            <h1>Home</h1>
        </>
        )
    
}

export default Home