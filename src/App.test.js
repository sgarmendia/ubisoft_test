import React from 'react';;
import { render, cleanup, screen, fireEvent } from '@testing-library/react';

import gamesRaw from './api/games';
import GamesContext from './gamesContext';
import App from './App';

afterEach(cleanup);

//custom render function to mock React context API
const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <GamesContext.Provider value={providerProps}>{ui}</GamesContext.Provider>,
    renderOptions
  )
};

const { games } = gamesRaw;

describe('App', () => {
  it('renders navigation filters', async () => {
    render(<App />);
    //since I mocked the server api call with a setTimout function
    //I am using await to find the element when they appear
    const all = await screen.findByText('ALL');
    const ps4 = await screen.findByText('PS4');
    const x1 = await screen.findByText('X1');
    const pc = await screen.findByText('PC');
    const sw = await screen.findByText('Switch');


    expect(all).toBeInTheDocument();
    expect(ps4).toBeInTheDocument();
    expect(x1).toBeInTheDocument();
    expect(pc).toBeInTheDocument();
    expect(sw).toBeInTheDocument();
  });

  it('renders 12 game cards', async () => {
    const providerProps = { games }
    customRender(<App />, { providerProps })
        
    const clickableCards = await screen.findAllByRole('link');

    expect(clickableCards).toHaveLength(12);
  });

  it('when click on game card, "Game details" are visible', async () => {
    const providerProps = { games }
    customRender(<App />, { providerProps })
        
    const card = await screen.findByText('Switch Game A');

    fireEvent.click(card);

    expect(await screen.findByAltText('game hero image')).toBeVisible();
    expect(await screen.findByText(/Switch Game A/i)).toBeInTheDocument();
    expect(await screen.findByText(/^lorem/i)).toBeInTheDocument();
  });
});