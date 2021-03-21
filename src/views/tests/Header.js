import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import { mount } from 'enzyme';
import Header from '../Header';

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


describe('Header view', () => {
    // it('mounts correctly with its children', () => {
    //   mount(<Header />);
    // });

    it('should render "n/a" without params', () => {
        act(() => {
            render(<Header />, container);
        });
        // expect(container.querySelector("h2").textContent).toBe("n/a");
    });
    
    // it('should render "Barcelona" ', () => {
    //     const mockProps = {params: { city: 'Barcelona' }};

    //     act(() => {
    //         render(<City {...mockProps} />, container);
    //     });

    //     expect(container.querySelector("h2").textContent).toBe("Barcelona");
    // });

    // it('should render "Tokyo" ', () => {
    //     const mockProps = {params: { city: 'Tokyo' }};

    //     act(() => {
    //         render(<City {...mockProps} />, container);
    //     });
        
    //     expect(container.querySelector("h2").textContent).toBe("Tokyo");
    // });
});