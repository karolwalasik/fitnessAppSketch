import React from 'react';
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => (
    <div>
      <button onClick={closeModalFn}>x</button>
      <Form />
    </div>  
  );
  
  export default Modal;