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
  const notesText = notes.trim() ? `\n\n*Additional Notes:*\n📝 ${notes.trim()}` : '';

  // Build the message template
  const message = WHATSAPP_DEFAULT_MESSAGE
    .replace('[NAME]', name.trim())
    .replace('[PHONE]', phone.trim())
    .replace('[SERVICE]', service.trim())
    .replace('[DATE]', date.trim())
    .replace('[NOTES_SECTION]', notesText);

  // Encode the entire message for the URL
  const encodedMessage = encodeURIComponent(message.trim());

  // Construct WhatsApp URL
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodedMessage}`;
}