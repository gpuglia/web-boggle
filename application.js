function Solver() {
    this.path = [];
    this.target = ["K", "A", "B"];
    this.directions = [-5, -4, -3, -1, 1, 3, 4, 5];
    this.board = ["F", "Z", "K", "L",
                  "T", "A", "K", "N",
                  "N", "A", "Z", "A",
                  "B", "Q", "R", "K" ];
};

Solver.prototype.solve = function() {
  for (var position = 0; position < this.board.length; position++) {

    if (this.board[position] === this.target[0]) {
      this.find_word(position);
    }
  }
  return this.path
};

Solver.prototype.find_word = function(position, target_letter_index) {
  target_letter_index = target_letter_index || 0

  if (this.path.indexOf(position) != -1) { //adding {
    return false;
  } //adding }
  console.log("position:" + position)
  this.path.push(position);
  console.log("PATH")
  console.log(this.path.length); //FIND ME


  if (this.finished()) { //adding {
    return true;
  } //adding }


  for (var i = 0; i < this.directions.length; i++) {
    if (!this.position_invalid(position + this.directions[i])) {
      console.log("current position: " + position);
      console.log("next position: " + (position + this.directions[i]));
      // console.log(this.board[position + this.directions[i]]) //FIND ME
      console.log("next letter: "+this.target[target_letter_index + 1])
      console.log("tgli: " + (target_letter_index + 1)) //FIND ME
      if (this.board[position + this.directions[i]] === this.target[target_letter_index + 1]) {
        console.log("before recursion")
        if (this.find_word(position + this.directions[i], target_letter_index + 1)) {
          console.log("!!!!!!!!!!!!!!!!!!!!!!!")
          return true;
        }
      }
    }
  }

  this.path.pop();
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

boggle = new Solver();
boggle.solve();
console.log(boggle.path)
