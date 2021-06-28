import React from 'react'

export const LoginScreen = ({history}) => {


        
    return (
        <div className="">
            <h1>login</h1>
            <hr />

            <button 
                type="button" 
                className="btn btn-primary"
                onClick={ ()=> history.replace('/') }
            >
                Login
            </button>

        </div>
    )
}
