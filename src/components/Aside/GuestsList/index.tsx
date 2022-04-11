import { useState } from "react";
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

import FeedBack from './Feedback';
import FeedBackForm from './FeedBackForm';
import FieldForm from './FieldForm';
import { addFeedBackFormField } from '../../../reducers/partyReducer';
import { useGuestContext } from '../../../contexts/GuestContext';
import { FormField } from "../../../types";

const Feedback = () => {

    const [showFieldForm, setShowFieldForm] = useState(false);
    const dispatch = useDispatch();
    const { guest, isFeedBackModalOpen } = useGuestContext();

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

    if (!guest) return null;

    if (showFieldForm) return <FieldForm handleSubmit={addField} onClose={onClose} />;

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
                    (isFeedBackModalOpen && guest?.feedback) ? <FeedBack/> : <FeedBackForm showFieldForm={handleShowFieldForm}/>
                }
            </Box>
        </Box>

    );
};

export default Feedback;