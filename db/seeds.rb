IMAGE_URLS = [{ url: 'https://i.imgur.com/4W9Dlt0.jpg' },
              { url: 'https://i.imgur.com/2oNdBlJ.jpg' },
              { url: 'https://i.imgur.com/CQkK4Tq.jpg' },
              { url: 'https://i.imgur.com/HHvtynI.jpg' },
              { url: 'https://i.imgur.com/AwuVL0H.jpg' },
              { url: 'https://i.imgur.com/LKmzukd.jpg' },
              { url: 'https://i.imgur.com/ux2auwK.jpg' },
              { url: 'https://i.imgur.com/qBa5ugK.jpg' },
              { url: 'https://i.imgur.com/2uIeZ1v.jpg' },
              { url: 'https://i.imgur.com/Ij0CCTy.jpg' },
              { url: 'https://i.imgur.com/wkwaqbO.jpg' },
              { url: 'https://i.imgur.com/VXpORkQ.jpg' },
              { url: 'https://i.imgur.com/s4eLaRd.jpg' },
              { url: 'https://i.imgur.com/UNn4Vg0.jpg' },
              { url: 'https://i.imgur.com/cOR0sbU.jpg' },
              { url: 'https://i.imgur.com/VhfjnsZ.jpg' },
              { url: 'https://i.imgur.com/lnma4CB.jpg' },
              { url: 'https://i.imgur.com/t1nyF57.jpg' }].freeze

def init_images_table
  Image.create!(IMAGE_URLS)
end

init_images_table
