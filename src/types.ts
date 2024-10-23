   // src/types.ts
   export interface FamilyMember {
    _id: string; // Represents the unique identifier
    name: string; // Name of the family member
    age: number; // Age of the family member
    parentId?: string; // Optional property if they have a parent
}
