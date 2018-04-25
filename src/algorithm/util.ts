export function randomNumber(min = 0, max = 100): number {
    return Math.floor(Math.random() * max) + min
}

export function log(msg: any) {
    console.log(msg)
}

export function randomArray(): number[] {
    const count = randomNumber(5, 20)
    const result: number[] = []

    for (let i = 0; i < count; i++) {
        result.push(randomNumber(1, 100))
    }

    return result
}