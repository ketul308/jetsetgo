export function formatTimeWithAMPM(d: string | undefined) {
    if (d) {

        const date = new Date(d);
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;

    } else {
        return "empty date"
    }
}