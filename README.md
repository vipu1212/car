## Getting Started
#### Steps to setup and run the project
- docker-compose up
- npm run migration:run
- npm start

#### After starting the server, test the APIs via POSTMAN
- Download Car.postman_collection.json
- Import in POSTMAN

#### To run unit test
- npm test

## About the project
### Entities
There are total 4 entities 
  - Car
  - Color
  - Registration
  - VIN

**Why?**
Car is the main entity but Color, Registration details, and VIN details can be entities in itself. 
Thus, relations were created between Car and Color,Registration,VIN.

### Endpoints
- **CAR**
  - `GET /car/:id` Gets all the details about a car (including color, registration, and vin details)
  - `POST /car` Inserts a new car
  - `PUT /car/:id` Updates a car's details. Requires whole car entity with updated values as input
  - `DELETE /car/:id` deletes a car from database

- **COLOR**
    - `GET /colors` Gets the list of all the colors. _Why?_ As per the UI sketch, the color options would be fetched using this endpoint
    - `POST /color` Inserts a new color (Was not required but had to use it for initial testing so left it here)

### Assumptions made
- A car always has to be registered. Thus, in Car table, registration is NOT NULL
- A car can only have one registration. Thus, the relation b/w Car and Registration is **One-to-One**.
- A car always has a VIN number. Thus, VIN is NOT NULL.
- A car can only have 1 VIN number. This, relation between Car and VIN is **One-to-One**.
- A car always has a color. Thus, Color is also NOT NULL in Car table.
- A car can have one color, and many cars can have same color. Thus, **Many-to-One** between Car and Colors.

### Database migration
- After the `npm run migration:run`, 10 Color entries will be inserted in Color table. These colors are the ones to display on the page.

### My comments
Some implementations were left unimplemented or an alternative was used
#### Integration tests missing  (╯°□°）╯︵ ┻━┻
Extremely critical, I know. Could not spare time for this, however, a POSTMAN collection has been provided to at least test the system manually

#### Authentication
For this project, header authentication was used just to put some authentication in place. As I assumed authentication would not be the focus of this assignment.

#### Git commit users (Both are me)
First 3 commits were from my official git config user, 🤦 It was changed later with my personal user **vipu1212**

### Feedback
- How long the assessment took to complete 
  - About 4 days (1 weekend, and 3 working days of about 1.5-2 hours)
- Whether or not the requirements were clear 
  - Pretty Clear 
- On a scale of 1 - 10, the level of difficulty 
  - 3 (Not so difficult but reading documentation/debugging took good amount of time for typeorm and routing-controller)
- If given the choice, would they rather have done an Leet-code style assessment over a project-based assessment 
  - project-based
