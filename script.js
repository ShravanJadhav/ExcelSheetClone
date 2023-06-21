
const theadRow = document.getElementById('table-heading-row');
const tbody = document.getElementById('table-body');
let currentCell;

const columns = 26;
const rows = 100;
for(let col=0; col<columns; col++){
   let th = document.createElement('th');
   th.innerHTML=String.fromCharCode(col+65);
   theadRow.append(th); 
}

for(let row=1; row<=rows; row++){
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerText = row;
    tr.append(th);

    //looping from A to Z

    for(let col=0; col<columns; col++){
        let td = document.createElement('td');
        td.setAttribute('contenteditable','true');
        td.setAttribute('id',`${String.fromCharCode(col+65)}${row}`);
        td.addEventListener('focus',(event)=>onfocus(event));
        tr.append(td);
    }

    tbody.append(tr);
}

function onfocus(event){
    currentCell=event.target;
    document.getElementById('current-cell').innerText=currentCell.id;
     
}