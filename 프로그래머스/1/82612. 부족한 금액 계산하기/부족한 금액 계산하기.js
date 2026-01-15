function solution(price, money, count) {
    return price*(count*(count +1)/2) - money >=0 ? price*(count*(count +1)/2) - money : 0
}