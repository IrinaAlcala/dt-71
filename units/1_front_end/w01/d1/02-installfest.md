<img src="https://i.imgur.com/pF2sUV5.jpg">

# SEI Installfest

We'll be installing the following tools.

- Slack
- Homebrew
- Xcode
- Git
- Postman
- Node.js
- PostgreSQL
- MongoDB
- Python
- Django
- Imgur
- VS Code

## Slack

We will be using slack to communicate throughout the course. 
You will receive an invite to the relevant channels via e-mail. You can login via the web browser, but downloading / installing the app is highly recommended.

[Download Slack](https://slack.com/downloads)

Remember to drag the Slack app into the Applications folder when you open the downloaded archive.

## Homebrew

Homebrew is a package manager that we will use to install various command line tools in our class.

Open up terminal, and paste the following command to install Homebrew. You might be prompted to install XCode Command Line Tools during the install process.

```sh
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

If you are prompted to install the XCode CLI, say yes and your homebrew installation will continue.

After the installation process, run the command `brew doctor`. If any warnings or errors are displayed, we will need to resolve them before proceeding with the rest of the install fest.

Lastly, make sure to run `brew update` to make sure you have the latest lists of available software.


## Xcode

We do not use Xcode in class but some other applications that we do use require some Xcode libraries. Normally, all you need is the Xcode CLI which should have already been installed when you installed Homebrew. If it didn't get installed, you can use this command:

```sh
$ xcode-select --install
```

If you need to, you can install Xcode through the App Store. (You probably don't need to.) [Link here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

---
## Git

Git is the version control software we will be using - it's extremely popular.

You should have already installed Git as instructed to complete the pre-work.

If it's not installed, we can use Homebrew to install it:

```
brew install git
```

#### Github

[Github](https://github.com/) provides a way to host Git repos in the cloud.  It enables collaboration and is wildly popular.

You should have already opened a personal Github account, however, you need to have a General Assembly Github Enterprise account as well.  You can get one by signing up here:  [https://git.generalassemb.ly/join](https://git.generalassemb.ly/join)

#### Configuring a Global git ignore

> Note: This is **IMPORTANT**

Everyone should have a global **git ignore** file so that you don’t have to worry about making the appropriate entries in a project’s git ignore.

First, create the file:  `touch ~/.gitignore_global`

Next, configure git to use this file:  `git config --global core.excludesfile ~/.gitignore_global`

Finally, lets put some good stuff in there (`.gitignore_global`):

This is a list of rules for ignoring files in every Git repositories on your computer.

See https://help.github.com/articles/ignoring-files and this gist for a comprehensive sample: 
[.gitignore_global](https://gist.git.generalassemb.ly/gregsantos/528279e2c46523d0fc556e4550a7361b)

---
## Postman
Postman is an app for interacting with HTTP APIs. 
It presents you with a friendly GUI for constructing requests and reading responses.
- Create and execute any REST, SOAP, and GraphQL queries from within Postman.
    - Create and save custom methods and send requests with the multiple body types:
- Inspect Responses
 - View the status code, response time, and response size. Postman's automatic language detection, link and syntax highlighting, search, and text formatting make it easy to inspect the response body

visit [postman.com/downloads](https://www.postman.com/downloads/)

---
## Node.js

Node is a JavaScript engine for the backend. We use it to power our web servers and connect to our databases.

```
brew install node
```

Verify the installation afterwards by running:

```
node -v
npm -v
```

The above commands should display versions without any errors. To verify that all the required permissions are set correctly, try to install a package such as the useful _nodemon_ globally:

```
npm install -g nodemon
```

---
## PostgreSQL

Install the **PostgreSQL** database management system (DBMS) using Homebrew with this command:

```
brew install postgresql
```

After Postgres is installed run this command:

```
brew services start postgresql
```
 
Followed by this command to test the install by creating a new database named the same as the current system user:
 
```
createdb
```
---
## Installing MongoDB

Install **MongoDB** using Homebrew using the following commands:

```
brew tap mongodb/brew
```

The above command might take a moment or two to complete.  When finished, install MongoDB with:

```
brew install mongodb-community
```

### Starting the MongoDB Server

You start the Mongo database server with the following command:

```
brew services start mongodb-community
```

The above command also ensures that the MongoDB engine runs after restarting your computer.

More info about installing MongoDB using Homebrew can be found [here](https://github.com/mongodb/homebrew-brew).

---
## Installing Python 3 and Django

> Note: Due to time constraints and for simplicity, we will not be using Python "virtual environments" during SEI.  If you are familiar with using virtual environments, you may continue to use them.  If you decide to continue to develop using Python beyond SEI, your next step would be to learn about using virtual environments.

Brew is also used to install Python 3. (Python 2 is already installed on your Mac.)

Install **Python** using Homebrew with this command: `brew install python`. 

You can test the installation by running `python3 --version`.

Python 3's package manager, `pip3` should have automatically been installed with Python 3.  Test that it was installed by running `pip3 --version`.

## Installing Django

We will use `pip3` to install Django, a robust web framework for Python. We will be installing the latest version (2.x.x):

```
pip3 install Django
```

---
## Visual Studio Code

Text editors are a personal choice. One of the most popular open source text editors these days, for good reason, is Visual Studio Code.

> Note: VS Code's _keyboard shortcuts_ are different than the shortcuts used by the Sublime or Atom editors. If you already know Sublime's shortcuts and don't want to learn those of VS Code, it's possible to configure VS Code to use Sublime's.

Download and install VS Code from [https://code.visualstudio.com/](https://code.visualstudio.com/).

**Important**: Be sure that VS Code is in your Mac's `Applications` folder.

#### Add Ability to Launch VS Code by typing `code`

1. Launch VS Code using spotlight (`command + space` - then start typing `vs c` until you see the app, then press enter).
2. Type `shift + command + P` to open the command palette.
3. Start typing `shell command` and when you the<br>`Shell Command: Install 'code' command in PATH` command - click it!
4. Quit VS Code and Terminal.
5. Relaunch Terminal
6. You should now be able to open a folder to edit by typing `code .`

Check [this link](https://code.visualstudio.com/docs/setup/mac) for troubleshooting if you run into issues.

[VS Code Flex](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w01/d1/flex-vscode.md)