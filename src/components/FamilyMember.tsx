// src/components/FamilyMember.tsx
import React from 'react';
import { Button } from '@mui/material';
import { FamilyMember as FamilyMemberType } from '../types'; // Make sure the path is correct based on your structure
   

interface FamilyMemberProps {
    member: FamilyMemberType;
    onUpdate: (member: FamilyMemberType) => void;
    onDelete: (id: string) => void;
}

const FamilyMember: React.FC<FamilyMemberProps> = ({ member, onUpdate, onDelete }) => {
    const handleEdit = () => {
        // Logic to open the edit modal window
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