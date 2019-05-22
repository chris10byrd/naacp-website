

document.addEventListener('DOMContentLoaded', ()=> {
    console.log('loaded');
    
    const captions = document.querySelectorAll('.caption');
    const captionSrc = document.querySelectorAll('.caption-src');
    
    console.log(captions.length);
    console.log(captionSrc);

    let captionIndex = 0;

    captions[captionIndex].style.display = 'inherit';
    captionSrc[captionIndex].style.display = 'inherit';

    captionIndex++;

    setInterval(() => {

        if (captionIndex >= captions.length) {
            captionIndex = 0;
        }

        let currentStyle = captions[captionIndex].style;
        let currentSrcStyle = captionSrc[captionIndex].style;

        if (captionIndex != 0) {
            console.log(captions[captionIndex]);
            console.log(captionSrc[captionIndex]);

            captions[captionIndex-1].style.display = 'none';
            captionSrc[captionIndex-1].style.display = 'none';

            currentStyle.display = 'inherit';
            currentSrcStyle.display = 'inherit';
        } else {
            console.log(captions[captionIndex]);
            console.log(captionSrc[captionIndex]);

            captions[captions.length-1].style.display = 'none';
            captionSrc[captions.length-1].style.display = 'none';

            currentStyle.display = 'inherit';
            currentSrcStyle.display = 'inherit';
        }
        captionIndex++;
    }, 8000);
});