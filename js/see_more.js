const token = new URLSearchParams(window.location.search).get('token')

const URL = 'http://localhost:3000/tests/' + token

fetch(URL)
  .then(response => response.json())  // converter para json
  .then(exam => {
    var patientName = document.getElementById('patient-name')
    patientName.innerText = exam.patient_name
   
    var patientEmail = document.getElementById('patient-email')
    patientEmail.innerText = exam.patient_email

    var patientBirthdate = document.getElementById('patient-bithdate')
    patientBirthdate.innerText = exam.patient_bithdate

    var patientAddress = document.getElementById('patient-address')
    patientAddress.innerText = exam.patient_address

    var patientCity = document.getElementById('patient-city')
    patientCity.innerText = exam.patient_city

    var patientState = document.getElementById('patient-state')
    patientState.innerText = exam.patient_state

    var doctorCrm = document.getElementById('doctor-crm')
    doctorCrm.innerText = exam.doctor_crm

    var doctorCrmState = document.getElementById('doctor-crm-state')
    doctorCrmState.innerText = exam.doctor_crm_state
    
    var doctorEmail = document.getElementById('doctor-email')
    doctorEmail.innerText = exam.doctor_email
        
    var resultToken = document.getElementById('result-token')
    resultToken.innerText = exam.result_token
    
    exam.exams.forEach(e => {
      var tbody = document.querySelector('.table tbody')

      var tr  = document.createElement('tr')
      var td1 = document.createElement('td')
      var td2 = document.createElement('td')
      var td3 = document.createElement('td')
      var td4 = document.createElement('td')

      td1.innerText = e.exam_date
      td2.innerText = e.exam_type
      td3.innerText = e.exam_type_limit
      td4.innerText = e.exam_type_result

      tr.append(td1, td2, td3, td4)
      tbody.appendChild(tr)
    })
  })
  .catch(err => console.log('Erro de solicitação', err));
