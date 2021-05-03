export const formateDate = (date) => {
    let dateStr = date.toString();
    let noTime = dateStr.split('T')[0];
    let noDash = noTime.split('-');
    let newDate = `${noDash[2]} / ${noDash[1]} - ${noDash[0]}`;
    return newDate;
}