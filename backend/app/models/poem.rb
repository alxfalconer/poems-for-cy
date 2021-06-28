class Poem < ActiveRecord::Base
	belongs_to :username
	has_many :likes
	
end