# 정규포현식(RegExp)

정규식, Regular Expression

## 역할
- 문자 검색
- 문자 대체
- 문자 추출

## 테스트 사이트
https://regexr.com/

## 정규식 생성

```js
    // 생성자
    new RegExp('표현','옵션')
    new RegExp('[a-z]','gi')

    // 리터럴
    /표현/옵셥
    /[a-z]/gi

    g: 모든 문자와 여러 줄 일치
    i : 대소문자 구분안함.
```

## 예제 문자
```js
    const str = `
        010-1234-1234
        thesecond@naver.com
        http://www.omdbapi.com/?apikey=8e073028&s=frozen
        The quick brown fox jumps over the lazy dog.
        abbcccdddd
    `;
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치여부(boolean) 반환  
match | `문자열.match(정규식)` | 일치하는 문자열의 배열로 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자열을 대체하고 대체된 문자열을 반환  

## 플래그(옵션)
종류 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러(각각) 줄 일치(multi line)

## 패턴(표현)
패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치 
ab$ | 줄(Line) 끝에 있는 ab와 일치 
. | 임의의 한 문자와 일치 
a&verbar;b | a 또는 b와 일치 
ab? | b가 없거나 b와 일치 
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5) 연속일치 
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대소영문52개 + 숫자 10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space,Tab 등)에 일치
(?=)| 앞쪽 일치(Lockhead)
(?<=)| 뒤쪽 일치(Lockbehind)