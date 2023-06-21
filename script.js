
const theadRow = document.getElementById('table-heading-row');
const tbody = document.getElementById('table-body');

//style button
const boldButton = document.getElementById('bold-btn');
const italicButton = document.getElementById('italic-btn');
const underlineButton = document.getElementById('underline-btn');

//align button
const leftAlign = document.getElementById('left-align');
const centerAlign = document.getElementById('center-align');
const rightAlign = document.getElementById('right-align');

//dropdown textsize
const fontSizeDropdown = document.getElementById('font-size');

//dropdown fontFamily
const fontFamilyDropdown = document.getElementById('font-family');

//cut copy paste button
const copyButton = document.getElementById('copy-btn');
const cutButton = document.getElementById('cut-btn');
const pasteButton = document.getElementById('paste-btn');


let currentCell;

const columns = 26;
const rows = 100;

//create all colums a to z
for(let col=0; col<columns; col++){
   let th = document.createElement('th');
   th.innerHTML=String.fromCharCode(col+65);
   theadRow.append(th); 
}

//make all empty cell 
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

//get currentCell
function onfocus(event){
    currentCell=event.target;
    document.getElementById('current-cell').innerText=currentCell.id;
     
}

//bold button
boldButton.addEventListener('click',()=>{
    if(currentCell.style.fontWeight==='bold'){
        currentCell.style.fontWeight='normal';
    }else{
        currentCell.style.fontWeight='bold';

    }   
})

//italics button
italicButton.addEventListener('click',()=>{
    if(currentCell.style.fontStyle==='italic'){
        currentCell.style.fontStyle='normal';
    }else{
        currentCell.style.fontStyle='italic';

    }   
})

//unserline button
underlineButton.addEventListener('click',()=>{
    if(currentCell.style.textDecoration==='underline'){
        currentCell.style.textDecoration='none';
    }else{
        currentCell.style.textDecoration='underline';
    }   
})

//leftAlign button
leftAlign.addEventListener('click',()=>{
    if(currentCell.style.textAlign==='left'){
        currentCell.style.textAlign='left';
    }else{
        currentCell.style.textAlign='left';
    }   
})

//cennterAlign button
centerAlign.addEventListener('click',()=>{
    if(currentCell.style.textAlign==='center'){
        currentCell.style.textAlign='left';
    }else{
        currentCell.style.textAlign='center';
    }   
})

//rightAlign button
rightAlign.addEventListener('click',()=>{
    if(currentCell.style.textAlign==='right'){
        currentCell.style.textAlign='left';
    }else{
        currentCell.style.textAlign='right';
    }   
})

//fontSize dropdown
fontSizeDropdown.addEventListener('change',()=>{
    currentCell.style.fontSize=fontSizeDropdown.value;
})

//dropdown fontFamily
fontFamilyDropdown.addEventListener('change',()=>{
    currentCell.style.fontFamily=fontFamilyDropdown.value;
})


//cutButton
let cutValue={};
cutButton.addEventListener('click',()=>{
    cutValue={
        style:currentCell.style.cssText,
        text:currentCell.innerText,
    }
    currentCell.innerText='';
    currentCell.style=null;
})

//pasteButton
pasteButton.addEventListener('click',()=>{
    if(cutValue.text){
        currentCell.style=cutValue.style;
        currentCell.innerText = cutValue.text;
    } 
})

//copyButton
copyButton.addEventListener('click',()=>{
    cutValue={
        style:currentCell.style.cssText,
        text:currentCell.innerText,
    }
})



