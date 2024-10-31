import React, { forwardRef} from 'react';


const Form = forwardRef(function Form({ handleChange, handleSubmit }, ref) {

    return (
        <div
            className='card rounded bg-dark'
        >
            <div className='card-body'>
                <form
                    onSubmit={handleSubmit}
                    className=' rounded '
                >
                    <div className='row'>
                        <div className='col-11'>
                            <input
                                ref={ref}
                                type='text'
                                className='form-control'
                                id='prompt'
                                name='prompt'
                                onChange={handleChange}
                                placeholder='Write here!'
                            />
                        </div>
                        <div className='col-1 '>
                            <button
                                type='submit'
                                className='btn btn-primary'
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

});

export default Form;