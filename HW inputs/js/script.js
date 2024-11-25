function buy() {
    const selectedCourses = document.querySelectorAll(".course");
    const courseCount = parseInt(document.querySelector(".courseCount").value);
    let sum = 0;

    if (isNaN(courseCount) || courseCount <= 0) {
        document.querySelector(".result").innerText = "Пожалуйста, введите корректное количество курсов.";
        return;
    }

    selectedCourses.forEach((course) => {
        const courseValue = parseInt(course.value); 
        if (!isNaN(courseValue) && courseValue > 0) {
            sum += courseValue;
        }
    });

    const totalPrice = sum * courseCount;

    document.querySelector(".total").innerText = `Общая стоимость: $${totalPrice}`;


    if (totalPrice > 3000) {
        const finalAmount = totalPrice * 0.7; // 30% скидка
        message = `Уважаемый студент, вы должны заплатить $${totalPrice}, но вы получаете 30% скидку, и окончательная сумма составляет $${finalAmount.toFixed(2)}`;
    } else {
        message = `Уважаемый студент, вы должны заплатить $${totalPrice}`;
    }
    document.querySelector(".result").innerText = `Общая стоимость: $${totalCost}`;
    document.querySelector(".result").innerText = "Спасибо за покупку!";

}
