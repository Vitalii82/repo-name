import React from 'react';
import { Button } from '@mui/material';

const FamilyMember = ({ member, onUpdate, onDelete }) => {
    // Функції для редагування і видалення члена родини
    const handleEdit = () => {
        // Логіка для відкриття модального вікна редагування
    };

    return (
        <div>
            <h3>{member.name}</h3>
            <p>Age: {member.age}</p>
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={() => onDelete(member._id)}>Delete</Button>
        </div>
    );
};

export default FamilyMember;