# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Listing.destroy_all
Review.destroy_all
User.destroy_all

@dan = User.create!(username: "dan", email: "dan@gmail.com", password: "1234567")

puts "#{User.count} users created"

listing1 = Listing.create!(img_url: 'https://images.pexels.com/photos/4491852/pexels-photo-4491852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', item_title: 'circular saw', user: @dan)
listing2 = Listing.create!(item_title: 'ladder', user: @dan)

puts "#{Listing.count} listing created"

review1 = Review.create!(content: 'this item is in great condition, thanks neighbor', user: @dan, listing_id: listing1)

puts "#{Review.count} review created"