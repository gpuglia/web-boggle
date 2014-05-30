$(document).ready(function() {
	$("#shake").on("click", function(event) {
		event.preventDefault();
		$("td").empty();
		shakenBoard = myBoard.shakeBoard();
		for (i = 0; i < 16; i++) {
			$("#cell"+i).append(shakenBoard[i])
		}
	});
});