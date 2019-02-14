
function makeGrid()
 {
    var height = document.getElementById('input_height').value;
    var width = document.getElementById('input_width').value;
    var table = document.getElementById('pixel_canvas');
	// Table grid creation code :
    table.innerHTML = '';
    for (var i = 0; i < height; i++)
     {
        var tr = document.createElement('tr');
        for (var j = 0; j < width; j++)
         {
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

//jQuery to change color of pixel when clicked.
$('body').on('click', 'td', function() {
	var color = document.getElementById('colorPicker').value;
    $(this).css('background-color', color);
});
