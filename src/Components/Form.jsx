import React, { forwardRef} from 'react';


const Form = forwardRef(function Form({ handleChange, handleSubmit }, ref) {

    return (
        <div className="container border">
            <div className="container-body">
                <form
                    onSubmit={handleSubmit}
                    className="p-4 rounded"
                >
                    <div className="row">
                        <div className="col-11 mb-3">
                            <label
                                htmlFor="nombre"
                                className="form-label"
                            >
                                Prompt
                            </label>
                            <input
                                ref={ref}
                                type="text"
                                className="form-control"
                                id="prompt"
                                name="prompt"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-1 mb-4 mt-4">
                        <button
                            type="submit"
                            className="btn btn-primary"
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