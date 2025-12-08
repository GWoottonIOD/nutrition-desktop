import emailjs from "@emailjs/browser";

// Initialize with your public key
emailjs.init("bkYUz2UhhBIXsPXrg");

export const sendTableEmail = async (tableData, recipient) => {
  // Convert your table data to HTML
  const tableRows = tableData
    .map(
      (item) => `
    <tr>
      <td>${item.name}</td>
      <td>${item.association}</td>
      <td>${item.recommendation}</td>
            <td>${item.lvl}</td>
    </tr>
  `
    )
    .join("");

  const htmlTable = `
    <table border="1" style="border-collapse: collapse;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Association</th>
          <th>Recommendation</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;

  try {
    await emailjs.send("service_31v0iyu", "template_8wwqku4", {
      to_email: recipient,
      subject: "Your Table Data",
      message_html: htmlTable,
    });
    // console.log(htmlTable)
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};
