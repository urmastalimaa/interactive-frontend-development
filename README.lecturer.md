_Don't worry students, no secrets here_

# Core value proposition

The course is designed such that a student with very little practical
experience could - if put in enough time - create and understand an application
that they can proudly show off (e.g. during a job interview). 

In furtherance of that goal, the course is not designed to give _expertise_ in React,
but rather to
  * encourage good programming practices,
  * practice _reading_ code by having an example toy application,
  * experience working on a continuous project, including
    * refactoring,
    * testing,
    * augmenting and repurposing existing functionality.

A more long-winded name for the course could be

_Preparation for practical work in the industry, driven by a continuous front-end project using React_

## Difficulty for students

When the course is given in University of Tartu, the students come from
**very** different backgrounds and due to that, there is a huge spread in how
difficult the course is for them. 

  1) Students who have no practical experience struggle a lot.
  2) Students with practical development experience have it much easier.
  3) Homework requirements have been smoothed over the years to balance the workload between weeks.

# Before the course starts

Synchronize with the professor responsible for the course to
  * set up means of communication (e.g. Slack workspace),
  * and understand the virtual conferencing setup (when giving the course virtually),
  * set up spreadsheet with grades,
  * update the course's https://courses.cs.ut.ee page with all that information.

[The intro slides](./slides/intro.md) describe the lecturer, the course setup and
means of communication. As such, the intro must be updated every year.

## Keeping the course up-to-date

Given that this is **JavaScript**, even though the versions are more-or-less pinned, 
you need to ensure that the example project builds successfully from scratch on
the latest LTS Node version.
In order to avoid requirements installing old software, the required Node
version must be updated in lecture materials.

Furthermore, dependencies must be updated to avoid working with obsolete
dependencies for which documentation may be hard to find. Updating dependencies
may require time updating lecture example code as well, so do this well ahead
of the schedule.

## Homework project

Dealing with plagiarism is extremely stressful.
To reduce the temptation, every year should have a new, slightly different homework project.

This includes
  * coming up [with requirements](./homework/),
  * creating catch-up applications,
    * including the demo videos at the end of lecture slides,
  * and adding functionality to [game lobby server](https://bitbucket.org/urmastalimaa/game_lobby_server/) 
    when necessary.

# Lectures

Lectures are set up to

  1) Introduce new concepts;
  2) Point to code examples, which call for explaining the code and exercising the toy application;
  3) Finish with a link to homework requirements;
    a) It is best to have a small demo of the expected homework result, 
      _requirements_ are both hard to write and understand.
  4) Lecture slides [written in _remark_](./slides), they can be served locally or opened from GitHub pages.
    a) _remark_ supports _lecturer's notes_, use them when preparing for lectures

## Giving a lecture

After you've fully understood the concepts and toy application examples, prepare your workspace such that

  * You have no open application with private information.
  * All notifications are suspended
  * Your pixel density is such that students with 13" screens can see what you are doing
  * You have open, and can switch at ease between
    1) the terminal,
    2) your editor,
    3) browser with toy application / online documentation,
    4) browser with slides.

# Grading

The course has prided itself by giving personal feedback on the homework project.
This has been very useful to students, but a major time-sink for the lecturer
as homework grading cannot be automated. This aspect of the course _may_ be
changed in the future, but only after careful consideration.

Depending on the efficiency of your process, grading one homework takes 3-10 minutes per student.
This [tool](https://github.com/urmastalimaa/fetch_ut_homeworks) has been used to speed up the process.

# Exam

The in-person exam has been a multiple-choice exam with questions about the
course contents with 1-2 tiny code questions.

The online exam has been a small project, somewhat similar to the lecture toy
application, that must be finish over 2 hours. The online exam rules and setup
have been per Tartu University standards.
