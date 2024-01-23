import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Grid from './Grid';
import App from './App';

import {
    MemoryRouter,
    createMemoryRouter,
    createBrowserRouter,
    RouterProvider,
    useNavigate,
    BrowserRouter
} from 'react-router-dom';

const mockUserData = [ {name:"test name"}
        ];

test('renders Grid', async () => {

    const FAKE_EVENT = {
        userData: {
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
              element: <Grid userData={mockUserData}/>,
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



