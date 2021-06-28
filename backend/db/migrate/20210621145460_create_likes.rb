class CreateLike < ActiveRecord::Migration[5.2]
    def change
      create_table :likes do |t|
        t.integer :count
        t.integer :poem_id
        t.timestamps
      end  
    end
  end