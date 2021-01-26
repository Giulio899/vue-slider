// Ricreate lo slider visto in jQuery con vue. Personalizzatelo come meglio credete.

var app = new Vue({
  el: '#container',
  data: {
    counter: 0,
    imgsSrc: [
      'img/aladdin.jpg',
      'img/dumbo.jpg',
      'img/il-re-leone.jpg',
      'img/libro-giungla.jpg',
      'img/peter-pan.jpg',
    ],
    imgsAlt: [
      'Aladdin',
      'Dumbo',
      'Il Re Leone',
      'Il libro della giungla',
      'Peter Pan',
    ]
  },
    methods: {
      nextPhoto() {
        (this.counter == this.imgsSrc.length - 1) ? this.counter = 0 : this.counter++;
        console.log(this.counter);
      },
      prevPhoto() {
        (this.counter == 0) ? this.counter = this.imgsSrc.length - 1 : this.counter--;
        console.log(this.counter);
      },
      changePhoto(index) {
        this.counter = index;
      }
    }
})
