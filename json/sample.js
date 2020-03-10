var list = new Array();
		function addItem(){
			list.push(document.getElementById('newArray').value);
			
			document.getElementById('newArray').value=''; 
			document.getElementById('outputDiv').innerHTML = list;
			var string = JSON.stringify(list);
			document.getElementById('outputDiv2').innerHTML = string;
			
			var object = JSON.parse(string);
			var length = object.length;
			var text = " ";
			
			for (i = 0; i < length; i++ ) {
				text += object[i] + " ";
			}
			document.getElementById('outputDiv3').innerHTML = text;	
		}