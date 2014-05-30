$(document).ready(function() {
  // var currentBoard = new Board()
	$("#shake").on("click", function(event) {
		event.preventDefault();
		$("td").empty();
		window.currentBoard = myBoard.shakeBoard();

		for (i = 0; i < 16; i++) {
			$("#cell"+i).append(currentBoard[i])
		};
	});

  $("#user_word_input").on("submit", function(event) {
    event.preventDefault();
    $("td").removeClass("searching found");
    console.log(window.currentBoard);
    var target = $('input[name=target_word]').val().toUpperCase();
    boggle = new Solver(window.currentBoard, target);
    var path = boggle.solve();

    $.each(path, function(index, position){
      $("#cell"+position).removeClass("searching");
      $("#cell"+position).addClass("done");

    })
      //if cell is in path while searching
      // $("#cell"+i).addClass("searching");
      // //if cell is in path when done
      // $("#cell"+i).addClass("done");
  });
});
