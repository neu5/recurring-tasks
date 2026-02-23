import { differenceInDays } from "date-fns";
import "./styles.css";

async function fetchData() {
  const response = await fetch(`data.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data`);
  }
  const data = await response.json();
  return data;
}

async function init() {
  const data = await fetchData();

  const list = document.getElementById("list");
  list.textContent = "";
  const fragment = new DocumentFragment();

  const now = Date.now();

  for (const item of data) {
    const duration = differenceInDays(now, new Date(item.lastUpdatedDate));

    const li = document.createElement("li");
    const span = document.createElement("span");
    li.textContent = `${item.name}, `;
    span.textContent = `minęło ${duration} (z ${item.durationInDays}) dni`;

    li.appendChild(span);
    if (duration < item.durationInDays - 7) {
      span.classList.add("green");
    } else if (duration < item.durationInDays) {
      span.classList.add("yellow");
    } else {
      span.classList.add("red");
    }

    fragment.append(li);
  }

  list.append(fragment);
}

init();
