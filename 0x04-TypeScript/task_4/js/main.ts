// Subjects
export const cpp = 'C++';
export const java = 'Java';
export const react = 'React';

// Teacher Object
interface Teacher {
  experienceTeachingC?: number;
}

export const cTeacher: Teacher = {
  experienceTeachingC: 10,
};

// Subject interface and classes
interface Subject {
  getRequirements(): string;
  getAvailableTeacher(): string;
}

class Cpp implements Subject {
  teacher?: Teacher;

  constructor(teacher?: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return 'Here is the list of requirements for C++';
  }

  getAvailableTeacher(): string {
    if (this.teacher?.experienceTeachingC !== undefined) {
      return `Available Teacher: ${this.teacher.experienceTeachingC}`;
    }
    return 'No available teacher';
  }
}

class Java implements Subject {
  teacher?: Teacher;

  constructor(teacher?: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (this.teacher?.experienceTeachingC !== undefined) {
      return `Available Teacher: ${this.teacher.experienceTeachingC}`;
    }
    return 'No available teacher';
  }
}

class React implements Subject {
  teacher?: Teacher;

  constructor(teacher?: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    if (this.teacher?.experienceTeachingC !== undefined) {
      return `Available Teacher: ${this.teacher.experienceTeachingC}`;
    }
    return 'No available teacher';
  }
}

// Logging information
function logSubject(subjectName: string, subject: Subject) {
  console.log(subjectName);
  console.log(subject.getRequirements());
  console.log(subject.getAvailableTeacher());
}

// Instantiate subjects
const cppSubject = new Cpp(cTeacher);
const javaSubject = new Java(cTeacher);
const reactSubject = new React(cTeacher);

// Log information
logSubject(cpp, cppSubject);
logSubject(java, javaSubject);
logSubject(react, reactSubject);
