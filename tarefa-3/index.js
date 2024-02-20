"use strict";
function userReview(review) {
    switch (review) {
        case 1:
            console.log("O atendimento foi muito insatisfatório");
            break;
        case 2:
            console.log("O atendimento foi insatisfatorio");
            break;
        case 3:
            console.log("O atendimento foi mediano");
            break;
        case 4:
            console.log("O atendimento foi excelente");
            break;
        case 5:
            console.log("O atendimento foi esplendido");
            break;
        default:
            console.log("Sem avaliação");
            break;
    }
}
userReview(false);
userReview(1);
userReview(2);
userReview(3);
userReview(4);
userReview(5);
