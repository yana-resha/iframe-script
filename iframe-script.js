const button = document.querySelectorAll('.tg-btn');

let iframe = document.createElement('iframe');
    iframe.src = 'https://yana-resha.github.io/example/';
    iframe.style.position = 'absolute';
    iframe.style.top = 'calc(50% - (50%/2))';
    iframe.style.left = 'calc(50% - (50%/2))';
    iframe.style.zIndex = '50';
    iframe.style.borderRadius = '12px'
    iframe.style.boxShadow = '0 3px 10px -.5px rgba(0, 0, 0, .2)';



button.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.append(iframe)
  })
})
