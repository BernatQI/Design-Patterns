# Bridge Pattern# Patrón Bridge



[🇪🇸 Versión en Español](./README.es.md) | 🇺🇸 English Version## Diagrama UML



## UML Diagram```mermaid

classDiagram

```mermaid    %% Abstraction Layer

classDiagram    class Notification {

    %% Abstraction        <<abstract>>

    class Notification {        #sender: INotificationSender

        <<abstract>>        +constructor(sender: INotificationSender)

        #sender: INotificationSender        +setSender(sender: INotificationSender): void

        +constructor(sender: INotificationSender)        +send(recipient: string): void*

        +setSender(sender: INotificationSender): void    }

        +send(recipient: string): void*

    }    %% Refined Abstractions

    class SimpleNotification {

    %% Refined Abstractions        -message: string

    class SimpleNotification {        +constructor(sender: INotificationSender, message: string)

        -message: string        +send(recipient: string): void

        +constructor(sender: INotificationSender, message: string)    }

        +send(recipient: string): void

    }    class UrgentNotification {

        -title: string

    class UrgentNotification {        -message: string

        -title: string        +constructor(sender: INotificationSender, title: string, message: string)

        -message: string        +send(recipient: string): void

        +constructor(sender: INotificationSender, title: string, message: string)    }

        +send(recipient: string): void

    }    class MarketingNotification {

        -campaign: string

    class MarketingNotification {        -offer: string

        -campaign: string        +constructor(sender: INotificationSender, campaign: string, offer: string)

        -offer: string        +send(recipient: string): void

        +constructor(sender: INotificationSender, campaign: string, offer: string)    }

        +send(recipient: string): void

    }    %% Implementation Layer

    class INotificationSender {

    %% Implementation Interface        <<interface>>

    class INotificationSender {        +send(message: string, recipient: string): void

        <<interface>>        +isAvailable(): boolean

        +send(message: string, recipient: string): void    }

        +isAvailable(): boolean

    }    class EmailSender {

        -smtpServer: string

    %% Concrete Implementations        +constructor(smtpServer: string)

    class EmailSender {        +send(message: string, recipient: string): void

        -smtpServer: string        +isAvailable(): boolean

        +constructor(smtpServer: string)    }

        +send(message: string, recipient: string): void

        +isAvailable(): boolean    class SMSSender {

    }        -provider: string

        +constructor(provider: string)

    class SMSSender {        +send(message: string, recipient: string): void

        -provider: string        +isAvailable(): boolean

        +constructor(provider: string)    }

        +send(message: string, recipient: string): void

        +isAvailable(): boolean    class SlackSender {

    }        -webhook: string

        +constructor(webhook: string)

    class SlackSender {        +send(message: string, recipient: string): void

        -webhook: string        +isAvailable(): boolean

        +constructor(webhook: string)    }

        +send(message: string, recipient: string): void

        +isAvailable(): boolean    %% Relationships - The Bridge

    }    Notification --> INotificationSender : bridge

    SimpleNotification --|> Notification : extends

    %% Relationships    UrgentNotification --|> Notification : extends

    SimpleNotification --|> Notification : extends    MarketingNotification --|> Notification : extends

    UrgentNotification --|> Notification : extends    

    MarketingNotification --|> Notification : extends    EmailSender ..|> INotificationSender : implements

    SMSSender ..|> INotificationSender : implements

    EmailSender ..|> INotificationSender : implements    SlackSender ..|> INotificationSender : implements

    SMSSender ..|> INotificationSender : implements

    SlackSender ..|> INotificationSender : implements    note for Notification "Abstraction: Mantiene referencia\nal implementador (bridge)"

    note for INotificationSender "Implementor: Define interfaz\npara implementaciones concretas"

    Notification --> INotificationSender : uses implementation```

    Notification o-- INotificationSender : composition

## ¿Qué es el Patrón Bridge?

    note for Notification "Abstraction: Defines notification\ninterface and delegates to implementation"

    note for INotificationSender "Implementation: Defines interface\nfor different communication channels"El patrón **Bridge** es un patrón de diseño estructural que separa una abstracción de su implementación, permitiendo que ambas varíen independientemente. Es como construir un puente que conecta dos mundos diferentes que pueden evolucionar por separado.

```

## Problema que Resuelve

## What is the Bridge Pattern?

### ❌ Sin Bridge: Explosión Combinatoria

The **Bridge** pattern is a structural design pattern that **separates abstraction from implementation**, allowing both to vary independently. It "bridges" the gap between different abstractions and their implementations, preventing a combinatorial explosion of classes.```typescript

// Necesitamos todas las combinaciones posibles

## Problem it Solvesclass EmailSimpleNotification { }

class EmailUrgentNotification { }

### ❌ Without Bridge: Combinatorial Explosionclass EmailMarketingNotification { }

```typescriptclass SMSSimpleNotification { }

// PROBLEM! Creating a class for every combinationclass SMSUrgentNotification { }

class EmailSimpleNotification {class SMSMarketingNotification { }

    send(recipient: string): void {class SlackSimpleNotification { }

        // Email-specific simple notification logicclass SlackUrgentNotification { }

    }class SlackMarketingNotification { }

}

// 3 tipos × 3 canales = 9 clases 😱

class EmailUrgentNotification {// Agregar 1 tipo nuevo = +3 clases

    send(recipient: string): void {// Agregar 1 canal nuevo = +3 clases

        // Email-specific urgent notification logic```

    }

}### ✅ Con Bridge: Escalabilidad Lineal

```typescript

class EmailMarketingNotification {// Lado izquierdo: 3 tipos de notificación

    send(recipient: string): void {class SimpleNotification extends Notification { }

        // Email-specific marketing notification logicclass UrgentNotification extends Notification { }

    }class MarketingNotification extends Notification { }

}

// Lado derecho: 3 canales de envío

class SMSSimpleNotification {class EmailSender implements INotificationSender { }

    send(recipient: string): void {class SMSSender implements INotificationSender { }

        // SMS-specific simple notification logicclass SlackSender implements INotificationSender { }

    }

}// 3 + 3 = 6 clases ⚡

// Agregar 1 tipo nuevo = +1 clase

class SMSUrgentNotification {// Agregar 1 canal nuevo = +1 clase

    send(recipient: string): void {```

        // SMS-specific urgent notification logic

    }## Componentes del Patrón

}

### 1. **Abstraction** (`Notification`)

// ... and so on for Slack, Push, etc.- Define la interfaz de alto nivel para el cliente

// With 3 notification types × 4 channels = 12 classes!- Mantiene una referencia al **Implementor**

// Adding new type or channel requires multiple new classes- Delega el trabajo real al **Implementor**



// Problems:### 2. **Refined Abstraction** (`SimpleNotification`, `UrgentNotification`, `MarketingNotification`)

// 1. Exponential class growth- Extiende la interfaz definida por **Abstraction**

// 2. Code duplication- Implementa variantes específicas de la funcionalidad

// 3. Hard to maintain- Cada una representa un "tipo" diferente de notificación

// 4. Violates DRY principle

```### 3. **Implementor** (`INotificationSender`)

- Define la interfaz para las clases de implementación

### ✅ With Bridge: Separation of Concerns- No tiene que coincidir con la interfaz de **Abstraction**

```typescript- Típicamente proporciona operaciones primitivas

// SOLUTION! Separate abstraction from implementation

### 4. **Concrete Implementor** (`EmailSender`, `SMSSender`, `SlackSender`)

// Abstraction hierarchy (notification types)- Contienen implementaciones específicas de la interfaz **Implementor**

abstract class Notification {- Cada una representa un "canal" diferente de envío

    constructor(protected sender: INotificationSender) {}

    ## El "Puente" 🌉

    setSender(sender: INotificationSender): void {

        this.sender = sender; // Bridge to implementationLa línea `Notification --> INotificationSender` es el **puente** que:

    }- **Conecta** dos jerarquías independientes

    - **Permite** que abstracciones e implementaciones varíen por separado

    abstract send(recipient: string): void;- **Facilita** el cambio de implementación en tiempo de ejecución

}

## Cuándo Usar Bridge

class SimpleNotification extends Notification {

    send(recipient: string): void {✅ **Úsalo cuando:**

        this.sender.send("Simple message", recipient);- Quieres evitar acoplamiento permanente entre abstracción e implementación

    }- Tanto abstracciones como implementaciones deben ser extensibles por herencia

}- Cambios en la implementación no deben afectar a los clientes

- Necesitas cambiar implementaciones en tiempo de ejecución

class UrgentNotification extends Notification {- Quieres compartir implementaciones entre múltiples objetos

    send(recipient: string): void {

        this.sender.send("🚨 URGENT: Critical message", recipient);❌ **No lo uses cuando:**

    }- Solo tienes una implementación

}- La relación entre abstracción e implementación nunca cambiará

- La simplicidad es más importante que la flexibilidad

// Implementation hierarchy (communication channels)

interface INotificationSender {## Ventajas

    send(message: string, recipient: string): void;

}🌉 **Desacoplamiento**: Abstracción e implementación independientes

🔄 **Runtime Switching**: Cambiar implementación dinámicamente

class EmailSender implements INotificationSender {➕ **Extensibilidad**: Agregar nuevos tipos o canales sin modificar código existente

    send(message: string, recipient: string): void {🎯 **Single Responsibility**: Cada clase tiene una responsabilidad específica

        console.log(`📧 Email to ${recipient}: ${message}`);📈 **Escalabilidad**: Evita explosión combinatoria (N + M en lugar de N × M)

    }

}## Desventajas



class SMSSender implements INotificationSender {🧠 **Complejidad**: Aumenta la complejidad del código

    send(message: string, recipient: string): void {🔍 **Indirección**: Más niveles de abstracción pueden dificultar el debugging

        console.log(`📱 SMS to ${recipient}: ${message}`);⚖️ **Overhead**: Pequeño overhead por la delegación adicional

    }

}## Ejemplo Práctico: Sistema de Notificaciones



// Benefits:### Escenario Real

// 1. Only 2 + 2 = 4 classes instead of 12!Imagina una aplicación que necesita enviar diferentes tipos de notificaciones por múltiples canales:

// 2. Easy to add new types or channels

// 3. No code duplication**Tipos de Notificaciones:**

// 4. Runtime implementation switching- Simples: Confirmaciones, recordatorios

```- Urgentes: Alertas del sistema, errores críticos  

- Marketing: Promociones, newsletters

## Pattern Components

**Canales de Envío:**

### 1. **Abstraction** (`Notification`)- Email: Para comunicación formal

- Defines the high-level interface for clients- SMS: Para alertas inmediatas

- Maintains a reference to an implementation object- Slack: Para equipos internos

- Delegates actual work to the implementation

- Can be extended with refined abstractions### Flujo de Trabajo

```typescript

### 2. **Refined Abstraction** (`SimpleNotification`, `UrgentNotification`)// 1. Crear implementaciones (canales)

- Extends the abstraction with specific behaviorsconst emailSender = new EmailSender("smtp.company.com");

- Adds specialized functionalityconst smsSender = new SMSSender("Twilio");

- Still delegates implementation details to the bridge

// 2. Crear abstracción con implementación inicial

### 3. **Implementation Interface** (`INotificationSender`)const urgentAlert = new UrgentNotification(emailSender, "Sistema Caído", "Error crítico");

- Defines the interface for implementation classes

- Provides primitive operations// 3. Enviar por email

- Can be different from abstraction interfaceurgentAlert.send("admin@company.com");



### 4. **Concrete Implementation** (`EmailSender`, `SMSSender`)// 4. Cambiar implementación dinámicamente  

- Provides specific implementations of the interfaceurgentAlert.setSender(smsSender);

- Contains platform-specific code

- Can be changed without affecting abstractions// 5. Enviar por SMS

urgentAlert.send("+1234567890");

## Key Benefits```



### 🔀 **Runtime Implementation Switching**## Bridge vs Otros Patrones

```typescript

const notification = new UrgentNotification(emailSender, "System Down", "Server offline");### **Bridge vs Adapter**

- **Bridge**: Diseñado desde el inicio para separar abstracción e implementación

// Send via email first- **Adapter**: Hace trabajar juntas interfaces incompatibles existentes

notification.send("admin@company.com");

### **Bridge vs Strategy**

// Switch to SMS for immediate attention- **Bridge**: Separa abstracción completa de implementación

notification.setSender(smsSender);- **Strategy**: Encapsula algoritmos intercambiables

notification.send("+1234567890");

### **Bridge vs State**

// Switch to Slack for team coordination- **Bridge**: Implementaciones independientes del contexto

notification.setSender(slackSender);- **State**: Estados que pueden cambiar el comportamiento del contexto

notification.send("#alerts");

```## Casos de Uso Reales



### 📈 **Easy Extensibility**### 🖥️ **Drivers de Dispositivos**

```typescript```typescript

// Add new notification type - no changes to existing code// Abstracción

class ReminderNotification extends Notification {abstract class GraphicsRenderer {

    private reminderTime: Date;    constructor(protected api: GraphicsAPI) {}

        abstract renderShape(shape: Shape): void;

    send(recipient: string): void {}

        const message = `⏰ Reminder: ${this.reminderTime.toLocaleString()}`;

        this.sender.send(message, recipient);// Implementaciones

    }class DirectXAPI implements GraphicsAPI { }

}class OpenGLAPI implements GraphicsAPI { }

class VulkanAPI implements GraphicsAPI { }

// Add new communication channel - no changes to existing code```

class DiscordSender implements INotificationSender {

    send(message: string, recipient: string): void {### 🌐 **Clientes de APIs**

        console.log(`🎮 Discord to ${recipient}: ${message}`);```typescript

    }// Abstracción  

}abstract class PaymentProcessor {

    constructor(protected gateway: PaymentGateway) {}

// All combinations work automatically!    abstract processPayment(amount: number): void;

const discordReminder = new ReminderNotification(new DiscordSender());}

```

// Implementaciones

## When to Use Bridgeclass PayPalGateway implements PaymentGateway { }

class StripeGateway implements PaymentGateway { }

✅ **Use it when:**class SquareGateway implements PaymentGateway { }

- You want to avoid permanent binding between abstraction and implementation```

- Both abstractions and implementations should be extensible through subclassing

- Changes in implementation shouldn't affect client code### 📱 **UIs Multiplataforma**

- You want to share implementation among multiple objects```typescript

- You need to switch implementations at runtime// Abstracción

abstract class Window {

❌ **Don't use it when:**    constructor(protected impl: WindowImpl) {}

- You have only one implementation    abstract open(): void;

- Abstraction and implementation are tightly coupled by design    abstract close(): void;

- The added complexity isn't justified}

- Performance is critical and indirection causes issues

// Implementaciones

## Advantagesclass WindowsWindowImpl implements WindowImpl { }

class MacWindowImpl implements WindowImpl { }

🔄 **Runtime Switching**: Change implementation during executionclass LinuxWindowImpl implements WindowImpl { }

🔓 **Open/Closed Principle**: Easy to extend both hierarchies```

🎯 **Single Responsibility**: Abstractions and implementations have separate concerns

🔗 **Decoupling**: Client code doesn't depend on specific implementations## Relación con Otros Patrones

🧩 **Composition over Inheritance**: Flexible object composition

- **Abstract Factory**: Puede crear familias de implementaciones para Bridge

## Disadvantages- **Builder**: Puede construir objetos complejos que usan Bridge

- **Composite**: Puede usar Bridge para separar abstracción de implementación en árboles

📈 **Increased Complexity**: More classes and interfaces to manage- **Decorator**: Puede decorar tanto abstracciones como implementaciones
🐌 **Performance Overhead**: Additional indirection layer
🤔 **Design Complexity**: Requires understanding of both hierarchies
📊 **Over-engineering**: Can be overkill for simple scenarios

## Practical Example: Multi-Channel Notification System

### Real-world Scenario
A modern application needs to send notifications through various channels:

**Notification Types:**
- **Simple**: Basic informational messages
- **Urgent**: Critical alerts requiring immediate attention
- **Marketing**: Promotional content with special formatting

**Communication Channels:**
- **Email**: Rich HTML content, attachments, scheduling
- **SMS**: Short text, immediate delivery, high open rates
- **Slack**: Team collaboration, threading, mentions
- **Push**: Mobile notifications, badges, deep linking

### Complete Implementation
```typescript
// 1. Setup different senders
const emailSender = new EmailSender("smtp.company.com");
const smsSender = new SMSSender("AWS SNS");
const slackSender = new SlackSender();

// 2. Create notifications with different behaviors
const orderConfirmation = new SimpleNotification(
    emailSender, 
    "Your order #12345 has been confirmed"
);

const securityAlert = new UrgentNotification(
    smsSender,
    "Security Alert",
    "Unusual login activity detected"
);

const promotion = new MarketingNotification(
    emailSender,
    "Black Friday Sale",
    "50% off everything!"
);

// 3. Send through appropriate channels
orderConfirmation.send("customer@email.com");
securityAlert.send("+1234567890");
promotion.send("subscribers@list.com");

// 4. Runtime switching for escalation
if (securityAlert.needsEscalation()) {
    securityAlert.setSender(slackSender);
    securityAlert.send("#security-team");
}
```

## Real-world Use Cases

### 🎮 **Cross-Platform Game Graphics**
```typescript
// Abstraction: Game objects
abstract class Shape {
    constructor(protected renderer: IRenderer) {}
    
    setRenderer(renderer: IRenderer): void {
        this.renderer = renderer;
    }
    
    abstract draw(): void;
}

class Circle extends Shape {
    draw(): void {
        this.renderer.drawCircle(this.x, this.y, this.radius);
    }
}

// Implementation: Different graphics APIs
interface IRenderer {
    drawCircle(x: number, y: number, radius: number): void;
}

class OpenGLRenderer implements IRenderer {
    drawCircle(x: number, y: number, radius: number): void {
        // OpenGL-specific drawing code
    }
}

class DirectXRenderer implements IRenderer {
    drawCircle(x: number, y: number, radius: number): void {
        // DirectX-specific drawing code
    }
}

// Usage: Same shapes, different rendering
const circle = new Circle(new OpenGLRenderer());
circle.draw(); // Renders with OpenGL

circle.setRenderer(new DirectXRenderer());
circle.draw(); // Now renders with DirectX
```

### 🌐 **Multi-Database Application**
```typescript
// Abstraction: Data access patterns
abstract class Repository {
    constructor(protected database: IDatabase) {}
    
    setDatabase(database: IDatabase): void {
        this.database = database;
    }
    
    abstract findAll(): Promise<any[]>;
}

class UserRepository extends Repository {
    async findAll(): Promise<User[]> {
        return this.database.query("SELECT * FROM users");
    }
    
    async findByEmail(email: string): Promise<User> {
        return this.database.query("SELECT * FROM users WHERE email = ?", [email]);
    }
}

// Implementation: Different database systems
interface IDatabase {
    query(sql: string, params?: any[]): Promise<any>;
}

class MySQLDatabase implements IDatabase {
    async query(sql: string, params?: any[]): Promise<any> {
        // MySQL-specific implementation
    }
}

class PostgreSQLDatabase implements IDatabase {
    async query(sql: string, params?: any[]): Promise<any> {
        // PostgreSQL-specific implementation
    }
}
```

### 📱 **Multi-Platform UI Components**
```typescript
// Abstraction: UI components
abstract class Button {
    constructor(protected theme: ITheme) {}
    
    setTheme(theme: ITheme): void {
        this.theme = theme;
    }
    
    abstract render(): void;
}

class PrimaryButton extends Button {
    render(): void {
        const styles = this.theme.getPrimaryButtonStyles();
        console.log(`Rendering primary button with: ${styles}`);
    }
}

class SecondaryButton extends Button {
    render(): void {
        const styles = this.theme.getSecondaryButtonStyles();
        console.log(`Rendering secondary button with: ${styles}`);
    }
}

// Implementation: Different themes
interface ITheme {
    getPrimaryButtonStyles(): string;
    getSecondaryButtonStyles(): string;
}

class DarkTheme implements ITheme {
    getPrimaryButtonStyles(): string {
        return "background: #1a1a1a; color: white; border: 1px solid #333";
    }
    
    getSecondaryButtonStyles(): string {
        return "background: transparent; color: #ccc; border: 1px solid #666";
    }
}

class LightTheme implements ITheme {
    getPrimaryButtonStyles(): string {
        return "background: #007bff; color: white; border: none";
    }
    
    getSecondaryButtonStyles(): string {
        return "background: transparent; color: #007bff; border: 1px solid #007bff";
    }
}
```

### 🔐 **Multi-Provider Authentication**
```typescript
// Abstraction: Authentication strategies
abstract class AuthStrategy {
    constructor(protected provider: IAuthProvider) {}
    
    setProvider(provider: IAuthProvider): void {
        this.provider = provider;
    }
    
    abstract authenticate(credentials: any): Promise<AuthResult>;
}

class OAuthStrategy extends AuthStrategy {
    async authenticate(credentials: OAuthCredentials): Promise<AuthResult> {
        return this.provider.authenticateOAuth(credentials);
    }
}

class BasicAuthStrategy extends AuthStrategy {
    async authenticate(credentials: BasicCredentials): Promise<AuthResult> {
        return this.provider.authenticateBasic(credentials);
    }
}

// Implementation: Different auth providers
interface IAuthProvider {
    authenticateOAuth(credentials: OAuthCredentials): Promise<AuthResult>;
    authenticateBasic(credentials: BasicCredentials): Promise<AuthResult>;
}

class GoogleAuthProvider implements IAuthProvider {
    async authenticateOAuth(credentials: OAuthCredentials): Promise<AuthResult> {
        // Google-specific OAuth implementation
    }
}

class AzureAuthProvider implements IAuthProvider {
    async authenticateOAuth(credentials: OAuthCredentials): Promise<AuthResult> {
        // Azure-specific OAuth implementation
    }
}
```

## Bridge vs Other Patterns

### **Bridge vs Strategy**
- **Bridge**: Separates abstraction from implementation with inheritance hierarchies
- **Strategy**: Encapsulates algorithms and makes them interchangeable

### **Bridge vs Adapter**
- **Bridge**: Designed upfront to separate abstraction and implementation
- **Adapter**: Applied after the fact to make incompatible interfaces work together

### **Bridge vs State**
- **Bridge**: Implementation doesn't change behavior of abstraction
- **State**: Different states change the behavior of the context

### **Bridge vs Abstract Factory**
- **Bridge**: Focuses on separating interface from implementation
- **Abstract Factory**: Focuses on creating families of related objects

## Relationship with Other Patterns

- **Abstract Factory**: Can create implementations for Bridge
- **Adapter**: Bridge is designed upfront; Adapter is applied retroactively
- **Strategy**: Similar structure but different intent (algorithms vs implementations)
- **Template Method**: Can be used in Bridge implementation hierarchy

## Implementation Tips

### **Choosing the Right Abstraction**
```typescript
// Good: High-level, stable interface
abstract class DocumentProcessor {
    constructor(protected formatter: IFormatter) {}
    
    processDocument(content: string): string {
        const formatted = this.formatter.format(content);
        return this.addMetadata(formatted);
    }
    
    protected abstract addMetadata(content: string): string;
}

// Avoid: Low-level, unstable interface
abstract class DocumentProcessor {
    constructor(protected formatter: IFormatter) {}
    
    // Too low-level - breaks abstraction
    setFontSize(size: number): void {
        this.formatter.setFontSize(size);
    }
}
```

### **Implementation Interface Design**
```typescript
// Good: Focused, cohesive interface
interface INotificationSender {
    send(message: string, recipient: string): void;
    isAvailable(): boolean;
}

// Avoid: Mixed responsibilities
interface INotificationSender {
    send(message: string, recipient: string): void;
    validateRecipient(recipient: string): boolean; // Validation responsibility
    logActivity(action: string): void; // Logging responsibility
    formatMessage(message: string): string; // Formatting responsibility
}
```

The Bridge pattern is invaluable when you need to support multiple implementations while keeping your abstractions clean and extensible, particularly in cross-platform development and multi-provider integrations.