function makeGrid() {

  const gridHeight = document.getElementById('input_height').value;
  const gridWidth = document.getElementById('input_width').value;
  const canvas = document.getElementById('pixel_canvas');

  canvas.innerHTML = '';

  // while (canvas.rows.length > 0) {
  //   canvas.deleteRow(0);
  // }

  for (let i = 0; i < gridHeight; i++) {
    let row = canvas.insertRow(i);

    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener('click', function(event) {
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}

document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});
