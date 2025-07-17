let currentPlayer = "X"
let arr = Array(9).fill(null);
const cols = document.querySelectorAll('.col')
function checkwinner(){
  const winPatterns = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal \
    [2, 4, 6]  // Diagonal /
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return arr[a]; // Return the winner ('X' or 'O')
    }
  }
  
  return null; // No winner yet
}
// console.log(cols)
cols.forEach(function(col){
  
  col.addEventListener('click', function(e) {
    // console.log(e);
    // console.log(e.target);
    const id = Number(e.target.id);
    //  console.log(id);
    e.target.innerText = currentPlayer;
    arr[id] = currentPlayer;
    // console.log(arr);

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  })
    
});