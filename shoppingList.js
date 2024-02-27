document.addEventListener('DOMContentLoaded', function() {
    const shoppingList = document.getElementById('shoppingList');
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    
    addItemButton.addEventListener('click', addItemToList);
    itemInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addItemToList();
        }
    });

    function addItemToList() {
        const itemName = itemInput.value.trim();
        if (itemName !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = itemName;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', function() {
                listItem.remove();
            });

            listItem.appendChild(deleteButton);
            listItem.addEventListener('click', toggleDone);
            
            shoppingList.appendChild(listItem);
            itemInput.value = ''; // Clear input field after adding item
        }
    }

    function toggleDone() {
        this.classList.toggle('done');
    }
});