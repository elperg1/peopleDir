import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Person from './Person.js';
import App from './App';

import {
    MemoryRouter,
    createMemoryRouter,
    createBrowserRouter,
    RouterProvider,
    useNavigate,
    BrowserRouter
} from 'react-router-dom';

const mockUser = {
    name:{
        first:"test-first-name",
        last:"test-last-name"
    },
    picture:{
        thumbnail:"x.jpg"
    },
    dob:{
        age:99
    },
    location:{
        city:"test-city"
    }
}

test('renders Person', async () => {

    render(
        <MemoryRouter initialEntries={["/qpc?id=123"]}>
            <Person user={mockUser}/>
        </MemoryRouter>
    );
  
      const rowElement = screen.getByTestId('row-element')

      expect(rowElement).toBeInTheDocument();
 
});

