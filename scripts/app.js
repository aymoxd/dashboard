 const openMenu = document.getElementById('openMenu');
 const closeMenu = document.getElementById('closeMenu');
 const asideBar = document.getElementById('asideBar');
 const overlay = document.getElementById('overlay');

 openMenu.addEventListener('click',()=>{
          asideBar.classList.remove('-left-96');
          asideBar.classList.add('left-0');
          overlay.classList.remove('hidden');
 });
 closeMenu.addEventListener('click',()=>{
          asideBar.classList.remove('left-0');
          asideBar.classList.add('-left-96');
          overlay.classList.add('hidden');
 });
  overlay.addEventListener('click',()=>{
          asideBar.classList.remove('left-0');
          asideBar.classList.add('-left-96');
          overlay.classList.add('hidden');
 });
 
 
 
 
 const ctx = document.getElementById('salesChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'feb', 'mar', 'apr', 'may', 'jun','jul','aut','sep','oct',],
      datasets: [{
        label: 'Sales overview',
        data: [5, 9, 7, 12, 15, 16,20,20,22,30],
        borderWidth: 1,
         borderColor: 'rgba(59, 130, 246, 1)',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
           fill: true,
            tension: 0.4,
             pointHoverRadius: 6,
              pointRadius: 4,
      }]
    },
    options: {
         responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

   const ctx2 = document.getElementById('userChart').getContext('2d');
  const userChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
          labels: ['Morocco', 'USA', 'uk'],
          datasets: [{
              data: [100, 40, 30],
              backgroundColor: [
                  'rgba(59, 130, 246, 1)',
                  'rgba(107, 114, 128, 1)',
                  'rgba(156, 0, 175, 1)'
              ]
          }]
      },
      options: { cutout: '70%' }
  });