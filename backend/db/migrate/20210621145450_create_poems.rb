class CreatePoems < ActiveRecord::Migration[5.2]
  def change
    create_table :poems do |t|
      t.string :text
      t.string :album_name
      t.string :username_name
      t.timestamps
    end
  end
end