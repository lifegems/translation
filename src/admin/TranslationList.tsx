import { BooleanField, BooleanInput, Datagrid, EditButton, List, TextField, useListContext } from 'react-admin';
import { Typography } from '@mui/material';

export const TranslationAside = () => {
   const { total, isLoading, filterValues } = useListContext();
   if (isLoading) return null;
   // 0: all / 1: translations / 2: reviews
   const filterCount = Object.keys(filterValues).length;

   switch (filterCount) {
      case 2:
         return (
            <Typography>Reviews Remaining: {total}</Typography>
         )
      case 1:
         return (
            <Typography>Translations Remaining: {total}</Typography>
         )
      default:
         return (
            <Typography>Total Translations: {total}</Typography>
         )
   }
}

const TranslationGrid = () => {
   const { total, isLoading, filterValues } = useListContext();
   if (isLoading) return null;
   // 0: all / 1: translations / 2: reviews
   const filterCount = Object.keys(filterValues).length;

   switch (filterCount) {
      case 2: // reviews
         return (
            <Datagrid rowClick="edit" bulkActionButtons={false}>
               <TextField source="id" />
               <TextField source="english_text" />
               <TextField source="creole_text" />
               <EditButton />
            </Datagrid>
         )
      case 1: // translations
         return (
            <Datagrid rowClick="edit" bulkActionButtons={false}>
               <TextField source="id" />
               <TextField source="english_text" />
               <EditButton />
            </Datagrid>
         )
      default: // all
         return (
            <Datagrid rowClick="edit" bulkActionButtons={false}>
               <TextField source="id" />
               {/* <TextField source="description" /> */}
               <TextField source="english_text" />
               <TextField source="creole_text" />
               <BooleanField source="approved" />
               <EditButton />
            </Datagrid>
         )
   }

}

export const TranslationList = () => {

   return (
      <>
         <List aside={<TranslationAside />} perPage={25}>
            <TranslationGrid />
         </List>
      </>
   )
};