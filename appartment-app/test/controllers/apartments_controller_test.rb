require 'test_helper'

class ApartmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @apartment = apartments(:one)
  end

  test "should get index" do
    get apartments_url
    assert_response :success
  end

  test "should get new" do
    get new_apartment_url
    assert_response :success
  end

  test "should create apartment" do
    assert_difference('Apartment.count') do
      post apartments_url, params: { apartment: { address_1: @apartment.address_1, address_2: @apartment.address_2, apartment_id: @apartment.apartment_id, city: @apartment.city, closing_time: @apartment.closing_time, listing_name: @apartment.listing_name, management_company: @apartment.management_company, management_company_phone: @apartment.management_company_phone, opening_time: @apartment.opening_time, state: @apartment.state, zip_code: @apartment.zip_code } }
    end

    assert_redirected_to apartment_url(Apartment.last)
  end

  test "should show apartment" do
    get apartment_url(@apartment)
    assert_response :success
  end

  test "should get edit" do
    get edit_apartment_url(@apartment)
    assert_response :success
  end

  test "should update apartment" do
    patch apartment_url(@apartment), params: { apartment: { address_1: @apartment.address_1, address_2: @apartment.address_2, apartment_id: @apartment.apartment_id, city: @apartment.city, closing_time: @apartment.closing_time, listing_name: @apartment.listing_name, management_company: @apartment.management_company, management_company_phone: @apartment.management_company_phone, opening_time: @apartment.opening_time, state: @apartment.state, zip_code: @apartment.zip_code } }
    assert_redirected_to apartment_url(@apartment)
  end

  test "should destroy apartment" do
    assert_difference('Apartment.count', -1) do
      delete apartment_url(@apartment)
    end

    assert_redirected_to apartments_url
  end
end
