const { reviewModel } = require('../models/models');

const getAllReviews = async () => {
    try {
        const response = await reviewModel.find({})
        const reviews = response?.map(r => {
            const re = {
                id: r._id,
                service: r.service,
                calification: r.calification,
                patient: r.patient,
                doctor: r.doctor
            }
            return re
        })
        if(reviews.length > 0) {
            return reviews
        } else {
            return { msg: "There's no Reviews in the DB"}
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Reviews can't be showed")
    }
}

const getReviewByDoctor = async (doctor) => {
    try {
        const response = await reviewModel.find({ 
            doctor: doctor, 
        })
        const reviews = response?.map(r => {
            const re = {
                id: r._id,
                service: r.service,
                calification: r.calification,
                patient: r.patient,
                doctor: r.doctor
            }
            return re
        })
        if(reviews.length > 0) {
            return reviews
        } else {
            return { msg: "There's no Reviews in the DB with that doctor id"}
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Reviews can't be showed")
    }
}

const getReviewByPatient = async (patient) => {
    try {
        const response = await reviewModel.find({ 
            patient: patient, 
        })
        const reviews = response?.map(r => {
            const re = {
                id: r._id,
                service: r.service,
                calification: r.calification,
                patient: r.patient,
                doctor: r.doctor
            }
            return re
        })
        if(reviews.length > 0) {
            return reviews
        } else {
            return { msg: "There's no Reviews in the DB with that patient id"}
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Reviews can't be showed")
    }
}

const getReviewDetail = async (id) => {
    try {
        const response = await reviewModel.findById(id)
        const review = {
            id: response._id,
            service: response.service,
            date: response.date,
            review: response.review,
            calification: response.calification,
            patient: response.patient,
            doctor: response.doctor
        }
        if(review) {
            return review
        } else return { msg: "There's no review with that id"}

    } catch (e) {
        console.error(e);
        throw new Error("Error. Review can't be showed")
    }
}


const createReview = async (reviewData) => {
    try {
        const { service, date, review, calification, patient, doctor } = reviewData

        const newReview = await reviewModel.create({
            service,
            date,
            review, 
            calification,
            patient,
            doctor
        })
        if(newReview) {
            return newReview
        } else return { msg: "The new review can't be created"}

    } catch (e) {
        console.error(e);
        throw new Error("Error. Review can't be created")
    }
}


module.exports = {
    getAllReviews,
    getReviewByDoctor,
    getReviewByPatient,
    getReviewDetail,
    createReview,
}