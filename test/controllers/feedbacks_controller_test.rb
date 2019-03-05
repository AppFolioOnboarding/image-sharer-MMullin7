require 'test_helper'

class FeedbacksControllerTest < ActionDispatch::IntegrationTest
  test 'should parse json data' do
    post api_feedbacks_path
    assert_equal 'Thanks for your feedback!', JSON.parse(@response.body)['msg']
  end
end
