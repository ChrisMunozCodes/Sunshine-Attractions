<h1 align="center">
 Sunshine Attractions
</h1>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 Welcome to Sunshine Attractions!

<p align="left" style="color: red;"> Sunshine Attractions is a full-stack review application for theme parks in Florida (The sunshine state). Allowing tourists and locals to find up-to-date information on various rides, shows, and food for Florida theme parks. Users are able to track live wait times of rides, engage in other reviewers posts, and manage their profile.</p>

## 🔆 Home Page

<p align="left">
 Welcome to Sunshine Attractions, below you will find the home page that consists of various theme parks in Florida. Users have plenty of options to start exploring new attractions, food, and entertainment.
</p>

<p align="left">
<a href="https://ibb.co/Hn4q5gg"><img src="https://i.ibb.co/XSLtcJJ/homepage.jpg" alt="homepage" border="0"></a><br />
</p>

## 🔆 Selection Page

<p align="left">
 Discover rides, food, and shows at various theme parks. Dynamically renders information from the backend for each page.
</p>

<p align="left">
<a href="https://ibb.co/092QsmM"><img src="https://i.ibb.co/PWjtDFh/Selection.jpg" alt="Selection" border="0"></a>
</p>

## 🔆 Review Page

<p align="left">
This is what a user review looks like. Reviews show the user profile picture, along with their username, and star rating. You can see their thoughts about the specific attractions, food, or show in the description box. The review componets support likes, comments from other users, and comment likes / dislikes.
</p>

<p align="left">
<a href="https://ibb.co/zG2CDCP"><img src="https://i.ibb.co/xJgwdwz/Review.jpg" alt="Review" border="0"></a><br />
</p>

## 🔆 Filter reviews
<p align="left">
Filter reviews based on options such as: All reviews, Your reviews, Highest rated, Most critcal, and Recent reviews.
</p>

<p align="left">
<a href="https://ibb.co/hL2tJ6Y"><img src="https://i.ibb.co/34SL93R/a4a238090f23ce0914d981f1814fcf68.png" alt="a4a238090f23ce0914d981f1814fcf68" border="0"></a>
</p>

## 🔆 Profile Features
<p align="left">
Delete your reviews and comments, and change your profile picture in the profile menu. (More features to be added).
</p>

<p align="left">
<a href="https://ibb.co/S3cgZBr"><img src="https://i.ibb.co/87bwQ9c/Your-Reviews.png" alt="Your-Reviews" border="0"></a>
</p>

## 🔆 Park Maps
<p align="left">
View ride locations on the park map. (This feature will be continued to be fleshed out, upcoming features include users being allowed to share their location on their park visit, then the users will be shown the closest rides to them with the lowest wait times).
</p>

<p align="left">
<a href="https://ibb.co/JzZZzTn"><img src="https://i.ibb.co/THyyHGc/maps.png" alt="maps" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>gif pictures site</a><br />
</p>
## 🚀 Technologies

Technologies that I used to develop this app

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.w3schools.com/mongodb/)
- [JavaScript](https://www.javascript.com/)
- [EJS](https://ejs.co/)
- [Tailwind](tailwindcss.com)
- [Cloudinary]([https://cloudinary.com/])

## 💻 Getting started - Setting up your environment.

1. Clone the files.
2. Use 'npm i' in the console in order to install the dependencies.
3. 
- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`
  - GOOGLE_MAP_API = 'Your google maps api key'
  - GOOGLE_MAP_ID = 'Your google maps ID'

Install the dependencies: npm install

## 🤔 How to contribute

If you would like to contribute to this project please reach out to me via discord: chriscodes

**Follow the steps below**

```bash
0. Leave a comment on the issue you would like to work on 

1. Fork the original repository (top right corner next to watch and star buttons)

2. Under the dropdown menu from the button "code" copy the HTTPS link (from your forked repository) 'https://github.com/(your username)/Sunshine-attractions.git'

3. In the place you want to clone the project, use git clone (your https link here)

4. Once you have the project open in VSCODE use 'git remote add upstream  https://github.com/ChrisMunozCodes/Sunshine-attractions.git' in the terminal, this will track the main repository 

5. You can now use 'git fetch upstream' in the terminal to see a list of the different branches.

6. Use 'git checkout -b branch-name' replace branch-name with your branch. This will create a new branch for you to work within

7.. You can now use git add . & git commit -m '' 

8. Use 'git push -u origin a-descriptive-branch-name' replace a-descriptive-branch-name with your branch name (this will push all your code)

9. Now go back to your github and a button will appear that prompts you to make a pull request
```

# Things to add (Wish list)
- Maps of theme parks with wait time markers and user geolocation (High Priority).
- Lowest wait time rides near the user based on the users location within the theme park map. (High Priority).
- Mobile Layout (Responsiveness for mobile layouts) (High Priority).
- Following and followers feature (Med Priority).
- Trip Planner (Low Priority).
- Dark Mode? (Low Priority).
- ~~Comments.~~
- ~~Filter reviews~~
- ~~Likes.~~
- ~~Adding images to reviews.~~


---
