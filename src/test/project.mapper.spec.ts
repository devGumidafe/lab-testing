import { mapProjectFromApiToVm } from 'pods/project/project.mapper';
import * as apiModel from '../pods/project/api/project.api-model';
import * as viewModel from '../pods/project/project.vm';

describe("pods/project/project.mapper.ts", () => {
  it("should return empty project when it feed project equal undefined ", () => {
    //Arr
    const project: apiModel.Project = undefined;

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });


  it("should return empty project when it feed project equal null ", () => {
    //Arr
    const project: apiModel.Project = null;

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });


  it("should return object with employee empty when it feed project equal empty object ", () => {
    //Arr
    const project: apiModel.Project = {} as apiModel.Project;

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    expect(result).toEqual({
      employees: []
    });
  });


  it("should return project with empty employee when it feed project con employee undefined ", () => {
    //Arr
    const project: apiModel.Project = {
      id: '2',
      name: 'project',
      externalId: '',
      comments: '',
      isActive: true,
      employees: undefined,
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    expect(result).toEqual(
      {
        id: '2',
        name: 'project',
        externalId: '',
        comments: '',
        isActive: true,
        employees: [],
      }
    );
  });


  it("should return project with empty employee when it feed project con employee null ", () => {
    //Arr
    const project: apiModel.Project = {
      id: '2',
      name: 'project',
      externalId: '',
      comments: '',
      isActive: true,
      employees: null,
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    expect(result).toEqual(
      {
        id: '2',
        name: 'project',
        externalId: '',
        comments: '',
        isActive: true,
        employees: [],
      }
    );
  });


  it("should return mapped project", () => {
    //Arr
    const project: apiModel.Project = {
      id: "1",
      name: "Project 1",
      isActive: true,
      externalId: "1",
      comments: "",
      employees: [
        {
          id: "1",
          isAssigned: true,
          employeeName: "Elon Musk"
        }
      ]
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    expect(result).toEqual({
      id: "1",
      name: "Project 1",
      externalId: "1",
      comments: "",
      isActive: true,
      employees: [
        {
          id: "1",
          isAssigned: true,
          employeeName: "Elon Musk"
        }
      ]
    });
  });

  
  it("should return mapped project with employees.length = 2", () => {
    //Arr
    const project: apiModel.Project = {
      id: "1",
      name: "Project 1",
      isActive: true,
      externalId: "1",
      comments: "",
      employees: [
        {
          id: "1",
          isAssigned: true,
          employeeName: "Elon Musk"
        },
        {
          id: "2",
          isAssigned: false,
          employeeName: "Jeff Bezos"
        }
      ]
    };

    //Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    //Assert
    expect(result.employees).toHaveLength(2);

  });
});
