class Painting < ActiveRecord::Base
	has_many :poems
	has_many :usernames
end