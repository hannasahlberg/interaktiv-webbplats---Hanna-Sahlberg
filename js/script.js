const lunchInfo = document.querySelector('.lunch-info');
const lunchBtn = document.querySelector('.lunch-btn');

lunchBtn.addEventListener('click', hideShow =>{
    if(lunchInfo.style.display === 'block'){
        lunchInfo.style.display = 'none';

    }else{
        lunchInfo.style.display= 'block';
    }
})