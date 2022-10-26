import './recommend.scss'
import { Link } from "react-router-dom";

export const Recommend = () => {
    return (
        <article className="register-container">
            <form>
                <input />
                <button>Create</button>
            </form>
            <Link to={'/'}>back</Link>
        </article>
    )
}