const section = (name, max, weigth) => {
    return `<tr><td style="text-align: center;">${name}</td><td style="text-align: center;">1</td><td style="text-align: center;">${max}</td><td style="text-align: center;">${weigth}</td></tr>`
}
const gen = (rawJson) => {
    let out = ``
    let data = JSON.parse(rawJson);
    data.pools[0].entries.forEach(item => {
        let name = item.name.replace("minecraft:", "")
        let weight = item.weight
        let max = item.functions[0].count.max
        out += section(name,max,weight)
    })
    return out;
}
