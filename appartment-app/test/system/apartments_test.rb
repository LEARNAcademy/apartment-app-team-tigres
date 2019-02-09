require "application_system_test_case"

class ApartmentsTest < ApplicationSystemTestCase
  setup do
    @apartment = apartments(:one)
  end

  test "visiting the index" do
    visit apartments_url
    assert_selector "h1", text: "Apartments"
  end

  test "creating a Apartment" do
    visit apartments_url
    click_on "New Apartment"

    fill_in "Address 1", with: @apartment.address_1
    fill_in "Address 2", with: @apartment.address_2
    fill_in "Apartment", with: @apartment.apartment_id
    fill_in "City", with: @apartment.city
    fill_in "Closing time", with: @apartment.closing_time
    fill_in "Listing name", with: @apartment.listing_name
    fill_in "Management company", with: @apartment.management_company
    fill_in "Management company phone", with: @apartment.management_company_phone
    fill_in "Opening time", with: @apartment.opening_time
    fill_in "State", with: @apartment.state
    fill_in "Zip code", with: @apartment.zip_code
    click_on "Create Apartment"

    assert_text "Apartment was successfully created"
    click_on "Back"
  end

  test "updating a Apartment" do
    visit apartments_url
    click_on "Edit", match: :first

    fill_in "Address 1", with: @apartment.address_1
    fill_in "Address 2", with: @apartment.address_2
    fill_in "Apartment", with: @apartment.apartment_id
    fill_in "City", with: @apartment.city
    fill_in "Closing time", with: @apartment.closing_time
    fill_in "Listing name", with: @apartment.listing_name
    fill_in "Management company", with: @apartment.management_company
    fill_in "Management company phone", with: @apartment.management_company_phone
    fill_in "Opening time", with: @apartment.opening_time
    fill_in "State", with: @apartment.state
    fill_in "Zip code", with: @apartment.zip_code
    click_on "Update Apartment"

    assert_text "Apartment was successfully updated"
    click_on "Back"
  end

  test "destroying a Apartment" do
    visit apartments_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Apartment was successfully destroyed"
  end
end
