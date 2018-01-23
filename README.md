# GiftHub

https://gifthubproject.herokuapp.com/

![Logo](https://i.imgur.com/ytZX4Lb.png)

GitHub is a website built to collect charitable donations through gift cards. People often throw or stash away gift cards with low, unusable balances believing that they will never get around to cashing in the $0.40 on their Chipotle card. GiftHub allows users to easily dispose of their low balance gift cards by and support a good cause in the process.

## Frameworks and Libraries Used

[ASP.NET Web API 2](https://msdn.microsoft.com/en-us/library/dn448365(v=vs.118).aspx)

[Angular 5](https://angular.io)

[Angular Material 5](https://material.angular.io/)

[ChartJS](http://www.chartjs.org/)

[Angular Toastr](https://scttcper.github.io/ngx-toastr/)

## How to Use this Application on the Web

1. Lauch the [app.](https://gifthubproject.herokuapp.com/).

2. Register an account and try posting "gift card" amounts using fake data. Companies that have been added should appear on the dropdown. 

3. After submitting a gift card, you should be able to view the gift card in your personal history to the right. A printable version can be accessed by clicking "Print View" in the lower right and then "Print" at the bottom of the next page.

4. For testing purposes, an admin account has been setup with these credentials: username: admin@gifthub.com and password: gifthubadmin.

5. The admin should be able to see a doughnut chart broken down by total donations by company.

6. The admin should be able to add a company in the top left as well as see the gift cards that will expire most recently. 

7. The admin should also be able to click the "Manage Users" button to view a list of all users that have registered at the site.

## How to run locally

1. Clone the [Angular project repo](https://github.com/digitopoi/GiftHubAngular) and the [API project](https://github.com/digitopoi/GiftHubAPI).

2. In the API project, make sure that the API project is set as the startup project and then run it.

3. In the Angular project, run npm install in the terminal and then ng serve and navigate to [localhost:4200](localhost:4200).

4. Follow the above steps starting at #2.

## Attribution

This project was built by [Nick Bielawski](https://github.com/nbielawski), [Carr O'Connor](https://github.com/carroconnor), [Hugh Bowman](https://github.com/digitopoi), and [Beth Douglas](https://github.com/BethDouglas) as part of the .NET Track at [Eleven Fifty Academy](https://www.elevenfifty.org/) in Fishers, IN.
