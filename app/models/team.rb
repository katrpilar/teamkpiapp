class Team < ApplicationRecord
	belongs_to :company
	has_many :members
	has_many :kpis, as: :kpiable
end