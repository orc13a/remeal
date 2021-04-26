import { Typography, Box } from '@material-ui/core/';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

function MyFridge() {
    return (
        <Box>
            <Navbar />

            <Box id="content" style={{ padding: '0px 15px 15px 15px' }}>
                <Box>
                    <Typography variant="h5">
                        Dit køleskab
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default MyFridge;