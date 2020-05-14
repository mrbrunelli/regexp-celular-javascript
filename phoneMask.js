function phoneMask(event) {
    var input = event.target;
    var phone = event.target.value;
    var length = phone.length;   

    phone = phone.replace(/(\D)/g, '');

    if (length >= 11) phone = phone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');
    if (length >= 8) phone = phone.replace(/^(\d{2})(\d{1})(\d{4})/, '($1) $2 $3-');
    if (length >= 4) phone = phone.replace(/^(\d{2})(\d{1})/, '($1) $2 ');
    if (length >= 3) phone = phone.replace(/^(\d{2})/, '($1) ');

    input.value = phone;
}