// src/App.tsx
import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMembers, addMember, updateMember, deleteMember } from './redux/actions';
import FamilyMember from './components/FamilyMember';
import { Button } from '@mui/material';
import { FamilyMember as FamilyMemberType } from './types'; // Імпортуйте типи членів родини

const App: React.FC = () => {
    const dispatch = useDispatch();
    const members: FamilyMemberType[] = useSelector((state: any) => state.family.members);

    useEffect(() => {
        dispatch(fetchMembers());
    }, [dispatch]);

    const handleCreateMember = () => {
        const memberData: FamilyMemberType = {
            _id: 'new_id', // Склепати новий ID на сервері
            name: 'New Member', // Введіть імя
            age: 0, // Введіть вік
            parentId: null, // ID батька, якщо є
        };
        dispatch(addMember(memberData));
    };

    const handleUpdateMember = (updatedMember: FamilyMemberType) => {
        dispatch(updateMember(updatedMember));
    };

    const handleDeleteMember = (id: string) => {
        if (window.confirm("Are you sure you want to delete this member?")) {
            dispatch(deleteMember(id));
        }
    };

    return (
        <div className="App">
            <h1>Family Tree</h1>
            <Button variant="contained" color="primary" onClick={handleCreateMember}>
                Create New Member
            </Button>
            <div>
                {members.map(member => (
                    <FamilyMember 
                        key={member._id} 
                        member={member} 
                        onUpdate={handleUpdateMember} 
                        onDelete={handleDeleteMember} 
                    />
                ))}
            </div>
        </div>
    );
};

export default App;

