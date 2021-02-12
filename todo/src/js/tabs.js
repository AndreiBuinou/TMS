const tabs = document.querySelector('.tabs');
const tabBtn = document.querySelectorAll('.tab-btn');
const tabItem = document.querySelectorAll('.tab-item');

tabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
        const tab = e.target.dataset.tab;
        tabBtn.forEach(el => {el.classList.remove('tab-btn-active')});
        document.querySelector(`[data-tab = "${tab}"]`).classList.add('tab-btn-active');
        tabsCombine(tab);
    }
})

const tabsCombine = (path) => {
    tabItem.forEach(el => {el.classList.remove('tab-content-active')});
    document.querySelector(`[data-tab-target = "${path}"]`).classList.add('tab-content-active');
};

document.querySelector('.tab-btn').classList.add('tab-btn-active');
document.querySelector('.tab-item').classList.add('tab-content-active');