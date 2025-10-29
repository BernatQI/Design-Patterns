# 🎯 Design Patterns

🇺🇸 English Version | [🇪🇸 Versión en Español](./README.es.md)

A comprehensive collection of **Design Patterns** implemented in **TypeScript** with practical examples, UML diagrams, and executable code. This repository is designed to learn and understand fundamental object-oriented programming patterns.

## 📋 What are Design Patterns?

**Design Patterns** are reusable solutions to common problems in software design. They represent best practices used by experienced developers and provide a common vocabulary for discussing design solutions.

### Benefits:
- 🔄 **Reusability**: Proven and tested solutions
- 📖 **Communication**: Common vocabulary among developers  
- 🏗️ **Structure**: Better code organization and architecture
- 🛡️ **Maintainability**: Code that's easier to maintain and extend

### 🏃‍♂️ How to Run the Examples

```bash
# Clone the repository
git clone https://github.com/BernatQI/Design-Patterns.git
cd Design-Patterns

# Install dependencies (if needed)
npm install

# Run a specific pattern
npx ts-node prototype/Main.ts
npx ts-node singleton/Main.ts
npx ts-node bridge/Main.ts

# Or compile and run
npx tsc --project singleton/tsconfig.json
node singleton/Main.js
```

## 📚 Implemented Patterns

### 🏗️ Creational Patterns
These patterns focus on **object creation**, providing mechanisms that increase flexibility and code reuse.

| Pattern | Description | Status |
|---------|-------------|---------|
| [**Singleton**](./singleton/) | Guarantees a single instance of a class | ✅ Implemented |
| [**Factory Method**](./factory/) | Creates objects without specifying exact classes | ✅ Implemented |
| [**Abstract Factory**](./abstract-factory/) | Creates families of related objects | ✅ Implemented |
| [**Builder**](./builder/) | Builds complex objects step by step | ✅ Implemented |
| [**Prototype**](./prototype/) | Creates objects by cloning existing instances | ✅ Implemented |

### 🔗 Structural Patterns
These patterns focus on **class and object composition**, forming larger structures while maintaining flexibility and efficiency.

| Pattern | Description | Status |
|---------|-------------|---------|
| [**Adapter**](./adapter/) | Allows incompatible interfaces to work together | ✅ Implemented |
| [**Bridge**](./bridge/) | Separates abstraction from implementation | ✅ Implemented |
| [**Composite**](./composite/) | Composes objects into tree structures | ✅ Implemented |
| [**Decorator**](./decorator/) | Adds behavior to objects dynamically | ✅ Implemented |
| [**Facade**](./facade/) | Provides simplified interface to complex subsystem | ✅ Implemented |
| [**Flyweight**](./flyweight/) | Minimizes memory usage by sharing data efficiently | ✅ Implemented |
| **Proxy** | Provides substitute or placeholder for another object | 🔄 (coming soon) |

### 🎭 Behavioral Patterns
These patterns focus on **communication between objects** and the assignment of responsibilities between them.

| Pattern | Description | Status |
|---------|-------------|---------|
| **Observer** | Defines one-to-many dependency between objects | 🔄 (coming soon) |
| **Strategy** | Defines family of interchangeable algorithms | 🔄 (coming soon) |
| **Command** | Encapsulates a request as an object | 🔄 (coming soon) |
| **State** | Allows object to alter behavior when internal state changes | 🔄 (coming soon) |
| **Template Method** | Defines algorithm skeleton in base class | 🔄 (coming soon) |
| **Chain of Responsibility** | Passes requests along chain of handlers | 🔄 (coming soon) |
| **Mediator** | Defines how a set of objects interact | 🔄 (coming soon) |
| **Memento** | Captures and restores object's internal state | 🔄 (coming soon) |
| **Visitor** | Separates algorithms from objects they operate on | 🔄 (coming soon) |
| **Iterator** | Provides way to access elements sequentially | 🔄 (coming soon) |
| **Interpreter** | Defines representation for language grammar | 🔄 (coming soon) |

## 🔍 Features of Each Implementation

Each pattern in this repository includes:

- 📊 **Detailed UML Diagram** in Mermaid
- 🎯 **Specific problem** the pattern solves
- ✅ **Fully functional TypeScript code**
- 🧪 **Real-world practical examples**
- 📝 **Comprehensive documentation** with use cases
- ⚡ **Executable code** to test immediately
- 🔗 **Relationships** with other patterns
- 💡 **Best practices** and considerations

## 🛠️ Technologies Used

- **TypeScript** - Strong typing and modern features
- **Node.js** - Runtime environment 
- **Mermaid** - UML diagrams integrated in markdown
- **ts-node** - Direct TypeScript execution

## 📖 Additional Resources

### 📚 Recommended Books
- **"Design Patterns: Elements of Reusable Object-Oriented Software"** - Gang of Four (GoF)
- **"Head First Design Patterns"** - Eric Freeman & Elisabeth Robson
- **"Refactoring: Improving the Design of Existing Code"** - Martin Fowler

### 🌐 Online References
- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns) (Recommended)
- [SourceMaking - Design Patterns](https://sourcemaking.com/design_patterns)
- [DoFactory - Design Patterns](https://www.dofactory.com/net/design-patterns)

## 🤝 Contributing

Want to contribute? Great! Here are some ways:

1. 🐛 **Report bugs** or issues in examples
2. 💡 **Suggest improvements** in documentation
3. 🔧 **Implement missing patterns**
4. 📝 **Improve existing explanations**
5. 🧪 **Add more practical examples**

### Contribution Process:
1. Fork the repository
2. Create a branch for your feature (`git checkout -b feature/new-pattern`)
3. Commit your changes (`git commit -am 'Add Strategy pattern'`)
4. Push to the branch (`git push origin feature/new-pattern`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

**BernatQI** - [GitHub](https://github.com/BernatQI)

---

⭐ **Was this repository useful to you?** Give it a star and share it!

💬 **Have questions?** Open an issue and we'll help you.

🚀 **Want more content?** Follow me to stay updated with new patterns and examples.