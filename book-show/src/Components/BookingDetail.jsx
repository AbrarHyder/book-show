import React from 'react'
import {useParams} from "react-router-dom"

const BookDetail = () => {
    const {id} = useParams();
    const [bookDetail,setBookDetail] = React.useState([])

    React useEffect (() => {
        fetch('http://localhost:8080/posts/${id}')
        .then((res) => res.json())
        .then((res) => setDetail(res))
        .catch((err) => console.log(err));
    },[id])
})
}

function BookingDetail() {
    return (
        <div>
            {JSON.stringify(bookDetail)}
        </div>
    )
}

export default BookingDetail
