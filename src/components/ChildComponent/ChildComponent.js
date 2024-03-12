import React from 'react'
import PropTypes from 'prop-types';

function ChildComponent({message}) {
  return (
    <div>
        <p>{message}</p>
    </div>
  )
}
ChildComponent.propTypes = {
    message: PropTypes.string.isRequired 
  };
export default ChildComponent