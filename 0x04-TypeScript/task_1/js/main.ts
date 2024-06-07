// Define the Teacher interface with the specified properties
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // This allows adding any other property
  }
  
  // Define the Directors interface that extends Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Create a director object
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Expected output:
  // {
  //   firstName: "John",
  //   lastName: "Doe",
  //   location: "London",
  //   fullTimeEmployee: true,
  //   numberOfReports: 17
  // }
  
  // Define the interface for the printTeacher function
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Example usage of printTeacher
  console.log(printTeacher("John", "Doe"));
  
  // Expected output:
  // J. Doe
  