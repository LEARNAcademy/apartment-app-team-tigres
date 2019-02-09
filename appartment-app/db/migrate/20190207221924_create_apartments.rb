class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :listing_name
      t.string :address_1
      t.string :address_2
      t.string :city
      t.integer :zip_code
      t.string :state
      t.string :management_company
      t.integer :management_company_phone
      t.time :opening_time
      t.time :closing_time

      t.timestamps
    end
  end
end
