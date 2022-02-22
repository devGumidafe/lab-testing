import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from 'common/components/confirmation-dialog/confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('common/components/confirmation-dialog/confirmation-dialog.component.tsx', () => {
  it('should open dialog ', () => {
    //Arr
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Title',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialog = screen.getByRole('dialog');
    const title = screen.getByText('Title');
    const acceptButton = screen.getByRole('button', { name: 'Aceptar' });
    const closeButton = screen.getByRole('button', { name: 'Cancelar' });

    //Assert
    expect(dialog).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  it('should call "onClose" when click button "Cancelar"', () => {
    //Arr
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);

    const closeButton = screen.getByRole('button', { name: 'Cancelar' });

    userEvent.click(closeButton);

    //Assert
    expect(props.onClose).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  it('should call "onAccept" when click button "Aceptar"', () => {
    //Arr
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);

    const acceptButton = screen.getByRole('button', { name: 'Aceptar' });

    userEvent.click(acceptButton);

    //Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onAccept).toHaveBeenCalledTimes(1);
  });

  it('Snapshot component', () => {
    //Arr
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Title',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
    };

    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const dialog = screen.getByRole('dialog');

    //Assert
    expect(dialog).toMatchSnapshot();
  });
});
