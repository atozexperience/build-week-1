class ButtonClass {
    constructor(el){
        this.el = el;
        this.data = this.el.dataset.stars; 
        this.reviews = document.querySelector(`.review[data-stars="${this.data}"]`);
       // console.log(this.reviews);  //V
        this.content = new Content(this.reviews);
        this.el.addEventListener('click', () => { this.select();

        });
     };
     select() {
        this.content.select();
         
     }

}
class Content {
    constructor(element) {
        this.element = element;
        console.log(this.element);
    }
    select (){
        const reviews = document.querySelectorAll('.review');
        reviews.forEach(item => {
           item.style.display="none";
           this.element.style.display ="inherit";
        })
    }
}
const allButton = document.querySelector(`.review-cat[data-stars="all"]`)
const theReviews = document.querySelectorAll('.review');
console.log(theReviews[0]); 

allButton.addEventListener('click', () => {
    theReviews[2].style.display="inherit";
theReviews[3].style.display="inherit";
theReviews[4].style.display="inherit";
theReviews[5].style.display="inherit";
}) 

const buttons = document.querySelectorAll('.review-cat').forEach(button => new ButtonClass (button));
