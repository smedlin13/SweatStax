class AddUsernameAndCaptionAndFirstNameAndLastName < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :fname, :string
    add_column :users, :lname, :string
    add_column :users, :username, :string
    add_column :users, :caption, :string
  end
end
