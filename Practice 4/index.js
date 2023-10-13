// Printer Səviyyələri
// Bir obyekti arqument kimi qəbul edən və obyektdə hər mürəkkəb rənginin daha neçə səhifə çap edə biləcəyi təsvir edilən funksiyanı nəzərə alaraq, hər hansı rəng tükənməzdən əvvəl printerin çap edə biləcəyi maksimum səhifə sayını çıxarın.
// Examples
// getInkLevels({
//   "ag": 23,
//   "qara": 12,
//   "mavi": 10
// }) ➞ 10
// getInkLevels({
//   "ag": 432,
//   "qara": 543,
//   "mavi": 777
// }) ➞ 432
// getInkLevels({
//   "ag": 700,
//   "qara": 700,
//   "mavi": 0
// }) ➞ 0
// Qeydlər
// Tək çap edilmiş səhifə hər rəngin bir dəfə olmasını tələb edir, ona görə də hər hansı bir yuvada mürəkkəb olmadıqda çap mümkün deyil (misal No3-ə baxın).



const pageColour ={
    ag : 42,
    qara :42,
    mavi :41
}


function getInkLevers(pageColour){
    console.log(pageColour)
    if(pageColour.ag<pageColour.qara && pageColour.qara<pageColour.mavi)
    {
        console.log("==>"+pageColour.ag)
    }
    else if(pageColour.qara<pageColour.ag && pageColour.qara<pageColour.mavi)
    {
        console.log("==>"+pageColour.qara)
    }
    else{
        console.log("==>"+pageColour.mavi)
    }

}
getInkLevers(pageColour)