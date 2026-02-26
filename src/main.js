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

  const listEl = document.getElementById("list");
  listEl.textContent = "";
  const fragment = new DocumentFragment();

  const now = Date.now();

  const expiredList = [];
  const list = [];

  for (const item of data) {
    const duration = differenceInDays(now, new Date(item.lastUpdatedDate));

    const li = document.createElement("li");
    const span = document.createElement("span");
    li.textContent = `${item.name}, `;
    span.textContent = `minęło ${duration} (z ${item.durationInDays}) dni`;

    li.appendChild(span);

    if (duration >= item.durationInDays) {
      span.classList.add("red");
      expiredList.push(li);
    } else if (item.durationInDays - duration < 7) {
      span.classList.add("yellow");
      list.push(li);
    } else {
      list.push(li);
    }
  }

  expiredList.forEach((item) => fragment.append(item));
  list.forEach((item) => fragment.append(item));

  listEl.append(fragment);
}

init();
