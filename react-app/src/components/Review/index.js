import { useSelector, useDispatch } from "react-redux";


const Review = ({review})=> {

    console.log('what is a single review do ---------', review)

    return (
        <div> 
            <h2>{review.user.username}</h2>
            <p>{review.review}</p>
        </div>
    )
}

export default Review;