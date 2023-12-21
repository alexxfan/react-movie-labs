import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  mustWatch: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]

});

UserSchema.methods.comparePassword = async function (passw) { 
  return await bcrypt.compare(passw, this.password); 
}

UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

UserSchema.methods.addFavorite = function (username, movie) {
  const user = this.findByUserName(username);
  user.favorites.push(movie)
};

UserSchema.methods.removeFavorite = function (username, movie) {
  const user = this.findByUserName(username);
  user.favorites.remove(movie)
}

// find all of the favourites for a user by username
UserSchema.statics.findAllFavorites = function(userName) {
  return this.model('User').findOne({ username: userName }).select('favorites');
}

UserSchema.statics.findAllMustWatch = function(userName) {
  return this.model('User').findOne({ username: userName }).select('mustWatch');
}

UserSchema.methods.addMustWatch = function (username, movie) {
  const user = this.findByUserName(username);
  user.mustWatch.push(movie)
};

UserSchema.methods.removeMustWatch = function (username, movie) {
  const user = this.findByUserName(username);
  user.mustWatch.remove(movie)
}


UserSchema.pre('save', async function(next) {
  const saltRounds = 10; // You can adjust the number of salt rounds
  //const user = this;
  if (this.isModified('password') || this.isNew) {
    try {
      const hash = await bcrypt.hash(this.password, saltRounds);
      this.password = hash;
      next();
  } catch (error) {
     next(error);
  }

  } else {
      next();
  }
});

export default mongoose.model('User', UserSchema);