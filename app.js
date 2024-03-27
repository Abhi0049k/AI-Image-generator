const submitbtn = document.querySelector("#submit-icon");
const inputEl = document.querySelector("input");
const imageSection = document.querySelector('.images-section')

const getImages = async () => {
    const option = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'prompt': inputEl.value,
            'n': 4,
            'size': '1024x1024'
        })
    }
    try {
        const res = await fetch('http://api.openai.com/v1/images/generations', option);
        res = await res.json();
        console.log(res);
        res?.data.forEach(el => {
            const ImageContainer = document.createElement("div")
            ImageContainer.classList.add("image-container")
            const imageEl = document.createElement('img');
            imageEl.setAttribute('src', el.url);
            ImageContainer.append(imageEl)
            imageSection.append(ImageContainer)
        })
    } catch (err) {
        console.log(err);
    }
}

submitbtn.addEventListener('click', getImages);