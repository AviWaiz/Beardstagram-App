desc "Delete user"


task :delete => :enviroment do

  @user = User.find_by_username()
  @user.destroy
end
