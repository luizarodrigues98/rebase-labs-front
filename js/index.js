const URL = 'http://localhost:3000/tests'
fetch(URL)
  .then(response => response.json())  // converter para json
  .then(populateTable)    //imprimir dados no console
  .catch(err => console.log('Erro de solicitação', err));

function populateTable(exams) {
  var tbody = document.querySelector('.table tbody')
  var children = Array.prototype.slice.call(tbody.childNodes);

  // Remove each child node
  children.forEach(function (child) {
    tbody.removeChild(child);
  });

  exams.forEach(exam => {
    var tbody = document.querySelector('.table tbody')

    var tr  = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')

    td1.innerText = exam.patient_name
    td2.innerText = exam.cpf
    td3.innerText = exam.doctor_name
    td4.innerText = exam.result_token

    tr.append(td1, td2, td3, td4)

    var tdSeeMore = document.createElement('td')
    var seeMoreLink = document.createElement('a')
    seeMoreLink.innerText = 'Ver mais'
    seeMoreLink.href = '/see_more.html?token=' + exam.result_token

    tdSeeMore.appendChild(seeMoreLink)
    tr.appendChild(tdSeeMore)

    tbody.appendChild(tr)
  })
}

document.getElementById('search-button').addEventListener('click', () => {
  var query = document.getElementById('site-search').value
  fetch(`${URL}?query=${query}`)
    .then(response => response.json())  // converter para json
    .then(populateTable)    //imprimir dados no console
    .catch(err => console.log('Erro de solicitação', err));
})
