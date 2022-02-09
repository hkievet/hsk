import data from "./data.json"

const wordsByCharacter = {}
for (let word of data.words) {
    const foo = word["translation-data"]
    wordsByCharacter[foo.simplified] = foo
}

export function lookupLetters(letters: string): CharacterInfo[] {
    if (!letters) {
        return
    }
    let index = 0;
    const characters: CharacterInfo[] = []
    while (index < letters.length) {
        const oneLetter = letters.substring(index, index + 1)
        const twoLetters = letters.substring(index, index + 2)
        if (wordsByCharacter[twoLetters]) {
            characters.push(wordsByCharacter[twoLetters])
            index += 2
        } else if (wordsByCharacter[oneLetter]) {
            characters.push(wordsByCharacter[oneLetter])
            index += 1
        }
        else {
            throw new Error("couldn't lookup word..." + oneLetter + twoLetters)
        }
    }
    return characters
}