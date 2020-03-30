## Construct a Labyrinth
**Activity (10 min)**

Using what you know about navigating directories and creating files and folders, construct a 'labyrinth' on your desktop.

**Precision** is important. There are a few layers to this exercise. Be patient.

- Make sure you are in the correct directory when you go to create another directory or file.
- Make sure you use `touch` to make files, and `mkdir` to make directories. **files** and **directories** are two different things.

* Navigate to Desktop
* `mkdir Labyrinth`, `cd Labyrinth`
* Make a directory structure like this:

![labyrinth](https://i.imgur.com/pY0MxS8.png)

**parlor** and **stairway** are _child directories_ of the Labyrinth directory.

**sarah_williams.txt** is a _file_ inside the the ballroom directory.

If you make a mistake, don't worry, just keep adding the right stuff to the right place.

## Navigate using relative pathing on the command line

Chain more directories to the current path with the `/` separator

- Go down the chain into child directories
	- `cd parent_directory`
	- `cd parent_directory/child_directory`
	- `cd parent_directory/child_directory/grandchild_directory`

- Go up the chain into parent directories
	- `cd ..`
	- `cd ../..`
	- `cd ../../..`

- Go sideways into a _sibling_ directory by first going up, then down
	- `cd ../sibling_directory`

- Go into an _aunt_ or _uncle_ directory by first going up to the parent, then the grandparent, then down again on another branch:

	- `cd ../../auntie_directory`

### Activity

**Navigate the Labyrinth**

* Navigate to the Labyrinth root directory
* From the Labyrinth root directory, navigate to the `stairway`
* From the `stairway`, navigate to the `parlor`
* From the `parlor`, navigate to the `dining room`
* From the `dining room`, navigate to the `escher room`
* From the `escher room`, navigate to the Labyrinth root

### Activity (10 min)

**Navigate the Labyrinth**

For each of these, write your command on one line, using full paths:

* Navigate to the Labyrinth root directory
* From the Labyrinth root directory, navigate to the `dining_room`
* From the `dining room`, navigate back up the root directory
* From the Labyrinth root directory, navigate to the `stairway`
* From the `stairway`, navigate to the `parlor`
* From the `parlor`, navigate to the `escher_room`
* From the `escher room`, navigate to the `throne_room`
* From the `throne_room`, navigate to the `ball_room`

## Navigate using absolute pathing on the command line

Move anywhere relative to the home directory:

`cd ~/` - the path starts in home directory

Example:

- `cd ~/Desktop/Labyrinth/stairway/escher_room`

Navigates to the escher room _no matter where_ you are currently located in your filesystem

> NOTE: You can combine absolute and relative pathing when copying or moving files from one location to another with `cp` and `mv`.

### Activity (3 min)

**Navigate the Labyrinth**

Using absolute pathing:

* Navigate to the throne_room
* Navigate to the ballroom
* Navigate to the parlor
