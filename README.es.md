# 🎯 Patrones de Diseño - Design Patterns

[🇺🇸 English Version](./README.md) | 🇪🇸 Versión en Español

Una colección completa de **Patrones de Diseño** implementados en **TypeScript** con ejemplos prácticos, diagramas UML y código ejecutable. Este repositorio está diseñado para aprender y entender los patrones fundamentales de la programación orientada a objetos.

## 📋 ¿Qué son los Patrones de Diseño?

Los **Patrones de Diseño** son soluciones reutilizables a problemas comunes en el diseño de software. Representan las mejores prácticas utilizadas por desarrolladores experimentados y proporcionan un vocabulario común para discutir soluciones de diseño.

### Beneficios:
- 🔄 **Reutilización**: Soluciones probadas y testadas
- 📖 **Comunicación**: Vocabulario común entre desarrolladores  
- 🏗️ **Estructura**: Mejor organización y arquitectura del código
- 🛡️ **Mantenibilidad**: Código más fácil de mantener y extender

### 🏃‍♂️ Cómo Ejecutar los Ejemplos

```bash
# Clonar el repositorio
git clone https://github.com/BernatQI/Design-Patterns.git
cd Design-Patterns

# Instalar dependencias (si es necesario)
npm install

# Ejecutar un patrón específico
npx ts-node prototype/Main.ts
npx ts-node singleton/Main.ts
npx ts-node bridge/Main.ts

# O compilar y ejecutar
npx tsc --project singleton/tsconfig.json
node singleton/Main.js
```

## 📚 Patrones Implementados

### 🏗️ Patrones Creacionales
Estos patrones se enfocan en la **creación de objetos**, proporcionando mecanismos que aumentan la flexibilidad y reutilización del código.

| Patrón | Descripción | Estado |
|--------|-------------|---------|
| [**Singleton**](./singleton/) | Garantiza una única instancia de una clase | ✅ Implementado |
| [**Factory Method**](./factory/) | Crea objetos sin especificar clases exactas | ✅ Implementado |
| [**Abstract Factory**](./abstract-factory/) | Crea familias de objetos relacionados | ✅ Implementado |
| [**Builder**](./builder/) | Construye objetos complejos paso a paso | ✅ Implementado |
| [**Prototype**](./prototype/) | Crea objetos clonando instancias existentes | ✅ Implementado |

### 🔗 Patrones Estructurales
Estos patrones se enfocan en la **composición de clases y objetos**, formando estructuras más grandes mientras mantienen flexibilidad y eficiencia.

| Patrón | Descripción | Estado |
|--------|-------------|---------|
| [**Adapter**](./adapter/) | Permite que interfaces incompatibles trabajen juntas | ✅ Implementado |
| [**Bridge**](./bridge/) | Separa abstracción de implementación | ✅ Implementado |
| [**Composite**](./composite/) | Compone objetos en estructuras de árbol | ✅ Implementado |
| [**Decorator**](./decorator/) | Añade comportamiento a objetos dinámicamente | ✅ Implementado |
| [**Facade**](./facade/) | Proporciona interfaz simplificada a subsistema complejo | ✅ Implementado |
| [**Flyweight**](./flyweight/) | Minimiza uso de memoria compartiendo datos eficientemente | ✅ Implementado |
| [**Proxy**](./proxy/) | Proporciona sustituto o placeholder para otro objeto | ✅ Implementado |

### 🎭 Patrones Comportamentales
Estos patrones se enfocan en la **comunicación entre objetos** y la asignación de responsabilidades entre ellos.

| Patrón | Descripción | Estado |
|--------|-------------|---------|
| **Observer** | Define dependencia uno-a-muchos entre objetos | 🔄 (próximamente) |
| **Strategy** | Define familia de algoritmos intercambiables | 🔄 (próximamente) |
| **Command** | Encapsula una solicitud como un objeto | 🔄 (próximamente) |
| **State** | Permite que objeto altere comportamiento cuando cambia estado | 🔄 (próximamente) |
| **Template Method** | Define esqueleto de algoritmo en clase base | 🔄 (próximamente) |
| **Chain of Responsibility** | Pasa solicitudes a lo largo de cadena de manejadores | 🔄 (próximamente) |
| **Mediator** | Define cómo interactúa un conjunto de objetos | 🔄 (próximamente) |
| **Memento** | Captura y restaura estado interno de objeto | 🔄 (próximamente) |
| **Visitor** | Separa algoritmos de objetos sobre los que operan | 🔄 (próximamente) |
| **Iterator** | Proporciona forma de acceder secuencialmente a elementos | 🔄 (próximamente) |
| **Interpreter** | Define representación para gramática de lenguaje | 🔄 (próximamente) |

## 🔍 Características de cada Implementación

Cada patrón en este repositorio incluye:

- 📊 **Diagrama UML** detallado en Mermaid
- 🎯 **Problema específico** que resuelve el patrón
- ✅ **Código TypeScript** completamente funcional
- 🧪 **Ejemplos prácticos** del mundo real
- 📝 **Documentación exhaustiva** con casos de uso
- ⚡ **Código ejecutable** para probar inmediatamente
- 🔗 **Relaciones** con otros patrones
- 💡 **Mejores prácticas** y consideraciones

## 🛠️ Tecnologías Utilizadas

- **TypeScript** - Tipado fuerte y características modernas
- **Node.js** - Entorno de ejecución 
- **Mermaid** - Diagramas UML integrados en markdown
- **ts-node** - Ejecución directa de TypeScript

## 📖 Recursos Adicionales

### 📚 Libros Recomendados
- **"Design Patterns: Elements of Reusable Object-Oriented Software"** - Gang of Four (GoF)
- **"Head First Design Patterns"** - Eric Freeman & Elisabeth Robson
- **"Refactoring: Improving the Design of Existing Code"** - Martin Fowler

### 🌐 Referencias Online
- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns) (Recomendado)
- [SourceMaking - Design Patterns](https://sourcemaking.com/design_patterns)
- [DoFactory - Design Patterns](https://www.dofactory.com/net/design-patterns)

## 🤝 Contribuir

¿Quieres contribuir? ¡Genial! Aquí hay algunas formas:

1. 🐛 **Reportar bugs** o problemas en los ejemplos
2. 💡 **Sugerir mejoras** en la documentación
3. 🔧 **Implementar patrones faltantes**
4. 📝 **Mejorar explicaciones** existentes
5. 🧪 **Añadir más ejemplos** prácticos

### Proceso de Contribución:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nuevo-patron`)
3. Commit tus cambios (`git commit -am 'Añadir patrón Strategy'`)
4. Push a la rama (`git push origin feature/nuevo-patron`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**BernatQI** - [GitHub](https://github.com/BernatQI)

---

⭐ **¿Te resultó útil este repositorio?** ¡Dale una estrella y compártelo!

💬 **¿Tienes preguntas?** Abre un issue y te ayudaremos.

🚀 **¿Quieres más contenido?** Sígueme para estar al día con nuevos patrones y ejemplos.