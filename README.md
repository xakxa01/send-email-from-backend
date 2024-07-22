### Environment Variables

To configure the email sending functionality in this application, you need to set the following environment variables:

1. **`RESEND_API_KEY`**: This variable holds your unique API key for the Resend service. It is necessary for authenticating your application with the Resend API, ensuring that only authorized applications can send emails. Keep this key secure to prevent unauthorized access.

   Example:
   ```plaintext
   RESEND_API_KEY=your_resend_api_key_here
   ```

2. **`EMAIL_SENDER`**: This variable specifies the email address that will be used in the "From" field of the outgoing emails. Setting this to a recognizable and valid email address helps recipients identify and trust the source of the email.

   Example:
   ```plaintext
   EMAIL_SENDER=your_email_sender_address_here
   ```

3. **`EMAIL_TO_SEND`**: This variable indicates the recipient's email address for the emails sent by the application. This ensures that emails are directed to the correct recipient.

   Example:
   ```plaintext
   EMAIL_TO_SEND=recipient_email_address_here
   ```

By setting these environment variables, you enable the application to send emails securely and reliably, while allowing for easy configuration and modification without changing the application's source code.
