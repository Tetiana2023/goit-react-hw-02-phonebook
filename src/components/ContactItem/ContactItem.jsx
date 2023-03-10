import React from 'react';
import PropTypes from 'prop-types';

export const ContactItem = ({name, number})=>{
    return(
        <>
        <div>
            <p>{name}:</p>
            <p>{number}</p>
            <button type="button">Delete</button>
        </div>
        </>
    )
}

ContactItem.propTypes = {
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,

}