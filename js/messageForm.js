const emailInput = document.querySelector('#email_input');
const messageInput = document.querySelector('#message_form textarea');
const messageForm = document.querySelector('#message_form');
const msgBtnSpan = document.querySelector('#message_button_container > span');
const msgBtn = document.querySelector('#message_button_container > button');
const messageFormValid = new Event('messageFormValid');
const messageFormInvalid = new Event('messageFormInvalid');

emailInput.addEventListener('input', (input) => {
    const invalidEmailLabel = document.querySelector('#invalid_email_label');
    const validEmailLabel = document.querySelector('#valid_email_label');
    if (emailInput.checkValidity()) {
        invalidEmailLabel.style.opacity = '0';
        validEmailLabel.style.opacity = '1';
        messageInput.disabled = false;
        messageInput.value ? messageForm.dispatchEvent(messageFormValid) : null;
    } else if (input.target.value != '') {
        invalidEmailLabel.style.opacity = '1';
        validEmailLabel.style.opacity = '0';
        messageInput.disabled = true;
        messageForm.dispatchEvent(messageFormInvalid);
    } else {
        invalidEmailLabel.style.opacity = '0';
        validEmailLabel.style.opacity = '1';
        messageInput.disabled = true;
    }
});

messageForm.addEventListener('messageFormValid', () => {
    msgBtnSpan.style.opacity = '0';
    msgBtnSpan.style.zIndex = '0';
    msgBtn.style.opacity = '1';
    msgBtn.disabled = false;
    msgBtn.style.zIndex = '1';
});

messageForm.addEventListener('messageFormInvalid', () => {
    msgBtnSpan.style.opacity = '1';
    msgBtnSpan.style.zIndex = '1';
    msgBtn.style.opacity = '0';
    msgBtn.disabled = true;
    msgBtn.style.zIndex = '0';
});

messageInput.addEventListener('input', (input) => {
    input.target.value ? messageForm.dispatchEvent(messageFormValid) : messageForm.dispatchEvent(messageFormInvalid);
});