import React from 'react';

const Medicine = props => {
    return (
        <div className="Medicine">
            {Object.keys(props.medicine).map((key, index) => {
                return (
                    <h4 key={index}>{props.medicine[key]}</h4>
                )
            })}
            <button onClick={() => props.deleteMedicine(props.medicine._id)}>DELETE</button>
        </div>
    )
}

export default Medicine