export const getMonthAndYear = (dateString: string | undefined) => {
    if (!dateString) {
        return {
            month: 'March',
            year: 2001
        }
       
    }

    const date = new Date(dateString);

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return {
        month: monthNames[date.getMonth()],
        year: date.getFullYear(),
    };
};

