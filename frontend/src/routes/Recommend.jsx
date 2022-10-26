import './recommend.scss'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Rating } from "react-simple-star-rating";
import { useMutation, useQueryClient } from 'react-query'
import { postRecommendations } from '../fetchers/recommendations'

export const Recommend = () => {
    const client = useQueryClient()
    const mutation = useMutation(postRecommendations, {
        onSuccess: () => {
            client.invalidateQueries('recommend')
        }
    })
    const [inputs, setInputs] = useState({
        masterpiece: "",
        rate: 0,
        description: "",
        category: "",
        author: "",
    })

    const handleChange = (evt) => {
        setInputs({
            ...inputs,
            [evt.target.name]: evt.target.value
        })
    }

    const handleRating = (rate) => {
        setInputs({
            ...inputs,
            rate
        })
    }

    const handleSubmit = () => {
        event.preventDefault()
        mutation.mutate(inputs)
    }

    return (
        <article className="register-container">
            <form onSubmit={handleSubmit}>
                <input name="masterpiece" type="text" placeholder="Masterpiece" value={inputs.masterpiece} onChange={(evt) => handleChange(evt)} />
                <Rating onClick={handleRating} allowFraction={true} />
                <input name="description" type="text" placeholder="Description" value={inputs.description} onChange={(evt) => handleChange(evt)} />
                <input name="category" type="text" placeholder="Category" value={inputs.category} onChange={(evt) => handleChange(evt)} />
                <input name="author" type="text" placeholder="Author" value={inputs.author} onChange={(evt) => handleChange(evt)} />
                <button type='submit'>Create</button>
            </form>
            <Link to={'/'}>back</Link>
        </article>
    )
}