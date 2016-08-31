class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.string :url

      t.timestamps null: false
    end
  end
end
