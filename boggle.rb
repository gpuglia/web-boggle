require 'byebug'

class Solver
	def initialize
		@path = []
		@target= ["L", "U", "A", "H"]
		@directions = [-5, -4, -3, -1, 1, 3, 4, 5]
		@board = [ "F", "Z", "K", "L",
						   "T", "A", "K", "U",
						   "N", "A", "H", "A",
						   "B", "Q", "K", "L" ]
	end

	def solve!
		@board.each_with_index do |letter, position|
			find_word(position) if letter == @target.first
		end
		@path.length == 0 ? "no word" : @path
	end


	def find_word(position, target_letter_index=0)
		return false if @path.include?(position)
		# current_letter = @board[position]
		# return false unless @board[position] == @target[target_letter_index]
		@path << position

		@directions.each do |direction|
			next if position_invalid?(position + direction)
			if @board[position + direction] == @target[target_letter_index + 1]
				find_word(position + direction, target_letter_index + 1)
			end
		end

		return true if finished?
		@path.pop
		return false
	end

	def position_invalid?(position)
		!(0..15).to_a.include?(position)
	end

	def finished?
		@path.length == @target.length
	end
end

boggle = Solver.new
p boggle.solve!



