const quotes = [
    {
        quote: "모든 것에는 아름다움이 있지만 모든 사람이 그것을 보는 것은 아니다.",
        author: "공자"
    },
    {
        quote: "군자가 추구하는 것은 자기 안에 있고, 소인이 추구하는 것은 다름 사람 안에 있다.",
        author: "공자"
    },
    {
        quote: "당신이 멈추지 않는 한 당신이 얼마나 천천히 가는지는 중요하지 않다.",
        author: "공자"
    },
    {
        quote: "분노가 치밀어 오를 때는 그 결과를 생각하라.",
        author: "공자"
    },
    {
        quote: "목표에 도달할 수 없는 것이 분명할 때는 목표를 조정하지 말고 행동 단계를 조정하라.",
        author: "공자"
    },
    {
        quote: "당신이 원하지 않는 것은 남에게도 강요하지 말아라.",
        author: "공자"
    },
    {
        quote: "진정한 지식은 자신의 무지의 정도를 아는 것이다.",
        author: "공자"
    },
    {
        quote: "자신을 존중하면 다른 사람들도 당신을 존중할 것이다.",
        author: "공자"
    },
    {
        quote: "상처는 잊되, 친절은 절대 잊지 말라.",
        author: "공자"
    },
    {
        quote: "자신과 동등하지 않은 친구는 없다.",
        author: "공자"
    }
]

const quoter = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote =  quotes[Math.floor(Math.random() * quotes.length)];

quoter.innerText = "'" + todaysQuote.quote + "'";
author.innerText = "-" + todaysQuote.author + "-";




























