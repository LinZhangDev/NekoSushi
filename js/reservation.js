$(function () {
  let dtToday = new Date();
  let year = dtToday.getFullYear();
  let month = dtToday.getMonth() + 1;
  let day = dtToday.getDate();

  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();
  let minDate = year + "-" + month + "-" + day;
  $(".res-date-in").attr("min", minDate);
});

const resForm = document.querySelector('.res-form')
const resTitle = document.querySelector('.res-font-title-form')
const resBtn = document.querySelector('.res-btn-submit')

$(resForm).submit(function(e) {
  e.preventDefault();
});

resForm.addEventListener('submit',(e)=>{
  e.preventDeafult;
  resTitle.innerHTML = "Reservation Success !"
  resTitle.classList.add('form-success')
  resBtn.innerHTML='<i class="far fa-check-circle"></i>'
  resBtn.classList.add('btn-success')
})
