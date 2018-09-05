# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Need to add validations to models

Company
	Allow for Profile Photo


Teams
	Allow teams to have and create KPIs
	Create Team pages
	Show kpis on the page
	Allow for teams to have objectives
	Allow Profile Photo

Allow for indivuals to have/create KPIs that can only be seen on their profile page

Comments
	Allow for comments on KPIs
	Comments belong to a user
	Add comments index feed to Company page

Add metric quality ratings
	Impact (1-5)

KPI
	Allow user to add a comment to the kpi when adding an update
	Add ability to star a kpi to make appear in the top section
	Add ability to create calculated metrics on New KPI page
		Select type => calculated 
			Select existing kpi metric from a drop down of all metrics created (seperated by company,team, indivdual)
				Toggl Options between: Goal_metric && Update (current_metric amount)

Users/Members
	Need to find a way to add members/users to a company
	Cannot view companies/kpis etc that they don't belong to
	Allow to add profile photo