Painting.delete_all
Poem.delete_all
Username.delete_all
Like.delete_all

 a1 = Painting.create(name: "My Beautiful Dark Twisted Fantasy")
 a2 = Painting.create(name: "YEEZUS")
 a3 = Painting.create(name: "Late Registration")

 alex = Username.create(name: "alex")
 cindy = Username.create(name: "cindy")
 sara = Username.create(name: "frank")

 like1 = Like.create(count: "7")
 like2 = Like.create(count: "8")
 like3= Like.create(count: "9")

 Poem.create(text: "Best Kanye album, hands down.", username_name: sara.name, username_id: sara.id, painting_id: a2.id, like_count: like1.count)
 Poem.create(text: "Ornate but overrated.", username_name: cindy.name, username_id: cindy.id, painting_id: a1.id)
 Poem.create(text: "Conscious, baroque hip-pop.", username_name: alex.name, username_id: alex.id, painting_id: a3.id)
 Poem.create(text: "Jon Brion is the MVP.", username_name: cindy.name, username_id: cindy.id, painting_id: a3.id)
 Poem.create(text: "Redeemed himself after Swiftgate.", username_name: sara.name, username_id: sara.id, painting_id: a1.id)

 
 
 puts "Seeded the database"