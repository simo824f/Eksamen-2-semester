//kode fra https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-ok-and-cancel-options d.25-05-2022 

function sendFunction() {
    if (confirm('Er du sikker på at du vil sende denne besked?')) {
        alert('Tak for din besked, - du modtager snarest et svar!')
        console.log('Besked sendt til e-mail');
    } else {
        console.log('Besked ikke afsendt');
    }
}