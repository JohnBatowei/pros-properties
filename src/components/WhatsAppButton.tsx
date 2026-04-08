import { getWhatsAppLink } from '@/lib/emailjs';

const WhatsAppButton = () => (
  <a
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 transition-transform group"
    aria-label="Chat on WhatsApp"
  >
    <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
      <path d="M16.004 2.003c-7.732 0-14.001 6.269-14.001 14.001 0 2.468.655 4.876 1.898 6.991L2 30l7.208-1.883A13.94 13.94 0 0 0 16.004 30c7.732 0 14.001-6.269 14.001-14.001S23.736 2.003 16.004 2.003zm0 25.598a11.6 11.6 0 0 1-5.916-1.619l-.424-.252-4.399 1.152 1.174-4.29-.277-.44a11.57 11.57 0 0 1-1.778-6.149c0-6.408 5.215-11.622 11.622-11.622 6.408 0 11.622 5.215 11.622 11.622-.002 6.407-5.216 11.598-11.624 11.598zm6.372-8.698c-.349-.175-2.066-1.019-2.386-1.136-.32-.116-.553-.175-.786.175-.233.349-.903 1.136-1.107 1.369-.204.233-.407.262-.756.087-.349-.175-1.474-.543-2.807-1.732-1.038-.924-1.738-2.066-1.942-2.415-.204-.349-.022-.538.153-.711.157-.157.349-.407.524-.611.175-.204.233-.349.349-.582.116-.233.058-.437-.029-.611-.087-.175-.786-1.894-1.078-2.592-.284-.681-.572-.589-.786-.6-.204-.009-.437-.011-.67-.011s-.611.087-.932.437c-.32.349-1.223 1.194-1.223 2.913s1.252 3.38 1.427 3.613c.175.233 2.464 3.761 5.97 5.274.834.36 1.485.575 1.993.736.838.266 1.601.229 2.203.139.672-.1 2.066-.845 2.357-1.661.291-.816.291-1.516.204-1.661-.087-.146-.32-.233-.67-.408z" />
    </svg>
    <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Chat with us
    </span>
  </a>
);

export default WhatsAppButton;
