module.exports = function toReadable(number) {
    const integers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let strNum = String(number)
    switch (strNum.length) {
        case 1:
            return integers[number]
        case 2:
            return func(strNum, integers, tens, dozens)
        case 3:
            if (strNum[1] == 0 && strNum[2] == 0) {
                return `${integers[strNum[0]]} hundred`
            } else if (strNum[1] == 0) {
                return `${integers[strNum[0]]} hundred ${integers[strNum[2]]}`
            } else return `${integers[strNum[0]]} hundred ${func(strNum.slice(1),integers, tens, dozens)}`
    }
}
const func = (strNum, integers, tens, dozens) => {
    if (strNum[0] == 1) {
        return tens[strNum[1]]
    } else if (strNum[1] == 0) {
        return dozens[strNum[0] - 2]
    } else return `${dozens[strNum[0] - 2]} ${integers[strNum[1]]}`
}