export const getMonthAndYear = (dateString: string | undefined) => {
    if(!dateString){
        return {
            month: 'September',
            year: '2022' 
        };
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

