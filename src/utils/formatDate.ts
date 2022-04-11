export const formatDate = (date: string | undefined ): string  => {

    const options: any = {
        //  era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        // weekday: 'long',
        //  timezone: 'UTC',
        //  hour: 'numeric',
        //  minute: 'numeric',
        //  second: 'numeric'
    };

    if(!date) return "";

    return  new Date(date).toLocaleString("en", options);
};