const theadRow=document.getElementById("tHeadRow");
const tBody=document.getElementById("tBody")
const cellSelected=document.getElementById("heading-cell");

function colGen(typeOfCell,tableRow,isInnerText,rowNumber){
    for(let col=1;col<=26;col++){
        const cell=document.createElement(typeOfCell);
        if(isInnerText){
            cell.innerText=String.fromCharCode(col+64);
        }
        else{
            cell.setAttribute("id",`${String.fromCharCode(col+64)}${rowNumber}`)
            cell.setAttribute("contenteditable",true)
            cell.addEventListener("focus",(event)=>focusHandler(event.target))
        }
        tableRow.appendChild(cell)
    }
}
function focusHandler(cell){
    cellSelected.innerText=cell.id+" "+"Selected";
}

colGen("th",theadRow,true);

for(let row=1;row<=100;row++){
    const tr=document.createElement("tr");
    const th=document.createElement("th");
    th.innerText=row;
    tr.appendChild(th);
    // for(col=1;col<=26;col++){
    //     const td=document.createElement("td");
    //     tr.appendChild(td)
    // }
    colGen("td",tr,false,row);
    tBody.appendChild(tr)
}