export default (index, board, className) =>{
  return {
    type: 'TOGGLE_PIECE',
    index: index,
    board: board,
    className: className
  };
};
