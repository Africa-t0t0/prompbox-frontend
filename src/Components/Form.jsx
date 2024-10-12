import React, { useState } from 'react';


export default function Form({ handleChange, handleSubmit, formData }) {



    return (
        <form onSubmit={handleSubmit} className="p-4 rounded">
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Prompt</label>
                <input
                    type="text"
                    className="form-control"
                    id="prompt"
                    name="prompt"
                    value={formData.prompt}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );

}