import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link, Title } from 'react-admin';
import { Typography } from '@mui/material';

export default () => (
    <Card>
        <Title title="Tradiksyon pou Aplikasyon Hourglass" />
        <CardContent>
            <Typography variant="h3">Byenveni!</Typography>            
            <Typography style={{marginTop:'20px'}}>Mèsi anpil paske w disponib ede tradwi teks pou aplikasyon <a style={{color:'blue'}} target="_onblank" href="https://hourglass-app.com/">Hourglass</a>.</Typography>            
            <Typography>Tanpri sèvi avèk jw.org, piblikasyon nou yo, oswa lòt liv ki gen respè pou ede fè tradiksyon ki klè.</Typography>
            <Typography>Nou vreman apresye tout sa w disponib fè.</Typography>

            <Typography variant="h4" style={{marginTop:'20px'}}>Ede avèk Tradiksyon</Typography>
            <Typography>
                1. Vizite paj <Link to={{pathname: "/translations", search: `filter=${JSON.stringify({creole_text: ""})}`}}>'Translations'</Link> <br/>
                2. Chwazi premye teks nan lis la, peze 'Edit'. <br/>
                3. Li teks angle, epi li deskripsyon ki kapab bay plis konteks pou fraz la. <br/>
                4. Nan bwat 'Creole text', mete tradiksyon nan lang Kreyol Ayisyen. <br/>
                5. Peze 'Save'
            </Typography>

            {/* <Typography variant="h4" style={{marginTop:'20px'}}>Ede avèk Revizyon</Typography>
            <Typography>
                1. Vizite paj <Link to={{pathname: "/translations", search: `filter=${JSON.stringify({creole_text: "!=", approved: false})}`}}>'Reviews'</Link> <br/>
                2. Chwazi premye teks nan lis la, peze 'Edit'. <br/>
                3. Li teks angle, epi li deskripsyon ki kapab bay plis konteks pou fraz la. <br/>
                4. Nan bwat 'Creole text', konsidere si tradiksyon nan lang Kreyol Ayisyen parèt klè. <br/>
                5. Si li bon, peze "Approved", epi peze "Save" <br/>
                6. Si li pa bon, chanje tradiksyon, epi peze "Save"
            </Typography> */}

            <hr />
            <Typography variant="h3" style={{marginTop:'30px'}}>Welcome!</Typography>            
            <Typography style={{marginTop:'20px'}}>Thank you for offering to help translate for the <a style={{color:'blue'}} target="_onblank" href="https://hourglass-app.com/">Hourglass</a> application..</Typography>
            <Typography>Please use jw.org, our publications, or other high quality translations to ensure the texts are clear and understandable.</Typography>
            <Typography>We deeply appreciate all that you're available to assist with.</Typography>

            <Typography variant="h4" style={{marginTop:'20px'}}>Help to Translate</Typography>
            <Typography>
                1. Visit the <Link to={{pathname: "/translations", search: `filter=${JSON.stringify({creole_text: ""})}`}}>'Translations'</Link> page.<br/>
                2. Select the first text on the list, click 'Edit'. <br/>
                3. Read the English text, then the English description which gives additional context.<br/>
                4. In the Creole text box, enter the Haitian Creole translation of the phrase.<br/>
                5. Press 'Save'
            </Typography>

            {/* <Typography variant="h4" style={{marginTop:'20px'}}>Help to Review</Typography>
            <Typography>
                1. Visit the <Link to={{pathname: "/translations", search: `filter=${JSON.stringify({creole_text: "!=", approved: false})}`}}>'Reviews'</Link> page.<br/>
                2. Select the first text on the list, click 'Edit'. <br/>
                3. Read the English text, then the English description which gives additional context.<br/>
                4. In the Creole text box, check whether the Haitian Creole translation of the phrase is clear.<br/>
                5. If it looks good, select 'Approved', then press 'Save'.<br/>
                6. If not, update the translation so it's clear, then press 'Save'
            </Typography> */}
        </CardContent>
    </Card>
);