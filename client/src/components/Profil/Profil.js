import { Typography, Box } from '@material-ui/core/';
//import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

function Profil() {
    return (
        <Box>
            <Navbar />

            <Box id="content" style={{ padding: '0px 15px 15px 15px' }}>
                <Box>
                    <Typography variant="h5">
                        Profil
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Profil;