const result = document.getElementById('result');
const empty = document.getElementById('empty');
const accent = document.getElementById('accent');
const uppercase = document.getElementById('uppercase');
const special = document.getElementById('special');
const regex = {
  accentMarks: /[áàâäéèêëíìîïóòôöúùûü]/,
  specialChars: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  uppercaseLetters: /[A-Z]/,
};

// CHECK MESSAGE RULES AND MARK ERRORS
const rules = () => {
  const message = document.getElementById('message').value;

  message === ''
    ? (empty.style = 'color: var(--color-error)')
    : (empty.style = 'color: var(--color-primary)');

  message.match(regex.accentMarks)
    ? ((accent.style = 'color: var(--color-error)'), (result.innerHTML = ''))
    : (accent.style = 'color: var(--color-secondary)');

  message.match(regex.specialChars)
    ? ((special.style = 'color: var(--color-error)'), (result.innerHTML = ''))
    : (special.style = 'color: var(--color-secondary)');

  message.match(regex.uppercaseLetters)
    ? ((uppercase.style = 'color: var(--color-error)'), (result.innerHTML = ''))
    : (uppercase.style = 'color: var(--color-secondary)');
};

// USE REGEX TO ENCRYPT MESSAGE
const encryptMessage = () => {
  const message = document.getElementById('message').value;

  rules();

  if (
    !message.match(regex.accentMarks) &&
    !message.match(regex.specialChars) &&
    !message.match(regex.uppercaseLetters)
  ) {
    const encryptedMessage = message
      .replace(/a/g, 'AI')
      .replace(/e/g, 'ENTER')
      .replace(/i/g, 'IMES')
      .replace(/o/g, 'OBER')
      .replace(/u/g, 'UFAT')
      .toLowerCase();
    result.innerHTML = encryptedMessage;
  }
};

// USE REGEX TO DECRYPT MESSAGE
const decryptMessage = () => {
  const message = document.getElementById('message').value;

  rules();

  if (
    !message.match(regex.accentMarks) &&
    !message.match(regex.specialChars) &&
    !message.match(regex.uppercaseLetters)
  ) {
    const decryptedMessage = message
      .replace(/ai/g, 'A')
      .replace(/enter/g, 'E')
      .replace(/imes/g, 'I')
      .replace(/ober/g, 'O')
      .replace(/ufat/g, 'U')
      .toLowerCase();
    result.innerHTML = decryptedMessage;
  }
};

// COPY RESULT TO CLIPBOARD
const copy = () => {
  navigator.clipboard.writeText(result.innerText);
};

// RESET BOTH MESSAGE AND RESULT
const reset = () => {
  document.getElementById('message').value = '';
  result.innerText = '';
  empty.style = 'color: var(--color-primary)';
};
