class CreatePoems < ActiveRecord::Migration[5.2]
  def change
    create_table :poems do |t|
      t.integer :like_count
      t.string :text
      t.string :username_name
      t.integer :painting_id
      t.integer :username_id
      t.timestamps
    end
  end
end