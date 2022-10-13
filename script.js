const FIELDS_PASSWORD = document.querySelectorAll('[type="password"]')
const FIELD_SHOW_PASSWORDS = document.querySelector('#show-passwords')

FIELD_SHOW_PASSWORDS.addEventListener('click', (e)=>{
    e.target.checked ? FIELDS_PASSWORD.forEach(field => {field.type='text'}) : FIELDS_PASSWORD.forEach(field => {field.type='password'})
})