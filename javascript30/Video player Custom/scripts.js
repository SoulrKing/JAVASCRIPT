const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressbar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelector('[data-skip]')
const ranges = player.querySelector('.player__slider')


function toggleplplay() {
    const method = video.paused ? 'play' : 'pause'
    video[method]()

    /*if(video.paused){
        video.play()
    } else {
        video.pause()
    }*/
}

function updateButton() {
    const icon = this.paused ? '▶️' : '⏸️'
    toggle.textContent = icon
}

function skip() {
    console.log("skiping")

}

function handleRangeUpdate() {
    video[this.name] = this.value
    console.log(this.name)
    console.log(this.value)
}


video.addEventListener('click', toggleplplay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)


toggle.addEventListener('click', toggleplplay)

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(ranges => ranges.addEventListener('change', handleRangeUpdate))
ranges.forEach(ranges => ranges.addEventListener('mousemove ', handleRangeUpdate))
