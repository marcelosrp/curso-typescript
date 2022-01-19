function userReview(review) {
    if (review) {
        switch (review) {
            case 1:
                return "O review do usu\u00E1rio foi de ".concat(review, " estrela(s)");
                break;
            case 2:
                return "O review do usu\u00E1rio foi de ".concat(review, " estrela(s)");
                break;
            case 3:
                return "O review do usu\u00E1rio foi de ".concat(review, " estrela(s)");
                break;
            case 4:
                return "O review do usu\u00E1rio foi de ".concat(review, " estrela(s)");
                break;
            case 5:
                return "O review do usu\u00E1rio foi de ".concat(review, " estrela(s)");
                break;
            default:
                return 'O usuário fez um review';
                break;
        }
    }
    return 'O usuário não deixou nenhum review';
}
console.log(userReview(false));
console.log(userReview(true));
console.log(userReview(1));
console.log(userReview(2));
console.log(userReview(3));
console.log(userReview(4));
console.log(userReview(5));
