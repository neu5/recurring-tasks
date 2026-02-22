import { differenceInDays } from "date-fns";
import "./styles.css";

// const result = differenceInDays(
//   new Date(2020, 5, 1),
//   new Date(2020, 2, 1)
// )
const result = differenceInDays(Date.now(), new Date("2026-02-15"));

console.log(result);

// Function to fetch log data from a JSON file
// async function fetchLogData(fileName) {
//   const response = await fetch(`/logData/${fileName}`);
//   if (!response.ok) {
//     throw new Error(`Failed to fetch ${fileName}`);
//   }
//   const data = await response.json();
//   return data;
// }

// Function to initialize charts
// async function initCharts() {
//   const logFiles = [
//     "logData1.json",
//     "logData2.json",
//     "logData3.json",
//     "logData4.json",
//     "logData5.json",
//     "logData6.json",
//     "logData7.json",
//     "logData8.json",
//     "logData9.json",
//     "logData10.json",
//   ];

//   const container = document.querySelector(".container");

//   for (const fileName of logFiles) {
//     const logData = await fetchLogData(fileName);

//     // Create a new canvas element for each chart
//     const canvas = document.createElement("canvas");
//     canvas.classList.add("chart-canvas"); // Add a class for easier CSS targeting
//     canvas.id = `chart-${fileName}`;
//     canvas.width = 250; // Set fixed width for better layout
//     canvas.height = 250; // Set fixed height for better layout
//     container.appendChild(canvas);

//     createChart(canvas.id, logData);
//   }
// }

// Call the function to initialize charts
// initCharts();
