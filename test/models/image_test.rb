require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  test 'should not save image with empty' do
    image = Image.new
    assert_not image.save
    assert image.errors.full_messages.include?("Url can't be blank")
  end

  test 'should not save image without an inappropriate url' do
    image = Image.new(url: 'BAD_URL')
    assert_not image.save
    assert_equal(['Url must be a valid image url, .jpg,.png'], image.errors.full_messages)
  end

  test 'should save image when it has an appropriate url' do
    image = Image.new(url: 'https://www.imageurl.com/test.jpg')
    assert_predicate image, :valid?
  end

  test 'should be able to add tags to the image' do
    image = Image.new(url: 'https://www.test.com/test.jpg')
    image.tag_list.add('Tag', 'Tag2', 'Tag3')

    assert_equal image.tag_list, %w[Tag Tag2 Tag3]
  end
end
