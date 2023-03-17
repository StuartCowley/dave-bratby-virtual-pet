# Virtual-Pet

# Description
Welcome to my Virtual Pet project! This is a project built entirely with JavaScript and is part of the Command Shift HQ coding bootcamp. 

# The Aim
The aim of this exercise is to learn about Object Oriented Programming, and to further practice our unit tests as well as setting up our testing envrioments. This introduced concepts such as Constructor functions along with the Prototype function, and testing in the Node REPL. 

# The Set Up
Firstly we had to set up our testing envrioment. Lets start with the basics
* Create a Directory named virtual-pet
* link it to your GitHub account ([How to link your directory to github](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github))
* Initialise an NPM project in the command line with **npm init** in the command line interface(CLI). This will lead you to set up a package.JSON file for your project
* Now we need to install our testing package. For this we used Jest. In the CLI, use **npm install -D Jest**
* Next, open your package.JSON file in your text editor then edit the test to jest. This will make sure our testing is being done by our Jest package
* Create a README.md in your virtual-pet directory and update it as you go
* Create a pet.js file and a pet.test.js file in your directory
* The last bit is to make sure when we push our code to GitHub, we're not pushing our node modules as well. The is because the node modules have a very large amount of files and whenever we push changes it would also push all of this as well. To stop this, we need to create a **.gitignore** file.
* Create the file like any other, touch .gitignore (note the . at the beginning of the name) and open the file and add the line of text **node_modules/** to it. If you run git status you'll now see that your node.modules are no longer appearing in the staging area. 
* Quick Note! If you can't see your .gitignore file in your directory, then it'll be hidden. To check, run **ls -a** in the CLI and it'll reveal it. You can open it with **open .gitignore** and edit it through there. 
* So, with all this done you can now push your changes to github and begin the project!
