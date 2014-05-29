require 'byebug'

class Solver
	def initialize
		@path = []
		@target= ["K", "A", "B"]
		@directions = [-5, -4, -3, -1, 1, 3, 4, 5]
		@board = [ "F", "Z", "K", "L",
						   "T", "A", "K", "U",
						   "N", "A", "H", "A",
						   "B", "Q", "R", "L" ]
	end

	def solve!
		@board.each_with_index do |letter, position|
			find_word(position)
		end
		@path.length == 0 ? "no word" : @path
	end


	def find_word(position, target_letter_index=0)
		# byebug
		return false if @path.include?(position)
		current_letter = @board[position]
		return false unless current_letter == @target[target_letter_index]
		@path << position
		return true if finished?

		@directions.each do |direction|
			position = position + direction
			next if position_invalid?(position)
			target_letter_index += 1
			find_word(position, target_letter_index)
			@path.pop
		end
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
puts boggle.solve!

