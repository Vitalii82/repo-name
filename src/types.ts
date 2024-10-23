// src/types.ts
export interface FamilyMember {
    _id: string; // Assuming the ID is a string
    name: string;
    age: number;
    parentId?: string; // Optional property for parentId
}