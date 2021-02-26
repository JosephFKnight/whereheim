const BOSS_STRINGS = {
    merchant: Buffer.from("56656e646f725f426c61636b466f72657374", "hex"),
    eikthyr: Buffer.from("45696B746879726E6972", "hex"),
    elder: Buffer.from("47444B696E67", "hex"),
    bonemass: Buffer.from("426F6E656D617373", "hex"),
    moder: Buffer.from("447261676F6E717565656E", "hex"),
    yagluth: Buffer.from("476F626C696E4B696E67", "hex")
}

function searchMapBuffer(buffer, query, startingFrom = 0) {
    var offset = buffer.indexOf(query, startingFrom);
    if (offset == -1) return {offset: -1};
    offset += query.length;
    return {
        x: buffer.readFloatLE(offset),
        y: buffer.readFloatLE(offset + 8),
        offset: offset
    }
}

function getIndexes(buffer, query) {
    var coords = [];
    var coordObject = {x: 0, y: 0, offset: 0};
    while (coordObject.offset != -1) {
        coordObject = searchMapBuffer(buffer, query, coordObject.offset);
        coords.push({x: Math.round(coordObject.x), y: Math.round(coordObject.y)});
    }
    return coords;
}

export function findLocations(buffer, targets) {
    var ret = {};
    targets.map(target => {
        ret[target] = getIndexes(buffer, BOSS_STRINGS[target]);
    })
    return ret;
}