# Neighbor.ly

An application based around renting unused tools with neighbors for a small fee.

## MVP

Neighbor.ly MVP is to have full CRUD capability for creating and adding listings. The user will be able to create an account and view their listing. Other users will be able to find listings on main search.

### Goals

- Create a user profile to store listings
- Full CRUD workflow for listing component
- Create seed data to setup API
- Execute full-stack application
- Create app using Ruby on Rails

## Post MVP

1. Would like to expand application to include neighborhoods.
2. I would like to add a price comparison table.
3. I would like to add an option to purchase rented item.
4. I would like to create a promoter component.

### Libraries and Dependencies

|      Library      | Description                                                                                                 |
| :---------------: | :---------------------------------------------------------------------------------------------------------- |
|       React       | _Powers the application functionality/environment_                                                          |
|   React Router    | _Allows application to be navigable without having to refresh the page_                                     |
|       Ruby        | _Dynamic, open source programming language that focuses on simplifying code and making it more productive._ |
|       Rails       | _Server-side web application framework_                                                                     |
| Custom Components | _Create all components styling_                                                                             |

<br>

### Client (Front End)

#### Wireframes

|<img src ="https://user-images.githubusercontent.com/22455354/110147577-dae02600-7da9-11eb-94df-229a5275015a.jpg" width="300">
|<img src ="https://user-images.githubusercontent.com/22455354/110147598-e03d7080-7da9-11eb-9fc5-b6c4701d24cf.jpg" width="300">
|<img src ="https://user-images.githubusercontent.com/22455354/110147616-e6cbe800-7da9-11eb-87f8-8526a62af6c4.jpg" width="300">
<img src ="https://user-images.githubusercontent.com/22455354/110147634-ec293280-7da9-11eb-90da-a5b8d415b130.jpg" width="300">
|<img src ="https://user-images.githubusercontent.com/22455354/110147656-f0ede680-7da9-11eb-98cc-5fcd6e3cd19e.jpg" width="300">
|<img src ="https://user-images.githubusercontent.com/22455354/110147693-f77c5e00-7da9-11eb-98a0-e26bdaaa4d52.jpg" width="300">
|<img src ="https://user-images.githubusercontent.com/22455354/110147704-fc411200-7da9-11eb-9a72-256229905495.jpg" width="300">

<br>

### UI/UX Design:

Typography
Fonts:
Roboto - A standard font in modern devices, allows for responsive screen readablity.
Noto SansJP - A complementary font that allows the user to pay attention to the main content without taking away from headers.

Colors:
Blue - #275B99 Blue is most often associated with loyalty and trust.
Green - #19B296 Green give the viewer a sense of quality. This is why it is used as a secondary color.
Gray - #F9F9F9 used as a tertiary color to allow the user to draw attention to primary colors and content.

### Component Tree:

<img src = "https://user-images.githubusercontent.com/22455354/110049756-7c229a00-7d20-11eb-89b6-300e241ad527.jpg" width="300">

### Component Heirarchy:

```structure

src
|__ App.js/
|__ Main/
       |__Main.jsx
       |__Main.css
|__ components/
    |__Header/
       |__Header.jsx
       |__Header.css
    |__ Nav/
       |__Nav.jsx
       |__Header.css
    |__ Login/
       |__Login.jsx
       |__Login.css
    |__ Register/
       |__Register.jsx
       |__Register.css
    |__Listing/
       |__ CreateListing/
          |__ CreateListing.jsx
          |__ CreateListing.css
       |__ ShowListing/
          |__ AllListing.jsx
          |__ AllListing.css
       |__ Listing/
          |__ Listing.jsx
          |__ Listing.css
       |__ UpdateListing/
          |__ UpdateListing.jsx
          |__ UpdateListing.jsx
       |__ DeleteListing/
          |__ DeleteListing.jsx
          |__ DeleteListing.css
    |__Users/
       |__ CreateUser/
          |__ CreateUser.jsx
          |__ CreateUser.css
       |__ ShowUser/
          |__ ShowUser.jsx
          |__ ShowUser.css
    |__Comments/
      |__ CreateComments/
          |__ CreateComments.jsx
          |__ CreateComments.css
       |__ ShowComments/
          |__ ShowComments.jsx
          |__ ShowComments.css
       |__ UpdateComments/
          |__ UpdateComments.jsx
          |__ UpdateComments.jsx
       |__ DeleteComments/
          |__ DeleteComments.jsx
          |__ DeleteComments.css
|__ services/
    |__api-config.js
    |__listings.js
    |__auth.js
    |__comments.js

```

### Timeframe:

| Task                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Sign Up/Login Form          |    L     |    TBD hrs     |    TBD hrs    |     TBD     |
| Create Front-End CRUD Actions   |    H     |    TBD hrs     |    TBD hrs    |     TBD     |
| Create Back-End CRUD Actions    |    H     |    TBD hrs     |    TBD hrs    |     TBD     |
| Create seed data                |    M     |    TBD hrs     |    TBD hrs    |     TBD     |
| Add Front-End CSS (boilerplate) |    L     |    TBD hrs     |    TBD hrs    |     TBD     |
| Add Front-End CSS (advanced)    |    H     |    TBD hrs     |    TBD hrs    |     TBD     |
| **Post-MVP**                    |    M     |    TBD hrs     |    TBD hrs    |     TBD     |
| QA & Test application           |    M     |    TBD hrs     |    TBD hrs    |     TBD     |
| Deployment                      |    H     |    TBD hrs     |    TBD hrs    |     TBD     |
| TOTAL                           |          |    TBD hrs     |    TBD hrs    |     TBD     |

<br>

### ERD Model:

<img src = "https://user-images.githubusercontent.com/22455354/110055726-7f6f5300-7d2b-11eb-910f-54b08fc3d960.jpg" width="300">

### Code Snippet:
