# RuPaul's Drag Race Fantasy League App

[TOC]

## Overview

An Angular Web App for RuPaul's Drag Race Fantasy League App (RPDR-FL). All player start the season by drafting 7 queens. A given team has 5 starters, and 2 bench players. Before the start of each episode, users can “set their line-up” by selecting which Queens will be their starters and which will be on the bench. If a queen is eliminated, that queen is eliminated from all teams, and the teams who had that queen will permanently be down a queen. With that being said, it is possible to lose all queens, which in that case the user will be unable to accrue points throughout the week except for Miss Congeniality.

###  Rules

* 50 Points for winning the race
* 25 Points for winning Ms Congeniality 
* 7 Points for a Max Challenge Win
* 3 Points for a Mini Challenge Win
* 1 Point for winning a lip sync
* -2 Points for Bottom Two
* -5 Points for Elimination  

### Screens

* Home - Landing page for users; here users can catch up on information through aggregated content 
* Login
* Profile
* League Overview - Displays League standings
* Team Overview - Overview of the team, here a user can view/modify their team. The team overview should have a clock countdown to the next episode
* Team Draft - Here Users can draft their team by selecting their 5 starters and 2 bench queens.
* Queens - A List of the Queens
* Specific Page for Queens

### Routes

The default route will be ‘rpdr-fl’

* ‘’ (base route) - HomeComponent (created)
* ‘login’ - LoginComponent (created)
* ‘profile’ - UserProfileComponent (created)
* ‘/overview/’ - LeagueOverviewComponent (created)
* ‘/{team name}/ - TeamOverviewComponent name is the path variable, that loads the  
* ‘/draft-center/’ - DraftCenterComponent
* ‘/meet-the-queens/ - QueensOverviewComponent
* /meet-the-queens/{queen-name} - SpecificQueenOverviewComponent

### Data Structure

* League
  * Id
  * Name
  * Number of Teams
  * Teams
  * Weekly Results
* User
  * Id
  * User Name
  * User Image
  * Email
* Team
  * Id
  * Team Owner - User
  * Team Name
  * Team Image
  * 5 Starter Queens
  * 2 Bench Queens
  * Total Points
* Queen
  * Id
  * Queen Name
  * Queen Image
  * DOB
  * DOB Location
  * Years in Drag
  * Maxi Challenge Wins
  * Mini Challenge Wins
  * Bottom 2 Appearances
  * Lip Sync Won