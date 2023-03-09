const data = [
  { name: 'Marcin', age: 30, city: 'Gliwice', sex:"M"  },
  { name: 'Tomek', age: 25, city: 'Sosnowiec', sex:"M" },
  { name: 'Jacek', age: 40, city: 'Bytom', sex:"M" },
  { name: 'Kasia', age: 21, city: 'Bytom', sex:"K" },
];

const table = document.createElement('table');
table.setAttribute('class', 'tabelka');
const headerRow = table.insertRow();
Object.keys(data[0]).forEach(key => {
  const headerCell = headerRow.insertCell();
  headerCell.textContent = key;
});
data.forEach(obj => {
  const row = table.insertRow();
  Object.values(obj).forEach(value => {
    const cell = row.insertCell();
    cell.textContent = value;
  });
});
const json = JSON.stringify(data);
console.log(json);

document.body.appendChild(table);
