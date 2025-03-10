export const getMonthAndYear = (dateString: string) => {
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

