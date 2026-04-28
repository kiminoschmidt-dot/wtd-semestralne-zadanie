// Blog - rozbaľovací text
document.querySelectorAll('.blog-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault(); // zastaví skok na začiatok stránky

        var extra = this.previousElementSibling; // nájde div.blog-extra

        if (extra.style.display === 'none') {
            extra.style.display = 'block'; // zobraz text
            this.textContent = 'Čítať menej'; // zmeň text tlačidla
        } else {
            extra.style.display = 'none'; // skry text
            this.textContent = 'Čítať viac';
        }
    });
});

fetch('destination.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var tbody = document.getElementById('table-body');

        if (!tbody) return; // ak nie sme na stránke s tabuľkou, skonči

        data.destination.forEach(function(dest) {
            var row = document.createElement('tr');
            row.innerHTML =
                '<td>' + dest.krajina + '</td>' +
                '<td>' + dest.mesto + '</td>' +
                '<td>' + dest.kontinent.nazov + ' (' + dest.kontinent.oblast + ')</td>' +
                '<td>' + dest.info.najlepsi_cas + '</td>' +
                '<td>' + dest.info.mena + '</td>' +
                '<td>' + dest.info.jazyk + '</td>';
            tbody.appendChild(row);
        });
    })
    .catch(function(error) {
        console.log('Chyba pri načítaní:', error);
    });