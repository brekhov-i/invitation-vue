interface FormData {
  name: string;
  alcogol: string[];
}

export class TelegramService {
  private botToken: string;
  private chatId: string;

  constructor() {
    // Замените на ваши данные
    this.botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
    this.chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';
  }

  async sendFormData(formData: FormData): Promise<boolean> {
    if (!this.botToken || !this.chatId) {
      console.error('Telegram bot token or chat ID not configured');
      return false;
    }

    const message = this.formatMessage(formData);
    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: this.chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      const result = await response.json();
      
      if (result.ok) {
        console.log('Message sent successfully');
        return true;
      } else {
        console.error('Failed to send message:', result);
        return false;
      }
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      return false;
    }
  }

  private formatMessage(formData: FormData): string {
    const alcoholList = formData.alcogol.length > 0 
      ? formData.alcogol.join(', ') 
      : 'Не указано';

    return `
<b>🎉 Новая заявка с сайта приглашения!</b>

👤 <b>Имя:</b> ${formData.name}
🍷 <b>Предпочитаемый алкоголь:</b> ${alcoholList}

📅 <b>Дата:</b> ${new Date().toLocaleString('ru-RU')}
    `.trim();
  }
}

export const telegramService = new TelegramService(); 