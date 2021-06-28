require 'pry'
require 'json'

class App

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]

    elsif req.path.match(/paintings/)
      if req.env["REQUEST_METHOD"] == "GET"
        if req.path.split("/paintings").length == 0 
          paintings = Painting.all
          return [200, {'Content-Type' => 'application/json'}, [paintings.to_json]]       
        else
          painting_id = req.path.split("/paintings/")[1].to_i
          found_painting = Painting.find_by(id: painting_id)
          return [200, {'Content-Type' => 'application/json'}, [found_painting.to_json]] 
        end
      elsif req.env["REQUEST_METHOD"] == "POST"
        form_data = JSON.parse(req.body.read) 
        new_painting = Painting.create(name: form_data["name"])
        return [200, {'Content-Type' => 'application/json'}, [new_painting.to_json]] 
      
      elsif req.env["REQUEST_METHOD"] == "DELETE"

        id = req.path.split("/paintings/").last
        Painting.find(id).delete
        return[200, { 'Content-Type' => 'application/json'}, [{:message => " deleted"}.to_json]]
      end  
      
    elsif req.path.match(/usernames/)
      if req.env["REQUEST_METHOD"] == "GET"
        if req.path.split("/usernames").length == 0 
          usernames = Username.all
          return [200, {'Content-Type' => 'application/json'}, [usernames.to_json]]       
        else
           username_id = req.path.split("/usernames/")[1].to_i
          found_username = Username.find_by(id: username_id)
          return [200, {'Content-Type' => 'application/json'}, [found_username.to_json]] 
        end
      elsif req.env["REQUEST_METHOD"] == "POST"
        form_data = JSON.parse(req.body.read) 
        new_username = Username.create(name: form_data["name"])
        return [200, {'Content-Type' => 'application/json'}, [new_username.to_json]
        ] 
      elsif req.env["REQUEST_METHOD"] == "DELETE"
        #  binding.pry
          id = req.path.split("/usernames/").last
          Username.find(id).delete
          return[200, { 'Content-Type' => 'application/json'}, [{:message => "Username deleted"}.to_json]]      
      end  

    elsif req.path.match(/poems/)
      if req.env["REQUEST_METHOD"] == "GET"
        if req.path.split("/poems").length == 0 
          poems = Poem.all
          return [200, {'Content-Type' => 'application/json'}, [poems.to_json]]       
        else
           poem_id = req.path.split("/poems/")[1].to_i
          found_poem= Poem.find_by(id: poem_id)
          return [200, {'Content-Type' => 'application/json'}, [found_poem.to_json]] 
        end
      elsif req.env["REQUEST_METHOD"] == "POST"
        form_data = JSON.parse(req.body.read) 
        new_poem = Poem.create(text: form_data["text"])
        return [200, {'Content-Type' => 'application/json'}, [new_poem.to_json]]
      elsif req.env["REQUEST_METHOD"] == "DELETE"
        #  binding.pry
          id = req.path.split("/poems/").last
          Poem.find(id).delete
          return[200, { 'Content-Type' => 'application/json'}, [{:message => "Poem deleted"}.to_json]]
        
      end
    elsif req.path.match(/likes/)
      if req.env["REQUEST_METHOD"] == "GET"
        if req.path.split("/likes").length == 0 
          likes = Like.all
          return [200, {'Content-Type' => 'application/json'}, [likes.to_json]]       
        else
           like_id = req.path.split("/likes/")[1].to_i
          found_like= Like.find_by(id: like_id)
          return [200, {'Content-Type' => 'application/json'}, [found_like.to_json]] 
        end
      elsif req.env["REQUEST_METHOD"] == "POST"
        form_data = JSON.parse(req.body.read) 
        new_like = Like.create(text: form_data["text"])
        return [200, {'Content-Type' => 'application/json'}, [new_like.to_json]]
      elsif req.env["REQUEST_METHOD"] == "DELETE"
        #  binding.pry
          id = req.path.split("/likes/").last
          Like.find(id).delete
          return[200, { 'Content-Type' => 'application/json'}, [{:message => "Like deleted"}.to_json]]
        
      end  
    

    else
      resp.write "Sup Bud"

    end

    resp.finish
  end

end