// Exercise 3: Inheritance, Override, Super, and Private Properties
//
// 1. Create a class `Employee` with private properties `#name` and `#position`.
// 2. The `Employee` class should have a method `introduce()` that returns "Hi, I'm [name], a [position]".
// 3. Create a subclass `Manager` that inherits from `Employee`. Add a private property `#department` to the constructor.
// 4. In the `Manager` class, use `super` to call the parent constructor, and override the `introduce()` method to include the department in the output.
//    The output should be: "Hi, I'm [name], a [position] in the [department] department."


class Employee {
  // YOUR CODE HERE
}

class Manager extends Employee {
  // YOUR CODE HERE
}


// Test Code / Driver Code
const manager = new Manager("Alice", "Manager", "Sales");
console.log(manager.introduce());  // Expected Output: "Hi, I'm Alice, a Manager in the Sales department"