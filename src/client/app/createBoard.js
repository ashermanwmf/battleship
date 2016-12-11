const board = {board: []};

for(let i=0;i<10;i++){
  let newRow = [];
  for(let s=0;s<10;s++){
    newRow.push({"toggled":false, "class":"off"});
  }
  board.board.push(newRow);
}

export default board;
