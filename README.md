# react-rent-and-ride

## Guidelines
- To start the app:
- run `yarn install` or `npm install`
- run `yarn start` or `npm run start`

## Website Details

Here's a car-sharing platform.
Car owners can already list their car on our platform.

Any person (let's call them "driver") can see cars they could rent.

We are displaying car's picture, brand, model, price per day and price per km.

Unfortunately, some cars are only available for short rentals (less than a given number of days or kilometers, defined by the owner).

To only see available cars, drivers must give input for the duration of their rental and the distance they plan on driving.

These are different values that they should be able to select are:

- duration (in days): between 1 and 30
- distance (in km): 50, 100, 150, 200, 250, 300, ... up to 3000

We heard of drivers complaining about not knowing the price for their rental. 

The rental price is the sum of:

- A time component: the number of rental days multiplied by the car's price per day
- A distance component: the number of km multiplied by the car's price per km

Let's calculate and display this price for every car.

We decided to have decreasing pricing for longer rentals.

New rules:

- price per day decreases by 10% after 1 day
- price per day decreases by 30% after 4 days
- price per day decreases by 50% after 10 days

Adapt the rental price computation to take these new rules into account.

New rules are implemented and the resntal price is calculated based on it

Happy Riding!!!
