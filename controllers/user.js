const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const User = require("../models/User"); // Import the User model

module.exports = {
  updateUserProfilePic: async (req, res) => {
    try {
      // Extract profile picture file from request
      const profilePicFile = req.file;
  
      console.log('Profile picture file:', profilePicFile);
  
      // Check if a file was uploaded
      if (!profilePicFile) {
        console.log('No profile picture file uploaded');
        return res.redirect('/profile');
      }
  
      // Upload the profile picture file to cloud storage (e.g., Cloudinary)
      const result = await cloudinary.uploader.upload(profilePicFile.path, { folder: 'profile-pictures' });
  
      console.log('Cloudinary upload result:', result);
  
      // Retrieve the user from the database
      const user = await User.findById(req.user.id);
      console.log('User:', user);
  
      if (!user) {
        console.log('User not found');
        return res.redirect('/profile');
      }
  
      // Update the user's profile picture URL
      user.profilePic = result.secure_url;
      await user.save();
  
      // Redirect the user after successfully updating the profile picture
      res.redirect('/profile');
    } catch (err) {
      console.error(err);
      res.redirect('/error'); // Redirect to an error page if something went wrong
    }
  }
}
