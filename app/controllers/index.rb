get '/' do
  erb :index
end

get '/skills/:skill' do
  erb :skills
end

get '/meals' do
  @meals = ["Spaghetti",
            "Ravioli",
            "Hummus and Veggies",
            "Pizza",
            "Falafel",
            "Sushi",
            "Linguini",
            "Onigilli"]
  erb :meals
end

post '/colors' do
  response.set_cookie("color_cookie",
                      :value => params[:color],
                      :domain => "",
                      :path => '/',
                      :expires => Date.parse("1-feb-2015").to_time)
  redirect '/'
end
