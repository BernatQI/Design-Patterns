# Patrón Bridge - Diagrama UML

```mermaid
classDiagram
    %% Abstraction Layer
    class Notification {
        <<abstract>>
        #sender: INotificationSender
        +constructor(sender: INotificationSender)
        +setSender(sender: INotificationSender): void
        +send(recipient: string): void*
    }

    %% Refined Abstractions
    class SimpleNotification {
        -message: string
        +constructor(sender: INotificationSender, message: string)
        +send(recipient: string): void
    }

    class UrgentNotification {
        -title: string
        -message: string
        +constructor(sender: INotificationSender, title: string, message: string)
        +send(recipient: string): void
    }

    class MarketingNotification {
        -campaign: string
        -offer: string
        +constructor(sender: INotificationSender, campaign: string, offer: string)
        +send(recipient: string): void
    }

    %% Implementation Layer
    class INotificationSender {
        <<interface>>
        +send(message: string, recipient: string): void
        +isAvailable(): boolean
    }

    class EmailSender {
        -smtpServer: string
        +constructor(smtpServer: string)
        +send(message: string, recipient: string): void
        +isAvailable(): boolean
    }

    class SMSSender {
        -provider: string
        +constructor(provider: string)
        +send(message: string, recipient: string): void
        +isAvailable(): boolean
    }

    class SlackSender {
        -webhook: string
        +constructor(webhook: string)
        +send(message: string, recipient: string): void
        +isAvailable(): boolean
    }

    %% Relationships - The Bridge
    Notification --> INotificationSender : bridge
    SimpleNotification --|> Notification : extends
    UrgentNotification --|> Notification : extends
    MarketingNotification --|> Notification : extends
    
    EmailSender ..|> INotificationSender : implements
    SMSSender ..|> INotificationSender : implements
    SlackSender ..|> INotificationSender : implements

    note for Notification "Abstraction: Mantiene referencia\nal implementador (bridge)"
    note for INotificationSender "Implementor: Define interfaz\npara implementaciones concretas"
```

## Estructura del Patrón Bridge

**El "Puente":**
La relación `Notification --> INotificationSender` es el puente que separa:
- **Abstracciones** (qué tipo de notificación)
- **Implementaciones** (cómo se envía)

**Lado Izquierdo - Abstracciones:**
- `Notification` - Abstracción base que mantiene referencia al implementador
- `SimpleNotification`, `UrgentNotification`, `MarketingNotification` - Abstracciones refinadas

**Lado Derecho - Implementaciones:**
- `INotificationSender` - Interface implementador
- `EmailSender`, `SMSSender`, `SlackSender` - Implementadores concretos

**Ventajas clave:**
- 🌉 Abstracciones e implementaciones varían independientemente
- 🔄 Cambio de implementación en tiempo de ejecución
- ➕ Fácil agregar nuevos tipos y canales sin modificar código existente
- 🎯 Evita explosión combinatoria de clases (N × M → N + M)