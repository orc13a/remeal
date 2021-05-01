import { Box } from '@material-ui/core';
import Cookies from 'universal-cookie';

import { Auth } from '../Auth/Auth';

function MyFridge() {
    Auth(false);

    const cookies = new Cookies();

    return (
        <Box>
            Home
        </Box>
    );
}

export default MyFridge;