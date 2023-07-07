import React, { useState, useEffect } from "react";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import { NavLink } from "react-router-dom";
import EditReview from '../EditReview'
import DeleteReview from "../DeleteReview";
import { useSelector, useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import './index.css'

const Review = ({review,user})=> {

    const dispatch = useDispatch()
    const {closeModal} = useModal();
    console.log("THIS IS THE REIVEW", user)

    // console.log('what is a single review do ---------', review)
    // if user.id == review.userId render the button if not do null if no user, do null

    if(!review.user) return null

    else
    return (
        <div className = 'entireSingleReviewDiv'>
            <div className='navLinkDivforReview'>
            <NavLink className = 'userNavLink'exact to={`/user/${review.user.id}`}>
                 {review.user.username}
            </NavLink>
            </div>

            <h3>Rating: {review.rating}</h3>

            <p className = 'reviewDescriptionPtag'>{review.review}</p>

            {(!user) ? null :
            (user.id == review.userId) ?

            (<div className='review-buttons-div'>

                <OpenModalMenuItem
              className = 'editReview'
              itemText = 'Edit Review!'
              modalComponent={<EditReview review = {review} user = {user} key = {review.id}/>}
              />

            <OpenModalMenuItem
            className = 'editReview'
            itemText = 'Delete Review!'
            modalComponent={<DeleteReview review = {review} user = {user} key = {review.id}/>}
            />

            </div>

              ) : null}
        </div>
    )
}

export default Review;
