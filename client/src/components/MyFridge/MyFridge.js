import { Box } from '@material-ui/core';
// import Cookies from 'universal-cookie';

import { Auth } from '../Auth/Auth';

function MyFridge() {
    Auth(false);

    return (
        <Box>
            Home
        </Box>
    );
}

export default MyFridge;