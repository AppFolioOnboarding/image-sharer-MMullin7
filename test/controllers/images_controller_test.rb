require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get new' do
    get new_image_url
    assert_select 'h1', 'Add New Image URL'
    assert_response :success
  end

  test 'should show image' do
    Image.create!(url: 'https://www.example.com/test.jpg')
    get image_url(Image.last)
    assert_select 'img[src="https://www.example.com/test.jpg"]'
    assert_select '.js-tag-list', ''
  end

  test 'should show image with tag-list' do
    Image.create!(url: 'https://www.example.com/test.jpg', tag_list: %w[Test])
    get image_url(Image.last)
    assert_select 'img[src="https://www.example.com/test.jpg"]'
    assert_select '.js-tag-list a' do |links|
      assert_equal 'Test', links.last.text
      assert_equal 'http://www.example.com/images?tag=Test', links.last.attr('href')
    end
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
    Image.create!(url: 'https://www.example.com/test3.jpg',
                  created_at: Time.zone.parse('2019-02-01'),
                  tag_list: %w[Test])

    get images_url

    assert_select 'img' do |images|
      assert_equal 'https://www.example.com/test1.jpg', images.first.attr('src')
      assert_equal 'https://www.example.com/test2.jpg', images[1].attr('src')
      assert_equal 'https://www.example.com/test3.jpg', images.last.attr('src')
    end
  end

  test 'index contains tag-list' do
    Image.create!(url: 'https://www.example.com/test2.jpg', created_at: Time.zone.parse('2019-02-02'))
    Image.create!(url: 'https://www.example.com/test3.jpg',
                  created_at: Time.zone.parse('2019-02-01'),
                  tag_list: %w[Test Test2])

    get images_url

    assert_select '.js-tag-list' do |tag_lists|
      assert_equal '', tag_lists.first.text.strip
      assert_equal 'Test , Test2', tag_lists.last.text.squish

      assert_equal 'http://www.example.com/images?tag=Test', tag_lists.last.children[1].attr('href')
    end
  end

  test 'index with filter' do
    Image.create!(url: 'https://www.example.com/test2.jpg', created_at: Time.zone.parse('2019-02-02'))
    Image.create!(url: 'https://www.example.com/test3.jpg',
                  created_at: Time.zone.parse('2019-02-01'),
                  tag_list: %w[Test])

    Image.create!(url: 'https://www.example.com/test4.jpg',
                  created_at: Time.zone.parse('2019-02-02'),
                  tag_list: %w[Test])

    get images_url(tag: 'Test')
    assert_response :ok

    assert_select 'img', 2

    assert_select 'img' do |images|
      assert_equal 'https://www.example.com/test4.jpg', images.first.attr('src')
      assert_equal 'https://www.example.com/test3.jpg', images.last.attr('src')
    end
  end
end
