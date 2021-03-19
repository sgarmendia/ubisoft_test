import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {  mount } from 'enzyme';
import Home from '../Home';


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


describe('Home view', () => {
    it('mounts correctly with its children', () => {
        mount(<Home />);
    });

    it('renders Header and Home containers', () => {
        act(() => {
            render(<Home />, container);
        });


        expect(container.firstChild.classList.contains('header_container')).toBe(true);
        expect(container.lastChild.classList.contains('home_container')).toBe(true);
    });
});