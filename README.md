# Cmeue (Project - campus-meetup)
This web app connects students of same and different campuses. Junior students can ask for help from the senior students in the campus.

# Contributing
- `clone` repo.
- `cd` into the folder.
- run `npm install`.
- run `npm start`.
- open browser and head to `localhost:3000`.

# File Structure
### src
This directory contains majority of the code that one should care about whether you are willing to contribute to backend of the app or to the front end you are most likely to be working in this directory.

#### components
This directory will contain all of the component that you see on the page. Everything from TextBoxes, Profile Picture, Buttons, Skill Box is a React Component and you can find it in this directory. There is a convention that you need to follow.

1. Each Component that you feels can be used by others should be placed in the common directory.
2. If you feel that the component will be used under a specific page than you have to put that component info the directory which represents the name of the page. e.g. chatsPage directory will only contain the component which will only be used by the chatsPage.
3. When you create a component you have to put the component into it's own directory. e.g. ConversationCard component under chatsPage note the capitalization here.
- NOTE:- BEFORE CREATING YOUR COMPONENT PLEASE DO CHECK THE common DIRECTORY. IT MAY BE POSSIBLE THAT SOMEONE HAS ALREADY WRITTEN THAT COMPONENT AND YOU CAN USE THAT.

#### containers
You can see a container as a whole page. All the component that is built are used here. There is a convention you need to follow.

1. The directory under containers are the whole pages and the components that are made in components directory are used in this directory. e.g. the components developed under chatsPage will be used under ChatsPage container.
2. Feel free to use the component which are under common directory.

>If you want to lint the code using eslint you have to add this line to your `package.json` file.
```
"eslintConfig": {
    "extends": "react-app"
 }
```
Then Finally, you will need to install some packages globally:
```
npm install -g eslint-config-react-app eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-flowtype
```
