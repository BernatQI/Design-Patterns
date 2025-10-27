// ./bridge/Main.ts
import { EmailSender } from './EmailSender';
import { SMSSender } from './SMSSender';
import { SlackSender } from './SlackSender';
import { SimpleNotification } from './SimpleNotification';
import { UrgentNotification } from './UrgentNotification';
import { MarketingNotification } from './MarketingNotification';

function main(): void {
    console.log("=== 🌉 Patrón BRIDGE - Sistema de Notificaciones ===\n");

    // Crear diferentes implementaciones (senders)
    const emailSender = new EmailSender("smtp.company.com");
    const smsSender = new SMSSender("AWS SNS");
    const slackSender = new SlackSender();

    console.log("\n1️⃣ Notificación Simple por diferentes canales:");
    console.log("=".repeat(60));

    // Misma abstracción (SimpleNotification) con diferentes implementaciones
    const simpleEmail = new SimpleNotification(emailSender, "Tu pedido ha sido confirmado");
    simpleEmail.send("usuario@email.com");

    const simpleSMS = new SimpleNotification(smsSender, "Tu pedido ha sido confirmado");
    simpleSMS.send("+1234567890");

    const simpleSlack = new SimpleNotification(slackSender, "Tu pedido ha sido confirmado");
    simpleSlack.send("#orders");

    console.log("\n" + "-".repeat(70) + "\n");

    console.log("2️⃣ Notificación Urgente - cambiando implementación:");
    console.log("=".repeat(60));

    const urgentNotification = new UrgentNotification(
        emailSender, 
        "Sistema Caído", 
        "El servidor principal no responde. Revisar inmediatamente."
    );
    
    urgentNotification.send("admin@company.com");

    // Cambiar la implementación en tiempo de ejecución
    console.log("\n🔄 Cambiando a SMS para mayor inmediatez...");
    urgentNotification.setSender(smsSender);
    urgentNotification.send("+1234567890");

    console.log("\n" + "-".repeat(70) + "\n");

    console.log("3️⃣ Notificación de Marketing por múltiples canales:");
    console.log("=".repeat(60));

    const marketingNotification = new MarketingNotification(
        emailSender,
        "Black Friday 2025",
        "50% de descuento en todos los productos"
    );

    // Enviar por email
    marketingNotification.send("cliente@email.com");

    // Cambiar a Slack para equipos internos
    marketingNotification.setSender(slackSender);
    marketingNotification.send("#marketing");

    console.log("\n4️⃣ Ventajas del patrón Bridge:");
    console.log("=".repeat(60));
    console.log("✅ Abstracción e implementación independientes");
    console.log("✅ Cambio de implementación en tiempo de ejecución");
    console.log("✅ Extensibilidad - agregar nuevos tipos sin modificar existentes");
    console.log("✅ Ocultación de detalles de implementación al cliente");
    console.log("✅ Cumple principio Abierto/Cerrado");

    console.log("\n5️⃣ Ejemplo de extensibilidad:");
    console.log("=".repeat(60));
    console.log("📧 Nuevos senders: PushNotification, Teams, Discord");
    console.log("📝 Nuevos tipos: ReminderNotification, WelcomeNotification");
    console.log("🔌 Sin modificar código existente");
}

// Ejecutar el ejemplo
main();