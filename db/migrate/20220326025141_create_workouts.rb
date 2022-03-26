class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :img
      t.string :note
      t.string :workout_type
      t.integer :calories
      t.integer :elevation
      t.integer :duration
      t.string :date
      t.string :location
      t.integer :dif_level
      t.string :tag
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
