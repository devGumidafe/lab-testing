import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { SpinnerComponent } from 'common/components';
import { trackPromise } from 'react-promise-tracker';

const customPromise = ({ delay = 1000, willResolve = true } = {}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willResolve) resolve('promise resolved');
      else reject('promise rejected');
    }, delay);
  });
};

describe('src/common/components/spinner/spinner.component.tsx.', () => {
  it('should not be displayed spinner component', () => {
    //Arr

    //Act
    render(<SpinnerComponent />);

    const spinner = screen.queryAllByRole('presentation');

    //Assert
    expect(spinner).toHaveLength(0);
  });

  it('should be displayed spinner component', () => {
    //Arr

    //Act
    render(<SpinnerComponent />);

    act(() => {
      trackPromise(customPromise());
    });

    const spinner = screen.getByRole('presentation');

    //Assert
    expect(spinner).toBeInTheDocument();
  });

  it('snapshot spinner component', () => {
    //Arr

    //Act
    render(<SpinnerComponent />);

    act(() => {
      trackPromise(customPromise());
    });

    const spinner = screen.getByRole('presentation');

    //Assert
    expect(spinner).toMatchSnapshot();
  });
});
