// Define the Teacher interface with the specified properties
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // This allows adding any other property
  }
  
  // Create a teacher object with additional properties
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  // Expected output:
  // {
  //   firstName: "John",
  //   lastName: "Doe",
  //   fullTimeEmployee: false,
  //   location: "London",
  //   contract: false
  // }
  