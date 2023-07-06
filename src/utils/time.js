function getTimeFromDate(dateString) {
    const date = new Date(dateString);
    const time = date.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return time;
}

export default getTimeFromDate