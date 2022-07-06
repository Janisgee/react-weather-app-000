export function formatDate(date, timezone) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours < 12 ? "AM" : "PM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${day}, ${hours}:${minutes} ${ampm}`;
}