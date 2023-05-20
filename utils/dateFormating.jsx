// import { DateTime } from 'luxon';

// Create a Date object
const date = new Date();

// Get the current year, month, day, and time
const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are zero-based, so we add 1
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

// Format the date and time as a string
export const formattedDate = `${day}/${month}/${year}`;
// const formattedTime = `${hours}:${minutes}:${seconds}`;


// const dateTime = DateTime.now();
// export const formattedDate = dateTime.toFormat('yyyy-MM-dd');
// const formattedTime = dateTime.toFormat('HH:mm:ss');
