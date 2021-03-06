<img src="https://i.imgur.com/XseXU8J.png" width="900">

# Welcome to General Assembly SEI-DT-71

This will be your shared class repo! Guides, in-class labs and code samples, and other resources will live here.

### Contents

- Class Repository Structure
- SEI GitHub Workflow
- Contact Information
- Course Information and Dates
- Immersive Graduation Requirements
- [Quick Links & Recordings](#class-lessons-recordings)

### Repo Structure

```
/sei-dt-71
    /computer_science
    /projects
    /resources
    	deliverable-schedule.md
    /units
      /1_front_end_development
          /week01
            /day1
    README.md
```

### Course Curriculum

<table>
  <thead>
    <tr><th>Unit</th><th>Week</th><th>Topics</th><th>Project</th></tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Fundamentals of Front-end Development</td>
      <td align="center">1</td>
      <td>Fundamentals of JavaScript, HTML & CSS<br>DOM Manipulation & Events<br>Structuring a Browser App</td>
      <td rowspan="3">Browser-based Game / AJAX App </td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td>CSS: Flexbox, Grid & Responsive Design<br>JS: Callback functions, Classes, this Keyword, Array Iterator Methods</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to GitHub Pages</td>
    </tr>
    <tr>
      <td rowspan="3">Full-stack Development</td>
      <td align="center">4</td>
      <td>Client-Server: HTTP Communications & REST<br>NodeJS & ExpressJS Framework<br>MongoDB & MongooseJS ODM<br>Data Modeling</td>
      <td rowspan="3">CRUD Application</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td>Consuming & Producing APIs<br>Authentication using OAuth<br>Regular Expressions</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to Heroku</td>
    </tr>
    <tr>
      <td rowspan="3">Second Language & Web Framework</td>
      <td align="center">7</td>
      <td>Fundamentals of Python<br>Relational Databases & SQL</td>
      <td rowspan="3">Group Project: Full-stack Django Application</td>
    </tr>
    <tr>
      <td align="center">8</td>
      <td>Django Web Framework<br>Amazon S3<br>Username/Password Authentication</td>
    </tr>
    <tr>
      <td align="center">9</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to Heroku</td>
    </tr>
    <tr>
      <td rowspan="3">Developing Single-page Apps</td>
      <td align="center">10</td>
      <td>AJAX<br>Web Sockets<br>SPA Architecture<br>ReactJS Library</td>
      <td rowspan="3">MERN-stack Application</td>
    </tr>
    <tr>
      <td align="center">11</td>
      <td>Client-side Routing (React)<br>Full-stack React<br>Serverless<br>Token-based Authentication (React)</td>
    </tr>
    <tr>
      <td align="center">12</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to Heroku</td>
    </tr>
  </tbody>
</table>

### Becoming Familiar With the SEI GitHub Workflow

#### Forking (copying) the GA Class Repo to Your GitHub Account

You will have read-only access to the GA class repo. However, you most certainly will want to be able to make changes (e.g., add notes, save code exercises, etc). These changes will be saved to your own personal copy of GA's Student repo - known as a **fork**. To get this fork do the following:

1. Make sure that you're logged in to your GA **Enterprise** GitHub account. If you have not signed up yet, here's the link to do so: [https://git.generalassemb.ly/join?source=header](https://git.generalassemb.ly/join?source=header)
2. In another tab, browse to the GA class repo: [https://git.generalassemb.ly/SEI/dt-71](https://git.generalassemb.ly/SEI/dt-71)
3. In the top-right corner of the page, click the `Fork` button.
   Now you will have a copy of the repo in **your** Enterprise GitHub account!

#### Cloning Your Copy of the Repository Locally

Now that you have a copy of the class repo in your GitHub account, it's time to bring the contents of that repo onto your computer - this process is known as **cloning** and it only needs to be done once:

1. On your Enterprise GitHub account, browse to your fork of the GitHub class repo and under the repository name click `Clone or download`
2. In the `Clone with HTTPS` section, click the clipboard to copy the URL for the repository.
3. Open Terminal and navigate to your `~/code` folder - you may choose a different folder if you wish, however these instructions will assume you clone the repo into a folder named `code`.
4. In Terminal, type `git clone` and follow it by pasting in the copied URL from the clipboard. The command should now look something like this:

```
$ git clone https://git.generalassemb.ly/YOUR-ENTERPRISE-GITHUB-USERNAME/SEI/sei-dt-71
```

You can now `$ cd sei-dt-71` and check out your local copy of of the GA class repo!

#### Adding a git _remote_ for the original GA class repo

A repo on your computer is called a **local repo** ("repo" is short for repository).

Repos on GitHub are called **remote** repos. Think of them as repos in the cloud.

When you cloned your fork of the repo, a "link" to the git **remote** was automatically created. You can check which remotes exist for a given local repo using this command:

```
$ git remote -v
```

Note that by convention, the remote that points to the GitHub repo it was cloned from is named **origin**.

However, in order to get the updates that the instructors push to the GA class repo, you will need to create another **remote** that points to GA's class repo that you forked:

```
$ git remote add upstream https://git.generalassemb.ly/SEI/sei-dt-71.git
```

Note that by convention, the remote that points to the _original_ GitHub repo that was forked is named **upstream**.

Entering `$ git remote -v` again will show that you now have two remotes: `origin` (your fork of GA's class repo) and `upstream` (GA's class repo).

#### Getting Changes Pushed by Your Instructors

Each day (maybe a few times a day), instructional materials may be pushed to the class repo by your instructors. You will want to "pull" these materials into your local repo (on your computer). Doing so will enable you to access "starter code", etc.

First, if you've made any changes **within** the repo locally, i.e., you've modified some starter code, you will need to **commit** those changes first:

```
$ git add -A
$ git commit -m "Add amazing work..."
```

With local changes committed, you can now fetch the updates from the Github class repo and merge them into your **local** repo (on your computer):

```
$ git pull upstream master
```

From time to time, you will want to "save" the commits you have made locally to your forked GitHub class repo (in the cloud). Doing so is a good idea to ensure your work is backed up to the cloud in case of computer failure:

```
$ git push origin master
```

The above Git/GitHub workflow is summarized by this diagram:

<img src="https://i.imgur.com/w871ATo.png">

#### Handling Merge Conflicts

A **merge conflict** occurs when git merges two commits that have modified the same region of code and can't figure out whose code to use. Thus, fixing merge conflicts requires that a developer manually update the code to what it should be and re-commit it to resolve the conflict, which will also finish git's merge process.

Git informs you which files have merge conflicts and will _annotate_ your code to show you how your local code differs from the code being merged from the remote. An example of such annotation is below.

Once you have resolved these merge conflicts by editing the code and removing the markers, you can `add` and `commit` normally.

#### Important

**"Nested" repos are never permitted**. Therefore, if you have important code, such as your projects, that belongs in its own repo, **be sure to put that code in folders outside of the class repo**.

### Daily JavaScript Code Challenges

There are 30 required code challenges that will help you get the necessary practice of writing code, as well as teach you new methods and techniques.

Just as with the class repo, you will fork & clone [the code challenges repo](https://git.generalassemb.ly/SEI/js-code-challenges).

These coding challenges start with day 1 and will continue through week 8 (excluding project weeks).

### Instructional Team

| Role                    | Name                | Slack                | Email                                |
| :---------------------- | :------------------ | :------------------- | :----------------------------------- |
| Lead Instructor         | Fred Ngo  | @Fred Ngo          | fred.ngo@generalassemb.ly         |
| Lead Instructor         | Taylor Darneille  | @Taylor (She/Her) - SEI Instructor          | taylor.darneille@generalassemb.ly         |
| Lead Instructor         | Ira Herman  | @Ira Herman (SEI Lead Instructor)          | ira.herman@generalassemb.ly         |
| Instructional Associate | Milcah Centeno (Temp IA) | @milcah.centeno | milcah.centeno@generalassemb.ly |

### Course Information

- Course duration: Monday, March 9th, 2020 - Monday, June 1st, 2020 (12 weeks)
- Holidays: - 5/25/2020 (Memorial Day)
- Slack url #sei-dt-71

### GA SEI Graduation Requirements

General Assembly's courses are pass/fail programs. We have certain requirements in order to be considered a graduate of the SEI program:

- No more than 3 days absent from class over the duration of the course (3 tardies equals 1 absence)
- Successful completion of four assigned projects
- Successful completion of 3 of 4 project assessment challenges
- Participating in GA’s mid-course and end-of-course feedback surveys
- Complete 80% of assigned "deliverables"

When you complete our program with passing status, you unlock our alumni perks:

- Support from the Outcomes Team, including participation in the Meet & Greet event (with prospective employers).
- Receive a GA Letter of Completion (via email 1 week after graduation)
- Credits and discounts for other GA courses (check with Student Services for details).
- Access to our Alumni Community

### Welcome!

<img src="https://media.giphy.com/media/OF0yOAufcWLfi/giphy.gif" width="900">


## Class Lessons and Recordings
###### #class-lessons-recordings

All course recordings will be linked below as well as quick links to that days markdown files and exercises. Recordings will be posted witin 12 - 24 hours of that class ending.

| Day | Lectures | Labs | Homework | Recording |
|:---:|:-----------:|:-------:|:-----------:|:-----------:|
| w02d1 |[Intro to HTML](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w01/d5/01-intro-to-html.md), [Intro to CSS](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w01/d5/02-intro-to-css.md), [How to Build a Browser Game](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w01/d5/03-04-guide-to-building-a-browser-game.md) | [CSS Diner (CSS Selector Practice)](https://flukeout.github.io/), [Build a Game Together](https://git.generalassemb.ly/SEI/holeman-game) | [JS Code Challenges](https://git.generalassemb.ly/SEI/js-code-challenges), [Holeman Game (Optional)](https://git.generalassemb.ly/SEI/holeman-game), [Tic-Tac-Toe Game](https://git.generalassemb.ly/SEI/dt-71/tree/master/units/1_front_end_devlopment/w01/d5/tic-tac-toe-weekend) | [Intro to HTML](https://generalassembly.zoom.us/rec/share/-9JvEa_3rXtJeM_vs1zVAIgFQbrsaaa81iYa-KAJyErvpclOgmouL2ZZJAHFenD8?startTime=1584373706000), [w02d1 Afternoon](https://generalassembly.zoom.us/rec/share/6p12BOHB0j5JH5Xn-nCGBJEuPNzHT6a81ykW-PtZyokYwS-Ak8TOp6wDzm2ABJo?startTime=1584387962000) |
| w02d2 |[Intro to Flexbox and CSS Grid](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d1/01-css-flexbox-grid.md), [Responsive Web Design](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d1/03-responsive-design.md) | [Flexbox / CSS Grid Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d1/02-flexbox-grid-lab.md), [Resonsive Design Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d1/04-responsive-design-lab.md) | [JS Code Challenges](https://git.generalassemb.ly/SEI/js-code-challenges), [Flexbox Froggy (Optional)](https://flexboxfroggy.com/), [CSS Grid Garden (Optional)](https://cssgridgarden.com//) | [CSS Flexbox and Grid](https://generalassembly.zoom.us/rec/share/uPBxMvbizW9JHqP_5n_5e754QrrAaaa82yYerPEInRx4VWaHRHEYP4GMNAaH3Vla?startTime=1584460289000), [Media Queries](https://generalassembly.zoom.us/rec/share/uJNXbLD-qVNLWrP04XnTVvAtN5q8X6a81yRK-fILmEp02QcXAp37Ra-qASM7Mpz7?startTime=1584473928000) |
| w02d3 | [JS Callbacks](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d2/01-js-callbacks.md), [JS Classes](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d2/03-js-classes.md), [Intro to Project 1 Requirements](https://git.generalassemb.ly/SEI/dt-71/tree/master/projects/project_1) | [JS Callbacks Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d2/02-js-callbacks-lab.md), [JS Classes Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d2/04-js-classes-lab.md) | [JS Code Challenges](https://git.generalassemb.ly/SEI/js-code-challenges), [JS Classes Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d2/04-js-classes-lab.md), [Choosing, Wireframing, and Pseudocoding Your Project 1 Game (Deliverable)](https://git.generalassemb.ly/SEI/dt-71/tree/master/projects/project_1) | [Callbacks Recording](https://www.youtube.com/watch?v=uWt9t3tQ3UY&feature=youtu.be),  [JS Classes Recording 1/2](https://www.youtube.com/watch?v=gJCcnsODByk&feature=youtu.be),  [Project 1 Browser Game Requirements](https://generalassembly.zoom.us/rec/share/7NNfIZrKr2VLR4Hq-EDcW6h7OJnJaaa8hCdI_PNZzx41y7bAXK8BplVmLUI-Fhgt?startTime=1584570168000) |
| w02d4 | [Array Iterator Methods](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d4/01-array-iterator-methods.md), [this Keyword](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d4/03-this-keyword.md), [Arrow Functions](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d4/04-arrow-functions.md) | [Array Iterator Methods Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d4/02-array-methods-lab.md), [Classes Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d4/flex-classes-lab.md) | [JS Code Challenges](https://git.generalassemb.ly/SEI/js-code-challenges), [Array Iterator Methods Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d4/02-array-methods-lab.md) , [Review How to Build a Browser Game Guide](https://git.generalassemb.ly/SEI/dt-71/blob/master/resources/browser_game_guide.md) | [Array Iterator Recording](https://www.youtube.com/watch?v=1x7GMLt_jAY&feature=youtu.be),  [This Keyword & Arrow Functions](https://www.youtube.com/watch?v=COHLjyIm5Ww&feature=youtu.be)|
| w02d5 | [jQuery Part 1](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d5/01-jquery-part-1.md) [jQuery Part 2](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d5/02-03-jquery-part-2/jquery-part-2.md) | [My Developer Skills Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d5/04-jquery-lab.md) | [My Developer Skills Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w02/d5/04-jquery-lab.md), [Project 1](https://git.generalassemb.ly/SEI/dt-71/tree/master/projects/project_1) | [jQuery Intro](https://generalassembly.zoom.us/rec/play/vZwufuup_T43G93GsgSDA_N7W9S-eq6s1yAfrvcLxUfkASUANVqlY7EWNOIi2547EsNCn5nQtLReYJMp?autoplay=true&startTime=1584720292000),  [jQuery Part 2](https://generalassembly.zoom.us/rec/play/68ctdur9qzg3SdPB4gSDA6VwW9TpJ_-s0yYYqfILzUuwASQKYFqmZbYTYrNo_wVfwyEjwXP2nO7fQ8ly?startTime=1584735124000) |
| w03d1 – w03d4 | [Playing Audio in the Browser](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/1_front_end_devlopment/w03/d1/04-playing-audio.md) | [Project 1](https://git.generalassemb.ly/SEI/dt-71/tree/master/projects/project_1) | [Project 1](https://git.generalassemb.ly/SEI/dt-71/tree/master/projects/project_1) | [Playing Audio in the Browser](https://generalassembly.zoom.us/rec/share/y-p7dKqu1WpIXK-U7l30QvcIIrvoT6a81CAb__IPnkoMgU3gqHuBWpzMV3Nf5BiD?startTime=1584978558000) |
| w03d5 |  | | [Watch Node/Express video series by The Net Ninja](https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp) | [Project 1 Presentations Part 1](https://generalassembly.zoom.us/rec/play/75d-Jr2vqG43HNTGsQSDA_4tW468eq-s0Cge8vYPmB2yACQKZ1vzZrEaa-I4QWTm24N101yGfoVmJUPc?startTime=1585327126000&_x_zm_rtaid=cZZZf8skS-eI7zWV98spJQ.1585700901177.045c09c07508c05f6efae1cf9e3e4051&_x_zm_rhtaid=812), [Project 1 Presentations Part 2](https://generalassembly.zoom.us/rec/play/tMcodemgrDs3SdHAswSDUKUvW9S5Jqys1yAZ-KFfykfmBnBQNlP0YOQXZOb3AjznUxNDulYDU6FxXHiC?startTime=1585339776000) |
| w04d1 | [Intro to Fullstack](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d1/01-intro-fullstack-http.md), [Intro to Node](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d1/02-intro-to-node.md), [Intro to Express](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d1/03-intro-to-express.md) | [Express Intro Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d1/04-express-intro-lab.md) | [Express Intro Lab](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d1/04-express-intro-lab.md) | [Intro to Fullstack, Node, and Express Part 1](https://generalassembly.zoom.us/rec/play/v5Esfuirpjs3TIeRtwSDVKdxW9XpevqsgSkdqPMOmkq8VngCNgGmb7NENOvfPyGmEdqo873-km3HmVD7?startTime=1585583811000), [Intro to Fullstack, Node, and Express Part 2](https://generalassembly.zoom.us/rec/play/7sIqcLr6rjw3T4DHtgSDVPd8W9TrLPishiUZ_PpexE-0U3gGYQGhYbYXNuPZdN_qnLqz8D9Fc6jQc6iW?startTime=1585603961000) |
| w04d2 | [Express Routers & Controllers](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d2/01-02-express-routers-controllers.md), [Express Middleware](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d2/02-03-express-middleware/express-middleware.md) | [My Dev Skills Part 1](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d2/03-04-dev-skills-lab-part-1.md), [My Dev Skills Part 2 (Deliverable)](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d2/04-dev-skills-lab-part-2.md) | [My Dev Skills Part 1](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d2/03-04-dev-skills-lab-part-1.md), [My Dev Skills Part 2 (Deliverable)](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d2/04-dev-skills-lab-part-2.md) | [Express Routers, Controllers, and Middleware](https://generalassembly.zoom.us/rec/share/uMZcPbb-6m9OHdad2HPuB_d_PKL_eaa8hnNPq6AExE6Divm1FxmfCsPvb8XDRkUO?startTime=1585670272000) |
| w04d3 | [Intro to MongoDB](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d3/01-mongodb-intro.md), [Intro to Mongoose](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d3/02-03-mongoose-intro/mongoose-intro.md) | [Mongoose Flights Lab Part 1](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d2/04-dev-skills-lab-part-2.md) | [Mongoose Flights Lab Part 1](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d2/04-dev-skills-lab-part-2.md) | [Intro to MongoDB and Mongoose](https://generalassembly.zoom.us/rec/share/5fBrI5_g9kpOe7OUxBD7VIk_PK3IX6a82nId-PULyRoHQRaFfdIRumeQD13QxJia?startTime=1585756421000), [Intro to Mongoose Part 2](https://generalassembly.zoom.us/rec/share/3s56L4781HhITo3G-EeOcPQnT6rPeaa8hCVNr_sIzh0q14Hpq_SjcPwWjzlKbc84?startTime=1585778226000) |
| w04d4 | [Mongoose Embedding](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d4/01-02-mongoose-embedding/mongoose-embedding.md) | [Mongoose Flights Lab Part 2](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d4/03-04-mongoose-flights-lab-part-2.md) | [Mongoose Flights Lab Part 2](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d4/03-04-mongoose-flights-lab-part-2.md) | [Mongoose Embedding Part 1](https://generalassembly.zoom.us/rec/share/uMtMd6781mJOTqPjq2XVaLQwELzGT6a82iQXqfMIyZBswc92DWeE8CwuZ1SMvUA?startTime=1585843245000), [Mongoose Embedding Part 2](https://generalassembly.zoom.us/rec/share/uMtMd6781mJOTqPjq2XVaLQwELzGT6a82iQXqfMIyZBswc92DWeE8CwuZ1SMvUA?startTime=1585857703000), [Koa's Presentation](https://generalassembly.zoom.us/rec/share/uMtMd6781mJOTqPjq2XVaLQwELzGT6a82iQXqfMIyZBswc92DWeE8CwuZ1SMvUA?startTime=1585865592000) |
| w04d5 | [Mongoose Referencing](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d5/01-02-mongoose-referencing/mongoose-referencing.md) | [Mongoose Flights Lab Part 3](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d5/mongoose-flights-lab-part-3.md) | [Mongoose Flights Lab Part 3](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w04/d5/mongoose-flights-lab-part-3.md) | [Mongoose Referencing Part 1](https://youtu.be/_JO2g9PW1oY), [Mongoose Referencing Part 2](https://generalassembly.zoom.us/rec/share/wJdlCrSt7mFOf7OU01jdV58xHKnPaaa8gHUdq6AEzBqXIaYhD2gvqZ1VGbZKlDDq?startTime=1585943994000) |
| w05d1 | [Consuming 3rd Party APIs](https://git.generalassemb.ly/SEI/dt-71/tree/master/units/2_full_stack/w05/d1/01-consuming-3rd-party-apis) | [Consuming APIs Lab](https://git.generalassemb.ly/SEI/dt-71/tree/master/units/2_full_stack/w05/d1/02-consuming-apis-lab), [CS: Intro to Sorting](https://git.generalassemb.ly/SEI/dt-71/tree/master/computer_science/03-cs-intro-to-sorting) | [Consuming APIs Lab](https://git.generalassemb.ly/SEI/dt-71/tree/master/units/2_full_stack/w05/d1/02-consuming-apis-lab), [Project 2 Planning](https://git.generalassemb.ly/SEI/dt-71/blob/master/projects/project_2/project-2-requirements.md) | [Consuming 3rd Party APIs Part 1](https://generalassembly.zoom.us/rec/play/tJIudryh-jI3EoeS5ASDCvQtW460e6is1igc-6EPmEjkWiQLNVH1Y-MQMeDgfJatVPoTR72pevb4ELZJ?startTime=1586189204000), [Consuming 3rd Party APIs Part 2](https://generalassembly.zoom.us/rec/play/v5MpdOCtqG03Et3B5QSDV_dwW461famshilP8vIJzxvkU3RRNFCkYrcQa-QpGic4oSwQoVr9X_iGKD4y?startTime=1586203936000), [Intro to Sorting](https://generalassembly.zoom.us/rec/play/6ZIsJu2sqzg3EtKXsASDB6QtW47uK6usg3dK-6deyx6wV3BXZlOmNLUWY-qFVuhdv7JUdtGsh08yRniS?startTime=1586214809000) |
| w05d2 | [JS Promises](https://git.generalassemb.ly/SEI/dt-71/tree/master/units/2_full_stack/w05/d2/01-js-promises), [Guide to Adding Features to Web App](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w05/d2/guide-to-add-feature-to-web-app.md), [Atlas Hosted MongoDB](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w05/d2/atlas-hosted-mongodb.md) | [JS Promises Lab](https://git.generalassemb.ly/SEI/dt-71/tree/master/units/2_full_stack/w05/d2/02-js-promises-lab), [CS: Intro to Big O](https://git.generalassemb.ly/SEI/dt-71/tree/master/computer_science/01-cs-big-o-notation) | [JS Promises Lab](https://git.generalassemb.ly/SEI/dt-71/tree/master/units/2_full_stack/w05/d2/02-js-promises-lab), [Project 2 Planning](https://git.generalassemb.ly/SEI/dt-71/blob/master/projects/project_2/project-2-requirements.md) | [JS Promises](https://generalassembly.zoom.us/rec/share/-8xZJYP5_GlLGJX040TSWJcnI4Ppeaa82nIX-6YEz07wXMpaIkH1Q8Dm0iJvWsmr?startTime=1586275937000), [Atlas Hosted MongoDB](https://generalassembly.zoom.us/rec/share/-8xZJYP5_GlLGJX040TSWJcnI4Ppeaa82nIX-6YEz07wXMpaIkH1Q8Dm0iJvWsmr?startTime=1586295087000), [CS: Intro to Big O](https://generalassembly.zoom.us/rec/share/-8xZJYP5_GlLGJX040TSWJcnI4Ppeaa82nIX-6YEz07wXMpaIkH1Q8Dm0iJvWsmr?startTime=1586299737000) |
| w05d3 | [Producing an API in Express](https://git.generalassemb.ly/SEI/dt-71/tree/master/units/2_full_stack/w05/d3/01-producing-an-api-in-express) | [Producing an API Lab (Deliverable)](https://git.generalassemb.ly/SEI/dt-71/tree/master/units/2_full_stack/w05/d3/02-producing-api-lab), [Project 2 Planning](https://git.generalassemb.ly/SEI/dt-71/blob/master/projects/project_2/project-2-requirements.md) | [Producing an API Lab (Deliverable)](https://git.generalassemb.ly/SEI/dt-71/tree/master/units/2_full_stack/w05/d3/02-producing-api-lab), [Project 2 Planning](https://git.generalassemb.ly/SEI/dt-71/blob/master/projects/project_2/project-2-requirements.md) | [Producing an API in Express](https://generalassembly.zoom.us/rec/share/-9IkCOr682lJa4HxtW3TSPUaR4DPT6a81SBK-_FbzhximMOb5WiUXZXx5Bl2qOkY?startTime=1586361784000) |
| w05d4 | [OAuth](https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w05/d4/02-04-oauth-authentication/oauth-lesson.md) | [Project 2 Planning](https://git.generalassemb.ly/SEI/dt-71/blob/master/projects/project_2/project-2-requirements.md) | [Project 2 Planning](https://git.generalassemb.ly/SEI/dt-71/blob/master/projects/project_2/project-2-requirements.md) | [OAuth Part 1](https://generalassembly.zoom.us/rec/share/9Pd5AayrtXtIGK_yw0qAeIk4LNz_aaa82iRL-PVYnkwBAXjfSpZmiAg158pN8gHT?startTime=1586448019000), [OAuth](https://generalassembly.zoom.us/rec/share/3JNcD-D8r2xORoHO0k30UKMfPrrVT6a813Ue86FeyUrnHMafPtKe2Uo9WYj37onx?startTime=1586462569000) |