import React from 'react'
import {Link} from "react-router-dom"

const Detail () => {
    const [detail,setDetail] = React.useState([])

    React useEffect (() => {
        fetch('http://localhost:8080/posts')
        .then((res) => res.json())
        .then((res) => setDetail(res))
        .catch((err) => console.log(err));
    },[])
})


function MovieDetail() {
    return (
        <table>
            <thead>
                <tr>
                    <th> title </th>
                    <th> original_language </th>
                </tr>
            </thead>
            <tbody>
                {detail?.map((detail) => (
                    <tr key = {details.id}>
                       <th> {detail.title}</th>
                    <th> {detail.original_language} </th> 
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MovieDetail
