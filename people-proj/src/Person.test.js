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

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => {

//   const originalModule = jest.requireActual('react-router-dom'),

//    return {
//     __esModule: true, 
//     ...originalModule,
//     useNavigate: () => mockedUsedNavigate,
//   };
  
// });

const mockUser = {
    name:"test name"
}
test('renders Person', async () => {

    const FAKE_EVENT = {
        user: {
            name: "987"
        }
    };

   const browserRouter = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          loader: () => FAKE_EVENT,
          children: [
            {
              path: "/",
              element: <Person user={mockUser}/>,
              loader: () => FAKE_EVENT,
            },
          ],
        },
      ]);

    render(
        <RouterProvider router={browserRouter} />
    );
    // user={user}

    // screen.debug()

    //   const headerElement = screen.getByText(/Person Details/i);

    //   await waitFor(() => headerElement);
    //   expect(headerElement).toBeInTheDocument();
    //   expect(headerElement).toHaveTextContent(
    //     FAKE_EVENT.name
    //   );
});

