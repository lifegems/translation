import * as React from "react";
import { Admin, Resource } from 'react-admin';

// import jsonServerProvider from 'ra-data-json-server';
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import { TranslationCreate } from "./TranslationCreate";
import { TranslationList } from "./TranslationList";
import { TranslationEdit } from "./TranslationEdit";
import Dashboard from "../Dashboard";
import { CustomMenu } from "../CustomMenu";
const dataProvider = postgrestRestProvider("/api/admin");


const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} layout={CustomMenu}>
    <Resource name="translations" list={TranslationList} edit={TranslationEdit} create={TranslationCreate} />
  </Admin>
);

export default App;