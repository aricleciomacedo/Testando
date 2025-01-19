const observerOfAll = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('to-appear')
        } else {
            entry.target.classList.remove('to-appear')
        };
    });
});

const elements = document.querySelectorAll('.to-hide');

elements.forEach( (element) => observerOfAll.observe(element));