export const disabledButton = () => {
    let input = document.getElementById('url');
    let submit = document.getElementById('submit');

    document.addEventListener('DOMContentLoaded', e => {
        submit.disabled = true;
    });

    input.addEventListener('input', e => {
        if(e.target.value !== ''){
            submit.disabled = false;
        }
        if(e.target.value === '') {
            submit.disabled = true;
        }
    })
}