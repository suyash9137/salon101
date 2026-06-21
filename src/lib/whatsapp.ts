import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '@/config/whatsapp';

/**
 * Generates a WhatsApp click-to-chat link with pre-filled message
 * @param name Customer's full name
 * @param phone Customer's phone number
 * @param service Selected service
 * @param date Preferred date (string)
 * @param notes Optional notes
 * @returns WhatsApp URL (wa.me link)
 */
export function generateWhatsAppLink(
  name: string,
  phone: string,
  service: string,
  date: string,
  notes: string = ''
): string {
  // Build the message template
  const message = WHATSAPP_DEFAULT_MESSAGE
    .replace('[NAME]', encodeURIComponent(name.trim()))
    .replace('[PHONE]', encodeURIComponent(phone.trim()))
    .replace('[SERVICE]', encodeURIComponent(service.trim()))
    .replace('[DATE]', encodeURIComponent(date.trim()))
    .replace('[NOTES]', encodeURIComponent(notes.trim()));

  // Remove leading/trailing whitespace from message
  const cleanedMessage = message.trim();

  // Construct WhatsApp URL
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${cleanedMessage}`;
}