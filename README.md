<h2>Restaurant menu</h2>

![image](https://user-images.githubusercontent.com/80893722/128142013-f8a6e97c-4893-4a10-9692-c48906f1c288.png)

This project is made with React. 

Process of building it:
- fetching data from external API: https://documenu.com/
- in the App returning XML code with hardcoded data for the main section
- styling main section and making it responsible
- making component Table and passing API data as property
- in the Table returning three new objects MenuSections, each with it's own set of data passed through as property
- in the MenuSection object in the return there are section name and buttons for each dish
- In the Table there are states for open modal and it's content. There are also two functions that open or close modal based on the current state of modal.
- styling modal
- functionality to open modal on click of each button in MenuSection
- refactoring code
- in the end I also arranged files into separate folders for clearer structure of the app

In the end I am very pleased with the result. This was my first React app and it turned out working well. One thing that would be my first upgrade is to add relevant pictures of food to the modal. Right now in the API response there is no added pictures.
