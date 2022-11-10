import { Layout, Menu, useTranslate, useRecordContext } from 'react-admin';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import TranslateIcon from '@mui/icons-material/Translate';
import RuleIcon from '@mui/icons-material/Rule';

const LinkToRelatedProducts = () => {
    const record = useRecordContext();
    const translate = useTranslate();
    return record ? (
        <Button
            color="primary"
            component={Link}
            to={{
                pathname: '/posts',
                search: `filter=${JSON.stringify({ category_id: record.id })}`,
            }}
        >
            All posts with the category {record.name} ; 
        </Button>
    ) : null;
};


const MenuButtons = () => (
    <Menu>
        <Menu.DashboardItem />
        {/* <Menu.Item to={{pathname: "/translations", search: `filter={}`}} primaryText="All" leftIcon={<ListIcon />}/> */}
        <Menu.Item to={{pathname: "/translations", search: `filter=${JSON.stringify({creole_text: ""})}`}} primaryText="Translations" leftIcon={<TranslateIcon />}/>
        <Menu.Item to={{pathname: "/translations", search: `filter=${JSON.stringify({creole_text: "!=", approved: false})}`}} primaryText="Reviews" leftIcon={<RuleIcon />}/>
    </Menu>
);

export const CustomMenu = props => <Layout {...props} menu={MenuButtons} />;