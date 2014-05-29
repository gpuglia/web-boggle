board = ["F", "Z", "K", "L", 
			   "T", "A", "K", "U", 
			   "N", "A", "H", "A", 
			   "B", "Q", "R", "L"]

target = ["K", "A", "B"]

directions = [-5, -4, -3, -1, 1, 3, 4, 5]

path = []

board.each_with_index do |letter, position|
	
end

class Solver
	def initialize(target_word)
		@path = []
		@target_word = target_word.split("")
	end


	def find_word(position, target_letter)

	end
end
