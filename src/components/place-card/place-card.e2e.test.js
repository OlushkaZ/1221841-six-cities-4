import {shallow} from "enzyme";
import PlaceCard from "./place-card.jsx";
import React from "react";

const props = {
  offer: {
    picture: `img/apartment-05.jpg`,
    premium: true,
    cost: 10,
    description: `Good apartment`,
    type: `Apartment`,
    rating: 5,
    id: 1212,
  },
  onAdvertCardTitleClick: jest.fn(),
  onAdvertCardMouseOver: jest.fn((x) => x),
};

it(`Hovering PlaceCard get to callback info about itself`, () => {

  const placeCard = shallow(
      <PlaceCard {...props}/>
  );

  placeCard.simulate(`mouseover`);

  expect(props.onAdvertCardMouseOver).toHaveBeenCalledTimes(1);
  expect(props.onAdvertCardMouseOver.mock.results[0].value).toMatchObject(props.offer);
});