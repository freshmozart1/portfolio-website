const list_of_ids = () => {
    let _list_of_ids = [];
    const html_nodes_with_ids = document.querySelectorAll('*[id]');
    html_nodes_with_ids.forEach((currentValue) => {
        _list_of_ids.push(currentValue.id);
    });
    return _list_of_ids;
};

function animateLabelSwitch(inputId, valid_label_id, invalid_label_id) {
    if (list_of_ids().includes(inputId) && list_of_ids().includes(valid_label_id) && list_of_ids().includes(invalid_label_id)) {
        const inputFormElement = document.getElementById(inputId);
        const valid_label = document.getElementById(valid_label_id);
        const invalid_label = document.getElementById(invalid_label_id);
        inputFormElement.addEventListener('input', (event) => {
            if (event.target.value) {
                if (inputFormElement.checkValidity()) {
                    valid_label.style.animation = '0.3s ease 0s 1 forwards running fade-in';
                    invalid_label.style.animation = '0.3s ease 0s 1 forwards running fade-out';
                } else {
                    valid_label.style.animation = '0.3s ease 0s 1 forwards running fade-out';
                    invalid_label.style.animation = '0.3s ease 0s 1 forwards running fade-in';
                }
            } else {
                valid_label.style.animation = '0.3s ease 0s 1 forwards running fade-in';
                invalid_label.style.animation = '0.3s ease 0s 1 forwards running fade-out';
            }
        });
    } else {
        console.error('One or more of the provided ids do not exist in the HTML document.');
    }
}