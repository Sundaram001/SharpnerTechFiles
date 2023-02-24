
// GETELEMENTBYCLASSNAME//

 var items = document.getElementsByClassName('list-group-item');
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';



//GETELEMENTBYTAGName//

var li = document.getElementsByTagName('li');
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// QUERYSELECTOR && QuerySelectorALL //

 var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = "green";

 var secondItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.color = "white";

//QuerySelectorALL//

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}

    