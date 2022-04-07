import React, {useState } from "react";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';
import { useDispatch } from 'react-redux';

import FeedBack from './FeedBack';
import FeedBackForm from './FeedBackForm1';
import FieldForm from './FieldForm';
import { FormField } from "../../../types";
import { useGuestContext } from '../../../contexts/GuestContext';

import { addFeedBackFormField } from '../../../reducers/partyReducer';

const Feedback = () => {

    const { guest } = useGuestContext();

    const [showFieldForm, setShowFieldForm] = useState(false);
  
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

      
    if(!guest) return null;

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