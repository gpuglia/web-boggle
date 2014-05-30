function Solver(board, target) {
    this.path = [];
    this.target = target;
    // this.directions = [-5, -4, -3, -1, 1, 3, 4, 5];
    this.board = board;
};

Solver.prototype.solve = function() {
  for (var position = 0; position < this.board.length; position++) {

    if (this.board[position] === this.target[0]) {
      this.find_word(position);
    }
    if (this.finished())
      break;
  }
  return this.path
};

Solver.prototype.find_word = function(position, target_letter_index) {
  target_letter_index = target_letter_index || 0

  if (this.path.indexOf(position) != -1) { //adding {
    return false;
  } //adding }

  this.path.push(position);

  // window.setTimeout(function(){
    $("#cell"+position).addClass("searching");
  // },500);
  window.setTimeout(1 +1,500);

  console.log(this.path); //FIND ME


  if (this.finished()) { //adding {
    return true;
  } //adding }

  console.log(this.directions(7))
  for (var i = 0; i < this.directions(position).length; i++) {
    if (!this.position_invalid(position + this.directions(position)[i])) {
    // (this.board[position + this.directions(position)[i]] === this.target[target_letter_index + 1])
      if (this.board[position + this.directions(position)[i]] === this.target[target_letter_index + 1]) {
        // console.log("before recursion")
        if (this.find_word(position + this.directions(position)[i], target_letter_index + 1)) {
          // console.log("!!!!!!!!!!!!!!!!!!!!!!!")
          return true;
        }
      }
    }
  }
  var popped = this.path.pop();
  console.log("POPPED: " + popped);
    // console.log("cellID: " + ("#cell"+popped));
  $("#cell"+popped).removeClass("searching");
  // window.setTimeout(1000);
  return false;
};

Solver.prototype.position_invalid = function(position) {
  function directions() {
    var valid_directions = [];
    for (var i = 0; i < 16; i++) {
      valid_directions.push(i);
    }

    return valid_directions;
  }

  return (directions().indexOf(position) == -1);
}

Solver.prototype.finished = function() {
  return (this.path.length === this.target.length)
}

//adding directions function
Solver.prototype.directions = function(position) {
  if (position % 4 === 3) {
    return [-5, -4, -1, 3, 4, 20, 20, 20];
  } else if (position % 4 === 0) {
    return [-4, -3, 1, 4, 5, 20, 20, 20];
  } else {
    return [-5, -4, -3, -1, 1, 3, 4, 5];
  }
};

// Solver.prototype.isTargetInNextDirection = function() {

// }

// boggle = new Solver(currentBoard);
// boggle.solve();
// console.log(boggle.path);
