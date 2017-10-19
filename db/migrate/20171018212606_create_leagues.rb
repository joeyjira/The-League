class CreateLeagues < ActiveRecord::Migration[5.1]
  def change
    create_table :leagues do |t|
      t.string :league_name, null: false
      t.timestamps
    end

    add_index :leagues, :league_name, unique: true 
  end
end
