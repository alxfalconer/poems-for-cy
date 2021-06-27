class Painting < ActiveRecord::Base
	has_many :poems
end