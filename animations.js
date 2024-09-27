async function init() {
    const node = document.querySelector("#type-text")

    await sleep(1000)
    node.innerText = ""

    while (true) {
        await node.type('Hello World!')
        await sleep(2000)
        await node.delete('Hello, World!')
        await node.type('Welcome!')
        await sleep(2000)
        await node.delete('Hello, World!')
    }
}




const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
    get typeInterval() {
        const randomMs = 100 * Math.random()
        return randomMs < 50 ? 10 : randomMs
    }

    async type(text) {
        for (let character of text) {
            this.innerText += character
            await sleep(this.typeInterval)
        }
    }

    async delete(text) {
        for (let character of text) {
            this.innerText = this.innerText.slice(0, this.innerText.length - 1)
            await sleep(this.typeInterval)
        }
    }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()