
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let itemDescription = document.getElementById('description');
let filter = document.getElementById('filter');

//Function addItem

const addItem = (e) => {
    e.preventDefault();
    
    //Get Input Value
    let newItem = document.getElementById('item').value;
    // console.log(newItem);
    //Get the input valu of Description
    let itemDes = document.getElementById('description').value;

    //Create new Element
    let li = document.createElement('li');

    //Add Class
    li.className = 'list-group-item';
    
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    //Add text node with the item Description Value
    li.appendChild(document.createElement('br'));
     li.appendChild(document.createTextNode( itemDes));
     itemDescription.appendChild(li);

    //Create Delete button
    let delButton = document.createElement('button');

    //Add Classes to del button
    delButton.className = 'btn btn-danger btn-sm float-right delete';

    //Append Text Node
    delButton.appendChild(document.createTextNode('x'));

    //Append Button to Li
    li.appendChild(delButton);

    //Append li to List
    itemList.appendChild(li);

    //Create an Edit Button
    let editButton = document.createElement('button');
    
    //Add Classes to edit Button
    editButton.className = 'btn btn-secondary float-right btn-sm mx-3 px-3';

    //Append Text Node
    editButton.appendChild(document.createTextNode('Edit'));

    //Append button to Li
    li.appendChild(editButton);

}

//Remove Item
const removeItem = (e) => {
  if(e.target.classList.contains('delete')){
    if(confirm('Are you Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


//Filter Items
const filterItems =(e) =>{

  //Convert to lower Case
  let text = e.target.value.toLowerCase();
  
  //get list
  let items = itemList.getElementsByTagName('li');
  // console.log(items);
  //Convert to array
  let arr = Array.from(items);
  console.log(arr);
  arr.filter((item) =>{
    let itemName = item.firstChild.textContent;
    let itemDescription = item.firstChild.nextSibling.nextSibling.textContent;
    // console.log(itemDescription);
    if(itemName.toLowerCase().indexOf(text)!=-1 || itemDescription.toLowerCase().indexOf(text)!=-1){
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }
  })
}


//Form submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click' , removeItem);

//filter Event
filter.addEventListener('keyup', filterItems)
