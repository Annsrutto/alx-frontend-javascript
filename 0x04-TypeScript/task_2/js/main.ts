// DirectorInterface with the specified methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // TeacherInterface with the specified methods
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Implementing the Director class
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Implementing the Teacher class
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Function to create an employee (Director or Teacher) based on the salary
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  // Type predicate function to check if an employee is a Director
  function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Function to execute work based on the type of employee
  function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  
  // String literal type for subjects
  type Subjects = "Math" | "History";
  
  // Function to teach a class based on the subject
  function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    }
    return "Teaching History";
  }
  
  // Testing the createEmployee and executeWork functions
  console.log(createEmployee(200)); // Expected output: Teacher
  console.log(createEmployee(1000)); // Expected output: Director
  console.log(createEmployee('$500')); // Expected output: Director
  
  executeWork(createEmployee(200)); // Expected output: Getting to work
  executeWork(createEmployee(1000)); // Expected output: Getting to director tasks
  
  // Testing the teachClass function
  console.log(teachClass('Math')); // Expected output: Teaching Math
  console.log(teachClass('History')); // Expected output: Teaching History
  