export default function OnVideoLoad() {
    const backVideo = document.querySelector("[data-video='video']")
    const content = document.querySelector(".conteudo")
            backVideo.addEventListener('canplay', function () {     
                setTimeout(function () {
                    content.style.display = 'flex'
                }, 3000)
        })

}