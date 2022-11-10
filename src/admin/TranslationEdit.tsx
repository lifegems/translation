import { BooleanInput, Edit, SaveButton, SimpleForm, TextField, TextInput, Toolbar } from 'react-admin';
import { Typography } from '@mui/material';

const EditToolbar = props => (
   <Toolbar {...props} >
       <SaveButton />
   </Toolbar>
);

export const TranslationEdit = () => (
    <Edit>
        <SimpleForm toolbar={<EditToolbar />}>
            <Typography>Deskripsyon / Description</Typography>
            <TextField multiline source="description" sx={{marginBottom: '30px'}} />

            <Typography>Angle</Typography>
            <TextField multiline source="english_text" sx={{width: '100%',marginBottom: '30px'}} />

            <Typography>Kreyol Ayisyen</Typography>
            <TextInput multiline source="creole_text" sx={{width: '100%'}} />
            <BooleanInput source="approved" />
        </SimpleForm>
    </Edit>
);