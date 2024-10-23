   // src/redux/actions.ts
   import { FamilyMember } from '../types';

   export const fetchMembers = () => {
       return async (dispatch: any) => {
           const response = await fetch('/api/members'); // Example API endpoint
           const data: FamilyMember[] = await response.json();
           dispatch({ type: 'FETCH_MEMBERS', payload: data });
       };
   };

   export const addMember = (member: FamilyMember) => {
       return {
           type: 'ADD_MEMBER',
           payload: member,
       };
   };

   export const updateMember = (member: FamilyMember) => {
       return {
           type: 'UPDATE_MEMBER',
           payload: member,
       };
   };

   export const deleteMember = (id: string) => {
       return {
           type: 'DELETE_MEMBER',
           payload: id,
       };
   };
   