class CreateUsername < ActiveRecord::Migration[5.2]
    def change
      create_table :usernames do |t|
        t.string :name
        t.timestamps
      end  
    end
  end