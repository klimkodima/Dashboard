import React, {useState} from "react";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';
import { useDispatch } from 'react-redux';

import FeedBack from './FeedBack';
import FeedBackForm from './FeedBackForm';
import FieldForm from './FieldForm';
import { UIGuest, FormField } from "../../../types";

import { addFeedBackFormField } from '../../../reducers/partyReducer';

const Feedback = () => {

    const [showFieldForm, setShowFieldForm] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();

    const addField = (values: FormField) => {
        dispatch(addFeedBackFormField(values));
        setShowFieldForm(false);
    };

    const onClose = () => {
        setShowFieldForm(false);
    };

    const handleShowFieldForm = () => {
      setShowFieldForm(true);
    };

    const guest: UIGuest | undefined  = useAppSelector(state => state.party.guests.find((guest: UIGuest) => guest.id === Number(params.guestId)));
      
    if(guest === undefined) return null;

    if(showFieldForm ) return <FieldForm handleSubmit={addField} onClose= {onClose}/>;

    return (
        <Box component="section"
            sx={{
                minHeight: '85vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box sx={{ my: 4 }}>
                {
                guest.feedback ? <FeedBack guest={guest} /> : <FeedBackForm  guest={guest} showFieldForm={handleShowFieldForm}/>}
            </Box>
        </Box>

    );
};

export default Feedback;