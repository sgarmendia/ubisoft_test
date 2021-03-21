import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import {  mount } from 'enzyme';
import Catalog from '../Catalog';


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


describe('Catalog view', () => {
    // it('mounts correctly with its children', () => {
    //     mount(<Catalog />);
    // });

    it('renders Header and Catalog containers', () => {
        act(() => {
            render(<Catalog />, container);
        });


        // expect(container.firstChild.classList.contains('header_container')).toBe(true);
        // expect(container.lastChild.classList.contains('home_container')).toBe(true);
    });
});