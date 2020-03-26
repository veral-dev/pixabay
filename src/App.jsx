import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import ImagesList from './components/ImagesList'


function App() {

    const [search, setSearch] = useState('')
    const [images, setImages] = useState([])
    const [actualPage, setActualPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {

        const apiConsult = async () => {

            if (search === '') return

            const imagesPerPage = 20
            const apiKey = 'ADD_YOUR_API_KEY'
            const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`

            const response = await fetch(url)
            const result = await response.json()

            setImages(result.hits)

            const calculateTotalPages = Math.ceil(result.totalHits / imagesPerPage)
            setTotalPages(calculateTotalPages)

            //Mover la pantalla hacia arriba
            const jumbotron = document.querySelector('.jumbotron')
            jumbotron.scrollIntoView({ behavior: 'smooth' })

        }
        apiConsult()
    }, [search, actualPage])

    //definir la página anterior
    const previousPage = () => {
        const newActualPage = actualPage - 1
        if (newActualPage === 0) return
        setActualPage(newActualPage)

    }

    const nextPage = () => {
        const newActualPage = actualPage + 1
        if (newActualPage > totalPages) return
        setActualPage(newActualPage)
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">
                    Buscador de imágenes
                </p>

                <Form setSearch={setSearch} />
            </div>

            <div className="row justify-content-center mb-5">
                <ImagesList images={images} />

                {(actualPage === 1) ? null : <button type="button" className="btn btn-info mr-1" onClick={previousPage}>&laquo; Anterior</button>}
                {(actualPage === totalPages) ? null : <button type="button" className="btn btn-info" onClick={nextPage}>Siguiente &raquo;</button>
                }
            </div>
        </div>
    );
}

export default App;