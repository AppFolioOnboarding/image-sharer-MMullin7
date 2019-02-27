class Image < ApplicationRecord
  validates :url, presence: true,
                  format: { with: /\.(png|jpg)\Z/i,
                            message: 'must be a valid image url, .jpg,.png' }
end
