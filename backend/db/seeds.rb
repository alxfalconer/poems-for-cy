Painting.delete_all
Poem.delete_all
Username.delete_all

 a1 = Painting.create(name: "My Beautiful Dark Twisted Fantasy")
 a2 = Painting.create(name: "YEEZUS")
 a3 = Painting.create(name: "Late Registration")

 alex = Username.create(name: "alex")
 cindy = Username.create(name: "cindy")
 sara = Username.create(name: "frank")

 Poem.create(text: "Best Kanye album, hands down.", username_id: sara.id, album_id: a2.id)
 Poem.create(text: "Ornate but overrated.", username_id: cindy.id, album_id: a1.id)
 Poem.create(text: "Conscious, baroque hip-pop.", username_id: alex.id, album_id: a3.id)
 Poem.create(text: "Jon Brion is the MVP.", username_id: cindy.id, album_id: a3.id)
 Poem.create(text: "Redeemed himself after Swiftgate.", username_id: sara.id, album_id: a1.id)

 
 
 puts "Seeded the database"