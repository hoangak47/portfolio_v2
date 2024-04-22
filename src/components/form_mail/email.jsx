function Email({ name, email, message }) {
  return `
    <div style="background-color: #f9f9f9; padding: 20px; font-family: Arial, sans-serif;">
      <h4 style="color: #444;">${email}</h4>
      <h3 style="color: #333;">
      This is a message from <span style="color: #444; text-decoration: underline; font-weight: bold; font-style: italic; font-size: 1.2rem;">${name}</span>
      </h3>
      <p style="color: #333; text-indent: 20px;font-size: 1.1rem;">
        ${message}
      </p>
    </div>
  `;
}

export default Email;
