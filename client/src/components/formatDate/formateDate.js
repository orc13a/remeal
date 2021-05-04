import { Typography } from "@material-ui/core";

export const formateDate = (date) => {
    let today = new Date();
    let form_date = new Date(date) //new Date('2021-5-5');
    let difference = form_date>today?form_date-today:today-form_date;
    let diff_days = Math.floor(difference / (1000 * 3600 * 24)) + 1;
    
    let dateStr = date.toString();
    let noTime = dateStr.split('T')[0];
    let noDash = noTime.split('-');
    let newDate = `${noDash[2]} / ${noDash[1]} - ${noDash[0]}`;

    if (diff_days < 4) {
        return <Typography style={{ color: '#f44336' }}> { newDate } </Typography>
    } else {
        return <Typography> { newDate } </Typography>
    }

    //return newDate;
}