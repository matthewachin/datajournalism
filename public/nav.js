document.getElementById('open-menu').addEventListener('click',function(event){
  let open_button = event.target
  let menu = document.getElementById('menu')
  let close_button = document.getElementById('close-menu')
  open_button.classList.toggle('hidden', true)
  menu.classList.toggle('hidden', false)
  close_button.classList.toggle('hidden', false)
})
document.getElementById('close-menu').addEventListener('click',function(event){
  let open_button = document.getElementById('open-menu')
  let menu = document.getElementById('menu')
  let close_button = event.target
  open_button.classList.toggle('hidden', false)
  menu.classList.toggle('hidden', true)
  close_button.classList.toggle('hidden', true)
})