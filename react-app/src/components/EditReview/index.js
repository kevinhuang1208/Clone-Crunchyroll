import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import {editAnimeReviewThunk} from '../../store/reviews'

const EditReview = ({review,user}) =>{
    const dispatch = useDispatch();
    const history = useHistory();


    return(
        <div> 
        does this open a modal cuhz
        </div>
    )

}

export default EditReview;