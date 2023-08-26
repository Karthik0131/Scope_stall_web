document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('certificateForm');
    const certificatePreview = document.getElementById('certificatePreview');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const photo = document.getElementById('photo').files[0];

        if (name && photo) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const photoUrl = e.target.result;

                const certificateHTML = `
                    <div class="certificate">
                        <h2>My First Day at This College</h2>
                        <img src="${photoUrl}" alt="${name}'s Photo">
                        <p>${name}</p>
                    </div>
                `;

                certificatePreview.innerHTML = certificateHTML;
                certificatePreview.style.display = 'block';
            };

            reader.readAsDataURL(photo);
        }
    });
});
