document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const time = document.getElementById('time').value;

    const confirmationMessage = `Thank you, ${name}! Your taxi has been booked from ${pickup} to ${dropoff} at ${time}.`;
    document.getElementById('confirmation').innerText = confirmationMessage;

    // Clear the form
    document.getElementById('bookingForm').reset();
});
