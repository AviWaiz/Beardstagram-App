desc "Delete user"


task :delete => :enviroment do

  @user = User.find_by_username("fuckboizzzzzz")
  @user.destroy
end
