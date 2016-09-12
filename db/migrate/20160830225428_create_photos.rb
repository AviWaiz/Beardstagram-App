class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.integer :user_id, null: false
      t.string :url
      t.integer :x
      t.integer :y
      t.integer :beardWidth
      t.integer :beardHeight
      t.string :icon_url

      t.timestamps null: false
    end

    add_index :photos, :user_id
  end
end
