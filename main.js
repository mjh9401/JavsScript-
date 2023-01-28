const str = `
010-1234-1234
thesecond@naver.com
http://www.omdbapi.com/?apikey=8e073028&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(
    str.match(/(?<=@).{1,}/g)
)