class Username < ActiveRecord::Base
	has_many :poems
	has_many :likes, through: :poems
end