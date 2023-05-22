import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {
    fetchSingleUserThunk,
    updateUserImageThunk,
    updateUserDescriptionThunk,
    createReviewThunk,
} from './userSlice'

const SingleUserProfile = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const user = useSelector((state) => state.user)
    const [bioText, setBioText] = useState(user.description || '')
    const [showBioForm, setShowBioForm] = useState(false)
    const loggedInUserId = useSelector((state) => state.auth.me.id)
    const loggedInUserType = useSelector((state) => state.auth.me.userType)
    const [reviewText, setReviewText] = useState('')
    const [showReviewForm, setShowReviewForm] = useState(false)

    useEffect(() => {
        dispatch(fetchSingleUserThunk(id))
    }, [dispatch, id])

    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        dispatch(updateUserImageThunk({ id, imageFile: file }))
    }

    const handleBioChange = (event) => {
        setBioText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateUserDescriptionThunk({ id, description: bioText }))
        setShowBioForm(false)
    }

    const handleReviewChange = (event) => {
        setReviewText(event.target.value)
    }

    const handleSubmitReview = (event) => {
        event.preventDefault()
        dispatch(
            createReviewThunk({
                userId: loggedInUserId,
                organizationId: id,
                comment: reviewText,
            })
        )
        setReviewText('')
        setShowReviewForm(false)
    }

    return (
        <div className="single-profile-page">
            <Navbar />
            <div className="user-profile-container">
                <div className="user-profile-image-container">
                    <img className="user-profile-image" src={user.imageUrl} />
                    {loggedInUserId === Number(id) && (
                        <input
                            className="image-upload-profile"
                            type="file"
                            onChange={handleImageUpload}
                        />
                    )}
                </div>
                <div className="user-profile-text-container">
                    <h1>{user.username}</h1>
                    <p>
                        <strong>Email: </strong> {user.email}
                    </p>
                    <p>
                        <strong>Address: </strong> {user.address}
                    </p>
                    <p>
                        <strong>Account Type: </strong> {user.userType}
                    </p>

                    <div className="user-profile-form">
                        {user.description && (
                            <div className="user-bio">
                                <strong>Bio:</strong>
                                <h5>{user.description}</h5>
                            </div>
                        )}

                        {loggedInUserId === Number(id) && (
                            <>
                                {!showBioForm && (
                                    <button
                                        className="create-post-button"
                                        onClick={() => setShowBioForm(true)}
                                    >
                                        Edit Bio
                                    </button>
                                )}

                                {showBioForm && (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="user-profile-bio-form"
                                    >
                                        <label>Update Bio:</label>
                                        <textarea
                                            onChange={handleBioChange}
                                            placeholder="Write a fun fact!"
                                            value={bioText}
                                        ></textarea>
                                        <button
                                            className="create-post-button"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="review-container">
                {loggedInUserType === 'individual' &&
                    user.userType === 'organization' && (
                        <div className="user-review-form">
                            <button
                                onClick={() =>
                                    setShowReviewForm(!showReviewForm)
                                }
                                className={
                                    showReviewForm
                                        ? 'cancelButtonRed'
                                        : 'leaveReviewBtn'
                                }
                            >
                                {showReviewForm ? 'Cancel' : 'Leave a Review'}
                            </button>

                            {showReviewForm && (
                                <form onSubmit={handleSubmitReview}>
                                    <label>Review:</label>
                                    <textarea
                                    className='review-textarea'
                                        onChange={handleReviewChange}
                                        placeholder="Write a review..."
                                        value={reviewText}
                                    ></textarea>
                                    <button className="green-btn" type="submit">
                                        Submit
                                    </button>
                                </form>
                            )}
                        </div>
                    )}
                <div className="user-reviews-container">
                    <table>
                        <thead>
                            <tr>
                                <th className="review-user">User</th>
                                <th>Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.userReviews.map((review) => (
                                <tr key={review.id}>
                                    <td className="review-user">
                                        <img
                                            className="review-image"
                                            src={
                                                review.reviewedOrganization
                                                    .imageUrl
                                            }
                                        />
                                        <p>
                                            <Link
                                                to={`/profile/${review.reviewedOrganization.id}`}
                                            >
                                                {
                                                    review.reviewedOrganization
                                                        .username
                                                }
                                            </Link>
                                        </p>
                                    </td>
                                    <td className="review-text">
                                        <p>{review.comment}</p>
                                    </td>
                                </tr>
                            ))}

                            {user.organizationReviews.map((review) => (
                                <tr key={review.id}>
                                    <td className="review-user">
                                        <img
                                            className="review-image"
                                            src={review.user.imageUrl}
                                        />
                                        <p>
                                            <Link
                                                to={`/profile/${review.user.id}`}
                                            >
                                                {review.user.username}
                                            </Link>
                                        </p>
                                    </td>
                                    <td className="review-text">
                                        <p>{review.comment}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SingleUserProfile
