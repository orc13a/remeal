import { Box } from '@material-ui/core';
// import Cookies from 'universal-cookie';

import { Auth } from '../Auth/Auth';
import AddItem from '../../components/AddItem/AddItem';

function MyFridge() {
    Auth(false);

    return (
        <Box>
            Home
            <AddItem />
        </Box>
    );
}

export default MyFridge;