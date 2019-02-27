require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get new' do
    get new_image_url
    assert_select 'h1', 'Add New Image URL'
    assert_response :success
  end

  test 'should show image 1' do
    Image.create!(url: 'https://www.example.com/test.jpg')
    get image_url(Image.last)
    assert_select 'img[src="https://www.example.com/test.jpg"]'
  end

  test 'should create and succeed' do
    assert_difference('Image.count', 1) do
      post images_url, params: { image: { url: 'https://www.example.com/test.jpg' } }

      assert_redirected_to image_path(Image.last.id)
    end
  end

  test 'should fail create' do
    assert_difference('Image.count', 0) do
      post images_url, params: { image: { url: 'BAD_URL_TEST' } }
      assert_response :unprocessable_entity
    end
  end

  test 'should render 3 images in the index page in descending order' do
    Image.create!(url: 'https://www.example.com/test1.jpg', created_at: Time.zone.parse('2019-02-04'))
    Image.create!(url: 'https://www.example.com/test2.jpg', created_at: Time.zone.parse('2019-02-02'))
    Image.create!(url: 'https://www.example.com/test3.jpg', created_at: Time.zone.parse('2019-02-01'))

    get images_url

    assert_select 'img' do |images|
      assert_equal images.first.attr('src'), 'https://www.example.com/test1.jpg'
      assert_equal images[1].attr('src'), 'https://www.example.com/test2.jpg'
      assert_equal images.last.attr('src'), 'https://www.example.com/test3.jpg'
    end
  end
end
