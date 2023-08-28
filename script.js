// function showCoupon() {
//     document.querySelector('.question').style.display = 'none';
//     document.querySelector('.coupon').style.display = 'block';
// }

function showBirthdayMessage() {
    // Close the modal
    var myModal = new bootstrap.Modal(document.getElementById('GetStarted'));
    myModal.hide();

    // Hide other sections if desired (e.g., the card)
    document.querySelector('.open').style.display = 'none';

    // Show the birthday section
    document.getElementById('birthdaySection').style.display = 'block';
}