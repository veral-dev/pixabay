import React, { useState } from 'react'
import Error from './Error'

const Form = ({ setSearch }) => {


    const [word, setWord] = useState('')
    const [error, setError] = useState(false)

    const searchImages = e => {
        e.preventDefault()

        //Validar
        if (word.trim() === '') {
            setError(true)
            return
        }

        setError(false)
        //Enviar término de búsqueda
        setSearch(word)

    }

    return (
        <form onSubmit={searchImages}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen"
                        onChange={e => setWord(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        placeholder="Busca una imagen"
                    />
                </div>
            </div>
            {error ? <Error message="Agrega un término de búsqueda" /> : null}
        </form>
    );
}

export default Form;