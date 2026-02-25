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
    console.log({ duration });
    if (duration >= item.durationInDays) {
      span.classList.add("red");
    } else if (item.durationInDays - duration < 7) {
      span.classList.add("yellow");
    }

    fragment.append(li);
  }

  list.append(fragment);
}

init();
