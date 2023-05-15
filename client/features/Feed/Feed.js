import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAd, fetchAds } from './feedSlice'
import AdForm from '../AdForm/AdForm'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Feed = () => {
    const dispatch = useDispatch()
    const userType = useSelector((state) => state.auth.me.userType)
    const userId = useSelector((state) => state.auth.me.id)
    const ads = useSelector((state) => state.ads)
    const isAdmin = useSelector((state) => state.auth.me.isAdmin)

    useEffect(() => {
        dispatch(fetchAds())
    }, [dispatch])

    const handleDelete = (adId) => {
        dispatch(deleteAd(adId))
    }

    return (
        <>
            <Navbar />
            {userType === 'organization' && <AdForm />}
            <div className="ad-container">
                {ads.map((ad) => {
                    return (
                        <div className="ads" key={ad.id}>
                            <Link className="ad-link" to={`/map/${ad.id}`}>
                                <img
                                    className="ad-image"
                                    src={ad.imageUrl}
                                ></img>
                                <h2 className="ad-title">{ad.title}</h2>
                                <h4 className="ad-org-name">
                                    {ad.organization &&
                                        ad.organization.username}
                                </h4>
                                <h5 className="ad-org-address">
                                    {ad.organization && ad.organization.address}
                                </h5>{' '}
                            </Link>
                            {userId === ad.organization?.id ||
                                (isAdmin && (
                                    <button
                                        className="delete-ad-button"
                                        onClick={() => handleDelete(ad.id)}
                                    >
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                ))}
                        </div>
                    )
                })}
            </div>

            <Footer />
        </>
    )
}

export default Feed
