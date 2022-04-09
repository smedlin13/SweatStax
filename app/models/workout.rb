class Workout < ApplicationRecord
  belongs_to :user

  validates :img, :note, :workout_type, :calories, :elevation, :duration, :date, :location, :dif_level, :tag, presence: true
end
