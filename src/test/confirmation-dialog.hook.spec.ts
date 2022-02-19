import { useConfirmationDialog } from "common/components/confirmation-dialog";
import { act, renderHook } from '@testing-library/react-hooks';
import { createEmptyLookup, Lookup } from "common/models";

describe("common/components/confirmation-dialog/confirmation-dialog.hook.ts", () => {
  it("should return default values", () => {
    //Arr

    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    const defaulItemToDelete = createEmptyLookup();

    //Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(defaulItemToDelete);
    expect(result.current.onAccept).toBeInstanceOf(Function);
    expect(result.current.onClose).toBeInstanceOf(Function);
    expect(result.current.onOpenDialog).toBeInstanceOf(Function);
  });


  it("should remove item passed to onOpenDialog", () => {
    //Arr
    const itemToDelete: Lookup = {
      id: '1',
      name: 'test',
    }

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
    });

    //Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual({
      id: "1",
      name: "test",
    });
  });


  it("should change isOpen equal false", () => {
    //Arr
    const itemToDelete: Lookup = {
      id: '1',
      name: 'test',
    }

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
      result.current.onClose();
    });

    //Assert
    expect(result.current.isOpen).toBe(false);
  });


  it("should change setItemToDelete default values", () => {
    //Arr
    const itemToDelete: Lookup = {
      id: '1',
      name: 'test',
    }

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(itemToDelete);
      result.current.onAccept();
    });

    const defaulItemToDelete = createEmptyLookup();

    //Assert
    expect(result.current.itemToDelete).toEqual(defaulItemToDelete);
  });
});
