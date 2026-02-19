export const sendTableEmail = async (tableData, recipient) => {
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tableData, recipient }),
    });

    if (!response.ok) throw new Error('Failed to send email');
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};