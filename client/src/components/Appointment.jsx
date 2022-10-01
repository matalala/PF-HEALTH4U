import React from "react";
import NavAppointment from "./NavAppointment";
import s from "./Appointment.module.css"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDoctors, filterBySpecialties, orderByRating, orderByName } from "../actions";
import Footer from "./Footer";
import CardDoc from './CardDoc.jsx';
export default function Appointment()
{


    const dispatch = useDispatch();
    const [orden, setOrden] = useState("");

    let doctors = useSelector(state => state.Doctors);

    useEffect(() =>
    {
        // dispatch(getPatientes());
        dispatch(getDoctors());
    }, [dispatch])

    function handleRating(e)
    {
        e.preventDefault();
        dispatch(orderByRating(e.target.value));
        setOrden(e.target.value)
    }

    function handleSort(e)
    {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrden(e.target.value)
    }

    let specialties = ["Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", "Geriatrics", "Gynecology", "Internal Medicine", "Neurology", "Opthalmology", "Otorhinolaryngology", "Pneumology", "Psychiatry", "Rheumatology", "Traumatology", "Urology"]

    function handleSpecialties(e)
    {
        e.preventDefault();
        dispatch(filterBySpecialties(e.target.value));
        setOrden(e.target.value);
    }


    return (
        <div>
            <NavAppointment />
            <div className={s.tite}>
                <h1>Select your preferences to make an appointment!</h1>
            </div>
            <div className={s.conten}>
                <select className={s.filter} onChange={e => handleSort(e)}>
                    <option>Alphabetically</option>
                    <option>Asc</option>
                    <option>Desc</option>
                </select>
                <select className={s.filter} onChange={e => handleSpecialties(e)}>
                    <option hidden={true}>Specialties</option>
                    {specialties.map(data => (
                        <option value={data}>{data}</option>
                    ))}
                </select>
                <select className={s.filter} onChange={e => handleRating(e)}>
                    <option>Rating</option>
                    <option>Asc</option>
                    <option>Desc</option>
                </select>
                <select className={s.filter}>
                    <option>Method</option>
                    <option>Address</option>
                    <option>Virtual meeting</option>
                    <option>Private office</option>
                </select>
                <select className={s.filter}>
                    <option>Day Available</option>
                </select>
                <select className={s.filter}>
                    <option>Hour Available</option>
                </select>
            </div>
            <div className={s.docs}>
                <div className={s.cardXdoc}>
                    {

                        doctors.map(doctors => (
                            < CardDoc
                                id={doctors.id}
                                name={doctors.name}
                                image={doctors.image}
                                description={doctors.description}
                                rating={doctors.rating}
                                specialtie={doctors.specialtie}
                                commets={doctors.commets}
                            />

                        ))
                    }


                </div>

            </div>
            <Footer />
        </div>
    )
}