$(document).ready(function() {
  window.currentBoard = myBoard.shakeBoard();
    for (i = 0; i < 16; i++) {
      $("#cell"+i).append(currentBoard[i])
    };
	$("#shake").on("click", function(event) {
		event.preventDefault();
    // $("#board_container").effect("shake", 80);
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
    $('input[name=target_word]').val('');
    boggle = new Solver(window.currentBoard, target);
    var path = boggle.solve();
    console.log(path)
    if (path.length > 0) {
    window.setTimeout(function() {
    $.each(path, function(index, position){
      console.log(position);
      $("#cell"+position).removeClass("searching");
      $("#cell"+position).addClass("found");
      })
    }
    ,500);
  } else {
    $("#user_word_input").effect("shake", {distance: 10, times: 2}, 100);
  };
  });
});
