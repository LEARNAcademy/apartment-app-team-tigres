json.extract! apartment, :id, :listing_name, :address_1, :address_2, :city, :zip_code, :state, :management_company, :management_company_phone, :opening_time, :closing_time, :created_at, :updated_at
json.url apartment_url(apartment, format: :json)
