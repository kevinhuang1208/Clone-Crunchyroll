import { useSelector, useDispatch } from "react-redux";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";

const Review = ({review,user})=> {

    console.log('what is a single review do ---------', review)
    // if user.id == review.userId render the button if not do null if no user, do null
    return (
        <div> 
            <h2>{review.user.username}</h2>
            <p>{review.review}</p>
            {(!user) ? null :
            (user.id == review.userId) ? 
            (<OpenModalMenuItem
              className = 'editReview'
              itemText = 'edit Review!'
                
              />) : null}
        </div>
    )
}

export default Review;