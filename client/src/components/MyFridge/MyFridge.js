import { Typography, Box } from '@material-ui/core/';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

function MyFridge() {
    return (
        <Box>
            <Navbar page="Mit køleskab" />

            <Box id="content" style={{ padding: '0px 15px 15px 15px' }}>
                hej
            </Box>
        </Box>
    );
}

export default MyFridge;