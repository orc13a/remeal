import { Typography } from "@material-ui/core";

function PageTitle({ title }) {
    return (
        <Typography variant="h4" style={{ marginBottom: '25px', marginLeft: '7px' }}>
            { title }
        </Typography>
    );
}

export default PageTitle;