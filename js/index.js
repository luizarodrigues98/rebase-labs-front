const URL = 'http://localhost:3000/tests'
fetch(URL)
  .then(response => response.json())  // converter para json
  .then(exams => {
    exams.forEach(exam => {
      var tbody = document.querySelector('.table tbody')
      var tr = document.createElement('tr')

      for(const k in exam) {
        if (k == 'patient_name' || k == 'cpf' || k == 'exam_type' || k == 'result_token') {
          var td = document.createElement('td')
          td.innerText = exam[k]
          tr.appendChild(td);
        }
      }
      var tdSeeMore = document.createElement('td')
      tdSeeMore.innerText = 'Ver mais'
      tr.appendChild(tdSeeMore)
      tbody.appendChild(tr)
    })
  })    //imprimir dados no console
  .catch(err => console.log('Erro de solicitação', err));