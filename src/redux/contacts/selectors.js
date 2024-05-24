import { createSelector } from "@reduxjs/toolkit";
import { selectFilteredName } from "../filters/selectors";


export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector([selectContacts, selectFilteredName], (contacts, filterName)=>{
    return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filterName.toLowerCase())
    })
});

export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;