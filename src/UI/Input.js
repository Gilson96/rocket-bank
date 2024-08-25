import React from 'react'

const Input = ({input, width}) => {

    return (
        <div className={`flex ${width} p-3 border rounded-lg shadow font-body`}>
            <input {...input} />
        </div>
    )
};
export default Input