class Poem < ActiveRecord::Base
	belongs_to :user
	belongs_to :painting
	
end