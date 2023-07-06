function extractDateFromValue(value) {
    const dateObj = new Date(value);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();

    // Pad single-digit month and day with leading zero if necessary
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');

    const extractedDate = `${year}-${formattedMonth}-${formattedDay}`;
    return extractedDate;
}

export default extractDateFromValue